let openBoxes = [1,2,3,4,5,6,7,8,9];
let randomBoxPicker = Math.floor(Math.random() * openBoxes.length);

let selectedItem = openBoxes[randomBoxPicker]; // Get the selected item
openBoxes.splice(randomBoxPicker, 1); // Remove the selected item from the array

console.log("Selected Item:", selectedItem);
console.log("Remaining Items:", openBoxes);