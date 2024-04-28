//given an integer array nums find a subarray that has the largest product and return the product.

function array(nums) {
    if (nums.length === 0) return 0;

    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        }

        maxProduct = Math.max(nums[i], max * nums[i]);
        minProduct = Math.min(nums[i], min * nums[i]);

        result = Math.max(result, max);
    }

    return result;
}

// Example usage:
const nums2 = [2, 3, -2, 4];
console.log(array(nums)); 

//Given an array of integers nums and integer target, returen indices of the two numbers such that they add up to target.
function twoSum(nums, target) {
    const numIndicesMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndicesMap.hasOwnProperty(complement)) {
            return [numIndicesMap[complement], i];
        }
        numIndicesMap[nums[i]] = i;
    }


    return [];
}

// Example:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums2, target)); 


//Reverse each word in a given input string.
function reverseWords(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(" ");

    // Reverse each word in the array
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });

    // Join the reversed words back into a single string
    const reversedString = reversedWords.join(" ");

    return reversedString;
}

// Example:
const inputString = "SAlam I am dijah ";
console.log(reverseWords(inputString)); 



/*Write a JavaScript function to convert an amount into coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
You can return the answer in any order.*/

function amount(amount, coins) {
    const result = [];
    let remainingAmount = a;

    for (const coin of c) {
        while (remainingAmount >= c) {
            result.push(coin);
            remainingAmount -= c;
        }
    }

    return result;
}

// Example:
const amount = 46;
const coins = [25, 10, 5, 2, 1];
console.log(amount(a, c)); 









