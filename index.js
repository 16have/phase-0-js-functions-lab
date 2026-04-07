// Function to calculate tax
function calculateTax(amount) {
    return amount * (10 / 100);
}
function convertToUpperCase(str) {    return str.toUpperCase();
}   
// Function to find the maximum of two numbers
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
// Function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };