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

requirejs(["zombieapp/main"]);
