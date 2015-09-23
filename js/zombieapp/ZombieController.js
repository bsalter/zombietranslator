// Controller for Zombie translator app
define(['jquery','Translate'], function($,Translate) {
    // create zombieController object
    var ZombieController = function(config) {
        // initialize
        this.text = "";
        this.translator = new Translate(); // instantiate translation service
        // set up DOM mock objects
        this.config = config || {};
        this.$englishToZombieBtn = this.config.englishToZombieBtn || $("#english-to-zombie-btn");
        this.$zombieToEnglishBtn = this.config.zombieToEnglishBtn || $("#zombie-to-english-btn");
        this.$englishText = this.config.englishText || $("#english");
        this.$zombieText = this.config.zombieText || $("#zombie");
        // call listeners
        this.zombielistener();
        this.englishlistener();
    };

    ZombieController.prototype.zombielistener = function() {
        // listen for translate to english button
        var that = this;
        this.$zombieToEnglishBtn.click(function (event) {
            that.text = that.$zombieText.val();
            output = that.translator.translateToEnglish(that.text); // translate the text
            $("#translation_output").html(output.translation); // set HTML for output translation DOM element
            return false;
        });
    };

    ZombieController.prototype.englishlistener = function() {
        // listen for translate to zombie button
        var that = this;
        this.$englishToZombieBtn.click(function (event) {
            that.text = that.$englishText.val();
            output = that.translator.translateToZombie(that.text); // translate the text
            if(output.frog) { // watch out for froggies
                $('#zombieimage').fadeOut(600, function() { // fade out
                    $(this).fadeIn(600)[0].src = "images/dead-kermit.jpg"; // replace image
                    setTimeout(function() { // return everything back to normal
                        $('#zombieimage').fadeOut(600, function() { // fade out
                            $(this).fadeIn(600)[0].src = "images/zombie-swedish-chef-muppets.jpg"; // replace image
                        })
                    }, 10000); // wait ten seconds
                });
            }
            $("#translation_output").html(output.translation); // set HTML for output translation DOM element
            return false;
        });
    };
    return ZombieController;
});