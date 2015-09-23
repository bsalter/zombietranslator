define(['Translate'], function(Translate) {
    var translate = new Translate();
    describe('Translate', function() {
        it('should be an object', function() {
            expect(translate).toEqual(jasmine.any(Object));
        });
        describe('translate', function() {
            it('should translate into zombie, applying all rules', function() {
                expect(translate.translate('a sentence to test!','zombie').translation).
                    toEqual('A srrntrrncrr trrrRr trrst Bork Bork Bork!');
            });
            it('should translate into english, applying all rules', function() {
                expect(translate.translate('A srrntrrncrr trrrRr trrst Bork.','english').translation).
                    toEqual('A sentence to test.');
            });
            it('should return parameter frog=true if frogs are mentioned', function() {
                expect(translate.translate('A frog is mentioned').frog).toBeTruthy();
            });
            it('should translate null to null', function() {
                expect(translate.translate(null).translation).toBeNull();
            });
            it('should translate undefined to undefined',function() {
                expect(translate.translate(undefined).translation).toBeUndefined();
            });
            it('should translate a plain number to that same number', function() {
                expect(translate.translate(3).translation).toEqual(3);
            });
        });
        describe('translateE', function() {
            it('should translate e or E to rr', function() {
               expect(translate.translateE('This is a tEst sentence','zombie')).
                    toEqual('This is a trrst srrntrrncrr');
            });
            it('should translate rr back to e', function() {
                expect(translate.translateE('This is a trrst srrntrrncrr','english')).
                    toEqual('This is a test sentence');
            });
        });
        describe('translateI', function() {
            it('should translate i or I to rrRr', function() {
                expect(translate.translateI('ThIs is a test sentence','zombie')).
                    toEqual('ThrrRrs rrRrs a test sentence');
            });
            it('should translate rrRr back to i', function() {
                expect(translate.translateI('ThrrRrs rrRrs a test sentence','english')).
                    toEqual('This is a test sentence');
            });
        });
        describe('translateO', function() {
            it('should translate o or O to rrrRr', function() {
                expect(translate.translateO('ZOmbies like the letter o','zombie')).
                    toEqual('ZrrrRrmbies like the letter rrrRr');
            });
            it('should translate rrrRr back to o', function() {
                expect(translate.translateO('ZrrrRrmbies like the letter rrrRr','english')).
                    toEqual('Zombies like the letter o');
            });
        });
        describe('translateU', function() {
            it('should translate u or U to rrrrRr', function() {
                expect(translate.translateU('This translation should work Unquestioningly','zombie')).
                    toEqual('This translation shorrrrRrld work rrrrRrnqrrrrRrestioningly');
            });
            it('should translate rrrrRr back to u', function() {
                expect(translate.translateU('This translation shorrrrRrld work rrrrRrnqrrrrRrestioningly','english')).
                    toEqual('This translation should work unquestioningly');
            });
        });
        describe('translateR', function() {
            it('should translate r or R to RR except at end of word', function() {
                expect(translate.translateR('HeRe is a good sentence for testing','zombie')).
                    toEqual('HeRRe is a good sentence for testing');
            });
            it('should translate RR back to r except at end of word', function() {
                expect(translate.translateR('HeRRe is a good sentence for testing','english')).
                    toEqual('Here is a good sentence for testing');
            });
        });
        describe('translateA', function() {
            it('should translate a or A by itself to hra', function() {
                expect(translate.translateA('Here is a sentence to test A translator','zombie')).
                    toEqual('Here is hra sentence to test hra translator');
            });
            it('should translate hra to a', function() {
                expect(translate.translateA('Here is hra sentence to test hra translator','english')).
                    toEqual('Here is a sentence to test a translator');
            });
        });
        describe('translateendR', function() {
            it('should translate r at end of word to rh', function() {
                expect(translate.translateendR('Here is our test sentenceR','zombie')).
                    toEqual('Here is ourh test sentenceR');
            });
            it('should translate rh back to r', function() {
                expect(translate.translateendR('Here is ourh test sentenceR','english')).
                    toEqual('Here is our test sentenceR');
            });
        });
        describe('translateCapitalize', function() {
            it('should capitalize the first letter of sentences', function() {
                expect(translate.translateCapitalize('here is a test sentence. and another.','zombie')).
                    toEqual('Here is a test sentence. And another.');
            });
        });
        describe('translateBork', function() {
            it('should translate . and ! to Bork and Bork Bork Bork!, respectively', function() {
                expect(translate.translateBork('Try this sentence!','zombie')).
                    toMatch(/Bork Bork Bork\!/);
                expect(translate.translateBork('Try this sentence.','zombie')).
                    toMatch(/Bork./);
            });
        });
        describe('translateFrog', function() {
            it('should return true for frog or Frog or Kermit, false if not', function() {
                expect(translate.translateFrog('here is a frog')).toBeTruthy();
                expect(translate.translateFrog('here is Kermit')).toBeTruthy();
                expect(translate.translateFrog('here is kermit')).toBeFalsy();
                expect(translate.translateFrog('here is just a random sentence')).toBeFalsy();
            });
        });
        describe('translateToZombie', function() {
            it('should translate a sentence into zombie', function() {
                var translation_obj = translate.translateToZombie('Here is a sentence.');
                expect(translation_obj.translation).
                    toEqual('HrrRRrr rrRrs hra srrntrrncrr Bork.');
                expect(translation_obj.frog).toBeFalsy();
            });
            it('should call the translate function with language = zombie', function() {
                spyOn(translate,"translate");
                var output = translate.translateToZombie('Here is a sentence.');
                expect(translate.translate).toHaveBeenCalledWith('Here is a sentence.','zombie');
            });
        });
        describe('translateToEnglish', function() {
            it('should translate a sentence into english', function() {
                var translation_obj = translate.translateToEnglish('HrrRRrr rrRrs hra srrntrrncrr Bork.');
                expect(translation_obj.translation).
                    toEqual('Here is a sentence.');
                expect(translation_obj.frog).toBeFalsy();
            });
            it('should call the translate function with language = english', function() {
                spyOn(translate,"translate");
                var output = translate.translateToEnglish('HrrRRrr rrRrs hra srrntrrncrr Bork.');
                expect(translate.translate).toHaveBeenCalledWith('HrrRRrr rrRrs hra srrntrrncrr Bork.','english');
            });
        });
    });
});
