define([], function() {
    var translate = function() {};
    translate.prototype.translateE = function(text, targetlanguage) {
    // "e" or "E" is replaced by "rr"
    // Translation from zombie->english doesn't handle capital E very well, due to ambiguity with 'r' translation
        text = (targetlanguage === "zombie") ? text = text.replace(/e/ig, "rr") : text = text.replace(/rr/g, "e");
        return text;
    };
    translate.prototype.translateI = function(text, targetlanguage) {
    // "i" or "I" is replaced by "rrRr"
        text = (targetlanguage === "zombie") ? text = text.replace(/i/ig, "rrRr") : text = text.replace(/[rR]rRr/g, "i");
        return text;
    };
    translate.prototype.translateO = function(text, targetlanguage) {
    // "o" or "O" is replaced by "rrrRr"
        text = (targetlanguage === "zombie") ? text = text.replace(/o/ig, "rrrRr") : text = text.replace(/[rR]rrRr/g, "o");
        return text;
    };
    translate.prototype.translateU = function(text, targetlanguage) {
    // "u" or "U" is replaced by "rrrrRr"
        text = (targetlanguage === "zombie") ? text = text.replace(/u/ig, "rrrrRr") : text = text.replace(/[rR]rrrRr/g, "u");
        return text;
    };
    translate.prototype.translateR = function(text, targetlanguage) {
    // "r" or "R' is replaced by "RR"
        text = (targetlanguage === "zombie") ? text = text.replace(/r(\S)/ig, "RR$1") : text = text.replace(/RR/g, "r");
        return text;
    };
    translate.prototype.translateA = function(text, targetlanguage) {
    // an "a" or "A" by itself will be replaced with "hra".
        text = (targetlanguage === "zombie") ? text = text.replace(/\sa\s/ig, "hra") : text = text.replace(/\shra\s/g, "a");
        return text;
    };
    translate.prototype.translateendR = function(text, targetlanguage) {
    // lower-case "r" at the end of words replaced with "rh".
        text = (targetlanguage === "zombie") ? text = text.replace(/r([.?!\s])/g, "rh$1") : text = text.replace(/rh([.?!\s])/g, "r$1");
        // there might be a better way to do this, but I couldn't find one - $ doesn't match end of string in []
        text = (targetlanguage === "zombie") ? text = text.replace(/r$/g, "rh") : text = text.replace(/rh$/ig, "r");
        return text;
    };
    translate.prototype.translateCapitalize = function(text) {
    // the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    // ".!?", followed by a space, followed by a letter.) Also, first word of input text.
        text = text.replace(/[.!?]\s\S/g, function(capitalize) { return capitalize.toUpperCase(); });
        text = text.replace(/^\S/g, function(capitalize) { return capitalize.toUpperCase(); });
        return text;
    };

    translate.prototype.translateToZombie = function(text) {
        return this.translate(text, "zombie")
    };

    translate.prototype.translateToEnglish = function(text) {
        return this.translate(text, "english")
    };
    translate.prototype.translate = function(text, language) {
        if(language === "zombie") {
            text = this.translateR(text, language);
        }
        text = this.translateendR(text,language);
        text = this.translateU(text,language);
        text = this.translateO(text,language);
        text = this.translateI(text,language);
        text = this.translateE(text, language);
        text = this.translateA(text,language);
        text = this.translateCapitalize(text);
        if(language === "english") {
            text = this.translateR(text, language);
        }
        return text;
    };
    return translate;
    }
);
