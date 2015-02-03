$(document).ready(function(){
  
  game = new Game();
  $('table').after("<p>You have "+game.rollsLeft+" rolls left</p>");
  alert("Ready to play!");
});