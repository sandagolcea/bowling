$(document).ready(function(){
  
  game = new Game();
  // alert("Ready to play!");

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
          // TODO: check the value of i is all times and make sure
          // that it is synchronized.
          $('#frame-total'+ (i-1).toString() ).html(game.frame[0].total);
        i++;
  });

});

  // To simply output the value in the input box:
  // $('.list').append("<div class='item'>" + toAdd + "</div>");
