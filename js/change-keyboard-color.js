/*
The following function change the
 keyboard color to gold once the user 
 click on the Gold (radio) option
*/
function setKeyboardColorToGold(){
  document.getElementById("main").style.backgroundColor ="#f0dba6";
  document.getElementById("grid-for-keys").style.backgroundColor ="#f0dba6";
  document.getElementById("grid-for-keys").style.borderColor ="#f0dba6";
  document.getElementById("keyboard-pad").style.backgroundColor ="#f0dba6";
  document.getElementById("grid-for-keys").style.boxShadow ="inset 0 0 10px #deae36";

}
/*
The following function change the
 keyboard color to silver once the user 
 click on the silver (radio) option, which 
 is the default color
 */
function setKeyboardColorToSilver(){
  document.getElementById("main").style.backgroundColor ="#b5b7bb";
  document.getElementById("grid-for-keys").style.backgroundColor ="#b5b7bb";
  document.getElementById("grid-for-keys").style.borderColor ="#b5b7bb";
  document.getElementById("keyboard-pad").style.backgroundColor ="#b5b7bb";
  document.getElementById("grid-for-keys").style.boxShadow ="inset 0 0 10px #d8d8d8";

}
/*
The following function change the
 keyboard color to silver once the user 
 click on the silver (radio) option, which 
 is the default color
 */
 function setKeyboardColorToSpaceGrey(){
  document.getElementById("main").style.backgroundColor ="#757575";
  document.getElementById("grid-for-keys").style.backgroundColor="#757575";
  document.getElementById("grid-for-keys").style.borderColor ="#757575";
  document.getElementById("keyboard-pad").style.backgroundColor ="#757575";
  document.getElementById("grid-for-keys").style.boxShadow ="inset 0 0 10px #d8d8d8";
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
