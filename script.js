// Part 1: Variables and conditionals
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are underage.");
}

// Part 2: Custom functions
function greetUser(name) {
  return `Hello, ${name}! 👋`;
}

function calculateSum(a, b) {
  return a + b;
}

console.log(greetUser("Emmanuel"));
console.log("Sum:", calculateSum(10, 20));

// Part 3: Loops
let numbers = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
}

// while loop
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// Part 4: DOM interactions
const message = document.getElementById("message");
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const list = document.getElementById("list");

// 1. Change text on button click
changeTextBtn.addEventListener("click", () => {
  message.textContent = "Text changed using DOM! 🎉";
});

// 2. Toggle background color
toggleColorBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 3. Add item to list
addItemBtn.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New list item added!";
  list.appendChild(newItem);
});
