function isOdd(n) {
    if(n < 0) {
        n = -n 
        // check negative numbers
    } 

    return n % 2 !== 0
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("-8 is odd: " + isOdd(-8));

