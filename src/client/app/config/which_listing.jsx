export const PAGE_CONF = {"page_title": "Which Airbnb Listing Are You?"};

export const QUESTIONS_CONF = [

{
   "id":1,
   "text":"What % of your meals are vegan?",
   "imgUrl":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSu7GmImVElBlE-181YMVAD5PnYx0xwSo4EKt5t1fx1yw6uWSwdFw",
   "options":[
      {
         "id":1,
         "answer":"All of them, you monster.",
         "weights":{"treehouse": 1, "windmill": 1, "geodome": 1 }
      },
      {
         "id":2,
         "answer":"Most, I still crave meat",
         "weights":{"yurt": 1, "island": 1, "seashell": 1 }
      },
      {
         "id":3,
         "answer":"A few, usually by accident",
         "weights":{"escape": 1, "island": 1, "windmill": 1 }
      },
      {
         "id":4,
         "answer":"None, if there's no meat, I won't eat.",
         "weights":{"penthouse": 1, "castle": 1, "loft": 1 }
      }
   ]
},
{
   "id":2,
   "text":"How comfortable are you in crowded trains?",
   "imgUrl":"https://media2.wnyc.org/i/800/0/l/80/1/7246684350_0f3cfa21cc_o.jpg",
   "options":[
      {
         "id":1,
         "answer":"I was born in one, they feel like home to me",
         "weights":{"airstream": 1, "loft": 1, "barn": 1 }
      },
      {
         "id":2,
         "answer":"I can navigate without too much hassle",
         "weights":{"yurt": 1, "loft": 1, "airstream": 1 }
      },
      {
         "id":3,
         "answer":"Will ride reluctantly",
         "weights":{"villa": 1, "castle": 1, "villa": 1, "geodome": 1 }
      },
      {
         "id":4,
         "answer":"I'd rather walk",
         "weights":{"island": 1, "castle": 1, "escape": 1 }
      }
   ]
},
{
   "id":3,
   "text":"What's your drink of choice?",
   "imgUrl":"http://oedb.org/assets/images/mixed-drinks.jpg",
   "options":[
      {
         "id":1,
         "answer":"Wine",
         "weights":{
            "treehouse": 1,
            "geodome": 1,
            "villa": 1,
            "windmill": 1
         }
      },
      {
         "id":2,
         "answer":"Beer",
         "weights":{
            "treehouse": 1,
            "geodome": 1,
            "seashell": 1,
            "hanok": 1,
            "island": 1
         }
      },
      {
         "id":3,
         "answer":"Shots",
         "weights":{
            "treehouse": 1,
            "geodome": 1,
            "island": 1
         }
      },
      {
         "id":4,
         "answer":"The blood of my enemies",
         "weights":{
            "hanok": 1,
            "seashell": 1,
            "castle": 1,
            "airstream": 1
         }
      }
   ]
},
{
   "id":4,
   "text":"Which fast food restaurant would you rather eat at?",
   "imgUrl":"http://blog.watershed.net/wp-content/uploads/2015/07/fast-food-boy.jpg",
   "options":[
      {
         "id":1,
         "answer":"Quiznos",
         "weights":{
            "treehouse": 1,
            "seashell": 1,
            "island": 1,
            "airstream": 1
         }
      },
      {
         "id":2,
         "answer":"Taco Bell",
         "weights":{
            "treehouse": 1,
            "geodome": 1,
            "villa": 1,
            "windmill": 1
         }
      },
      {
         "id":3,
         "answer":"McDonalds",
         "weights":{
            "barn": 1,
            "geodome": 1,
            "windmill": 1
         }
      },
      {
         "id":4,
         "answer":"Fast food? Bah.",
         "weights":{
            "escape": 1,
            "penthouse": 1,
            "castle": 1,
            "hanok": 1,
            "castle": 1
         }
      }
   ]
},
{
   "id":5,
   "text":"What type of summer camp did you attend as a child?",
   "imgUrl":"http://o.aolcdn.com/hss/storage/midas/df7130d218a362931fa3f70bb0a40bf6/201586185/camping-nailed-it.png",
   "options":[
      {
         "id":1,
         "answer":"Had to do summer school",
         "weights":{
            "loft": 1,
            "penthouse": 1,
            "escape": 1,
            "island": 1,
            "hanok": 1
         }
      },
      {
         "id":2,
         "answer":"Science camp. *push up glasses*",
         "weights":{
            "penthouse": 1,
            "windmill": 1,
            "seashell": 1,
            "island": 1,
            "hanok": 1
         }
      },
      {
         "id":3,
         "answer":"Band Camp (I was weird)",
         "weights":{
            "windmill": 1,
            "airstream": 1,
            "hanok": 1
         }
      },
      {
         "id":4,
         "answer":"None",
         "weights":{
            "airstream": 1,
            "geodome": 1,
            "castle": 1,
            "island": 1,
            "villa": 1
         }
      }
   ]
},
{
   "id":6,
   "text":"On an ideal vacation, how often would you wear pants?",
   "imgUrl":"https://www.askideas.com/media/45/I-Am-Too-Sexy-For-My-Pants-Funny-Meme-Image.jpg",
   "options":[
      {
         "id":1,
         "answer":"All the time, I'm still a member of society on vacation",
         "weights":{
            "penthouse": 1,
            "escape": 1,
            "villa": 1,
            "yurt": 1
         }
      },
      {
         "id":2,
         "answer":"Mostly, this isn't a free show",
         "weights":{
            "loft": 1,
            "castle": 1,
            "yurt": 1
         }
      },
      {
         "id":3,
         "answer":"Only when necessary",
         "weights":{
            "treehouse": 1,
            "windmill": 1,
            "seashell": 1,
            "barn": 1
         }
      },
      {
         "id":4,
         "answer":"I'm not bringing pants",
         "weights":{
            "airstream": 1,
            "penthouse": 1,
            "seashell": 1,
            "geodome": 1,
            "yurt": 1,
            "barn": 1
         }
      }
   ]
},
{
   "id":7,
   "text":"If you had to get a tattoo, what would you prefer?",
   "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LyW1M5qNnj6kqQH2FBvjo1z0INyi1m9Z6ggqT4cQrN0LZlM_",
   "options":[
      {
         "id":1,
         "answer":"Hipster arrow",
         "weights":{
            "airstream": 1,
            "geodome": 1,
            "treehouse": 1,
            "barn": 1
         }
      },
      {
         "id":2,
         "answer":"Flaming sleeve",
         "weights":{
            "castle": 1,
            "penthouse": 1,
            "barn": 1,
            "windmill": 1
         }
      },
      {
         "id":3,
         "answer":"Palm Tree",
         "weights":{
            "escape": 1,
            "island": 1,
            "seashell": 1
         }
      },
      {
         "id":4,
         "answer":"My face tattoed onto my stomach",
         "weights":{
            "villa": 1,
            "island": 1,
            "seashell": 1,
            "castle": 1,
            "yurt": 1
         }
      },
      {
         "id":4,
         "answer":"My stomach  tattoed onto my face",
         "weights":{
            "villa": 1,
            "island": 1,
            "seashell": 1,
            "castle": 1,
            "yurt": 1
         }
      }
   ]
},
{
   "id":8,
   "text":"How do you feel about ninja squirrels?",
   "imgUrl":"https://files.slack.com/files-pri/T02511RD4-F1MK2ULPN/pasted_image_at_2016_06_29_10_27_pm.png",
   "options":[
      {
         "id":1,
         "answer":"Nervous",
         "weights":{
            "yurt": 1,
            "geodome": 1,
            "barn": 1
         }
      },
      {
         "id":2,
         "answer":"Excited",
         "weights":{
            "castle": 1,
            "treehouse": 1,
            "penthouse": 1,
            "windmill": 1
         }
      },
      {
         "id":3,
         "answer":"Afraid",
         "weights":{
            "escape": 1,
            "island": 1,
            "seashell": 1
         }
      },
      {
         "id":4,
         "answer":"Apathetic",
         "weights":{
            "villa": 1,
            "seashell": 1,
            "yurt": 1
         }
      }
   ]
}
];



