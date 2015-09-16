requirejs.config({
  "baseURL":"js",
  "paths": {
    "zombieapp":"zombieapp",
    "jquery":"vendor/jquery.min",
    "bootstrap":"vendor/bootstrap.min"
  },
  "shim": {
    "bootstrap":["jquery"]
  }
});

requirejs(["jquery","zombieapp/translate","bootstrap"], function($,translate) {
  var text = "";
  var this_translator = new translate();
  $(function () {
    $('#zombie-to-english-btn').click(function (event) {
      text = $("#zombie").val();
      output = this_translator.translateToEnglish(text);
      $("#translation_output").html(output.translation);
      return false;
    });

    $('#english-to-zombie-btn').click(function (event) {
      text = $("#english").val();
      output = this_translator.translateToZombie(text);
      if(output.frog) {
        $('#zombieimage').fadeOut(600, function() {
          $(this).fadeIn(600)[0].src = "images/dead-kermit.jpg";
          setTimeout(function() {
            $('#zombieimage').fadeOut(600, function() {
              $(this).fadeIn(600)[0].src = "images/zombie-swedish-chef-muppets.jpg";
            })
          }, 10000);
        });
      }
      $("#translation_output").html(output.translation);
      return false;
    });
  });
});
