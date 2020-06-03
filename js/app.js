'use strict';

/* eslint-disable no-unused-vars */

var reply1; //global variable

var reply2; //global variable

var reply3; //global variable

var reply4; //global variable

var uName;

var counter = 0;

// first button: asks for name in prompt

function prompt0() {

  var reply0 = prompt('What is your name?', 'John Doe');

  document.getElementById('hiddenDiv').style.display = 'none';

  document.getElementById('header').style.display = 'block';

  document.getElementById('main').style.display = 'block';

  document.getElementById('footer').style.display = 'block';

  // so... if i have a black bkgrnd i wan to go black text teal bckgrnd....

  // document.getElementById('theWholeDocHTML').style.backgroundColor = '#32a8a6';

  // document.getElementById('docBody').style.color = 'black';

  document.getElementById('uNPH').innerHTML = reply0;

  console.log('user name is: ' + reply0);

  uName = reply0;


}

function prompt1() {

  var reply1 = prompt('Am I from California?', 'guess');

  if (reply1 !== null) {

    document.getElementById('statement1').innerHTML =

    'You answered: ' + reply1 + '.';

    console.log('The reply to Q1 was: ' + reply1);

    window.reply1 = reply1;

    var lower = reply1.toLowerCase();

    if (lower === 'yes') {

      document.getElementById('statement1Reply').innerHTML =

    'You are right!';

      counter++;

      document.getElementById('score').innerHTML = counter;

    } else if (lower === 'no') {

      document.getElementById('statement1Reply').innerHTML =

    'You are wrong!';

      counter--;

      document.getElementById('score').innerHTML = counter;

    } else {

      document.getElementById('statement1Reply').innerHTML =

    'Please: yes or no only';

    }

  }

}

function prompt2() {

  var reply2 = prompt('My favorite snack is popcorn?', 'guess');

  if (reply2 !== null) {

    document.getElementById('statement2').innerHTML =

    'You answered: ' + reply2 + '.';

    console.log('The reply to Q2 was: ' + reply2);

    window.reply2 = reply2;

    var lower = reply2.toLowerCase();

    if (lower === 'no') {

      document.getElementById('statement2Reply').innerHTML =

    'You are right!';

      counter++;

      document.getElementById('score').innerHTML = counter;


    } else if (lower === 'yes') {

      document.getElementById('statement2Reply').innerHTML =

    'You are wrong!';

      counter--;

      document.getElementById('score').innerHTML = counter;

    } else {

      document.getElementById('statement2Reply').innerHTML =

    'Please: yes or no only';

    }

  }

}

function prompt3() {

  var reply3 = prompt('Bansky is my favorite street artist?', 'guess');

  if (reply3 !== null) {

    document.getElementById('statement3').innerHTML =

    'You answered: ' + reply3 + '.';

    console.log('The reply to Q3 was: ' + reply3);

    window.reply3 = reply3;

    var lower = reply3.toLowerCase();

    if (lower === 'yes') {

      document.getElementById('statement3Reply').innerHTML =

    'You are right!';

      counter++;

      document.getElementById('score').innerHTML = counter;

    } else if (lower === 'no') {

      document.getElementById('statement3Reply').innerHTML =

    'You are wrong!';

      counter--;

      document.getElementById('score').innerHTML = counter;

    } else {

      document.getElementById('statement3Reply').innerHTML =

    'Please: yes or no only';

    }

  }

}

function prompt4() {

  var reply4 = prompt('Is gengar my favorite pokemon?', 'guess');

  if (reply4 !== null) {

    document.getElementById('statement4').innerHTML =

    'You answered: ' + reply4 + '.';

    console.log('The reply to Q4 was: ' + reply4);

    window.reply4 = reply4;

    var lower = reply4.toLowerCase();

    if (lower === 'no') {

      document.getElementById('statement4Reply').innerHTML =

    'You are right!';

      counter++;

      document.getElementById('score').innerHTML = counter;

    } else if (lower === 'yes') {

      document.getElementById('statement4Reply').innerHTML =

    'You are wrong!';

      counter--;

      document.getElementById('score').innerHTML = counter;

    } else {

      document.getElementById('statement4Reply').innerHTML =

    'Please: yes or no only';

    }

  }

}

function prompt5() {

  var reply5 = prompt('Favorite color green?', 'guess');

  if (reply5 !== null) {

    document.getElementById('statement5').innerHTML =

    'You answered: ' + reply5 + '.';

    console.log('The reply to Q5 was: ' + reply5);

    window.reply5 = reply5;

    var lower = reply5.toLowerCase();

    if (lower === 'yes') {

      document.getElementById('statement5Reply').innerHTML =

    'You are right!';

      counter++;

      document.getElementById('score').innerHTML = counter;

    } else if (lower === 'no') {

      document.getElementById('statement5Reply').innerHTML =

    'You are wrong!';

      counter--;

      document.getElementById('score').innerHTML = counter;

    } else {

      document.getElementById('statement5Reply').innerHTML =

    'Please: yes or no only';

    }

  }

}

function showTheText() {

  document.getElementById('thatTextButton').style.display = 'none';

  document.getElementById('resetButton').style.display = 'inline';

  //and back to white and black

  // document.getElementById('theWholeDocHTML').style.backgroundColor = 'black';

  // document.getElementById('docBody').style.color = 'white';

  var a = reply1;
  console.log(a);
  var b = reply2;
  console.log(b);
  var c = reply3;
  console.log(c);
  var d = reply4;
  console.log(d);

  alert('Your pet is ' + a + ', and it is a ' + b + '! It loves ' + c + ' and can be found drowsy around a ' + d + ' where it likes to nap.');

  console.log('Your pet is ' + a + ', and it is a ' + b + '! It loves ' + c + ' and can be found drowsy around a ' + d + ' where it likes to nap.');

  document.getElementById('statement5').innerHTML =
'Your pet is ' + a + ', and it is a ' + b + '! It loves ' + c + ' and can be found drowsy around a ' + d + ' where it likes to nap.';

}
