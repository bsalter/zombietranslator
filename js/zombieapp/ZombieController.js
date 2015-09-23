// Controller for Zombie translator app
define(['jquery','Translate'], function($,Translate) {
    var ZombieController = function(config) {
        this.text = "";
        this.translator = new Translate(); // instantiate translation service
        this.config = config || {};
        this.$englishToZombieBtn = this.config.englishToZombieBtn || $("#english-to-zombie-btn");
        this.$zombieToEnglishBtn = this.config.zombieToEnglishBtn || $("#zombie-to-english-btn");
        this.zombielistener();
        this.englishlistener();
    };

    ZombieController.prototype.zombielistener = function() {
        var that = this;
        this.$zombieToEnglishBtn.click(function (event) {
            that.text = $("#zombie").val();
            output = that.translator.translateToEnglish(that.text);
            $("#translation_output").html(output.translation);
            return false;
        });
    };

    ZombieController.prototype.englishlistener = function() {
        var that = this;
        this.$englishToZombieBtn.click(function (event) {
            that.text = $("#english").val();
            output = that.translator.translateToZombie(that.text);
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
    };
    return ZombieController;
});