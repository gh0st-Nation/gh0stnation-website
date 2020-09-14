var img = document.getElementById('screen');
var txt = document.getElementById('text');

var quote = ['Hello, I am gh0st.', 'Let us begin.'];

var i = 0;
var a = 0;

var speed = 200;



function type() {
    if (i < quote[0].length) {
      txt.innerHTML += quote[0].charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (txt.innerHTML === quote[0]) {
        setTimeout(function () { 
            txt.innerHTML = '';
            typeAgain(); 
        }, 1000);
    }
  }

  function typeAgain() {
    if (a < quote[1].length) {
        txt.innerHTML += quote[1].charAt(a);
        a++;
        setTimeout(typeAgain, speed);
        setTimeout(function() {
            img.style.opacity = 1;
        }, 4000);
      }
  }

  function glow() {
    var first = document.querySelector('#first');
    var second = document.querySelector('#second');

    first.classList.add('glow');
    second.classList.add('glow');
}


  type();