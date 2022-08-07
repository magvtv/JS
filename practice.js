const prompt = require('prompt-sync')();

<<<<<<< HEAD


// String indexing 
// String templates
// let input1 = prompt("Hello there. What is your first name? ");
// let input2 = prompt("How about your second name? ")

// console.log(`Hello there ${input1} ${input2}`);


/*  Average of 2 CATS, 1 exam and 3 assingments.
    CATS out of 20, Assignments out of 10, Exam out of 70. 
    Grading system with if else loop. 
    Display the transcript of the students performanece in all tests. 
    Accuracy of 2 decimal places.
*/


// function avCATS(a, b) {
//     if ((a <= 20) && (b <= 20)) {
//         let c = a + b;
//         return (c * 0.5);
//     }
//     else if ((a > 20) || (b > 20)) {
//         console.log("One of your CAT scores is above the total marks.")
//     }
// }

// function avAssignment(a, b, c) {
//     if (a < 10 && b < 10 && c < 10) {
//         return ((a + b + c) / 3);
//     }
//     else if ((a > 10) || (b > 10) || (c > 10))
//         console.log("One of your assignment marks is above the total marks ");
// }

// function exam(b) {
//     let examInput = prompt("Enter exam score: ");
//     let f = f.parse(examInput)
// }

// let e = avAssignment(7, 9, 1);
// console.log(e)

/*
    I want to print out a statement in the terminal. Using a for loop
 */

// let snacks = []
// repeat(11, x => {
//     snacks.push(`Snack ${x + 1}`);

// });
// console.log(snacks);

// let counter = 0;
// let stmnt = "PH feels like the chosen one"

// for (let i = 100; i > counter; counter++) {
//     console.log(stmnt);
// }

// Another way to present that can be as follows
// function repeat(n, action) {
//     for (let x = 0; x < n; x++) {
//         action(x);
//     }
// }

// function rptLog(n) {
//     for (let x = 0; x < n; x++) {
//         console.log(stmnt)
//     }
// }

// repeat(5, console.log)


// Summing up numbers from user each time. Use of while loop.
// let sum = 0
// let num = parseInt(prompt("Enter your number: "));
// while ((num >= 0)) {
//     sum += num;
//     num = parseInt(prompt("Enter your number: "));
// }

// console.log(`Sum: ${sum}`);




=======
>>>>>>> ZRW crash
// function checkVowel() {
//     const prompt = require('prompt-sync')();
//     const userInput = prompt("Enter words: ");

//     let words = userInput.length;
//     for (let i = 0; i < words; i++) {
//         if ((words[i] == 'A' || words[i] == 'a') && (words[i] == 'E' || words[i] == 'e') && (words[i] == 'I' || words[i] == 'i') && (words[i] == 'O' || words[i] == 'o') && (words[i] == 'U' || words[i] == 'u')) {
//             var totalVowels = 0;
//             totalVowels++;
//             console.log(totalVowels)
//         }
//     }
// }

// checkVowel();


<<<<<<< HEAD

/*  
    Set sum to zero
    Set init to one
    Enter a loop
    Set compare to init (zero to new var)
    Subtract 11 from compare
    If compare is zero, continue to end of loop. That means compare = zero, then it has reached 11. At this point it should stop.
    Else, add init to sum (1 + 2 + 3 + 4 + 5 + 6...)
    Add one to init (incrementing the number from 1 till 11)
    End loop
    Print the total 
*/
=======
// Set sum to zero
// Set init to one
// Enter a loop
// Set compare to init (zero to new var)
// Subtract 11 from compare
// If compare is zero, continue to end of loop. That means compare = zero, then it has reached 11. At this point it should stop. 
// Else, add init to sum (1 + 2 + 3 + 4 + 5 + 6...)
// Add one to init (incrementing the number from 1 till 11)
// End loop
// Print the total
>>>>>>> ZRW crash

// 1. Values, Types & Operators
// What are unary operators? Using the typeof operator you can tell the unary operator. Unary means one
// Automatic conversion in JS. Also called type coercion. Converting from string to number quietly. 
// The "===" is used to prevent the automatic conversion. Use it defensively.
// Meaning of short circuiting a logical operator means  
// Name the undefined values used in JS: Nan, null, true, false, Infinity



// 2. Program Structure

// Binding is simply assigning values to variables
// A collection of bindings at a certain time is called an environment
// During program start up, the environment is not empty. Always contains bindings that interact with the surrounding system. 
// Return values means that the function has returned a value.  

