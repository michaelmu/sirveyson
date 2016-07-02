'use strict';

import React from 'react';
import queryString from 'query-string';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Button, ButtonGroup, ListGroupItem, ListGroup, Modal, Navbar, Grid, Row, Col } from 'react-bootstrap';
require("../public/page.css");

// We use update as a helper for updating the store objects
var update = require('react-addons-update');

const SURVEYS = ['dogs', 'cats', 'which_listing'];

// Set up some pseudo routing based on parameters
var confMap = {};
SURVEYS.forEach(function (name) {
  var {PAGE_CONF, ANSWERS_CONF, QUESTIONS_CONF} = require('./config/' + name + '.jsx');
  confMap[name] = {
    page: PAGE_CONF,
    answers: ANSWERS_CONF,
    questions: QUESTIONS_CONF
  };
}, this);

// Used for store
const initialState = {};
const SET_WEIGHTS = 'set_weights';

// Pass this to the store to update answer weights
function updateWeights(id, weights) {
  return {
    type: SET_WEIGHTS,
    question_id: id,
    weights: weights
  }
}


function getWeights() {
  return store.getState();
}

// Sum the weights by answer id
function aggWeights() {
  var weights = getWeights();
  var wc = {};
  for (var key in weights) {
    for (var innerKey in weights[key]){
      wc[innerKey] = (innerKey in wc ? wc[innerKey] : 0) + weights[key][innerKey];
    }
  }
  return wc;
}

// The reducer where we apply question answer weights
function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_WEIGHTS:
      var obj = {};
      obj[action.question_id] = action.weights;
      return update(state, {$merge: obj});
    default:
      return state
  }
}

function pickTopAnswer(){
  var topAnswer = 0;
  var sortable = [];
  var aggW = aggWeights();
  for (var answer in aggW){
    sortable.push([answer, aggW[answer]])
  }
  sortable.sort(function(a, b) {
    return b[1] - a[1]
  });
  return sortable[0][0];
}

// Fetch the answer associate with index
function fetchAnswer(index, answers){
  return answers.filter(function (el) {
    return el.id == index;
  })[0];
}

// instantiate the store. This is where we keep weights for each answer given
let store = createStore(reducer);

var QuestionAnswers = React.createClass({
  getInitialState: function() {
    return {
      selectedAnswerId: -1
    }
  },

  buttonClick: function(option) {
    store.dispatch(updateWeights(this.props.questionID, option.weights));
    console.log(JSON.stringify(getWeights()));
    this.setState({
      selectedAnswerId: option.id
    });
  },

  render: function() {
    var questionID = this.props.questionID;
    var questionOptions = this.props.questionAnswers.map(function(option){
        return (
          <Button
            active={option.id === this.state.selectedAnswerId}
            flat
            primary
            key={option.id}
            onClick={() => this.buttonClick(option)}>{option.answer}
          </Button>
        )
      }, this);

    return(
      <ButtonGroup className="list-inline center-block text-center" vertical block >
        {questionOptions}
      </ButtonGroup>
    )
  }
});


var QuestionImage = React.createClass({
  render: function() {
    return(
      <div
        className="list-inline center-block text-center question-image">
        <img src={this.props.imgUrl} />
      </div>
    )
  }
});


var QuestionHeader = React.createClass({
  render: function() {
    var questionText = this.props.questionText;
    return(
      <div className="list-inline center-block text-center">
          <h2> {questionText} </h2>
      </div>
    )
  }
});


var QuestionContainer = React.createClass({
  render: function(){
    return(
      <ListGroupItem>
        <QuestionHeader questionText={this.props.questionText} />
        <QuestionImage imgUrl={this.props.imgUrl} />
        <QuestionAnswers questionID={this.props.questionID} questionAnswers={this.props.questionOptions} />
      </ListGroupItem>
    )
  }
});

var QuestionList = React.createClass({
  questionOptions: function() {
    return this.props.questions.map(function(question, id){
      return <QuestionContainer key={id} questionID={question.id} questionText={question.text} imgUrl={question.imgUrl} questionOptions={question.options} />
      }
    )
  },

  render: function(){
    var questionOptions = this.questionOptions();
    return(
      <ListGroup style={{margin: '0 auto', width: '600px'}}>
        {questionOptions}
      </ListGroup>
    )}
});


var ResultsContainer = React.createClass({
  getInitialState: function(){
    return {
      // Set initial question
      id: -1,
      text: '',
      subText: '',
      imgUrl: '',
      linkUrl: '',
      showModal: false
    }
  },

  closeModal: function(){
    this.setState({ showModal: false });
  },

  updateAnswer: function(){
    console.log('Updating the answer...')
    var topAnswer = fetchAnswer(pickTopAnswer(), this.props.answers);
    console.log('Summed answer scores: ' + JSON.stringify(aggWeights()));
    console.log('Top answer: ' + JSON.stringify(topAnswer));
    var linkUrl = 'linkUrl' in topAnswer ? topAnswer.linkUrl + this.props.afc : '';
    var subText = 'subText' in topAnswer ? topAnswer.subText : '';
    this.setState({
        id: topAnswer.id,
        text: topAnswer.text,
        subText: subText,
        imgUrl: topAnswer.imgUrl,
        linkUrl: linkUrl,
        showModal: true
      });
    this.forceUpdate();
  },

  render: function(){
    return (
      <div className="text-center answer-box">
        <Button bsStyle="primary" bsSize="large" onClick={this.updateAnswer}>Calculate My Answer!</Button>
        <Modal show={this.state.showModal} onHide={this.closeModal} bsSize="large">
          <Modal.Header className="modal-header">
            <Modal.Title>Survey Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>{this.state.text}</h1>
            <hr/>
            <div className="answerImage text-center">
              <a href={this.state.linkUrl} target="_"> <img src={this.state.imgUrl} height="300px" /></a>
            </div>
          <div className="list-inline center-block text-left">
          <h3>About you:</h3>
          </div>
          <div className="list-inline center-block text-left">
            <p>{this.state.subText}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button block info><a href={this.state.linkUrl} target="_">Show Me This Listing</a></Button>
          <Button block onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <Navbar fixedTop>
        <h1 className="text-center">
          {this.props.page.page_title}
        </h1>
        <i class="docs-icon--color icon icon-size-2 icon-airbnb-alt icon-ebisu"></i>
      </Navbar>
    )
  }
});

var Footer = React.createClass({
  render: function() {
    return(
      <div className="header clearfix">
      </div>
    )
  }
});

var PageContainer = React.createClass({
  render: function(){
    return (
      <div class="page">
        <Header page={this.props.conf.page}/>
        <QuestionList questions={this.props.conf.questions}/>
        <ResultsContainer answers={this.props.conf.answers} afc={this.props.afc}/>
        <Footer/>
      </div>
    )
  }
});

$(document).ready(function() {
  const parsed = queryString.parse(location.search);
  const conf = parsed.name ? confMap[parsed.name] : confMap[SURVEYS[0]];
  // Affiliate / Campaign link for Airbnb tracking
  const afc = parsed.name == 'which_listing' ? '?af=0000001&c=hackathon_2016_survey' : '';
  render(<PageContainer conf={conf} afc={afc}/>, document.getElementById('app'));
});
