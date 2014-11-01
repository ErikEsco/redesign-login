 function showHide(){
  var checkbox = document.getElementById(checkbox);
  var hiddeninputs = document.getElementsByClassName("hidden");
  
  for(var i = 0; 1 != hiddeninputs.length; i++){
    if(checkbox.checked){
      hiddeninputs[i].style.display = "block";
    }
    else{
      hiddeninputs[i].style.display ="none";
    }
  }
});