// Exercises
// a) Creating a program that can detect which theme to put criteria being 0 -100 brighness
// Range of 0 - 40 brightness should be light mode, brightness of 41 -100 is dark mode

// b) Creating a number guessing game. Both CPU and User should be able to play. Leverage the use of Random to make the game interesting.




// let num = Number(prompt("Enter your favourite number: "));

// if (!Number.isNaN(num)) {
//     console.log(`Your favourite number is the square root of ${num * num}`);
// } else {
//     console.log("Enter a number please!");
// }


// c) Showing the decreasing order of numbers by 10 from 100
// let num = 100;
// while (num >= 0) {
//     console.log(num);
//     num -= 10;
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// e) Checking if a number is odd or is even 

// let favNum = Number(prompt("Enter number: "))
// if (favNum % 2 == 0) {
// console.log("Your number is even");
// } else {
// console.log("Your number is odd");
// }

// f) Checking if a number is a prime number 
// A prime number is a number that can only be divided by one and itself

// let primeNum = Number(prompt("Enter a number: "))
<<<<<<< HEAD
// if ((primeNum % 1 == 0) && (primeNum));
=======
// if ((primeNum % 1 == 0) && (primeNum))
>>>>>>> ZRW crash

// g) Checking the divisibility of a number- rhte  between 1 to 110
// let favNum = Number(prompt("Enter a divisible number (1 -10): "))
// let bigNum = Number(prompt("Enter number to check divisibility with above number: "))

// if (bigNum % favNum == 0) {
//     console.log(`${bigNum} is divisble by ${favNum}`);
// } else {
//     console.log(`${bigNum} is not divisble by ${favNum}`);
// }


// h) Simple arithmetic calculator using switch statements

// const numA = Number(prompt("Enter first number: "));
// const numB = Number(prompt("Enter second number: "));


// switch (prompt("Enter operation sign [+, -, x, /, ^]: ")) {
//     case "+":
//         console.log(`Answer: ${numA + numB}`);
//         break;
//     case '-':
//         console.log(`Answer: ${numA - numB}`);
//         break;
//     case 'x':
//         console.log(`Answer: ${numA * numB}`);
//         break;
//     case '/':
//         console.log(`Answer: ${numA / numB}`);
//         break;
//     case '^':
//         const pwr = function (x, y) {
//             let ans = 1;
//             for (let track = 0; track < y; track = track + 1) {
//                 ans = ans * x;
//             }
//             return ans;
//         };
//         console.log(pwr(`${numA}, ${numB}`));
//         break;
//     default:
//         console.log("Unknown operation sign");
//         break;
// }


// i) Forming a right angle triangle with hashes facing both left and right.
// nested loop, printing one line with one hash the next with two, three
// Think of it in a x (rows) y(columns) axis, height of triangle = y, number of hashes = x. 
// Height = number of hashes on the last line.
// Outer loop deals with the rows (updates using the user input)
// Inner loop deals with the columns  


// const h = Number(prompt("Enter height of triangle: "));
// 
// let y, x;
// 
// for (x = 0; x <= h; x += 1) {
<<<<<<< HEAD
// for (y = 0; y < x + 1; y += 1) {
// console.log("# ");
// }
// console.log("\n");
=======
    // for (y = 0; y < x + 1; y += 1) {
        // console.log("# ");
    // }
    // console.log("\n");
>>>>>>> ZRW crash
// }



// j) Fizzbuzz from 1 to 100; 30, 60, 90 -> FizzBuzz


// for (let num = 1; num <= 100; num += 1) {
<<<<<<< HEAD
// if (num % 3 == 0 && num % 5 == 0) {
// console.log("FizzBuzz");
// } else if (num % 3 == 0) {
// console.log("Fizz")
// } else if (num % 5 == 0) {
// console.log("Buzz")
// }  else {
// console.log(num);
// }
// }




=======
    // if (num % 3 == 0 && num % 5 == 0) {
        // console.log("FizzBuzz");
    // } else if (num % 3 == 0) {
        // console.log("Fizz")
    // } else if (num % 5 == 0) {
        // console.log("Buzz")
    // }  else {
        // console.log(num);
    // }
// }


>>>>>>> ZRW crash
// 3. Functions

// a) Program that can greet someone, ask them about there day - what they have eaten (which meal did they enjoy today breakfast, lunch, supper), tell them about my day, ask them their hobby, bye - alert them that I am sleepy + It has been nice to hear from them + see you tomorrow.

