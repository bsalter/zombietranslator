# Assignment 1: zombie translator
## Swedish Chef zombie mode

## Warning: do not mention frogs or Kermit to the Swedish Chef zombie.
## The programmer responsible for this translator cannot be held liable for what might happen.

Additional translate rules:
Translates "!" to "Bork Bork Bork!"
Translates "." to "Bork."
Translates "Kermit" or "frog" (case insensitive) to a murderous rage.
 (becomes "KILL FROOOGGY" and changes the view)
 
Expects:
I didn't quite follow the pattern for my implementation of expects, because the individual rules are so simple. I could
 not conceive of three expects for each that did not seem contrived. Instead, I wrote a full suite of tests against
 all translation logic, as well as the controller logic for the app. This resulted in 39 expects, and 33 specs. Rules
 are located in the tests/TranslateSpec & ZombieControllerSpec

1. Expects translate to be an object.
2. Expects translate to translate zombie->english
3. Expects translate to translate english->zombie
4. Expects parameter frog = true if frogs are mentioned
5. Expects parameter frog to be falsy if frogs are not mentioned
6. Expects translate to translate null to null
7. Expects translate to translate undefined to undefined
8. Expects translate to translate a number to that same number
9. Expects translate to translate e or E to rr
10. Expects translate to translate rr back to e
11. Expects translate to translate i or I to rrRr
12. Expects translate to translate rrRr back to i
13. Expects translate to translate o or O to rrrRr
14. Expects translate to translate rrrRr back to o
15. Expects translate to translate u or U to rrrrRr
16. Expects translate to translate rrrrRr back to u
17. Expects translate to translate r or R to RR except at end of word
18. Expects translate to translate RR back to r except at end of word
19. Expects translate to translate a or A by itself to hra
20. Expects translate to translate hra to a
21. Expects translate to translate r at end of word to rh
22. Expects translate to translate rh back to r
23. Expects translate to capitalize the first letter of sentences
24. Expects translate . and ! to Bork and Bork Bork Bork!, respectively
25. Expects translate frog checking rule to return true for frog or Frog or Kermit, false if not
26. Expects translate to call the zombie translate function with language = zombie
27. Expects translate to call the english translate function with language = english
28. Expects zombieController to call translator.translateToZombie when translate to Zombie button clicked
29. Expects zombieController to call translator.translateToZombie with input text when translate to Zombie button clicked
30. Expects zombieController to call translator.translateToEnglish when translate to English button clicked
31. Expects zombieController to call translator.translateToEnglish with input text when translate to English button clicked
 
Known issues:
 1. As was pointed on the discussion board, "u" and "ei" translate to the same thing, which makes it impossible to 
translate them back to English accurately.
 2. I had some trouble translating capital E back to English from zombie, because it crashes into the r rule.
 