// 1 Add 2 numbers together! (just type console.log(23 + 97) into your html file)
// 2 Add a sequence of 6 different numbers together.
// 3 Print the solution to the following equation: (4 + 6 + 9) / 77
// 4 Answer should be approximately 0.24675
// 5 Let’s use variables!
// 6 Type the following at the top of the script tag: let a = 10
// 7 console.log(a) should print 10
// 8 Try the following: 9 * a
// 9 and this: let b = 7 * a (returns undefined *) and then console.log(b)
// 10 You should be getting the hang of this by now… try this sequence:
// 11 Declare a constant variable max with the value 57
// 12 Set another variable actual to max - 13
// 13 Set another variable percentage to actual / max
// 14 If you type percentage in the console and press enter you should see a value like 0.7719
// 15 Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.
// 16 * As you might have noticed by running Javascript code in the console, the console prints the result of the code it executes (called a return statement). You will learn more about these in the next lessons, however for now it is good to remember that an assignment (such as b = 7 * a) returns undefined and so you cannot assign a value to a variable and read its value in the same line.`

let myDiv = document.getElementById("test");
let myHeader = document.createElement("h1");
let myMod = 475 / Math.floor(67 % 17);

// myHeader.textContent = Math.floor(myMod);

// myDiv.appendChild(myHeader);

// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;
// const itsOk = '"it\'s ok."';

// myHeader.textContent = `he said, ${itsOk}`;

// myDiv.appendChild(myHeader);

// const button = document.createElement("button");
// button.textContent = "click me!";
// myDiv.appendChild(button);

// let greet = function () {
//   const name = prompt("tell me your name child.");
//   alert(`the transaction is done ${name}`);
// };

// button.addEventListener("click", greet);

// const myString = 123;
// const myNum = toString(myString);
// console.log(typeof myNum);

// let askAge = function(){
//     let age = prompt('Hello!  What is your age?');
//      (age < 18) ? answer = 'you are yet young!': (age > 18 && age < 21) ? answer = 'Care for a smoke?': (age > 21) ? answer = 'Fancy a drink?': 'you must be a fool';
//     alert(answer);
// };

// askAge();

// const n1 = {
//   data: 100
// }

// const n2 = {
//   data: 200
// }

// n1.next = n2;

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// const n3 = new Node(300);
// n1.next = n3

// console.log(n1);

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Insert First Node
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }
//   // Insert Last node
//   insertLast(data) {
//     let node = new Node(data);
//     let current;
//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.size++;
//   }

//   // Insert at index
//   insertAtIndex(data, index) {
//     if (index > 0 && index > this.size) {
//       return;
//     }

//     if (index === 0) {
//       this.head = new Node(data, this.head);
//       return;
//     }

//     const node = new Node(data);
//     let current, previous;
//     current = this.head;
//     let count = 0;

//     while (count < index) {
//       previous = current;
//       count++;
//       current = current.next;
//     }
//     node.next = current;
//     previous.next = node;
//     this.size++;
//   }

//   // Get at index
//   getAt(index) {
//     let current = this.head;
//     let count = 0;

//     while (current) {
//       if (count === index) {
//         console.log(current.data);
//       }
//       count++;
//       current = current.next;
//     }
//     return null;
//   }
//   // Remove at index
//   removeAt(index) {
//     if (index > 0 && index > this.length) {
//       return;
//     }

//     let current = this.head;
//     let previous;
//     let counter = 0;

//     if (index === 0) {
//       this.head = current.next;
//     } else {
//       while (counter < index) {
//         counter++;
//         previous = current;
//         current = current.next;
//       }
//       previous.next = current.next;
//     }
//     this.size--;
//   }

//   // Clear list

//   // Print list data
//   printListData() {
//     let current = this.head;

//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(50);
// ll.insertFirst(25);
// ll.insertLast(125);
// ll.insertLast(150);
// ll.insertAtIndex(130, 3);
// ll.insertAtIndex(20, 0);
// ll.insertAtIndex(765, 19);
// ll.removeAt(4);
// ll.printListData();



/* Some rules first:
*   Enter the operations, replacing the `"?"`, make the computer do the work for you. 
*   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
* 
* a = one plus eight
* b = 22 times three
* c = the *remainder* of 5/4
* d = the variable 'a' minus 17
* e = the sum of the previous four variables
*/

// const a = 1 + 8;
// const b = 22 * 3;
// const c = Math.floor(5 / 4);
// const d = a - 17;
// const e = a + b + c + d;

// // module.exports = {a, b, c, d, e}
 
// console.log(a, b, c ,d ,e);

let areGams =function(){
  let theQuestion = prompt('Are you the gams?')
  if(theQuestion === 'yes'){
    alert('Nice to meet you!')
  } else {
    alert('be gone!')
  }
}

areGams();
