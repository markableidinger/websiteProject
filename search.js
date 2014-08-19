//HTML element variables
genreBox = document.getElementById('genre__selector')
movieBox = document.getElementById('movie__selector')
contentBox = document.getElementById('contentBox')

$genreBox = $('#genre__selector');
$movieBox = $('#movie__selector');
$contentBox = $('#contentBox');

//movie genres, titles, and descriptions
var genreTitles = ["Psycho Midgets","Nightmare Snakes","Nautical","Demons"]

var titles = ["Psycho Killer",
  "The Army of Midgets",
  "Nightmare on Boren Avenue",
  "Snakes on the Enterprise",
  "Titanic vs Tsunami",
  "Under the Sea IN SPACE",
  "The Man-Eating Shirt",
  "The Demon of the Stall"]

var descriptions = ["When a series of mysterious murders occur in the little town of Nowheresville, Maine, the police are baffled. The only clue they have to do on is that all of the victims were killed by stab wounds to the ankles. As the town descends into chaos, the only hope left for the town is little Timmy and his psychic Labradoodle.",
  "A scientist moves into town and locks himself in his basement. The town becomes more and more concerns as they start hearing strange noises underground - noises that sound an awful lot like an army of little footsteps...",
  "A group of coding students are forced to go through a rigorous Javascript program and create fake websites, but what they don't know is that it is all part of a sinister scheme by their instructors... Also, there are snakes.",
  "Captian Mirk and Mr. Spork are stuck on the HMS Enterprise with hundreds of space-snakes an must find a way to regain control of the ship before it gets caught in the gravity well of a nearby sun and incinerated",
  "A tragic romance, in which a 1900s steamship and a tsunami are madly in love but can never be together because their families hate each other. Their plan to be together forever gets found out and they must make the hardest decision of their lives...",
  "A group of brave astronauts go under the frozen waters of Jupiter's moon Europa. However, when their equipment begins to malfunction, they realize that Europa is actually an alien supercomputer, frozen to keep it from destroying the universe... and they just woke it up.",
  "Tim Masterson can't believe his luck when he finds the greatest shirt ever for free at a garage sale. However, he soon learns that the shirt requires more than just dry-cleaning to look that good...",
  "A heartwarming tale of friendship and teamwork as 4 buddies descend through the 9 levels of hell together through a portal in a creepy bathroom in an abandoned chinese restaurant, learning about each other and themselves throughout their journey"]

var movieGenres = ["Psycho Midgets",
  "Psycho Midgets",
  "Nightmare Snakes",
  "Nightmare Snakes",
  "Nautical",
  "Nautical",
  "Demons",
  "Demons"]

var images=['images/knife.jpeg',
  'images/hobbits.jpg',
  'images/code-fellows-logo.png',
  'images/spaceGreen.jpg',
  'images/wave.jpg',
  'images/spacePlanet.jpeg',
  'images/shirt.jpg',
  'images/oblivion.jpeg']

//initializes empty catalog
var catalog = new Catalog()

//Movie object
function Movie(title, description, genre, img) {
  this.title = title
  this.description = description
  this.genre = genre
  this.img = img
}

//Catalog object
function Catalog() {
  this.contents = []
}

//function populates catalog
function makeMovies(){
  for (i = 0; i < titles.length; i++) {
    var m = new Movie(titles[i], descriptions[i], movieGenres[i], images[i])
    catalog.contents.push(m)
  }
}

//function populates movie dropdown
function populateMovies() {
  var l = []
  for(i = 0; i < catalog.contents.length; i++) {
    if (catalog.contents[i].genre == $genreBox.val()) {
      l.push(catalog.contents[i].title)
    }
  }
  populateSelect(movieBox, l, 'movie')
}

//function populates the content box
function populateContent() {
  for(i = 0; i < catalog.contents.length; i++) {
    if (catalog.contents[i].title == $movieBox.val()) {
      // contentBox.innerHTML = generator(catalog.contents[i].img, catalog.contents[i].title, catalog.contents[i].description)
      $contentBox.html(generator(catalog.contents[i].img, catalog.contents[i].title, catalog.contents[i].description)
    )}
  }
}

//function populates select objects, passing in select element and the list of strings to populate it with
function populateSelect(element, list, type) {
  element.innerHTML = '<option disabled selected>--Select a ' + type + '--</option>'
  for (i = 0; i < list.length; i++) {
    name = list[i]
    element.innerHTML = element.innerHTML + '<option value="' + name + '">' + name + '</option>'
  }
}

//generates a new content box with new title and content
function generator_blank(title, content) {
  return '<div class="content__image"></div><div class="content__description-narrow"><h1 class=\'content__description__title\'>'+title+'</h1><p class=\'content__description__body\'>'+content+'</p></div>'
}

function generator(img, title, content) {
  return '<img src="' + img + '" class="content__image"/></div><div class="content__description-narrow"><h1 class=\'content__description__title\'>' + title + '</h1><p class=\'content__description__body\'>' + content + '</p></div>'
}

//initial functions, populate genre dropdown and populates catalog.contents with the movies
populateSelect(genreBox, genreTitles, 'genre')
makeMovies()

//event listener populates movie dropdown when genre is changes
$genreBox.change(populateMovies);

//event listener populates content when movie is changes
$movieBox.change(populateContent);
