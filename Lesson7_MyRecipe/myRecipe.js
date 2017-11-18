/*
Program Name: Recipe Display Application
Author: Chyanne Harrison    
Date: November 15, 2017
Filename: myRecipe.js
*/


/* global $ */


//displays and animates the next element after the current target
function display2(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);

h3 {
    color: green;
}


