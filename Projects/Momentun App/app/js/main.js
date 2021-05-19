//Calendar
function showDateTime() {
    var displayTime = document.getElementById("displayTime");
    var displayDate = document.getElementById("displayDate");

    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${monthName}, ${date.getDate()}, ${date.getFullYear()}`;

    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      
    var hour = addZero(date.getHours());
    var min = addZero(date.getMinutes());
    var sec = addZero(date.getSeconds());
    var time = hour + ":" + min + ":" + sec;

    displayTime.innerText = time;
    displayDate.innerText = today;

  }
  setInterval(showDateTime, 1000);

  //Greetings
  function showGreetings() {
    var displayGreeting = document.getElementById("displayGreeting");
    var textGreeting = "Hello";
    var date = new Date();
    var greetHour = date.getHours();

    if (greetHour < 12){
      textGreeting = "Good Morning,";
    } else if (greetHour < 18) {
      textGreeting = "Good Afternoon,";
    } else {
      textGreeting = "Good Evening,";
    }

    displayGreeting.innerText = textGreeting
  }
   setInterval(showGreetings, 1000);

   
//To Do List
var btnList = document.getElementById("btnList");
var addList = document.getElementById("addList");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var listLimit = 12
var listAmount = 0;
var toDoAlert = document.getElementById("toDoAlert");
var closeToDoAlert = document.getElementById("close-toDoAlert")

function toDoLength(){
	return addList.value.length;
} 

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(addList.value));
	ul.appendChild(li);
  li.classList.add("fade-in");
	addList.value = "";

	function toggleDone() {
		li.classList.toggle("done");
	}
	li.addEventListener("click",toggleDone);

	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete");
    listAmount--;
	}
}

function addListAfterKeypress(event) {
	if (toDoLength() > 0 && event.which === 13 && listAmount < listLimit) {
		createListElement();
    listAmount++;
	} 
  if (listAmount === listLimit) {
    toDoAlert.style.display = "block";
  }
}

  closeToDoAlert.addEventListener("click", () => {
    toDoAlert.style.display = " none";
  })
  addList.addEventListener("keypress", addListAfterKeypress);


//Input Page + Display Page
var addName = document.getElementById("addName");
var addYesterday = document.getElementById("addYesterday");
var addFocus = document.getElementById("addFocus");
var addNote = document.getElementById("addNote");
var displayName = document.getElementById("displayName");
var displayYesterday = document.getElementById("displayYesterday");
var displayFocus = document.getElementById("displayFocus");
var displayNote = document.getElementById("displayNote");

  function nameLength(){
    return addName.value.length;
  } 
  function yesterdayLength(){
    return addYesterday.value.length;
  }
  function focusLength(){
    return addFocus.value.length;
  } 
  function noteLength(){
    return addNote.value.length;
  } 


//Add Display Name
function createNameElement() {
  var deleteName = document.getElementById("name");
  deleteName.remove();
	var name = document.createElement("h1");
  name.setAttribute("id", "name")
  name.classList.add("fade-in");
	name.appendChild(document.createTextNode(addName.value));
  displayName.appendChild(name);
	addName.value = "";
}


function addNameAfterKeypress(event) {
	if (nameLength() > 0 && event.which === 13) {
    createNameElement();
	} 
}

addName.addEventListener("keypress", addNameAfterKeypress);

//Add Display Yesterday
function createYesterdayElement() {
  var deleteYesterday = document.getElementById("yesterday");
  deleteYesterday.remove();
	var yesterday = document.createElement("p");
  yesterday.setAttribute("id", "yesterday");
  yesterday.classList.add("fade-in");
	yesterday.appendChild(document.createTextNode(addYesterday.value));
  displayYesterday.appendChild(yesterday);
	addYesterday.value = "";
}

function addYesterdayAfterKeypress(event) {
	if (yesterdayLength() > 0 && event.which === 13) {
    createYesterdayElement();
	} 
}

addYesterday.addEventListener("keypress", addYesterdayAfterKeypress);

//Add Display Focus/Today
function createFocusElement() {
  var deleteFocus = document.getElementById("focus");
  deleteFocus.remove();
	var focus = document.createElement("p");
  focus.setAttribute("id", "focus")
  focus.classList.add("fade-in");
	focus.appendChild(document.createTextNode(addFocus.value));
  displayFocus.appendChild(focus);
	addFocus.value = "";
}

function addFocusAfterKeypress(event) {
	if (focusLength() > 0 && event.which === 13) {
    createFocusElement();
	} 
}

addFocus.addEventListener("keypress", addFocusAfterKeypress);

//Add Display Note/Blockers
function createNoteElement() {
  var deleteNote = document.getElementById("note");
  deleteNote.remove();
	var note = document.createElement("p");
  note.setAttribute("id", "note")
  note.classList.add("fade-in");
	note.appendChild(document.createTextNode(addNote.value));
  displayNote.appendChild(note);
	addNote.value = "";
}

function addNoteAfterKeypress(event) {
	if (noteLength() > 0 && event.which === 13) {
    createNoteElement();
	} 
}

addNote.addEventListener("keypress", addNoteAfterKeypress);


//Add Display Quote 
var displayQuote = document.getElementById("displayQuote");
var btnQuoteNext = document.getElementById("btnQuoteNext");
var btnAddQuote = document.getElementById("btnAddQuote")
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var quotes = [
  {author:"Bernard M. Baruch", quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
  {author:"Benjamin Spock", quote:"Trust yourself. You know more than you think you do."},
  {author:"Eleanor Roosevelt, This is My Story", quote:"No one can make you feel inferior without your consent."},
  {author:"Ralph Waldo Emerson", quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."},
  {author:"Martin Luther King", quote:"You don't have to see the whole staircase, just take the first step."}
];

var deg = 45;
btnQuoteNext.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  author.innerText = "- " + quotes[random].author;
  btnQuoteNext.style.transform = "rotate("+ deg + "deg)";
  deg = deg + 45;
})

var addAuthor = document.getElementById("addAuthor")
var addQuote = document.getElementById("addQuote")

function authorLength() {
  return addAuthor.value.length
}

function quoteLength() {
  return addQuote.value.length
}

function addNewQuote() {
  const newQuote = {'author': addAuthor.value, 'quote' : addQuote.value,};
  quotes.push(newQuote);
  addAuthor.value = "";
  addQuote.value = "";
  addNewQuotes.style.display = "none";
  displayQuote.style.display = "block";
}

function addNewQuoteAfterClick() {
  if (authorLength() > 0 && quoteLength() > 0) {
    addNewQuote();
    btnQuoteAdd.style.transform = "rotate("+ adeg + "deg)";
    adeg = adeg + 45;
  }
 
}
btnAddQuote.addEventListener("click", addNewQuoteAfterClick)


//Toggle Display of Add New Quote
var btnQuoteAdd = document.getElementById("btnQuoteAdd");
var addNewQuotes = document.getElementById("addNewQuotes");
var adeg = 90;
function toggleQuote() {
  if (addNewQuotes.style.display === "none" && displayQuote.style.display === "block") {
    addNewQuotes.style.display = "grid";
    displayQuote.style.display = "none";
  } else {
    addNewQuotes.style.display = "none";
    displayQuote.style.display = "block";
  }
  btnQuoteAdd.style.transform = "rotate("+ adeg + "deg)";
  adeg = adeg + 45;
  }

btnQuoteAdd.addEventListener("click", toggleQuote)


//Toggle Dark Mode
var cssLink = document.getElementById("cssLink");
var btnDM = document.getElementById("btnDM");
var btnLM = document.getElementById("btnLM");
var mobileBtn = document.getElementById("mobileBtn");
var morningCSS = "./dist/main.css"
var eveningCSS = "./dist/mainDM.css"

function toggleDM() {
    cssLink.setAttribute("href", eveningCSS);
}

function toggleLM() {
  cssLink.setAttribute("href", morningCSS);
}

btnDM.addEventListener("click", toggleDM);

btnLM.addEventListener("click", toggleLM);

//Minimize Daily Standup
var min = document.getElementById("min");
var max = document.getElementById("max");
var addSu = document.getElementById("addSu");
var containerA = document.getElementById("container-a");
var containerB = document.getElementById("container-b");

function mini() {
  addSu.style.display = "none"
  containerA.style.gridRow = "3 / 3";
  containerB.style.gridRow = "4 / 15";
  min.style.display = "none";
  max.style.display = "block";
}

function maxi() {
  addSu.style.display = "flex"
  containerA.style.gridRow = "3 / 9";
  containerB.style.gridRow = "9 / 15";
  min.style.display = "block";
  max.style.display = "none";
}

min.addEventListener("click", mini);
max.addEventListener("click", maxi);
//TESTING LNG WALA MAGAWA
//https://codepen.io/dhruvaldesai/pen/QWbMRNm 
// One of my first <canvas> experiments, woop! :D 

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var RADIUS = 70;

var RADIUS_SCALE = 1;
var RADIUS_SCALE_MIN = 1;
var RADIUS_SCALE_MAX = 1.5;

var QUANTITY = 25;

var canvas;
var context;
var particles;

var mouseX = SCREEN_WIDTH * 0.5;
var mouseY = SCREEN_HEIGHT * 0.5;
var mouseIsDown = false;

function init() {

  canvas = document.getElementById( 'world' );
  
  if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
        
        // Register event listeners
        window.addEventListener('mousemove', documentMouseMoveHandler, false);
        window.addEventListener('mousedown', documentMouseDownHandler, false);
        window.addEventListener('mouseup', documentMouseUpHandler, false);
        document.addEventListener('touchstart', documentTouchStartHandler, false);
        document.addEventListener('touchmove', documentTouchMoveHandler, false);
        window.addEventListener('resize', windowResizeHandler, false);
        
        createParticles();
        
        windowResizeHandler();
        
        setInterval( loop, 1000 / 60 );
    }
}

function createParticles() {
    particles = [];
    
    for (var i = 0; i < QUANTITY; i++) {
        var particle = {
            size: 3,
            position: { x: mouseX, y: mouseY },
            offset: { x: 0, y: 0 },
            shift: { x: mouseX, y: mouseY },
            speed: 0.01+Math.random()*0.04,
            targetSize: 1,
            fillColor: "#682331",
            orbit: RADIUS*.5 + (RADIUS * .5 * Math.random())
        };
        
        particles.push( particle );
    }
}

function documentMouseMoveHandler(event) {
    mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * .5;
    mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * .5;
}

function documentMouseDownHandler(event) {
    mouseIsDown = true;
}

function documentMouseUpHandler(event) {
    mouseIsDown = false;
}

function documentTouchStartHandler(event) {
    if(event.touches.length == 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;;
        mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
    }
}

function documentTouchMoveHandler(event) {
    if(event.touches.length == 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;;
        mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
    }
}

function windowResizeHandler() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
}

function loop() {
    
    if( mouseIsDown ) {
        RADIUS_SCALE += ( RADIUS_SCALE_MAX - RADIUS_SCALE ) * (0.1);
    }
    else {
        RADIUS_SCALE -= ( RADIUS_SCALE - RADIUS_SCALE_MIN ) * (0.1);
    }
    
    RADIUS_SCALE = Math.min( RADIUS_SCALE, RADIUS_SCALE_MAX );
    
         context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    
    for (i = 0, len = particles.length; i < len; i++) {
        var particle = particles[i];
        
        var lp = { x: particle.position.x, y: particle.position.y };
        
        // Rotation
        particle.offset.x += particle.speed;
        particle.offset.y += particle.speed;
        
        // Follow mouse with some lag
        particle.shift.x += ( mouseX - particle.shift.x) * (particle.speed);
        particle.shift.y += ( mouseY - particle.shift.y) * (particle.speed);
        
        // Apply position
        particle.position.x = particle.shift.x + Math.cos(i + particle.offset.x) * (particle.orbit*RADIUS_SCALE);
        particle.position.y = particle.shift.y + Math.sin(i + particle.offset.y) * (particle.orbit*RADIUS_SCALE);
        
        // Limit to screen bounds
        particle.position.x = Math.max( Math.min( particle.position.x, SCREEN_WIDTH ), 0 );
        particle.position.y = Math.max( Math.min( particle.position.y, SCREEN_HEIGHT ), 0 );
        
        particle.size += ( particle.targetSize - particle.size ) * 0.05;
        
        if( Math.round( particle.size ) == Math.round( particle.targetSize ) ) {
            particle.targetSize = 1 + Math.random() * 7;
        }
        
        context.beginPath();
        context.fillStyle = particle.fillColor;
        context.strokeStyle = particle.fillColor;
        context.lineWidth = particle.size;
        context.moveTo(lp.x, lp.y);
        context.lineTo(particle.position.x, particle.position.y);
        context.stroke();
        context.arc(particle.position.x, particle.position.y, particle.size/2, 0, Math.PI*2, true);
        context.fill();
    }
}

window.onload = init;
