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

requirejs(["jquery","zombieapp/zombieView","bootstrap"], function($,ZombieView) {
  $(function () {
    var text = "";
    var this_zombieview = new ZombieView();
  });
});
