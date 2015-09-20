define(['Translate'], function(Translate) {
    var translate = new Translate();
    describe('Translate', function() {
        beforeEach(function() {
            translate = new Translate();
        });
        describe('translate', function() {

        });
        describe('translateE', function() {
            it('should translate e or E to rr', function() {
               expect(translate.translateE('This is a test sentence','zombie')).toEqual('This is a trrst srrntrrncrr');
            });
        });
    });
});
