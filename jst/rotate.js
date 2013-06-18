var rotate = {

  delay: 10,
  images: ['beachhouses.jpeg', 'citycouple.jpeg', 'paddleboard.jpeg', 'skyfloor.jpeg', 'trainstation.jpeg', 'wineladies.jpeg'],
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
