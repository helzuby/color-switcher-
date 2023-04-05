document.getElementById('greyButton').onclick = switchGrey;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('greenButton').onclick = switchGreen;



function switchGrey() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'grey'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white'; 
  document.getElementsByTagName('body')[0].style.color = 'blue'; 
}

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchYellow() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchGreen() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'green'; 
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}
