requirejs.config({
  "baseURL":"js",
  "paths": {
    "jquery":"vendor/jquery.min",
    "bootstrap":"vendor/bootstrap.min",
    "ZombieController":"zombieapp/ZombieController",
    "Translate":"zombieapp/Translate"
  },
  "shim": {
    "bootstrap":["jquery"]
  }
});

requirejs(["zombieapp/main"]);
