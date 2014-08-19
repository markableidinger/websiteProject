
var $contentBox = $('#content-box');
var position = 1;
var started = window.setInterval(function(){cycle()}, 5000);
var catalog = []

var titles = ['Under the Sea IN SPACE',
  'Eaten By Aliens',
  'SWEEPSTAKES!'];
var descriptions = ['In our latest thrilling film, we follow the journey of a group of brave astronauts as they go under the frozen waters of Jupiter\'s moon Europa. However, when their equipment begins to malfunction, they realize that Europa is actually an alien supercomputer, frozen to keep it from destroying the universe... and they just woke it up.',
  'Jim Smelosky is an average guy just trying to get by, but he loses his job at the local gas station when everyone in town gets eaten by aliens. His rent is due, and he needs to make money fast. He and 3 friends try to make a youtube sensation about the aliens that have been eating people, but get more than they bargained for...',
  'WIN A CHANCE TO BE AN EXTRA EATEN BY AN ALIEN IN OUR NEW FILM "EATEN BY ALIENS!"'];
var subheads = ['NEW RELEASE', 'COMING SOON', ''];
var images = ['images/spacePlanet.jpeg', 'images/alien.jpg', 'images/alien.jpg'];
//Defines movie object
function Movie(title, description, subhead, img){
  this.title = title
  this.description = description
  this.subhead = subhead
  this.img = img
}
//Populates catalog with movies
function makeMovies(){
  for(i = 0; i < titles.length; i++){
    var m = new Movie(titles[i], descriptions[i], subheads[i], images[i])
    catalog.push(m)
  }
}
//calls makeMovies to populate catalog
makeMovies()
//concatenates a big ol' string of HTML
//According to Ryan, it wouldn't be helpful or efficient to make generator and cycle into JQuery
function generator(img, title, content, subhead){
  return '<img src="' + img + '" class="content__image"/></div><div class="content__description"><h1 class=\'content__description__title\'>' + title + '</h1><h2 class=\'content__description__header\'>' + subhead + '</h2><p class=\'content__description__body\'>' + content + '</p></div>'}

function cycle(){
  $contentBox.html(generator(catalog[position].img, catalog[position].title, catalog[position].description, catalog[position].subhead));
  if (position < 2){
    position += 1;
  }
  else{
    position = 0;
  }
}

$contentBox.on('mouseover', function(){
  $(this).css({'opacity':0.8});
  window.clearInterval(started);
});

$contentBox.on('mouseout', function(){
  $(this).css({'opacity':1});
  started = window.setInterval(function(){cycle()}, 5000);
});
