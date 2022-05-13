var contain = document.getElementById('loading-container');
var access = document.getElementById('access-btn');
var msg = document.getElementById('Message');
var loadbar = document.getElementById('load-bar');
var notice = document.getElementById('notice');

var loadImg = [];
var err = false;

function begin() {
    
    for(i=0; i<10; i++) {

        loadImg.unshift('&#9643;');
        loadbar.innerHTML = loadImg.join('');
    }   
    notice.textContent = "Booting System";
    msg.textContent = 'loading project gh0st...';
}



function load() {
   var upload = setInterval(() => {
        loadImg.pop();
        loadImg.unshift('&#9642;');
        loadbar.innerHTML = loadImg.join('');
        if(loadImg[9] === '&#9642;') {
         
            clearInterval(upload);
            loadImg = [];
            begin()
            load()
        }
    }, 100);
    
}
begin();
load(); 