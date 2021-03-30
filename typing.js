const difficulties = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8"];

const goalString = ["hi there",
  "Get ready for some fun.",
  "Are you feeling challenged yet, stranger?",
  "Oh yeah! You better get ready to type and learn some new languages too ;)",
  "How about some French? Salut, comment allez-vous aujourd'hui. Haha -- Do you know what this means?",
  "What about reading some Mandarin as you type? Jing nian ee-chin hen yen zhong, zen ma ban?",
  "Do you know what language this is? :D Sto imparando cosi tanto in questa lezione meravigliosa",
  "Let's end with some nonsense, shall we? blahfish --OOPS. aabsdfksdhfbsjdhfbsja ajahshoqoerjf!!!"];

const scores = ["Score: 1", "Score: 2", "Score: 3", "Score: 4", "Score: 5", "Score: 6", "Score: 7", "Score: 8"];



var i = 0;
start = Date.now()
var j = 0;

window.addEventListener("keypress", function (event) {

  const textbox = document.getElementById("userinput");
  textbox.textContent = textbox.textContent + event.key;
  
  if (textbox.textContent == goalString[i]) {
     const score = document.getElementById("score");
     score.textContent = scores[j];
     //console.log(score.textContent);
     end = Date.now();
     diff = (end - start)/1000;
     timing = document.createElement('p');
     timing.textContent = diff;
     document.body.appendChild(timing);
     next = document.createElement('button');
     next.textContent = "Next Challenge button";
     next.setAttribute("id","nextButton");
     document.body.appendChild(next);
     next.addEventListener('mousedown', nextChallenge);
    const result = document.getElementById("result");
    result.textContent = "You Win!";
    i=i+1;
    j=j+1;
  }
})


function restart() {
  var i = 0;
  const textbox = document.getElementById("userinput");
  const result = document.getElementById("result");
  const lvl = document.getElementById("level");
  const goal = document.getElementById("goal");
  const score = document.getElementById("score");
  textbox.textContent = "";
  result.textContent = "Type the Following text:";
  lvl.textContent = "Level 1";
  goal.textContent = "hi there";
  score.textContent = "Score: 0";
  location.reload();
}

  startButton = document.querySelector("#restartButton");
  restartButton.addEventListener('mousedown', restart);
  



function nextChallenge() {
    start = Date.now()
    const textbox = document.getElementById("userinput");
    const result = document.getElementById("result");
    const next = document.getElementById('nextButton')
    next.remove()
    textbox.textContent=""
    result.textContent="Type the Following text:"
    lvl = document.getElementById("level")
    lvl.textContent = difficulties[i]
    console.log(lvl.textContent)
    goal = document.getElementById("goal")
    goal.textContent = goalString[i]
    console.log("hi")
}


  




