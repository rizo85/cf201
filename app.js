/* eslint-disable no-unused-vars */

var reply1; //global variable

var reply2; //global variable

var reply3; //global variable

var reply4; //global variable

var uName;


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

  var reply1 = document.getElementsByName('patient');

  console.log('The value of patient: ' + reply1);

  document.getElementById('button1').style.display = 'none';

  document.getElementById('q1').style.display = 'none';

  document.getElementById('q2').style.display = 'block';

  document.getElementById('button2').style.display = 'inline';

  // so... if i have a black bkgrnd i wan to go black text teal bckgrnd....

  // document.getElementById('theWholeDocHTML').style.backgroundColor = '#32a8a6';

  // document.getElementById('docBody').style.color = 'black';

  window.reply1 = reply1;

}


function prompt2() {

  document.getElementById('button2').style.display = 'none';

  document.getElementById('q2').style.display = 'none';

  document.getElementById('q3').style.display = 'block';

  document.getElementById('button3').style.display = 'inline';

  // so... black text teal bckgrnd to white and pink bckgrnd....

  // document.getElementById('theWholeDocHTML').style.backgroundColor = '#d67495';

  // document.getElementById('docBody').style.color = '#ffffff';

  var reply2 = prompt('Species?', 'creature, eeep');
  if (reply2 !== null) {
    document.getElementById('statement2').innerHTML =
  'Your pet is a ' + reply2 + '!';
    console.log(reply2);

    window.reply2 = reply2;
  }
}

function prompt3() {

  document.getElementById('button3').style.display = 'none';

  document.getElementById('q3').style.display = 'none';

  document.getElementById('q4').style.display = 'block';

  document.getElementById('button4').style.display = 'inline';

  // so... pink bckgrnd to blue and green bckgrnd....

  // document.getElementById('theWholeDocHTML').style.backgroundColor = '#5fb535';

  // document.getElementById('docBody').style.color = '#0c0e3b';

  var reply3 = prompt('What does it like?', 'food');
  if (reply3 !== null) {
    document.getElementById('statement3').innerHTML =
  'Your pet likes ' + reply3 + '!';
    console.log(reply3);

    window.reply3 = reply3;
  }
}

function prompt4() {

  document.getElementById('button4').style.display = 'none';

  document.getElementById('q4').style.display = 'none';

  document.getElementById('thatTextButton').style.display = 'inline';

  // so... blue and green bckgrnd to grey bckgrnd and orange....

  // document.getElementById('theWholeDocHTML').style.backgroundColor = '#9d9eab';

  // document.getElementById('docBody').style.color = '#5e0a17';

  var reply4 = prompt('Sleeping spot?', 'floor');
  if (reply4 !== null) {
    document.getElementById('statement4').innerHTML =
  'Your pet likes to sleep on the ' + reply4 + '!';
    console.log(reply4);

    window.reply4 = reply4;
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
