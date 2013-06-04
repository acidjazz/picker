var _ = {

  i: function() {

  },

  handlers: function() {

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
