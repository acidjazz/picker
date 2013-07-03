var _ = {

  uid: false,
  settings: {},
  ieNine: false,

  i: function() {

    if (/msie 9/.test(navigator.userAgent.toLowerCase())) {
      _.ieNine = true;
    }

    game.load(function(response) {
      _.handlers();
      rotate.i();
      dashboard.i();

      if (_.settings.justliked == true) {

        dashboard.activate('like');

        if (_.ieNine == false && $.cookie('in_game') != undefined) {
          _.body.d();
          game.i();
        }

      }

      $.removeCookie('in_game');

      $('.loader').hide();
      $('.body').show();
    });

  },

  handlers: function() {
    $('.bubble').click(_.bubble);
    $('.checkbox').click(function() { 
      $(this).toggleClass('checked'); 
      _.t('Sweeps', 'Uncheck');
    });
  },

  bubble: function() {

    var action = $(this).data('action');

    switch (action) {

      case 'register' :
        _.body.d();
        register.i();
        break;

      case 'like' :
        _.body.d();
        register.i();
        break;

      case 'play' :
        if (_.ieNine) {
          _.n.i('Apologies but the game does not support IE9 and earlier, please upgrade or install Firefox, Chrome, or Safari');
        } else {
          _.body.d();
          game.i();
        }
        break;

    }

  },

  body: {
    i: function() {
      $('.bubbles').removeClass('hidden');
    },
    d: function() {
      $('.bubbles').addClass('hidden');
    }
  },

  share: function() {

    if (register.registered == false && _.settings.registered == false) {
      _.n.i('We want to know you.  Please register before sharing', false, function() {
        _.body.d();
        register.i();
        return true;
      });
      return true;
    }

    FB.ui({
      method: 'feed',
      link: _.FB_URL,
      picture: 'https://picker.256.sh/img/share.jpeg',
      name: 'SF or Auckland?',
      caption: ' ',
      description: 'Enter for your chance to win 2 tickets from SFO to Auckland, New Zealand.'
    }, function (response) {

      if (response && response.post_id) {
        _.t('Facebook','Share');
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

  },

  t: function(type, label) {
    _gaq.push(['_trackEvent', type, 'Click', label]);
  },

}
