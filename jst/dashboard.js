var dashboard = {

  i: function() {

    $('.dashboard').removeClass('closed');

    $('.step').each(function(index, val) {
      if ($(this).hasClass('on')) {
        $(this).find('.preh').hide();
        $(this).find('.posth').show();
      }
    });

    dashboard.handlers();
  },

  handlers: function() {
    $('.dashboard .step').click(dashboard.step);
  },

  step: function() {

    switch ($(this).data('cta')) {

      case 'register' :
        game.d();
        $('.bubbles').addClass('hidden');
        register.i();
        break;

      case 'share' :
        _.share();
        break;

      default :
        break;

    }

  },

  activate: function(type) {
    //$('.dashboard').addClass('open');
    $('.dashboard .i' + type).addClass('on').addClass('bounce');
    $('.dashboard .i' + type + ' .preh').hide();
    $('.dashboard .i' + type + ' .posth').show();
  },


  d: function() {
    $('.dashboard .step').unbind('click', dashboard.step);
  }

}
