
var contentBox = document.getElementById('content-box')
var i=0
var started
function cycle(){
  if (i<2){
    i+=1
  }
  else{
    i=0
  }
    contentBox.innerHTML=generator_blank(titles[i], descriptions[i])
}
function start(){
  started = window.setInterval(function(){cycle()}, 4000)
}

function stop(){
  window.clearInterval(started)
}

var titles=['Movie Title1', 'Movie Title2', 'Event Name']
var descriptions = ['Movie Description askjhfkajdhflkSDHFLKJASDHGLKHASDLKGHA D;LDSHFLKJADHF LDKJFHJD FLKAJDG KLAJSDGKLADSG FLKADG FLKJASDGFJKLASDG FLKAJDSG LKAGFKASGD FLHASDKJHF ASDKJFG AKSDJGF AKDJS', 'DIFFERENT MOVIE ASHLDJASHFLJHDFKJHDSAKF', 'WIN A CHANCE TO BE AN EXTRA EATEN BY AN ALIEN IN OUR NEW FILM "EATEN BY ALIENS!"']

function generator_blank(title, content){
  return '<div class="content__image"></div><div class="content__description"><h1>'+title+'</h1><p>'+content+'</p></div>'}

function generator(img, title, content){
  return '<img src="'+img+'" class="content__image"/></div><div class="content__description"><h1>'+title+'</h1><p>'+content+'</p></div>'}

start()

contentBox.addEventListener('mouseover', function(){stop();}, false);

contentBox.addEventListener('mouseout', function(){start();}, false);
