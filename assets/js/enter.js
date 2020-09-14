// Variables
const policy = document.querySelector('#p');
const stats = document.querySelector('#s');
const about = document.querySelector('#a');
const message = document.querySelector('#message');
const clock = document.querySelector('#clock-container');
const doc = document.querySelector('#p-active');
const join = document.querySelector('#join');
const describe = ['Take action', 'Join the discussion', 'General Election'];
let i = 0;
let num;
var speed = 50;

  // Event Listeners 

  policy.addEventListener('click', function() {
    message.innerHTML = '';
    i = 0;
    num = 0;
    type();

    doc.style.display = 'block';

    if(clock.style.display === 'block') {
      clock.style.display = 'none';
    }

    if(join.style.display === 'block') {
      join.style.display = 'none';
    }

  });

  stats.addEventListener('click', function() {
    message.innerHTML = '';
    i = 0;
    num = 1;
    type();

    join.style.display = 'block';

    if(clock.style.display === 'block') {
      clock.style.display = 'none';
    }

    if(doc.style.display === 'block') {
      doc.style.display = 'none';
    }

  });

  about.addEventListener('click', function() {
    message.innerHTML = '';
    i = 0;
    num = 2;
    type();

    clock.style.display = 'block';

    if(join.style.display === 'block') {
      join.style.display = 'none';
    }

    if(doc.style.display === 'block') {
      doc.style.display = 'none';
    }

  });


  // Functions 

  function type() {
    if (i < describe[num].length) {
      message.innerHTML += describe[num].charAt(i);
      i++;
      setTimeout(type, speed);
    } 
  
  }

