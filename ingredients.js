var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Using a while loop: ")
var i = 0
while (i <= ingredients.length -1 ) {
    console.log(ingredients[i]);
    i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nUsing a for loop: ")
for(var count = 0; count <= ingredients.length - 1; count++) {
    console.log(ingredients[count]);
} 

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nUsing a for loop backwards: ")
for(var counter = ingredients.length - 1; counter >= 0; counter--) {
    console.log(ingredients[counter]);
}