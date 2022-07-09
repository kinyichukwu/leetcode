//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

var twoSum = function(nums, target) {
//     nums is an array
    let hashMap = {}
    for(i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(complement in hashMap) {
            return [i, hashMap[complement]]
        }
        hashMap[nums[i]] = i;
    }
};
