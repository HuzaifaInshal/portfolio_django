// function zoom() {
//             var w = window.innerWidth;
//             if(w < 451){
//                 document.body.style.zoom = "70%"
//             }
//             if (w > 450){
//                 document.body.style.zoom = "90%"
//             }

//         }

$( document ).ready(function() {
    var w = window.innerWidth;
    if(w < 451){
        document.body.style.zoom = "70%"
    }
    if (w > 450){
        document.body.style.zoom = "90%"
    }
});

function closeoverlay() {
    document.getElementById("overflow").style.height = "0%";
    document.body.style.overflow="auto";
  }

document.addEventListener('keydown', (event) => {
  if(event.key=="ArrowUp"||"ArrowDown"){
      closeoverlay();
  }
    }, false);

var typingEffect = new Typed(".multitext",{
  strings : ["Web Applications","Data Dashboards","ML programs"],
  loop : true,
  typeSpeed : 100,
  backSpeed : 80,
  backDelay : 1500
})
nav=0

function openNav1(){
  if(nav%2==0){
    openNav()
  }
  else{
    closeovernav()
  }
}

function openNav(){
  document.getElementById("bars").classList.remove('fa-bars');
  document.getElementById("bars").classList.add('fa-close');
  nav++
  document.getElementById("overnav").style.display="flex"
  document.getElementById("overnav").style.height="100%"
  document.getElementById("overnav").style.width="100%"
  document.getElementById("overnav").style.position="fixed"
  document.getElementById("overnav").style.zIndex="1"
  document.getElementById("overnav").style.top="0"
  document.getElementById("overnav").style.backgroundColor="#000000"
  document.getElementById("overnav").style.overflowY="hidden"
  document.getElementById("overnav").style.transition="0.5s"

}
function closeovernav(){
  document.getElementById("bars").classList.add('fa-bars');
  document.getElementById("bars").classList.remove('fa-close');
  nav++
  document.getElementById("overnav").style.display="none"
}

var root = document.querySelector(':root');
variable = ['--white', '--black'];
values = ['#FFFFFF', '#000000']
values2 = ['#000000','#FFFFFF']
theme=0
function switchtheme() {
  if((theme%2)==0){
  theme++
  for (let i = 0; i < 2; i++)
    root.style.setProperty(variable[i], values[i]);}
  else{
  theme++
  for (let i = 0; i < 2; i++)
    root.style.setProperty(variable[i], values2[i]);
  }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
     }
    }
}



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





