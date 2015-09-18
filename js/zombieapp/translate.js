// Translation service for Zombie translator app
define([], function() {
    var Translate = function() {};
    Translate.prototype.translateE = function(text, targetlanguage) {
    // "e" or "E" is replaced by "rr"
    // Translation from zombie->english doesn't handle capital E very well, due to ambiguity with 'r' translation
        text = (targetlanguage === "zombie") ? text.replace(/e/ig, "rr") : text.replace(/rr/g, "e");
        return text;
    };
    Translate.prototype.translateI = function(text, targetlanguage) {
    // "i" or "I" is replaced by "rrRr"
        text = (targetlanguage === "zombie") ? text.replace(/i/ig, "rrRr") : text.replace(/[rR]rRr/g, "i");
        return text;
    };
    Translate.prototype.translateO = function(text, targetlanguage) {
    // "o" or "O" is replaced by "rrrRr"
        text = (targetlanguage === "zombie") ? text.replace(/o/ig, "rrrRr") : text.replace(/[rR]rrRr/g, "o");
        return text;
    };
    Translate.prototype.translateU = function(text, targetlanguage) {
    // "u" or "U" is replaced by "rrrrRr"
        text = (targetlanguage === "zombie") ? text.replace(/u/ig, "rrrrRr") : text.replace(/[rR]rrrRr/g, "u");
        return text;
    };
    Translate.prototype.translateR = function(text, targetlanguage) {
    // "r" or "R' is replaced by "RR"
        text = (targetlanguage === "zombie") ? text.replace(/r(\S)/ig, "RR$1") : text.replace(/RR/g, "r");
        return text;
    };
    Translate.prototype.translateA = function(text, targetlanguage) {
    // an "a" or "A" by itself will be replaced with "hra".
        text = (targetlanguage === "zombie") ? text.replace(/\sa\s/ig, " hra ") : text.replace(/\shra\s/g, " a ");
        return text;
    };
    Translate.prototype.translateendR = function(text, targetlanguage) {
    // lower-case "r" at the end of words replaced with "rh".
        text = (targetlanguage === "zombie") ? text.replace(/r([.?!\s])/g, "rh$1") : text.replace(/rh([.?!\s])/g, "r$1");
        // there might be a better way to do this, but I couldn't find one - $ doesn't match end of string in []
        text = (targetlanguage === "zombie") ? text.replace(/r$/g, "rh") : text.replace(/rh$/ig, "r");
        return text;
    };
    Translate.prototype.translateCapitalize = function(text) {
    // the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    // ".!?", followed by a space, followed by a letter.) Also, first word of input text.
        text = text.replace(/[.!?]\s\S/g, function(capitalize) { return capitalize.toUpperCase(); });
        text = text.replace(/^\S/g, function(capitalize) { return capitalize.toUpperCase(); });
        return text;
    };

    Translate.prototype.translateBork = function(text, targetlanguage) {
    // These are Swedish Chef zombies.
    // A word character followed by . is translated into "Bork."
    // A word character followed by ! is translated into "Bork Bork Bork!"
        text = (targetlanguage === "zombie") ? text.replace(/([a-zA-Z])\./g, "$1Bork.") : text.replace(/Bork\./g, ".");
        text = (targetlanguage === "zombie") ? text.replace(/([a-zA-Z])\!/g, "$1Bork Bork Bork!") : text.replace(/Bork Bork Bork\!/g, "!");
        return text;
    };

    Translate.prototype.translateFrog = function(text) {
    // The Swedish Chef zombies hate Kermit, and any mention of Kermit (capital K) or frogs throws them into
    // a murderous rage and temporarily reverts their language back to original Swedish Chef
        return(text.match(/frog/ig) || text.match(/Kermit/g));
    };

    Translate.prototype.translateToZombie = function(text) {
        return this.translate(text, "zombie")
    };

    Translate.prototype.translateToEnglish = function(text) {
        return this.translate(text, "english")
    };

    Translate.prototype.translate = function(text, language) {
        if(this.translateFrog(text)) {
            return { translation: "KILL FROOOGGY",
                     frog: true };
        }
        if(language === "zombie") {
            text = this.translateR(text, language);
        } else if (language === "english") {
            text = this.translateBork(text, language);
        }
        text = this.translateendR(text, language);
        text = this.translateU(text, language);
        text = this.translateO(text, language);
        text = this.translateI(text, language);
        text = this.translateE(text, language);
        text = this.translateA(text, language);
        text = this.translateCapitalize(text);
        if(language === "english") {
            text = this.translateR(text, language);
        } else if(language === "zombie") {
            text = this.translateBork(text, language);
        }
        return { translation: text,
                 frog: false };
    };
    return Translate;
    }
);
