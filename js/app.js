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
      outputtext = this_translator.translateToEnglish(text);
      $("#translation_output").html(outputtext);
      return false;
    });

    $('#english-to-zombie-btn').click(function (event) {
      text = $("#english").val();
      outputtext = this_translator.translateToZombie(text);
      $("#translation_output").html(outputtext);
      return false;
    });
  });
});
