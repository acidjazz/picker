var _ = {

  i: function() {

    console.log('initiated');

    game.load(function(response) {
      _.handlers();
      rotate.i();
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

    FB.ui({
      method: 'feed',
      link: 'http://picker.256.sh/',
      picture: 'http://picker.256.sh/img/share.jpg',
      name: 'SF or Auckland?',
      caption: ' ',
      description: 'Play City Picker now or enter to win 2 free tickets to Auckland, NZ from SFO.'
    },
      function (response) {

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
