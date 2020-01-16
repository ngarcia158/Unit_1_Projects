"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author:Nicholas Garcia 
   Date:1/16/19    

*/

var thisTime = new Date("February 3, 2018 3:15:28");//makes it so htat thisTime variable is equal to the time and date of February 3, 2018 3:15:28
var timeStr = thisTime.toLocaleString();//puts the time into local time we understand
var thisHour = thisTime.getHours();//Makes the thisHour element equal to the hour it is 
var thisMonth = thisTime.getMonth();//Makes the thisMonth element equal to the date it is 

//years and hours in the sky for the right image picture
var mapNum = (2 * thisMonth + thisHour) % 24;

//adds the mapnum into the png 
var imgStr = "<img src=sd_sky" + mapNum + ".png />";

//finds the id timestamp in the HTML and changes it equal to the timeStr variable
document.getElementById("timeStamp").innerHTML = timeStr;

//inserts imgStr right after the id planishphere
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);