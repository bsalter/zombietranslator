define([], function() {
    var translate = function() {};
    translate.prototype.translateE = function(text, targetlanguage) {
    // 4. "e" or "E" is replaced by "rr"
        text = (targetlanguage === "zombie") ? text = text.replace(/e/ig, "rr") : text = text.replace(/rr/ig, "e");
        return text;
    };
    translate.prototype.translateI = function(text, targetlanguage) {
    // 5. "i" or "I" is replaced by "rrRr"
        text = (targetlanguage === "zombie") ? text = text.replace(/i/ig, "rrRr") : text = text.replace(/rrRr/ig, "i");
        return text;
    };
    translate.prototype.translateO = function(text, targetlanguage) {
    // 6. "o" or "O" is replaced by "rrrRr"
        text = (targetlanguage === "zombie") ? text = text.replace(/o/ig, "rrrRr") : text = text.replace(/rrrRr/ig, "o");
        return text;
    };
    translate.prototype.translateU = function(text, targetlanguage) {
    // 7. "u" or "U" is replaced by "rrrrRr"
        text = (targetlanguage === "zombie") ? text = text.replace(/u/ig, "rrrrRr") : text = text.replace(/rrrrRr/ig, "u");
        return text;
    };
    translate.prototype.translateR = function(text, targetlanguage) {
    // 8. "r" or "R' is replaced by "RR"
        text = (targetlanguage === "zombie") ? text = text.replace(/r(\S)/ig, "RR$1") : text = text.replace(/RR/ig, "r");
        return text;
    };
    translate.prototype.translateA = function(text, targetlanguage) {
    // 2. an "a" or "A" by itself will be replaced with "hra".
        text = (targetlanguage === "zombie") ? text = text.replace(/\sa\s/ig, "hra") : text = text.replace(/\shra\s/ig, "a");
        return text;
    };
    translate.prototype.translateendR = function(text, targetlanguage) {
    // 1. lower-case "r" at the end of words replaced with "rh".
        text = (targetlanguage === "zombie") ? text = text.replace(/r([.?!\s])/g, "rh$1") : text = text.replace(/rh([.?!\s])/ig, "r$1");
        // there might be a better way to do this, but I couldn't find one - $ doesn't match end of string in []
        text = (targetlanguage === "zombie") ? text = text.replace(/r$/g, "rh") : text = text.replace(/rh$/ig, "r");
        return text;
    };
    translate.prototype.translateCapitalize = function(text) {
    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    //   ".!?", followed by a space, followed by a letter.) Also, first word of input text.
        text = text.replace(/[.!?]\s\S/g, function(capitalize) { return capitalize.toUpperCase(); });
        text = text.replace(/^\S/g, function(capitalize) { return capitalize.toUpperCase(); });
        return text;
    };

    translate.prototype.translateToZombie = function(text) {
        var outputtext = "";
        outputtext = this.translateR(text,"zombie");
        outputtext = this.translateendR(outputtext,"zombie");
        outputtext = this.translateE(outputtext,"zombie");
        outputtext = this.translateI(outputtext,"zombie");
        outputtext = this.translateO(outputtext,"zombie");
        outputtext = this.translateU(outputtext,"zombie");
        outputtext = this.translateA(outputtext,"zombie");
        outputtext = this.translateCapitalize(outputtext);
        return outputtext;
    };
    translate.prototype.translateToEnglish = function(text) {

    };
    return translate;
    }
);
