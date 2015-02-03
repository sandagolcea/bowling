$(document).ready(function(){
  
  game = new Game();
  $('table').after("<p>You have "+game.rollsLeft+" rolls left</p>");
  // alert("Ready to play!");

  $('.scores').val(" ");

  // Addition input box and button here:
  $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();   
        // To simply output the value in the input box:
        // $('.list').append("<div class='item'>" + toAdd + "</div>");
        $('#score1').val(toAdd);
  });

});