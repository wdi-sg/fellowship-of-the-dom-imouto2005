console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'
  lands.forEach(function(land){
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  body.appendChild(middleEarth)
}
makeMiddleEarth();


// Part 2
var theShire = body.querySelectorAll('article')[0];
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the *first article tag on the page)
  // give each hobbit a class of hobbit
    var hobbitList = document.createElement('ul');
    for(var i = 0; i < hobbits.length; i++) {
      var hobbit = document.createElement('li');
      hobbit.className = 'hobbit';
      hobbit.innerText = hobbits[i];
      hobbitList.appendChild(hobbit);
    }
  theShire.appendChild(hobbitList)
}
makeHobbits()

// Part 3
var frodo = theShire.querySelectorAll('li')[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ring = document.createElement('div')
  ring.id = 'the-ring'
  ring.className = 'magic-imbued-jewelry'
  ring.addEventListener('click', nazgulScreech)
  frodo.appendChild(ring)
}
keepItSecretKeepItSafe()

// Part 4
var rivendell = body.querySelectorAll('article')[1];
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  var buddiesList = document.createElement('ul');
  for(var i = 0; i < buddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.className = 'buddy'
    buddy.innerText = buddies[i];
    buddiesList.appendChild(buddy);
  }
  aside.appendChild(buddiesList)
  rivendell.appendChild(aside)
}
makeBuddies()

// Part 5

var strider = rivendell.querySelectorAll('li')[3]
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn"
}
beautifulStranger()

// Part 6
var hobbitList = theShire.querySelector('ul')
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbitList)
}
leaveTheShire()

// Part 7

var fellowship = rivendell.querySelectorAll('li')
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div')
  theFellowship.id = 'the-fellowship'
  rivendell.appendChild(theFellowship)
  for (var i = 0; i < fellowship.length; i++) {
    theFellowship.appendChild(fellowship[i])
    alert(fellowship[i].textContent + " has joined your party!")
  }
  rivendell.appendChild(theFellowship)
}
forgeTheFellowShip()

// Part 8
var gandalf = rivendell.querySelectorAll('li')[0]
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.textContent = "Gandalf the White"
  gandalf.setAttribute("style", "background: white", "border-color:grey")
}
theBalrog()

// Part 9
var boromir = rivendell.querySelectorAll('li')[4]
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("ALERT ALERT ALERT! Someone has blown the horn of Gondor!")
  alert("O dear Boromir has been killed by Uruk-hai! #RIP")
  boromir.style.setProperty("text-decoration", "line-through");
  theFellowship.removeChild(boromir)
}
hornOfGondor()

// Part 10
var mordor = body.querySelectorAll('article')[2];
var sam = rivendell.querySelectorAll('li')[6]
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.appendChild(frodo)
  mordor.appendChild(sam)
  var mountDoom = document.createElement('div')
  mountDoom.id = "mount-doom"
  mordor.appendChild(mountDoom)
}
itsDangerousToGoAlone()

// Part 11
var theOneRing = frodo.querySelector('the-ring')
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement('div')
  gollum.id = "gollum"
  mordor.appendChild(gollum)
  gollum.appendChild(theOneRing)
  mountDoom.appendChild(gollum)
}
weWantsIt()

// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
  theOneRing.gollum.removeChild(theOneRing)
  gollum.mountDoom.removeChild(gollum)

  var allBuddies = body.querySelector('.buddy')
  var buddyList = document.createElement('ul')
  for(var i = 0; i < allBuddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.innerText = allBuddies[i];
    buddyList.appendChild(buddy);
  }
  rivendell.appendChild(buddyList);
  buddyList.rivendell.removeChild(buddyList);

  var allHobbits = body.querySelector('.hobbit')
  var hobbitList2 = document.createElement('ul');
  for(var j = 0; j < allHobbits.length; j++) {
    var hobbit = document.createElement('li');
    hobbit.innerText = allHobbits[j];
    hobbitList2.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList2)
}
thereAndBackAgain()
