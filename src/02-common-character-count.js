/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let countSymbol = 0;
  const str1 = s1.toLowerCase();
  let str2 = s2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    // for (let j = 0; j < str2.length; j++) {
    if (str2.includes(str1[i])) {
      countSymbol++;
      str2 = str2.replace(str1[i], '');
    }
    // }
  }
  return countSymbol;
}
module.exports = getCommonCharacterCount;