// Thinking of a recursive function for this but I have to change the function input everytime I call the function.
// Try using the arrow function feature

<<<<<<< HEAD
// function bye() {
//     let y = 4;
//     for (let x = 0; x < y; x++) {
//         setTimeout((console.log("Big Yawns!")));
//     }

//     function bye1() {
//         (console.log("Look at me yawning 😫. I really feel a bit tired today.")); 
//     }

//     function bye2() {
//         console.log(`Well ${usr}, you have made my day even better. It's been a pleasure to hear from you.`)
//     }

//     function bye3() {
//         console.log(`See you tomorrow ${usr}. Bye. Don\'t\ miss me too much :)`)
//     }
//     setTimeout(bye1, 2000);
//     setTimeout(bye2, 1000);
//     setTimeout(bye3, 2000);
// }


// function aboutHobby(hobby) {
//     if (hobby == "yes") {
//         let favHb = String(prompt("Which is >> "));
//         console.log(`That so amazing. I would love to see you ${favHb.toLowerCase()} one day.`);
//         console.log("With me hahaha");
//     } else if (hobby == "no") {
//         console.log(`You ain\'t\ serious. How ${usr}? How?.`);
//         console.log("I will gladly share my love for swimming with you");
//     } else {
//         console.log("Ok, remember I asked '\ Do you.\' Should have said yes or no.");
//         console.log(`But that\'s\ fine. I think ${hobby} is fun.\n`);
//     }
//     bye();
// }


// function aboutMyMeal(myfood) {
//     if (myfood == "breakfast") {
//         console.log("Quite close. It used to be. I mean still can be, depends on my day.");
//         console.log("Lunch was my favourite meal today.")
//     }
//     else if (myfood == "lunch") {
//         console.log("Yes. Hey wait, who told you? You cannot be that lucky ;)");
//         // Thinking of getting this going.
//     }
//     else if (myfood == "supper") {
//         console.log(`I like your guess ${usr}. I would have guessed from there too. But it\'s\ lunch.`);
//     } else {
//         console.log(`Is that a meal? For real, ${myfood}? Not yet heard of it then. Guess ${myfood} is a food. A food can still be a meal, you know...`)
//     }

//     let haveHb = String(prompt("Do you have a favourite hobby? ")).toLowerCase();
//     aboutHobby(haveHb);

// }

// const aboutYourMeal = (meal) => {
//     if (meal == "breakfast") {
//         console.log("Exactly what I thought you'd say! Breaking your overnight fast, hahaha");
//     }
//     else if (meal == "lunch") {
//         console.log("Sweet. Having more energy during the day does get you going.");
//     }
//     else if (meal == "supper") {
//         console.log(`Oh wow! I bet many people will be on the ${usr} team on that one.`);

//         let belief1 = String(prompt(("Do you think supper helps you get better sleep 😴? ")).toLowerCase());
//         if (belief1 == "yes") {
//             console.log("Aha! Cool.");
//         } else if (belief1 == "no") {
//             console.log("Hhmm... No. Okay. I can\'t\ answer that myself. Maybe I check it out sometime.");
//         } else {
//             let belief2 = String(prompt(`I really need to know your answer ${usr}. Yes or No? `)).toLowerCase();
//             if (belief2 == "yes") {
//                 console.log("See it was not that had. That is fine.");
//             } else if (belief2 == "no") {
//                 console.log("I don\'t\ know myself. Maybe I check that out sometime.");
//             } else {
//                 console.log(`Ok tough nut ${usr}. Till next time.`);
//             }
//         }
//     } else {
//         console.log("Never heard of that.")
//     }

//     let food2 = String(prompt("Ouu, guess my favourite meal today? ")).toLowerCase();
//     aboutMyMeal(food2);
// }

// const aboutDay = (reply) => {
//     if (reply == "good") {
//         console.log("Wonderful. I had a nice day too! For a comment; It has been well 👍");
//     } else if (reply == "bad") {
//         String(prompt("So sorry what made your day awful? "));
//         console.log(`Don\'t\ worry. Things will get better soon ${usr}. Trust me.`);
//     } else {
//         console.log("Well, that is new. I would say my day has been good though.");
//     }
//     let food = String(prompt("I am curious; which meal did you enjoy today? Breakfast, lunch or supper? ")).toLowerCase();
//     aboutYourMeal(food);
// }


