
var register = {

  i: function() {
    $('.register').removeClass('hidden');
    setTimeout(function() { register.handlers() }, 500);
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('add successful');

  },

  handlers: function() {
    $(document).click(register.outside);
    $('.register').click(register.inside);
  },

  outside: function() {
    console.log('outside yo');
    register.d();
  },

  inside: function(event) {
    event.stopPropagation();
  },

  d: function() {
    $(document).unbind('click', register.outside);
    $('.register').unbind('click', register.inside).addClass('hidden');
  }

}
