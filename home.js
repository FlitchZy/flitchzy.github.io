var t_bar_opened = true;
var t_bar = document.getElementById('toolbar');
var dehaze = document.getElementById('d_btn');
function toolbar_open(){
  if(t_bar_opened == true){
    t_bar_opened = false;
    t_bar.style.height = "285px";
    t_bar.style.width = "320px";
    dehaze.innerHTML = "close";
    dehaze.style.color = "#f44336";
  }
  else{
    t_bar_opened = true;
    t_bar.style.height = "25px";
    t_bar.style.width = "25px";
    dehaze.innerHTML = "dehaze";
    dehaze.style.color = "#757575";
  }
}