// const greet = (who) => {
//     console.log(`Hello there ${who}. My name is ZRW.`);
//     let daybeen = String(prompt(`How has your day been ${usr}? Good, bad? `)).toLowerCase();
//     aboutDay(daybeen);
// }

// let usr = String(prompt("Excuse me, what is your name: "));
// greet(usr);


// b) Maths puzzle that can (x3) and (+5) from 1. This means that 1 is the current number (nowX). Unique proof is that 15 will output a null equation.
// Accepting the users input 
// Working out if the number x has a valid combination of X3, +5;
// Checking the number in a descending format.
// Variable of the 'now' number and the 'then' number after manipulation of X3 and +5. Loop to check if the same number should still be broken down to bits. Calling the function again - recursion. Ok try without recursion
// In function format call it puzzle35. 

// const solve = (x) => {
//     function puzzle35 (nowX, thenX) {
//         if (x == nowX) {
//             return thenX;
//         } else if(nowX < x) {
//             return puzzle35((nowX + 5, (`${thenX}` + 5)) || (nowX * 3, (`${thenX}` + 5)));
//         } else {
//             return null;
//         }
//     }
//     return puzzle35(1, "1");
// }

// let userNum = prompt("Enter a number: ");
// console.log(solve(userNum));


// c) Try out the example function to see their output
/* d) Eveness or oddness of a number using even proof as '0' and odd proof as '1' Thus any other even number is checked using (x - 2)
    Should use a recursive function isEven. Function should accept the users input number and return a boolean.
*/

/* e) Counting the B and 'b' in a string input from the user */




// 4. Data Structures: Objects and Arrays
/*  push() -> adds an element to an array
    pop() -> removes the last element from the array
*/


// a) Create a small weekly journal using objects. Print out the weekly journal on the terminal.
// let SatJ = {
//     events: ["no church", "read Bible", "watched Walter Veith", "break with Cess", "was home @ evening"],
//     ate: true,
//     slept: true,
// }

// let SunJ = {
//     events: ["met Joe & Boss", "cleaned Grandma\'s\ room", "cleaned my room", "went to Waterfront", "visited Dad"],
//     ate: true,
//     slept: true
// }

// let MonJ = {
//     events: ["shopping Helen", "walked to Karen", "made Kuku house", "went to Waterfront twice", "met Cathy"],
//     ate: true,
//     slept: true
// }


// let TueJ = {
//     events: ["took Helen school", "town walk with Dad", "took bus to Uni", "attended 1100 class ", "ate at seasons"],
//     ate: true,
//     slept: true
// }



// let WedJ = {
//     events: ["met ", "cleaned Grandma\'s\ room", "cleaned my room", "went to Waterfront", "visited Dad"],
//     ate: false,
//     slept: true
// }



// let ThurJ = {
//     events: ["met Joe & Boss", "cleaned Grandma\'s\ room", "cleaned my room", "went to Waterfront", "visited Dad"],
//     ate: true,
//     slept: true
// }


// let FriJ = {
//     events: ["met Joe & Boss", "cleaned Grandma\'s\ room", "cleaned my room", "went to Waterfront", "visited Dad"],
//     ate: true,
//     slept: true
// }


/* Thinking of builiding a tic tac toe game right now before I sleep */
// Ok the above is impossible for now. Maybe with time when I am now confident I can do a competitive programming competition.

/*
    How a function can change another function.
 */

// function letShout(x) {
//     return (...ouch) => {
//         console.log('Feeling pain', ouch);
//         let result = x(ouch);
//         console.log("Times I felt ouch", ouch, "returned", result)
//         return result;
//     };
// }

// letShout(Math.min)(3, 2, 1);


/*
    Higher order funciton: presenting arrays in a short-hand for loop format.
    Use any form of higher order function to show a range of numbers that are divisble by 7.
*/
// ["For", "Me", "Only"].forEach(a => console.log(a))
// function testSeven(check, then) {
//     if (check) then();
// }

// function repeat(n, action) {
//     for (let x = 0; x < n; x++) {
//         action(x);
//     }
// }

// repeat(1000, n => {
//     testSeven(n % 7 == 0, () => {
//         console.log(n, `does seven ${n / 7} times`);
//     });
// });

// function map(array, transform) {
//     let mapped = []
//     for (let elements of array) {
//         mapped.push(transform(elements))
//     }
//     return mapped;
// }

// let actors = [
//     'Ryan Reynolds', 'Will Smith', 'Chris Hemsworth', 'Mark Wahlberg', 'Jamie Foxx', 'Dwayne Johnson', 'Hugh Jackman', 'Michael Jordan'
// ]

