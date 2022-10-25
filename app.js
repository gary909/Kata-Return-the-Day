function whatday(num) {
    let myArr = ["null", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (num <= 0 || num > 7) {
        return 'Wrong, please enter a number between 1 and 7';
    } else {
        return myArr[num];
    }
}

console.log(whatday(1)); // "Sunday"
console.log(whatday(2)); // 'Monday'
console.log(whatday(3)); // 'Tuesday'
console.log(whatday(8)); // 'Wrong, please enter a number between 1 and 7'
console.log(whatday(20)); // 'Wrong, please enter a number between 1 and 7'

