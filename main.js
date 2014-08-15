
var contentBox = document.getElementById('content-box')
var i=0
function cycle(){
if (i<2){
  i+=1
}
else{
  i=0
}
  contentBox.innerHTML=contents[i]
}
window.setInterval(function(){cycle()}, 4000)

contents=['<div class="content__image"></div><div class="content__description"><h1>Movie Title1</h1><p>Movie Description askjhfkajdhflkSDHFLKJASDHGLKHASDLKGHA D;LDSHFLKJADHF LDKJFHJD FLKAJDG KLAJSDGKLADSG FLKADG FLKJASDGFJKLASDG FLKAJDSG LKAGFKASGD FLHASDKJHF ASDKJFG AKSDJGF AKDJS </p></div>', '<div class="content__image"></div><div class="content__description"><h1>Movie Title2</h1><p>Movie Description ANOTHER DIFFERENT MOIVE DESCRIPTION ARGHHHBARBALEAJSHFKSJAHFOASIUFOIG ADSKHFDSAKF ASDKMF ADS FMSDA FMAKD FKAJSDGAOIRGWNE JD FMSDA KM  --COMING SOOOOOOON--</p></div>','<div class="content__image"></div><div class="content__description"><h1>Event Name</h1><p>WIN A CHANCE TO BE AN EXTRA EATEN BY AN ALIEN IN OUR NEW FILM "EATEN BY ALIENS!"</p> </div>']