// let actress = [
//     'Lupita Nyongo', 'Gal Gadot', 'Amandla Speilberg', 'Brie Larson', 'Patricia Allison', 'Afwanaka', 'Angelina Jolie', 'Charlize Theron', 'Isabella Moner'
// ]
// console.log(actors)


/*
    Higher order function that can return a greater number
 */

// function greater(a, b) {
//     if ((a > b)) {
//         return a;
//     }
//     else {
//         return b
//     }
// }

// function lesser(a, b) {
//     if ((a < b)) {
//         return a;
//     }
//     else {
//         return b
//     }
// }
// console.log(lesser(110, 900))

/*
    Create a man who can do the following speaking, coughing, remain quiet, yelling.
    Order of numerical logic. In that a number is evaluated from 20 to 1 - depending on how greater or lesser it is. 20, 15, 10, 5, 1 is the condition of checking tthis



 */

// let man = {};
// man.speak = function (line) {
//     console.log(`Let me speak: ${line}`)
// }
// man.sick = function (line) {
//     console.log(`Cough! Cough! ${line}`)
// }
// man.yell = function (line) {
//     console.log(`${line}!`)
// }
// man.quiet = function (line) {
//     return 0  
//     // console.log(`${line}`)
// }

// man.cough("Huraayy!")


// function digitalRoot(h) {
//     let sum = h;
//     let arr = [];
//     let condenser = (x, y) => parseInt(x) + parseInt(y)
//     while (sum > 9) {
//         arr = h.toString().split('');
//         h = arr.reduce(condenser)
//         if (h < 9) {
//             console.log(h)
//             break;
//         }
//     }

// }
// digitalRoot(493193)



// const prayer = {
//     one: "Wisdom & Understanding",
//     two: "Knowledge",
//     three: "Wealth",
//     health: {
//         first: "Physical",
//         second: "Mental",
//         third: "Spiritual"
//     }
// }
// console.log(prayer.health.second)




// function fact(x) {
//     if (x > 0) {
//         return x * fact(x - 1)
//     }
//     else {
//         return 1
//     }
// }

// let b = 4 + 5
// console.log(`The factorial of ${b} is ${fact(b)}`)

// const mom = {
//     name: 'Susan Kinya',
//     age: 43,

//     talk: function () {
//         let son = "Ph Magutu"
//         console.log(`${son} really misses you ` + this.name + ' nowadays')
//     }
// }

// mom.talk()

/*
    Creating a constructor function
 */

// function Hobby() {
//     this.title = ""
//     this.isworthit = false

// }

// const knowledge = new Hobby();
// knowledge.title = 'Programming'
// console.log(knowledge.title)

// function pCulture(company, type, vote) {
//     this.company = company,
//         this.type = type,
//         this.vote = vote

// }

// const pCulture1 = new pCulture("Dell", "Alienware", "Not Bad");
// console.log(pCulture1.company)






/*
    PRACTICE ON PRACTICE BABY
    Creating a program that can calculate the quadratic of any quad formular
    ax2 + bx + c = 0
    Finding the value of a = ((b2)/4c), b = () and c = ((b2)/4a)
    Calculating the value of x = (-b +- (b2 - 4ac))/2a
    Storing the value of (b2 - 4ac) as a new variable G
    If the G is postive, real roots. If the G is zero then there is equal roots. If the G is negative then there is *composite roots.

    Calculating the area of a triangle, circle, square & rectangle.
    For the triangle; the common one, heros formula
    Heros find the perimeter of the triangle (all sides are known). Then half the perimeter. Then subtract that half from every side. The values obtained together with the half perimeter value all multiplied together. Then lastly square root the value.

    Swapping two numbers. Make a function that can swap the numbers. Should not be the same number and must not be a negative number.

    Converting kilometeres to miles. Using the 1609344/1000000 as the most accurate measure. Should be able to convert the miles back into km again.

    A program that can check the largest of three numbers. If x is greater than both y and z, then that is the largest of the 3. Is it true to say that  (y + z) is lesser than x?  Not really 8, 6, 3 can prove this. That means we check the numbers individually.

    Checking if a number is a prime number or not. If it is, how? The criteria to judge that it is or it is not. Let say the number is x. If all the numbers between 2 and x cannot divide x, then it is prime. For loop here. One is not a prime nor a composite.

    Fibionacci sequence. The starting two terms are always 0 and 1. Then the next term follows by adding the two terms - if the next term is n3 then it is (n1 + n2). Next terma can be term nx. Remember swapping numbers? Yeah. There is something of the sort here. Knowing the sequence you wanna output (can be any). Then getting the actual Fibionacci sequencing of that number of times.


    Creating a program that can check the equivalence of two objects.

    Checking if string is a palindrome
 */

