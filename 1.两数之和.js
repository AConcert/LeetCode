/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

/* 两层循环枚举，时间 O(n²)，空间 O(1)
var twoSum = function (nums, target) {
    const len = nums.length
    for (let i = 0; i < len; i++) {
      const val = nums[i];
      for (let j = i + 1; j < len; j++) {
        if (val + nums[j] === target) {
          return [i, j]
        }
        }
    }
    return []
}; */

/* 使用 Hash ，时间 O(n)，空间 O(n)
var twoSum = function(nums, target) {
    let hash = [];
    for( let i = 0; i < nums.length; i++){
        let index = hash.indexOf(nums[i])
        if( index < 0) {
            hash.push(target - nums[i])
        } else {
            return [index, i]
        }
    }
    return []
}; */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = [];
    for( let i = 0; i < nums.length; i++){
        let index = hash.indexOf(nums[i])
        if( index < 0) {
            hash.push(target - nums[i])
        } else {
            return [index, i]
        }
    }
    return []
};
// twoSum([2,7,11,15],9)
// @lc code=end

