/*
Character Removal Challenge

You are given an array strArr containing two elements. 
The first element is a word made up of a sequence of characters, and the second element is a long string consisting of comma-separated words, sorted alphabetically.
 This second element serves as a dictionary. Your task is to determine the minimum number of characters you can remove from the word in order to match one of the words from the dictionary. 
 If it's impossible to form any dictionary word by removing characters, return -1.

For example, if the input is ["coder", "apple,bat,cat,code,coder,hello"],
you should return 1 because by removing the "r", you are left with the word "code," which exists in the dictionary.

Example 1: 
["opendiscussion", "close,discuss,discussion,open,side,slide"]

Output:

4

Explanation:
You can remove the characters "o", "p", "e", "n" from "opendiscussion" to form "discussion," 
which matches a word in the dictionary. So, the function returns 4, since four characters are removed.

Example 2:
["gizmo", "bat,cat,dog,elf,hat,jam"]

Output: 
-1

There’s no way to remove characters from "gizmo" to match any word in the dictionary, so the function returns -1.

*/

function CharacterRemoval(strArr) {}

module.exports = CharacterRemoval;
