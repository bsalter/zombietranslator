define(['jquery','ZombieController'], function($,ZombieController) {
  var zombieController = new ZombieController({
    englishToZombieBtn: $("<button></button>"),
    zombieToEnglishBtn: $("<button></button>")
  });
  describe('ZombieController', function() {
    describe('zombielistener', function() {
      it('should call translator.translateToZombie when translate to Zombie button clicked', function() {
        var translator = zombieController.translator;
        spyOn(translator,"translateToZombie").and.callThrough();
        zombieController.$englishToZombieBtn.click();
        expect(translator.translateToZombie).toHaveBeenCalled();
      });
    });
    describe('englishlistener', function() {
      it('should call translator.translateToEnglish when translate to English button clicked', function() {
        var translator = zombieController.translator;
        spyOn(translator,"translateToEnglish").and.callThrough();
        zombieController.$zombieToEnglishBtn.click();
        expect(translator.translateToEnglish).toHaveBeenCalled();
      });
    });
  });


});
