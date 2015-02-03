$(document).ready(function(){
  
  game = new Game();

  $('.scores').val(" ");

  // Addition input box and button here:
  var i = 1 ;
  $('#button').click(function(){

        var toAdd = $('input[name=checkListItem]').val();   

        $("#score" + i.toString() ).val(toAdd);
        game.knockPins(parseInt(toAdd));
        $('#roll-nr').html(game.rollsLeft);
        $('#frame-nr').html(game.frameNr+1);
        if (i%2==0) 
          $('#frame-total'+ (i/2).toString() ).html(game.frame[i/2-1].total);
        i++;
  });

});

  // To simply output the value in the input box:
  // $('.list').append("<div class='item'>" + toAdd + "</div>");