// function check(str) {
//     const strlen = str.length;
//     for (let i = 0; i < (strlen / 2); i++) {
//         if (str[i] === str[(strlen - 1) - i]) {
//             return 'palindrome';
//         }
//     }
//     return 'not palindrome';
// }



// function checkPalindrome(str) {
//     const strArray = str.split('');
//     const reverseArray = strArray.reverse();
//     const reverseStr = reverseArray.join();

//     if (str == reverseStr) {
//         console.log('palindrome');
//     }
//     else {
//         console.log('not palindrome');
//     }

// }

// const s = prompt("Enter string to check if palindrome or not: \n");
// let x = checkPalindrome(s);
// console.log(x)

// const bValue = prompt('Enter the base of the triangle: ')
// const hValue = prompt('Enter the height of the triangle: ')

// const area = ((bValue * hValue) / 2)
// console.log(`Area: ${area}`)


// function Heros(a, b, c) {
//     const s = ((a + b + c) * 0.5)
//     let d = (s * (s - a) * (s - b) * (s - c))
//     let finalArea = Math.sqrt(d)

//     console.log(`Area: ${finalArea}`)
// }

// Heros(30, 40, 50)

// function swap(x, y) {
//     if ((x != y) && ((x || y) > 0)) {
//         console.log(`Numbers were ${x} and ${y}`);
//         let temp;
//         temp = x;
//         x = y;
//         y = temp;
//     }
//     console.log(`Numbers now are ${x} and ${y}`);
// }

// swap(47394, 23942)

// function KmToMiles(km) {
//     const miles = ((km * 1000000) / 1609344)
//     console.log(`${km} km is equivalent to ${miles} miles`)
// }

// function MilesToKm(mi) {
//     const km = ((mi * 1609344) / 1000000)
//     console.log(`${mi} miles is equivalent to ${km} km`)
// }

// MilesToKm(1230)


// function leastof3(x, y, z) {
//     if ((x < y) && (x < z)) {
//         console.log(`${x} is the least of all 3`)
//     } else if ((z < x) && (z < y)) {
//         console.log(`${z} is the least of all 3`)
//     } else {
//         console.log(`${y} is the least of all 3`)
//     }
// }

// leastof3(239, 21230, 1133)


// function checkPrime(x) {
//     let isPrime = true
//     if (x === 1) {
//         console.log("One cannot be a prime number!")
//     } else if (x > 1) {
//         for (let i = 2; i < x; i++) {
//             if ((x % i) == 0) {
//                 console.log(`${x} is not prime. Divisible by ${i}`)
//                 isPrime = false
//             }
//         }
//     }
//     if (isPrime) {
//         console.log(`${x} is prime`)
//     }
// }

// checkPrime()

// function Fib(x) {
//     let n1 = 0, n2 = 1, nx;
//     for (let i = 1; i <= x; i++) {
//         console.log(n1);
//         nx = n1 + n2;
//         n1 = n2;
//         n2 = nx;
//     }
// }

// function Fib(r) {
//     if (r < 2) {
//         return r
//     } else {
//         return Fib(r - 1) + Fib(r - 2);
//     }
// }

// console.log(Fib(9))

// const nx = prompt('Enter the number of Fibionacci sequence: ')
// if (nx <= 0) {
//     for (let y = 0; y < nx; y++) {
//         console.log(Fib(y))
//     }
// }


/*
    OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT.
    - Creating a boss bitch who says 'fed up with your bs' in two ways
    - Call method that acts as an extra parameter to the function.
*/


// let bossbitch = {}
// bossbitch.speak = function (say) {
//     console.log(`Boss bitch says ${say}`);
// }

// bossbitch.speak("fed up with your bs")


// function speak(line) {
//     console.log(`Boss bitch says ${line}`);
// }
// let bossbitch = { speak }
// speak.call(bossbitch, 'fuck you')
// bossbitch.speak("fed up with your bs")


