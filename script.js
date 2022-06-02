let num;


let name1 = prompt("Hello ! What is Your name");

function setCookie(user, value, exp_days) {
  var d = new Date();
  d.setTime(d.getTime() + (exp_days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = user + "=" + value + ";" + expires + ";path=/";
}

setCookie("user", name1, 5);

function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}


let f = getCookie("user")

let response = alert("Welcome " + f + " lets play a little game");

function getRange(min, max) {
  let range = max - min + 1;
  let rand = Math.random() * range;
  let results = Math.floor(rand) + min;
  return results;
}


// function increment() 
a = 1;
b = 2;
n = 10;
answer = getRange(a, b);
let input = prompt(`Guess a number between a range of ${a} and ${b}`);
let sum=0;
let points =0;
sum =sum+points;


function winning() {
  if (answer === (num = parseInt(input))) {
    alert("Congratulations, You guessed right. The answer is " + answer + " Proceed to the next stage");
    sum++;
        alert("Your point is " + sum);
   
    do {
      b++;
      let input = prompt(`Guess a number between a range of ${a} and ${b}`)
      answer === (num = parseInt(input));
    } while (b > n);

  }
}


winning();



if (!winning()) {
  alert("You guessed Wrong! The answer is " + answer + " Game Over");
}


