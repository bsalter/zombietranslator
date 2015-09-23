# Assignment 1: zombie translator
## Swedish Chef zombie mode

## Warning: do not mention frogs or Kermit to the Swedish Chef zombie.
## The programmer responsible for this translator cannot be held liable for what might happen.

Additional translate rules:
Translates "!" to "Bork Bork Bork!"
Translates "." to "Bork."
Translates "Kermit" or "frog" (case insensitive) to a murderous rage.
 (becomes "KILL FROOOGGY" and changes the view)
 
Jasmine:
I didn't quite follow the pattern for my implementation of expects, because the individual rules are so simple. I could
 not conceive of three expects for each that did not seem contrived. Instead, I wrote a full suite of tests against
 all translation logic, as well as the controller logic for the app. This resulted in 39 expects, and 33 specs. Rules
 are located in the tests/TranslateSpec & ZombieControllerSpec.

* Expects translate to be an object.
* Expects translate to translate zombie->english
* Expects translate to translate english->zombie
* Expects parameter frog = true if frogs are mentioned
* Expects parameter frog to be falsy if frogs are not mentioned
* Expects translate to translate null to null
* Expects translate to translate undefined to undefined
* Expects translate to translate a number to that same number
* Expects translate to translate e or E to rr
* Expects translate to translate rr back to e
* Expects translate to translate i or I to rrRr
* Expects translate to translate rrRr back to i
* Expects translate to translate o or O to rrrRr
* Expects translate to translate rrrRr back to o
* Expects translate to translate u or U to rrrrRr
* Expects translate to translate rrrrRr back to u
* Expects translate to translate r or R to RR except at end of word
* Expects translate to translate RR back to r except at end of word
* Expects translate to translate a or A to hra
* Expects translate to translate hra to a
* Expects translate to translate r at end of word to rh
* Expects translate to translate rh back to r
* Expects translate to capitalize the first letter of sentences
* Expects translate . and ! to Bork and Bork Bork Bork!, respectively
* Expects translate frog checking rule to return true for frog or Frog or Kermit, false if not
* Expects translate to call the zombie translate function with language = zombie
* Expects translate to call the english translate function with language = english
* Expects zombieController to call translator.translateToZombie when translate to Zombie button clicked
* Expects zombieController to call translator.translateToZombie with input text when translate to Zombie button clicked
* Expects zombieController to call translator.translateToEnglish when translate to English button clicked
* Expects zombieController to call translator.translateToEnglish with input text when translate to English button clicked
* I also added all of the example translation rules on the assignment page
 
Known issues:

* As was pointed on the discussion board, "u" and "ei" translate to the same thing, which makes it impossible to 
translate them back to English accurately.
* I had some trouble translating capital E back to English from zombie, because it crashes into the r rule.
 