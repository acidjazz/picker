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
      name: 'Air New Zealand &#8210; #nzontheway',
      description: 'Tag your Instagram photo with #NZontheWay for your chance to win two tickets to Australia with a stop in New Zealand.',
      link: _.g_url + '?id=' + $(this).data('id'),
      picture: $(this).data('image')
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
