let openBoxes = [1,2,3,4,5,6,7,8,9];

let index = openBoxes.indexOf(1);
if(index != -1) {
    openBoxes.splice(index, 1); // remove 1 element from index 
}
console.log(openBoxes);
index = openBoxes.indexOf(2);
if(index != -1) {
    openBoxes.splice(index, 1); // remove 1 element from index 
}
console.log(openBoxes);
