define(['jquery','ZombieController'], function($,ZombieController) {
  var zombieController = new ZombieController({
    englishToZombieBtn: $("<button></button>"),
    zombieToEnglishBtn: $("<button></button>"),
    englishText: $("<input type='text'></input>"),
    zombieText: $("<input type='text'></input>")
  });
  describe('ZombieController', function() {
    describe('zombielistener', function() {
      it('should call translator.translateToZombie when translate to Zombie button clicked', function() {
        var translator = zombieController.translator;
        spyOn(translator,"translateToZombie").and.callThrough();
        zombieController.$englishToZombieBtn.click();
        expect(translator.translateToZombie).toHaveBeenCalled();
      });
      it('should call translator.translateToZombie with input text when translate to Zombie button clicked', function() {
        var translator = zombieController.translator;
        spyOn(translator,"translateToZombie").and.callThrough();
        zombieController.$englishText.val("Testing");
        zombieController.$englishToZombieBtn.click();
        expect(translator.translateToZombie).toHaveBeenCalledWith("Testing");
      });
    });
    describe('englishlistener', function() {
      it('should call translator.translateToEnglish when translate to English button clicked', function() {
        var translator = zombieController.translator;
        spyOn(translator,"translateToEnglish").and.callThrough();
        zombieController.$zombieToEnglishBtn.click();
        expect(translator.translateToEnglish).toHaveBeenCalled();
      });
      it('should call translator.translateToEnglish with input text when translate to English button clicked', function() {
        var translator = zombieController.translator;
        spyOn(translator,"translateToEnglish").and.callThrough();
        zombieController.$zombieText.val("Testing");
        zombieController.$zombieToEnglishBtn.click();
        expect(translator.translateToEnglish).toHaveBeenCalledWith("Testing");
      });
    });
  });


});
