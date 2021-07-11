/*
The following function change the
 keyboard color to gold once the user 
 click on the Gold (radio) option
*/
function setKeyboardColorToGold(){
  document.getElementById("main").style.backgroundColor ="black";
  document.getElementById("grid-for-keys").style.backgroundColor ="black";
  document.getElementById("grid-for-keys").style.borderColor ="black";
  document.getElementById("keyboard-pad").style.backgroundColor ="black";

}
/*
The following function change the
 keyboard color to silver once the user 
 click on the silver (radio) option, which 
 is the default color
 */
function setKeyboardColorToSilver(){
  document.getElementById("main").style.backgroundColor ="#c0c0c0";
  document.getElementById("grid-for-keys").style.backgroundColor ="#c0c0c0";
  document.getElementById("grid-for-keys").style.borderColor ="#c0c0c0";
  document.getElementById("keyboard-pad").style.backgroundColor ="#c0c0c0";

}
/*
The following function change the
 keyboard color to silver once the user 
 click on the silver (radio) option, which 
 is the default color
 */
 function setKeyboardColorToSpaceGrey(){
  document.getElementById("main").style.backgroundColor ="#f9f9f9";
  document.getElementById("grid-for-keys").style.backgroundColor="#f9f9f9";
  document.getElementById("grid-for-keys").style.borderColor ="#f9f9f9";
  document.getElementById("keyboard-pad").style.backgroundColor ="#f9f9f9";
}
/*
  //Execute the function setKeyboardColorSilver once the user click on the silver (radio) option
      document.getElementById("silver").onclick = function () {
          setKeyboardColorToSilver();
      } 
  
//Execute the function setKeyboardColorToGold once the user click on the gold (radio) option

    document.getElementById("gold").onclick = function () {
      setKeyboardColorToGold();
  }
  */
