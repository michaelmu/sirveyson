export const PAGE_CONF = {"page_title": "How old will you be when you die?"};

export const QUESTIONS_CONF = [{  
    "id": 1,
    "text": "Do you like dogs?",
    "imgUrl": "http://i.imgur.com/SazaHUq.jpg",
    "options": [
        {"id":1, "answer": "Yes", "weights": {1: 5, 2: 1, 3: -2} },
        {"id":2, "answer": "No", "weights": {1: -2, 2: 1} }
    ]
}, {
    "id": 2,
    "text": "How many siblings do you have?",
    "imgUrl": "http://i.imgur.com/yhQh66j.jpg",
    "options": [
        {"id":1, "answer": "None", "weights": {1: -1, 2: 1, 3: 5 }},
        {"id":2, "answer": "Between 1 and 3", "weights": {1: -1, 2: 1, 3: 2 }},
        {"id":3, "answer": "Between 4 and 7", "weights": {1: 1, 2: 0, 3: 2 }},
        {"id":4, "answer": "More than 7", "weights": {1: 3, 2: 0, 3: 1 }}
    ]
}, {
    "id": 3,
    "text": "Do you like oranges?",
    "imgUrl": "https://i.imgflip.com/c6uml.jpg",
    "options": [
        {"id":1, "answer": "Yes", "weights": {1: 0, 2: 2, 3: 0}},
        {"id":2, "answer": "No", "weights": {1: 2, 2: 2, 3: 2}}
    ]
}, {
    "id": 4,
    "text": "What's the first thing you do when you wake up?",
    "imgUrl": "http://www.fitwirr.com/media/2015/11/11/Morning-exercise-to-get-in-shape.jpg",
    "options": [
        {"id":1, "answer": "Brush my teeth", "weights": {1: 0, 2: 1, 3: 2 }},
        {"id":2, "answer": "Walk my dog", "weights": {1: 5, 2: 1, 3: 2 }},
        {"id":3, "answer": "Drink Coffee", "weights": {1: 0, 2: 1, 3: 1 }}
    ]
}];


export const ANSWERS_CONF = [{
    "id": 1,
    "text": "You will be die at the age of 75 by smothering of 54 puppies.",
    "imgUrl": "http://i.imgur.com/1Kl1hQK.jpg"
}, {
    "id": 2,
    "text": "You will live to the ripe-old age of 32",
    "imgUrl": "http://funnystack.com/wp-content/uploads/2014/03/Funny-Old-People-3.jpg"
}, {
    "id": 3,
    "text": "You will die tomorrow",
    "imgUrl": "http://www.slightlywarped.com/crapfactory/curiosities/2013/august/images/funny_tombstones_26.jpg"
}];