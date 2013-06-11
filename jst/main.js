var _ = {

  rotateNum: 1,
  rotateInterval: false,

  i: function() {
    _.handlers();
    rotate.i();
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

  }

}
