var rotate = {

  delay: 10,
  images: ['beachhouses.png', 'citycouple.png', 'paddleboard.png', 'skyfloor.png', 'trainstation.png', 'wineladies.png'],
  interval: false,
  number: 1,

  i: function() {

    $('.image1').addClass('show');
    rotate.interval = setInterval(rotate.rotate, rotate.delay*1000);

  },

  rotate: function() {

    if (++rotate.number > 5) {
      rotate.number = 1;
    }

    $('.image').removeClass('show');
    $('.image' + rotate.number).addClass('show');

  },

  d: function() {

    clearInterval(rotate.interval);
    console.log('rotater interval cleared');

  }

}
