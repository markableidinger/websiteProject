
var contentBox = document.getElementById('content-box')
var i=1
var started
function cycle(){
  if (i<2){
    contentBox.innerHTML=generator_subheading(images[i], titles[i], descriptions[i], subheads[i])
    i+=1
  }
  else{
    contentBox.innerHTML=generator(images[i], titles[i], descriptions[i])
    i=0
  }
}
function start(){
  started = window.setInterval(function(){cycle()}, 5000)
  contentBox.style.opacity=1
}

function stop(){
  window.clearInterval(started)
  contentBox.style.opacity=.8
}

var titles = ['Under the Sea IN SPACE',
  'Eaten By Aliens',
  'SWEEPSTAKES!']
var descriptions = ['In our latest thrilling film, we follow the journey of a group of brave astronauts as they go under the frozen waters of Jupiter\'s moon Europa. However, when their equipment begins to malfunction, they realize that Europa is actually an alien supercomputer, frozen to keep it from destroying the universe... and they just woke it up.',
  'Jim Smelosky is an average guy just trying to get by, but he loses his job at the local gas station when everyone in town gets eaten by aliens. His rent is due, and he needs to make money fast. He and 3 friends try to make a youtube sensation about the aliens that have been eating people, but get more than they bargained for...',
  'WIN A CHANCE TO BE AN EXTRA EATEN BY AN ALIEN IN OUR NEW FILM "EATEN BY ALIENS!"']
var subheads = ['NEW RELEASE', 'COMING SOON']
var images = ['images/spacePlanet.jpeg', 'images/alien.jpg', 'images/alien.jpg']

function generator(img, title, content){
  return '<img src="'+img+'" class="content__image"/></div><div class="content__description"><h1 class=\'content__description__title\'>'+title+'</h1><p class=\'content__description__body\'>'+content+'</p></div>'}

function generator_subheading(img, title, content, subhead){
  return '<img src="'+img+'" class="content__image"/></div><div class="content__description"><h1 class=\'content__description__title\'>'+title+'</h1><h2 class=\'content__description__header\'>'+subhead+'</h2><p class=\'content__description__body\'>'+content+'</p></div>'}

start()

contentBox.addEventListener('mouseover', function(){stop();}, false);

contentBox.addEventListener('mouseout', function(){start();}, false);
