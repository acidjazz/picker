var _ = {

  uid: false,
  settings: {},

  i: function() {

    console.log('initiated');

    game.load(function(response) {
      _.handlers();
      rotate.i();
      dashboard.i();
      if (_.settings.justliked == true) {
        dashboard.activate('like');
      }
      $('.loader').hide();
      $('.body').show();
    });

  },

  handlers: function() {
    $('.bubble').click(_.bubble);
    $('.checkbox').click(function() { $(this).toggleClass('checked'); });
  },

  bubble: function() {

    var action = $(this).data('action');

    switch (action) {

      case 'register' :
        $('.bubbles').addClass('hidden');
        register.i();
        break;

      case 'play' :
        $('.bubbles').addClass('hidden');
        //setTimeout(game.i, 500);
        game.i();
        break;

    }

  },

  share: function() {

    if (register.registered == false && _.settings.registered == false) {
      _.n.i('Please register before you share so we know who you are!', false, function() {
        $('.bubbles').addClass('hidden');
        register.i();
        return true;
      });
      return true;
    }

    FB.ui({
      method: 'feed',
      link: 'https://www.facebook.com/pages/Draftfcb-labs/487462011308540?sk=app_467666166644037',
      picture: 'https://picker.256.sh/img/share.jpg',
      name: 'SF or Auckland?',
      caption: ' ',
      description: 'Play City Picker now or enter to win 2 free tickets to Auckland, NZ from SFO.'
    }, function (response) {

        console.log(response);

      if (response && response.post_id) {
        dashboard.activate('share');
        $.get('/index/share', {uid: _.uid, post_id: response.post_id}, function(response) {

        });
      }

    });

  },

  n: {

    callback: false,

    i: function(copy, fade, callback) {

      if (callback) {
        _.n.callback = callback;
      }

      if (fade) {
        $('.fade').addClass('on');
      }

      $('.notice').addClass('on');
      $('.notice .cta').click(_.n.d);
      $('.notice .copy').html(copy);

    },

    d: function() {

      $('.notice').removeClass('on');
      $('.notice .cta').unbind('click', _.n.d);
      $('.fade').removeClass('on');

      if (_.n.callback) {
        _.n.callback();
      }

    }

  }

}
