var game = {

  cround: 0,
  rounds: 5,
  score: 0,

  queue: [],
  images: [],

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

      img[i].src = '/img/game/' + game.images[i] + '.jpeg';
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

    if (game.answer(choice)) {
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

      case 'share' :
        _.share();
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

  answer: function(choice) {

    var answer = game.images.indexOf(game.queue[game.cround]);

    if (choice == 'sf' && answer < 8) {
      return true;
    }

    if (choice == 'nz' && answer > 7) {
      return true;
    }

    return false;

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
      $('.correct .copy').html(game.imageCopy[game.queue[game.cround]].correct);
      $('.wrong .copy').html(game.imageCopy[game.queue[game.cround]].wrong);
    }, 500);

  },

  finish: function() {

    $('.circle .correct, .circle .wrong').removeClass('on');
    $('.finished').addClass('on');
    $('.finished .score').html(game.score + ' / ' + game.rounds);

  },

  pick: function() {

    game.queue = [];
    var clone = game.images.slice(0);
    return game.randomize(clone).slice(0, game.rounds+1);

  },

  randomize:  function(array) {

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;

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
