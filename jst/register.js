
var register = {

  user: {},
  registered: false,

  i: function() {

    $('.register').removeClass('hidden');
    setTimeout(function() { 
      register.handlers();
      register.perms();
    }, 500);

  },

  handlers: function() {
    $(document).click(register.outside);
    $('.register, .notice').click(register.inside);
    $('.register .submit').click(register.submit);
  },

  perms: function() {

    FB.login(function(response) {

      if (response.authResponse) {
        FB.api('/me', function(response) {
          register.user = response;
          register.populate(response);
        });
      } else {
        _.n.i('Please allow access as part of the reigstration process', true, register.perms);
      }
    }, {scope: 'email'});

  },

  populate: function(user) {

    vals = {
      first: $('.input_first input'),
      last: $('.input_last input'),
      email: $('.input_email input')
    };

    if (user.first_name && vals.first.val() == '') {
      vals.first.val(user.first_name);
    }

    if (user.last_name && vals.last.val() == '') {
      vals.last.val(user.last_name);
    }

    if (user.email && vals.email.val() == '') {
      vals.email.val(user.email);
    }

  },

  submit: function() {

    var form = {
      tandc: $('.checkbox_tandc').hasClass('checked'),
      signup: $('.checkbox_signup').hasClass('checked'),
      first_name: $('.input_first input').val(),
      last_name: $('.input_last input').val(),
      email: $('.input_email input').val()
    };

    if (form.tandc == false) {
      _.n.i('You must accept the Terms and Conditions');
      return false;
    }

    if (form.email == '') {
      _.n.i('You must provide a valid email address');
      return false;
    }

    var json = {
      form: JSON.stringify(form),
      user: JSON.stringify(register.user)
    }


    $.get('/index/register', json, function(response) {

      if (response.error) {
        _.n.i('Error registering');
      } else {
        _.n.i('Registration Complete', false, register.d);
      }

    }, 'json');

  },
  
  validEmail: function(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
  },

  outside: function() {
    register.d();
  },

  inside: function(event) {
    event.stopPropagation();
  },

  d: function() {
    $(document).unbind('click', register.outside);
    $('.register').unbind('click', register.inside).addClass('hidden');
    $('.register .submit').unbind('click',register.submit);

    $('.bubbles').removeClass('hidden');
  }

}