export const ANSWERS_CONF = [
   {
      "id":"treehouse",
      "text":"Secluded Intown Treehouse",
      "subText":"Your inner child beckons you to adventure. Often seen as a day-dreamer by your friends, you might not always have your feet on the ground, but you can be rooted in reality if you so choose. You are this magical treehouse in Atlanta.",
      "imgUrl":"https://a1.muscache.com/im/pictures/21162888/5a0f1151_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/1415908"
   },
   {
      "id":"airstream",
      "text":"Super Cute Retro Airstream",
      "subText":"You are a pioneer, unafraid to push the boundries of adventure, and willing to pick up and go at a moment's notice. You are this super cute retro airstream.",
      "imgUrl":"https://a2.muscache.com/im/pictures/7151074/aecc9790_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/577410"
   },
   {
      "id":"castle",
      "text":"Live like a King in my Castle",
      "subText":"People sometimes see you as having high walls and inpenetrable defenses. But you're simply selective about who you let in. An old soul, and proud, you are this noble castle.",
      "imgUrl":"https://a2.muscache.com/im/pictures/9060061/acca0acf_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/658697"
   },
   {
      "id":"windmill",
      "text":"Windmill close to Amsterdam!!",
      "subText":"You are a classic beauty that people long for, a bastion of old time charm in the modern setting. You are this classic windmill near Amsterdam.",
      "imgUrl":"https://a1.muscache.com/im/pictures/37112192/cefdb7f0_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/2107131"
   },
   {
      "id":"villa",
      "text":"Modern style Country Villa",
      "subText":"You achieve beauty through simplicity, and take pride in the finer details. Your lack of pretense makes your sophistication all the more pronounced, and people respect you all the more for it. You are this modern country villa.",
      "imgUrl":"https://a0.muscache.com/im/pictures/9671455/449c5bc4_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/688869"
   },
   {
      "id":"island",
      "text":"Bird Island - Placencia, Belize",
      "subText":"You're mysterious and secluded. Most aren't brave enough to reach your shores, but those that do find it entirely worth the journey. You are this tropical paradise island.",
      "imgUrl":"https://a2.muscache.com/im/pictures/575d7463-fced-44b6-97eb-3113b07aaa82.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/4869137"
   },
   {
      "id":"barn",
      "text":"Guest Barn at Middleground Farms",
      "subText":"Your hometown is probably called something like Booneville. While there's an adventurous side to you that has pulled you away from home, the smell of fresh grass and the mooing of the cows calls you back. You're a barn.",
      "imgUrl":"https://a1.muscache.com/im/pictures/85003204/606ee0c0_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/4303406"
   },
   {
      "id":"seashell",
      "text":"The Seashell House ~ Casa Caracol",
      "subText":"You make Neptune and Poseidon look like the common shrimp as you walk along the beach at sunset. Your ancestral home is the watery halls of Atlantis. Your favorite movie is The Little Mermaid. You are this seashell mansion.",
      "imgUrl":"https://a0.muscache.com/im/pictures/6722906/b4bc6418_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/530250"
   },
   {
      "id":"hanok",
      "text":"Korean Traditional Hanok",
      "subText":"You are a wonderful contradiction. You enjoy the hustle and bustle of the modern city, yet you have a yearning for simpler times. You are this traditional Korean hanok near the heart of Seoul.",
      "imgUrl":"https://a0.muscache.com/im/pictures/4230043/7e9a64d3_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/348991"
   },
   {
      "id":"penthouse",
      "text":"Vegas Luxury Palms Place Penthouse",
      "subText":"You're not afraid to roll the dice and live the luxurious lifestyle. You spare no expense to make sure you travel in style and make sure everyone else knows it. You are this Luxury Vegas Penthouse.",
      "imgUrl":"https://a2.muscache.com/im/pictures/1196907/28e3b88d_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/137104"
   },
   {
      "id":"loft",
      "text":"Amazing Loft in Central Paris!",
      "subText":"Full of character and charm, everyone you come across seems to like you. You are a creative inspiration to others and like the wooden beams in this Parisian loft, you are a strong a sturdy companion.",
      "imgUrl":"https://a2.muscache.com/im/pictures/1088290/db00f85d_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/162670"
   },
   {
      "id":"geodome",
      "text":"Geo Dome on Farm Upstate Catskills",
      "subText":"You're a dreamer, not afraid to ask the big question and challenge the status quo. You are this geodome in the Catskills.",
      "imgUrl":"https://a1.muscache.com/im/pictures/100851117/8348c46c_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/1602932"
   },
   {
      "id":"escape",
      "text":"Ultimate Modern Escape - Golden BC",
      "subText":"People see you as a refuge of kindness and strength, like a warm fireplace on a cold winter's day. You are this modern escape in the forests of BC.",
      "imgUrl":"https://a1.muscache.com/im/pictures/14195764/36cd0f8c_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/702956"
   },
   {
      "id":"yurt",
      "text":"A quiet yurt in Savoie - Bauges",
      "subText":"Contemplative and relaxed, you don't let the stresses of life get to you. Not caring for the excesses in life, you prefer a more simple existence and can often be found enjoying the sights and sounds of nature.  You are this yurt in the French Alps.",
      "imgUrl":"https://a2.muscache.com/im/pictures/10356334/a831e142_original.jpg?aki_policy=x_large",
      "linkUrl":"https://www.airbnb.com/rooms/489668"
   }
];
