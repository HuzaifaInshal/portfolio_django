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


let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");


  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     switchTheme.style.display='none'
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
    switchTheme.style.display='flex'
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }

  