function getSmallestNum(...nums) {
    console.log(nums.sort((a, b) => a - b).shift());
}