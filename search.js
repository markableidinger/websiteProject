var movies = new Array(3);
var genres = new Array(3);
var descriptions = new Array(movies.length);

movies[0] = "Psycho Killer";
movies[1] = "The Army of Midgets";
movies[2] = "Nightmare on Boren Avenue";
movies[3] = "Snakes on the Enterprise";

genres[0] = "Science Fiction";
genres[1] = "Horror";
genres[2] = "Thriller";
genres[3] = "Midgets";

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
options = ["Psycho Killer", "The Army of Midgets", "Nightmare on Boren Avenue", "Snakes on the Enterprise", "Titanic vs Tsunami", "The Man-Eating Shirt", "The Haunted Stall", ]
for (i = 0; i < options.length; i++){
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}
