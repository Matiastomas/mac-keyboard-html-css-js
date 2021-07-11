/*
The following function change the
 keyboard color to gold once the user 
 click on the Gold (radio) option
*/
function setKeyboardColorToGold(){
  document.getElementsByClassName('grid-for-keys').style.backgroundColor ="#edd290";

}
/*
The following function change the
 keyboard color to silver once the user 
 click on the silver (radio) option, which 
 is the default color
 */
function setKeyboardColorToSilver(){
  document.getElementsByClassName('grid-for-keys').style.backgroundColor ="#c0c0c0";
}
//Execute the function setKeyboardColorToGold once the user click on the gold (radio) option
document.getElementById('gold').onclick = function () {
    setKeyboardColorToGold();
}
//Execute the function setKeyboardColorSilver once the user click on the silver (radio) option
document.getElementById('silver').onclick = function () {
    setKeyboardColorToSilver();
}
