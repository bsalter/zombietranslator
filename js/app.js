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

requirejs(["jquery","zombieapp/ZombieController","bootstrap"], function($,ZombieController) {
  $(function () {
    var this_zombiecontroller = new ZombieController(); // load controller
  });
});
