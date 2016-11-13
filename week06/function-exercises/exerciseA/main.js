// This code is INCOMPLETE, meaning some things will need massaging and some things are missing.
// Adjust code appropriately to solve the problems listed.

var customerName;
var numPizzas;
var subTotal;
var total;
var hasDiscount = false; // Hint for prompts
var userEnteredCode;

// By convention, these variables represent CONSTANTS (unchanging values)
var DISCOUNTCODE = "ChicagoStyleNumberOne";
var DISCOUNTRATE = 10;
var PRICEPIZZA = 15;
// Set the flat rate per pizza

var customerName = prompt('What is your name?'); {
    console.log(customerName);
}
numPizzas = prompt('How many pizzas?'); {
    console.log(numPizzas);
}
numPizzas = Number(numPizzas);

var discountResponce = prompt('Do you have a discount code?, Yes or No?');
if (discountResponce === "Yes") {
    hasDiscount = true;
} else {
    hasDiscount = false;
}

if (hasDiscount) {
    userEnteredCode = prompt("What is the code?");
}


/* prompt for the following: 1) number of pizzas in order, 2) Whether they have a discount, 3) The discount code (if they indicated they have one.) */


/* Write 4 functions: */
function checkDiscountcode(code) {
    if (DISCOUNTCODE === code) {
        hasDiscount = true;
				alert("Success!");
    } else {
			hasDiscount = false;
        alert("Code Invalid");
    }
}
checkDiscountcode (userEnteredCode);
// Function that checks if the discount code the user gives matches the known discount code. Does not return anything but will set the has discount state to true if it matches. It will alert the user whether the code worked or not.
function subTotal(amount) {
    var subTotal = numPizzas * PRICEPIZZA - DISCOUNTRATE;
    return subTotal;
}
// Function that calculates subtotal based on number of pizzas, flat rate per pizza, and discount. It should return a number.
function total(cost) {
    var total = subtotal * '.08';
    return total;
}
// Function that calculates the total based on subtotal and tax rate. It should return a number;
function reciept(name, numPizzas, subtotal, total, discount) {
    console.log(customerName + numPizzas + hasDiscount + subTotal + total);
}
// Function that writes a reciept with user information, pizza order info, including prices, discount, etc. Does not return anything but will output to the console.

/* Call functions in correct sequence and utilize them to create a "receipt" for the order in the console. */

//
// customerName();
// numPizzas();
// subtotal();
// total();



// This function will write the following message to the <pre> element in HTML. New lines are indicated by \n
function writeToPre(text) {
    document.getElementById('info').innerHTML = text;
}
var message = "Hello, Jin.\nYour order is pending this program.";
writeToPre(message);

// Can you transform your code so that instead of to the console, it writes to the webpage?
