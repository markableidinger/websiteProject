ILBSM - Incredibly low-budget Slasher Movies
============================================

This project consists of 3 pages. The first page has 3 content boxes that cycle every 5 seconds, and stop cycling when you mouseover them. The purpose of this is to allow us to put links in them, but we didn't actually put links in them because that was beyond the scope of this project. The javascript for this has 2 event listeners on the content section, which run the function stop() on mouseover and start() on moseoff. They also alter the opacity to show the user that the mouseover has an effect.

The search page starts by creating a catalog of Movie objects, which have the attributes title, image, description, and genre. These attributes are stored in a series of arrays. In a full-fledged website, this would probably be done in a database, but that was beyond the scope of this project. After that, the populateSelect() function on the genre dropdown populates it with the contents of the genreTitles array. An event listener listens for a change of value the genre dropdown, and when it does, it populates the title dropdown with all of the movies that match the genre chosen. Then, when a title is chosen from the titles dropdown, a div is generated with the generator() function with content based on the Movie object chosen, and inserted into the content section. Every time a new movie is chosen, a new div is generated and replaces the previous.

The about page is static and has information about the company and its 2 employees.

Sources:
========
Code
----
JS book
HTML book
w3schools.com

Images (all used under Fair Use)
--------------------------------
http://www.ripplejunction.com
http://bakingbites.com
http://wonderfulengineering.com
http://nasa.gov
http://codefellows.org
http://metroactive.com
http://extraterrestrials.wikia.com/wiki/Alien
http://mymmosite.com
http://boardanddorkery.wordpress.com/
http://www.davekehr.com
