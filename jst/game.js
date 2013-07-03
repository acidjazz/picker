
var game = {

  cround: 0,
  rounds: 5,
  score: 0,

  queue: [],
  played: [],
  images: [],

  i: function() {

    _.t('Game','PlayNow');

    rotate.d();
    game.handlers();
    game.round();
    $.cookie('in_game', true);
    if (_.settings.justliked != true) {
      $.removeCookie('played');
    }

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
        var dots = Math.round(percentage*15/100);

        for (var i = 1; i != dots+1; i++) {
          $('.loader .dot_' + i).addClass('filled');
        }

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

    _.t('Game','Auckland');

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

      case 'more' :
        if (_.settings.liked) {
          game.d();
          game.i();
          break;
        } else {
          _.n.i('Please like the page to play more');
        }
        //setTimeout(function() { $('.bubbles').removeClass('hidden'); }, 500);
        break;

      case 'register' :
        game.d();
        register.i();
        break;

      case 'share' :
        game.share();
        break;

      default :
        break;

    }

  },

  next: function() {

    _.t('Game','NextImage');

    if ($(this).data('cta') == 'more') {
      return true;
    }

    $('.circle .correct, .circle .wrong').removeClass('on');
    game.round();

  },

  answer: function(choice) {

    var answer = game.images.indexOf(game.queue[game.cround-1]);

    game.played.push(game.queue[game.cround-1]);

    if ($.cookie('played') == undefined) {
      $.cookie('played', JSON.stringify(game.played));
    } else {
      var played = eval($.cookie('played'));
      $.cookie('played', JSON.stringify(game.unique(game.played.concat(played))));
    }

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
    $('.image.iname_' + game.queue[game.cround-1]).addClass('show');

    $('.circle').show();

    setTimeout(function() {
      $('.chooser').addClass('on');
      $('.correct .copy').html(game.imageCopy[game.queue[game.cround-1]].correct);
      $('.wrong .copy').html(game.imageCopy[game.queue[game.cround-1]].wrong);
    }, 500);

  },

  finish: function() {

    _.t('Game','Finish');

    $('.circle .correct, .circle .wrong').removeClass('on');
    $('.finished').addClass('on');

    $('.finished .score').html(game.score + ' / ' + game.rounds);
    $('.finished .copyB.loser').hide();
    $('.finished .copyB.winner').hide();

    if (game.score < game.rounds/2) {
      $('.finished .copyB.loser').show();
    } else {
      $('.finished .copyB.winner').show();
    }

  },

  pick: function() {

    game.queue = [];
    var rounds = [];

    // free the images back up if there arent enough to queue up
    if (game.images.length-game.played.length < game.rounds) {
      game.played = [];
    }

    var clone = game.images.slice(0);
    clone = game.randomize(clone).slice(0, game.rounds+1);

    for (var i in clone) {
      if (game.played.indexOf(clone[i]) == -1) {
        rounds.push(clone[i]);
      }

      if (rounds.length == game.rounds) {
        return rounds;
      }

    }

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


  unique: function(array){

    var u = {}, a = [];

    for(var i = 0, l = array.length; i < l; ++i){

      if(u.hasOwnProperty(array[i])) {
        continue;
      }

      a.push(array[i]);
      u[array[i]] = 1;

    }

    return a;

  },

  share: function() {

    _.t('Game','ShareScore');

    FB.ui({
      method: 'feed',
      link: _.FB_URL,
      picture: 'https://picker.256.sh/img/share.jpeg',
      name: 'SF or Auckland?',
      caption: ' ',
      description: 'Enter for your chance to win 2 tickets from SFO to Auckland, New Zealand.'
    }, function (response) {

      /*
      if (response && response.post_id) {
        dashboard.activate('share');
        $.get('/index/share', {uid: _.uid, post_id: response.post_id}, function(response) { }); }
      */
      if (response && response.post_id) {
        _.t('Facebook','Share');
      }

    });

  },

  d: function() {

    game.cround = 0;
    game.score = 0;
    game.queue = [];

    $.removeCookie('in_game');

    $('.circle .correct, .circle .wrong').removeClass('on');
    $('.circle .chooser').removeClass('on');
    $('.chooser .choose').unbind('click', game.choose);
    $('.circle .cta').unbind('click', game.next);
    $('.circle .ctas .cta').unbind('click', game.cta);
    $('.circle .finished').removeClass('on');
    $('.circle').hide();

  }

}
