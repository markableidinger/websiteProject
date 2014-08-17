//HTML element variables
genreBox=document.getElementById('genre__selector')
movieBox=document.getElementById('movie__selector')
contentBox=document.getElementById('contentBox')
//movie genres, titles, and descriptions
// var genreTitles=["Psycho Midgets","Nightmare Snakes","Mystery Genre","Demons"] Doesn't work

var genreTitles=[1, 2, 3, 4]
var titles=["Psycho Killer", "The Army of Midgets", "Nightmare on Boren Avenue", "Snakes on the Enterprise", "Titanic vs Tsunami", "The Man-Eating Shirt", "The Demon of the Stall"]
var descriptions=["This describes Psycho Killer", "This describes The Army of Midgets", "This describes Nightmare on Boren Avenue", "This describes Snakes on the Enterprise", "This describes Titanic cs Tsunami", "This describes The Man-Eating Shirt", "This describes The Demon of the Stall"]
var movieGenres=[1,1,2,2,3,3,4,4,5,5]
//initializes empty catalog
var catalog = new Catalog()
//Movie object
function Movie(title, description, genre){
  this.title = title
  this.description = description
  this.genre = genre
}
//Catalog object
function Catalog(){
  this.contents=[]
}
//function populates catalog
function makeMovies(){
  for(i=0; i<titles.length;i++){
    var m = new Movie(titles[i], descriptions[i], movieGenres[i])
    catalog.contents.push(m)
  }
}
//function populates movie dropdown
function populateMovies(){
  var l=[]
  for(i=0; i<catalog.contents.length; i++){
    if (catalog.contents[i].genre==genreBox.value){
      l.push(catalog.contents[i].title)
    }
  }
  populateSelect(movieBox, l, 'movie')
}
//function populates the content box
function populateContent(){
  for(i=0; i<catalog.contents.length; i++){
    if (catalog.contents[i].title==movieBox.value){
      contentBox.innerHTML = generator_blank(catalog.contents[i].title, catalog.contents[i].description)
    }
  }
}
//function populates select objects, passing in select element and the list of strings to populate it with
function populateSelect(element, list, type){
  element.innerHTML='<option disabled selected>--Select a '+type+'--</option>'
  for (i=0;i<list.length;i++){
    name = list[i]
    element.innerHTML=element.innerHTML+'<option value="'+name+'">'+name+'</option>'
  }
}
//generates a new content box with new title and content
function generator_blank(title, content){
  return '<div class="content__image"></div><div class="content__description-narrow"><h1>'+title+'</h1><p>'+content+'</p></div>'}

//initial functions, populate genre dropdown and populates catalog.contents with the movies
populateSelect(genreBox, genreTitles, 'genre')
makeMovies()
//event listener populates movie dropdown when genre is changes
genreBox.addEventListener('change', function(){populateMovies()}, false);
//event listener populates content when movie is changes
movieBox.addEventListener('change', function(){populateContent()}, false);
