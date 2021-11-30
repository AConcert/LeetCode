/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const str = s.trim(s);
    let arr = str.split(' ');
    arrtemp = arr.filter(item => item !== '')
    return arrtemp.reverse().join(' ')

};
reverseWords("  Bob    Loves  Alice   ")
// @lc code=end

