var game = {

  cround: 0,
  rounds: 5,

  queue: [],
  imagse: [],

  i: function() {

    rotate.d();
    game.handlers();
    game.round();

  },

  load: function(complete) {

    var img = [];
    var loaded = 0;

    for (var i = 0, len = game.images.length; i != len; i++) {

      img[i] = new Image();
      img[i].onload = function() {

        loaded++;

        var percentage = loaded*100/len;
        var width = percentage*596/100;
        
        $('.loader .progress .inner').css({width: width + 'px'});

        if (loaded == len) {
          setTimeout(function() { complete(); }, 200);
        }

      }

      img[i].src = '/img/game/' + game.images[i];
    }

  },

  handlers: function() {
    $('.chooser .choose').click(game.choose);
    $('.circle .cta').click(game.next);
  },

  choose: function() {

    var choice = $(this).data('choice');

    $('.circle .chooser').removeClass('on');
    if (game.answer()) {
      $('.circle .correct').addClass('on');
    } else {
      $('.circle .wrong').addClass('on');

    }

  },

  next: function() {

    $('.circle .correct, .circle  .wrong').removeClass('on');
    game.round();

  },

  answer: function() {
    return Math.random() < 0.5 ? true : false;
  },

  round: function() {

    if (game.queue.length < 1) {
      game.queue = game.pick();
    }

    game.cround++;

    $('.image').removeClass('show');
    $('.image.iname_' + game.queue[game.cround]).addClass('show');

    $('.circle').show();
    $('.chooser').addClass('on');

  },

  pick: function() {

    game.queue = [];

    var images = game.images;
    game.randomize(images);

    return images.slice(0, game.rounds);

  },

  randomize: function (myArray) {

    var i = myArray.length, j, temp;

    if ( i === 0 ) return false;
    while ( --i ) {
      j = Math.floor( Math.random() * ( i + 1 ) );
      temp = myArray[i];
      myArray[i] = myArray[j]; 
      myArray[j] = temp;
    }

  }

}