// How to create an object in js
// person1 = {
//     "name": 'PH Magutu Nyarang\'o',
//     "gender": 'Male',
//     "height": '5\'9',
//     "hobby": 'programming',
//     "location": {
//         "County": 'Kiambu',
//         "Place": 'Juja',
//         "University": 'JKUAT',
//     },
//     "date_of_birth": '10-12-2001',
//     "education": 'undergraduate',
//     "course": 'Computer Science',
//     "relationship": {
//         "Status": 'cuffed',
//         "CuffedTo": 'Cecilia Wakesho Mwasi',
//         "CuffedWhen": 'April 2020'
//     },
//     "home": 'Karen, Nairobi',
//     "email": 'magutujr@gmail.com'
// }


// person2 = {
//     "name": 'Cecilia Wakesho Mwasi',
//     "gender": 'Female',
//     "height": '5\'6',
//     "hobby": 'Singing',
//     "location": {
//         "County": 'Nairobi',
//         "Place": 'Madaraka',
//         "University": 'Strathmore',
//     },
//     "date_of_birth": '10-01-2002',
//     "education": 'undergraduate',
//     "course": 'Law',
//     "relationship": {
//         "Status": 'cuffed',
//         "CuffedTo": 'PH Magutu Nyarang\'o',
//         "CuffedWhen": 'April 2020'
//     },
//     "home": 'Nyali, Mombasa',
//     "email": 'ceciliawakesh@gmail.com'
// }
// console.log(person1.email)

// var cars = [
//     'Aston Martin',
//     'Bentley',
//     'Chevrolet',
//     'Dodge',
//     'Ferari',
//     'Hyundai',
//     'Jaguar',
//     'Kia',
//     'Lamborghini',
//     'Mitsubishi',
// ]

// cars.concat(
//     'Toyota',
//     'Opel',
//     'Mercedes Benz',
//     'Nissan',
//     'Peugeot',
//     'Rolls Royce',
//     'Suzuki',
//     'Volvo'
// )
// console.log(cars[12])


//Trying to form a countdown from 20 to 1 using a recursive method. 
// function countdown(num) {
//     console.log(num)
//     var newnum = num - 1
//     if (newnum > 0) {
//         countdown(newnum)
//     }
// }
// countdown(20)

// function WristWatch(wname, wcompany, wtype, wyear) {
//     this.name = wname,
//     this.company = wcompany,
//     this.type = wtype,
//         this.year = parseInt(wyear)

//     get getName () {
//         return this.name;
//     }
// }


// const WristWatch = {
//     name: 'Diagono Magnesium',
//     company: 'Michael Kors',
//     type: 'Military',
//     year: parseInt("1884"),

//     // set newCompany(x) {
//     //     this.company = x;
//     // }
// };

// const watch1 = new WristWatch();
// watch1.company = 'Fossil'
// console.log(watch1.company)

// get the current watch values
// Object.defineProperty(WristWatch, "seeCurrent", {
//     get: function () {
//         return WristWatch;
//     }
// });

// set new values for a different watch from this one
// Object.defineProperty(WristWatch, "newWatch", {
//     set: function (company) {
//        WristWatch.company = company
//     }
// });





// var watch1 = new WristWatch('Slim Runway', 'Michael Kors', 'Luxury', '1981');
// var watch2 = new WristWatch('Diagono Magnesium', 'Bulgari', 'Military', '1884');
// var watch3 = new WristWatch('Apple Watch', 'Apple', 'Digital', '2015');
// var watch4 = new WristWatch('Omega Speedmaster', 'Omega', 'Chronographic', '1957');
// var watch5 = new WristWatch('Sweet Alhambra', 'Van Cleef & Arpels', 'Fashion', '1981');

/*
    Learning about stacks - done
    Multiple base conversions using stacks
    Palindromes
    Recursive functions implemented with stacks (factorization) - done
*/

// program to implement stack data structure
class Stack {
    constructor() {
        this.brands = [];
    }

    // add element to the stack
    add(e) {
        return this.brands.push(e);
    }

    // remove element from the stack
    remove() {
        if (this.brands.length > 0) {
            return this.brands.pop();
        }
    }

    // view the last element
    peep() {
        return this.brands[this.brands.length - 1];
    }

    // check if the stack is empty
    isEmpty() {
        if (this.brands.length == 0) {
            return "Stack is empty";
        }
        else {
            return "Stack still has items";
        }
    }

    // the size of the stack
    size() {
        return this.brands.length;
    }

    // empty the stack
    clear() {
        this.brands = [];
    }
}




