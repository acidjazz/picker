var game = {

  images: [
    'beachcrowd.png',
    'beachhouses.png',
    'boatwoman.png'
    /*
    'coffee.png',
    'eyeball.png',
    'oceanwoman.png',
    'paddleboard.png',
    'road.png',
    'trainstation.png',
    'womantrees.png',
    'beachgroup.png',
    'beachjumpgirl.png',
    'citycouple.png',
    'doghill.png',
    'houses.png',
    'outlawsbar.png',
    'parkwoman.png',
    'skyfloor.png',
    'wineladies.png'
    */
  ],

  i: function() {


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
          console.log("we are complete");
          complete();
        }

      }

      img[i].src = '/img/game/' + game.images[i];
    }

  }

}
