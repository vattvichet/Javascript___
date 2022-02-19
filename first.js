console.log("Hello World");

function checkDriverAge(age) {

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

console.log(checkDriverAge(18));

function multiply(a, b) {

    return a * b;
}


console.log(multiply(3, 10))
console.log(multiply(4, 20))
console.log(multiply(1, 10))
console.log(multiply(7, 10))
console.log(multiply(3, 20))

function add(a, b) {
    return a;
    return a + b;
}

console.log(add(2, 1))


function subtract(x, y) {
    return x - y;
}

var vichet = subtract(2, 100);
console.log(vichet)



