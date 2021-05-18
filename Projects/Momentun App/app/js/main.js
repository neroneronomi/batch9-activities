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




