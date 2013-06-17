var game = {

  cround: 0,
  rounds: 2,
  score: 0,

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
          setTimeout(complete, 200);
        }

      }

      img[i].src = '/img/game/' + game.images[i];
    }

  },

  handlers: function() {
    $('.chooser .choose').click(game.choose);
    $('.circle .cta').click(game.next);
    $('.circle .ctas .cta').click(game.cta);
  },

  choose: function() {

    var choice = $(this).data('choice');

    $('.circle .chooser').removeClass('on');

    if (game.cround == game.rounds) {
      $('.next').html('finish');
    } else {
      $('.next').html('next image');
    }

    if (game.answer()) {
      game.score++;
      $('.circle .correct').addClass('on');
    } else {
      $('.circle .wrong').addClass('on');
    }

  },

  cta: function() {

    var task = $(this).data('cta');

    switch (task) {

      case 'back' :
        game.d();
        setTimeout(function() { $('.bubbles').removeClass('hidden'); }, 500);
        break;

      case 'register' :
        game.d();
        register.i();
        break;

      default :
        console.log(task);
        break;

    }

  },

  next: function() {

    $('.circle .correct, .circle .wrong').removeClass('on');
    game.round();

  },

  answer: function() {
    return Math.random() < 0.5 ? true : false;
  },

  round: function() {

    if (game.queue.length < 1) {
      game.queue = game.pick();
      game.score = 0;
    }
    
    if (game.cround == game.rounds) {
      game.finish();
      return true;
    }

    game.cround++;

    $('.image').removeClass('show');
    $('.image.iname_' + game.queue[game.cround]).addClass('show');

    $('.circle').show();
    setTimeout(function() {
      $('.chooser').addClass('on');
    }, 500);

  },

  finish: function() {

    $('.circle .correct, .circle .wrong').removeClass('on');
    $('.finished').addClass('on');
    $('.finished .score').html(game.score + ' / ' + game.rounds);

  },

  pick: function() {

    game.queue = [];

    var images = game.images;
    game.randomize(images);

    return images.slice(0, game.rounds+1);

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

  },

  d: function() {

    game.cround = game.score = 0;
    game.queue = [];

    $('.chooser .choose').unbind('click', game.choose);
    $('.circle .cta').unbind('click', game.next);
    $('.circle .ctas .cta').unbind('click', game.cta);
    $('.circle .finished').removeClass('on');

  }

}
