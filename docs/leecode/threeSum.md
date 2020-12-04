---
title: 【leecode 中等】三数之和
date: 2020-12-01
categories:
 - leecode
tags:
 - leecode
---
一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
答案中不可以包含重复的三元组。
```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let twoSum = function(nums, target) {
  let map = new Map()
  let results = []
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let result = map.get(target - num)
    if (result !== undefined) {
      results.push([nums[result], num])
    }
    map.set(num, i)
  }
  return results
}

let threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let set = new Set()
  let results = []
  for (let i = 0; i < nums.length - 2; i++) {
    let find = twoSum(nums.slice(i + 1), -nums[i])
    if (find) {
      find.forEach((arr) => {
        if (!set.has(arr.join(''))) {
          results.push([nums[i], ...arr])
        }
        set.add(arr.join(''))
      })
    }
  }
  return results
}
console.log(threeSum([-1,0,1,2,-1,-4]))
/**
 * 利用两数之和的变形来求解，循环判断第三个数的负数是否能和另外两个数相加得到。
 */
```