// var brands = new Stack();
// brands.add("Pringles");
// brands.add("Valentino");
// brands.add("Armani");
// brands.add("Disney");
// brands.add("YouTube");
// brands.add("Apple");
// brands.add("Netflix");
// brands.add("Mastercard");
// brands.add("Amazon");
// brands.add("KFC");
// brands.add("Audi");
// console.log(brands);

function factorial(x) {
    var product, s;
    s = new Stack();
    product = 1;
    while (x > 1) {
        s.add(x--);
    }
    while (s.size() > 0) {
        product *= s.remove();
    }
    return product;
}

var t = factorial(15);
console.log(t);




=======
function bye() {
    console.log("Look at me yawning. I really feel a bit tired today.");
    console.log(`If anything ${usr}, you have made my day even better. It's been a pleasure to hear from you.`);
    console.log(`See you tomorrow ${usr}. Bye.`)
}


function aboutHobby(hobby) {
    if (hobby === "yes") {
        let favHb = String(prompt("Which is...")).toLowerCase;
        console.log(`That so amazing. I would love to see you ${favHb} one day.\n`);
    } else if (hobby === "no") {
        console.log("You ain\'t\ serious. How? I will gladly share my love for swimming with you.");
    } else {
        console.log("Ok, remember I asked '\ do you.\' Should have said yes or no.");
        console.log(`But that\'s\ fine. I think ${hobby} is fun.\n`);
    }
    bye();
}


function aboutMyMeal(myfood) {
    if (myfood === "breakfast") {
        console.log("Quite close. It used to be. I mean still can be, depends on my day.");
    }
    else if (myfood === "lunch") {
        console.log("Yes. Hey wait, who told you? You cannot be that lucky ;)");
        // Thinking of getting this going.
    }
    else if (myfood === "supper") {
        console.log(`I like your guess ${usr}. I would have guessed from there too. But it\'s\ lunch.`);
    } else {
        console.log(`Is that a meal? For real, ${myfood}? Not yet heard of it then.`)
    }

    let haveHb = String(prompt("You have a favourite hobby? ")).toLowerCase;
    aboutHobby(haveHb);

}

const aboutYourMeal = (meal) => {
    if (meal === "breakfast") {
        console.log("That is exactly what I thought you would say! Breaking your overnight fast, hahaha");
    }
    else if (meal === "lunch") {
        console.log("Sweet. Having more energy during the day does get you going.");
    }
    else if (meal === "supper") {
        console.log(`Oh wow! I bet people will be on the ${usr} team.`);

        let belief1 = String(prompt(("Do you think supper helps you get better sleep? "))).toLowerCase;

        if (belief1 === "yes") {
            console.log("Aha! Cool.");
        } else if (belief1 === "no") {
            console.log("I don\'t\ know myself. Maybe I check that out sometime.");
        } else {
            let belief2 = String(prompt(`I really need to know your answer ${usr}. Yes or No?`)).toLowerCase;
            if (belief2 === "yes") {
                console.log("See it was not that had. That is fine.");
            } else if (belief2 === "no") {
                console.log("I don\'t\ know myself. Maybe I check that out sometime.");
            } else {
                console.log(`Ok tough nut ${usr}. Till next time.`);
            }
        }
    } else {
        console.log("Never heard of that.")
    }

    let food2 = String(prompt("Ouu, guess my favourite meal today? "));
    aboutMyMeal(food2);
}

const aboutDay = (reply) => {
    if (reply === "good") {
        console.log("Wonderful. I had a nice say myself too!");
    } else if (reply === "bad") {
        String(prompt("So sorry what made your day awful? \n"));
        console.log(`Don\'t\ worry. Things will get better soon ${usr}`);
    } else {
        console.log("Well, that is new. I would say my day has been good though.");
    }
    let food = String(prompt("I am curious; which meal did you enjoy today? Breakfast, lunch or supper? ")).toLowerCase;
    aboutYourMeal(food);
}


const greet = (who) => {
    console.log(`Hello there ${who}. My name is ZRW.`);
    let daybeen = String(prompt(`How has your day been ${usr}? Good, bad? `)).toLowerCase;
    aboutDay(daybeen);
}

let usr = String(prompt("Excuse me, what is your name: "));
greet(usr);
>>>>>>> ZRW crash








<<<<<<< HEAD

=======
// b) Maths puzzle that can (x3) and (+5) from 1. Unique proof is that 15 will output a null equation.

// c) Try out the example function to see their output
>>>>>>> ZRW crash






