function solve(...nums) {
    console.log(subtract(sum(nums[0], nums[1]), nums[2]));

    function sum(...args) {
        let result = 0;
        args.forEach(n => {
            result += n;
        });
        return result;
    }
    
    function subtract(num1, num2) {
        return num1 - num2;
    }
}