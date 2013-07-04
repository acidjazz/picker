
var register = {

  user: {},
  shared: false,
  registered: false,

  i: function() {

    $.removeCookie('in_game');

    _.t('Sweeps','EnterNow');
    $('.register').removeClass('hidden');
    setTimeout(function() { 
      register.handlers();
      register.data();
    }, 500);

  },

  handlers: function() {
    $(document).click(register.outside);
    $('.register, .notice').click(register.inside);
    $('.register .submit').click(register.submit);
  },

  data: function() {

    register.facebook.me(function(response) {

      if (response) {
        register.user = response;
        register.populate(response);
      } else {

        register.facebook.perms(function(presponse) {

          if (presponse) {
            register.data();
          } else {
            _.n.i('Required for security reasons.  Your information will never be shared.', true, register.data);
          }

        });
      }

    });

  },

  facebook: {

    me: function (callback) {

      FB.api('/me', function(response) {

        if (response.error) {
          callback(false);
        } else {
          callback(response);
        }
      });

    },

    perms: function(callback) {

      FB.login(function(response) {


        if (response.authResponse) {
          callback(true);
        } else {
          callback(false);
        }
      }, {scope: 'email'});

    }

  },

  populate: function(user) {

    vals = {
      first: $('.input_first input'),
      last: $('.input_last input'),
      email: $('.input_email input'),
      //country: $('.input_country input'),
      state: $('.input_state input')
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

      _.t('Sweeps', 'Submit');

    var form = {
      tandc: $('.checkbox_tandc').hasClass('checked'),
      signup: $('.checkbox_signup').hasClass('checked'),
      first_name: $('.input_first input').val(),
      last_name: $('.input_last input').val(),
      email: $('.input_email input').val(),
      //country: $('.input_country input').val(),
      state: $('.input_state input').val()
    };

    if (form.tandc == false) {
      _.n.i('Please accept our Terms and Conditions');
      return false;
    }

    if (form.email == '') {
      _.n.i('Please provide a valid email address');
      return false;
    }
    /*
    if (form.country == '') {
      _.n.i('Please provide your country');
      return false;
    }
    */
    if (form.state == '') {
      _.n.i('Please provide your state');
      return false;
    }

    var json = {
      form: JSON.stringify(form),
      user: JSON.stringify(register.user),
      liked: _.settings.liked
    }

    $.get('/index/register', json, function(response) {

      if (response.error) {
        _.n.i('Error registering');
      } else {
        register.registered = true;
        _.uid = register.user.id;
        register.post.i();
        dashboard.activate('register');
      }

    }, 'json');

  },
  
  validEmail: function(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
  },

  outside: function() {
    register.d();
    $('.bubbles').removeClass('hidden');
  },

  inside: function(event) {
    event.stopPropagation();
  },

  post: {
    i: function() {

      $('.post').show();

      setTimeout(function() {
        $('.register').addClass('off');
        $('.post').addClass('on');
      }, 200);

      /* need to do this if IE9
      $('.register').hide();
      */

      setTimeout(function() { register.post.handlers(); }, 500);
    },

    handlers: function() {
      $('.post .share').click(_.share);
      $(document).bind('click', register.post.outside);
      $('.post').click(register.inside);
    },

    outside: function() {
      register.post.d();
    },

    d: function() {
      $('.post .share').unbind('click', _.share);
      $(document).unbind('click', register.post.outside);
      $('.post').unbind('click', register.inside);
      $('.post').hide();
      $('.bubbles').removeClass('hidden');
      register.d();

    }

  },

  d: function() {

    $(document).unbind('click', register.outside);
    $('.register').unbind('click', register.inside).addClass('hidden');
    $('.register .submit').unbind('click',register.submit);

  }

}
