$( document ).ready(function() {
    var w = window.innerWidth;
    if(w < 451){
        document.body.style.zoom = "70%"
    }
    if (w > 450){
        document.body.style.zoom = "90%"
    }
});


var root = document.querySelector(':root');
let switchTheme = document.getElementById("switch");
  variable = ['--black', '--white'];
  values = ['#FFFFFF', '#000000'];
  values2 = ['#000000','#FFFFFF'];
  theme=0;

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

function zoom() {
    var w = window.innerWidth;
    if(w < 451){
        document.body.style.zoom = "70%"
    }
    if (w > 450){
        document.body.style.zoom = "90%"
    }

}