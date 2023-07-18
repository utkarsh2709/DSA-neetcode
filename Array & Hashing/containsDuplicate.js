var containsDuplicate = function(nums) {
    const tempSet = new Set(nums);
    return nums.length !== tempSet.size;
};