

var movies = new Array(3);
var genres = new Array(3);
var descriptions = new Array(movies.length);

var select = document.getElementById("genre");
var options = ["Horror", "Slasher", "Science Fiction", "Despair", "Monsters", "Psychological", "Zombies", "Demonology"];

for (i = 0; i < options.length; i++){
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}



select = document.getElementById("title");
options = ["Psycho Killer", "The Army of Midgets", "Nightmare on Boren Avenue", "Snakes on the Enterprise", "Titanic vs Tsunami", "The Man-Eating Shirt", "The Demon of the Stall", ]
for (i = 0; i < options.length; i++){
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

select.addEventListener('change', function(){changeMovie(options[i])}, false)
var movieDescriptions = new Array(options.length);
var movieDescriptions = ["This describes Psycho Killer", "This describes The Army of Midgets", "This describes Nightmare on Boren Avenue", "This describes Snakes on the Enterprise", "This describes Titanic cs Tsunami", "This describes The Man-Eating Shirt", "This describes The Demon of the Stall"]
var movieImages = new Array(options.length);
var movieImages = ["Image1", "Image2", "Image3", "Image4", "Image5", "Image6", "Image7", "Image8"]

// function changeMovie(options[i]) {
//   if (select.options[i].selected) {
//     var el = document.createElement("p");
//     el.textContent = movieDescriptions[i].textContent;
//   }
// }
