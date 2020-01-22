"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Nicholas Garcia
   Date:  

   Filename:   ph_clock.js     

*/
var clockID = setInterval("countdown()", 1000);//checks the timer every second

var minsLeft = 30;//sets the mins to 30 left
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;//how the timer aqquires how much time is left

function countdown(){
   minsLeft = Math.floor(timeLeft/60);//sets how many minutes left
   secsLeft = timeLeft - 60 * minsLeft;//sets how many seconds left
   var minsString = addLeadingZero(minsLeft);//adds a zero infront of a single digit number on the mins section
   var secsString = addLeadingZero(secsLeft);//adds a zero infront of a single digit number on the secs section
   document.getElementById("minutes").innerHTML = minsString ;//adds the mins left into html
   document.getElementById("seconds").innerHTML = secsString ;//adds seconds left into HTML
   checkTimer();//runs the function to checktimer
   timeLeft--;//decreases the timer by 1
}
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML('beforeEnd', "<br />");//adds a br before the end of the id TimeHead
   clockID = clearInterval(clockID);//clears the clock when its done

}
/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
