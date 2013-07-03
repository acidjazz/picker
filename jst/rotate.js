var rotate = {

  delay: 10,
  images: ['boatwoman', 'beachgroup', 'citycouple', 'oceanwoman', 'paddleboard', 'skyfloor', 'trainstation', 'wineladies'],
  interval: false,
  number: 0,

  i: function() {

    $('.iname_' + rotate.images[0]).addClass('show');
    rotate.interval = setInterval(rotate.rotate, rotate.delay*1000);

  },

  rotate: function() {

    if (++rotate.number > 7) {
      rotate.number = 1;
    } 
    $('.image').removeClass('show');
    $('.iname_' + rotate.images[rotate.number]).addClass('show');

  },

  d: function() {

    clearInterval(rotate.interval);

  }

}
