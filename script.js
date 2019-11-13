// console.log('01 - perfect numbers');
//
// // Q1. Write a Javascript function to print if the given number is “Perfect Number” or not.
// // A  given number is perfect if :
// // (a) The Number is equal to the sum of its positive divisors, excluding the number itself.
// // Ex. Number 6 is Perfect number as : (1 + 2 + 3) = 6. Here 1,2,3 are divisors of 6.
// // (b) Equivalently, the number is perfect if it is equal to half of the sum of all of its positive
// // divisors including itself.
// // Ex. Number 6 is Perfect number as : (1 + 2 + 3 + 6) / 2 = 6
// // Numbers to check: (a) 28 (b) 496 (c) 8128 (d) 33550336
//
// function perfect(num) {
//
//   let divisor = 1;
//
//   let total = [];
//
//   while(divisor < num){
//
//     if(num % divisor === 0){
//
//       total.push(divisor);
//     }
//     divisor++;
//   }
//
//   let totalDivisor = 0;
//
//   for(let i = 0; i < total.length; i++){
//
//     totalDivisor += total[i];
//
//   }
//
//   if(totalDivisor === num && ((totalDivisor + num) / 2) === num ){
//
//     console.log(num + ' is a Perfect Number')
//   }
//   else {
//
//     console.log(num + ' is NOT a Perfect  Number');
//   }
//
// }
//
// perfect(6);
// perfect(28);
// perfect(496);
// perfect(8128);
// perfect(33550336);

// console.log('02 - money to coins')
//
// // Q2. Write a Javascript function to convert the given amount of money into coins which
// // are also given.
// // Ex. amountTocoins(37, [10, 5, 2, 1]); //Here 37 is the amount. and 10, 5, 2, 1 are coins.
// // Expected Output: 10, 10, 10, 5, 2
//
//
// function toCoins(num) {
//
//   let coins = [];
//
//   const tens = 10;
//   const fives = 5;
//   const twos = 2;
//   const ones = 1;
//
//   while(num >= tens){
//
//     coins.push(tens);
//
//     num -= tens;
//
//   }
//
//   while(num >= fives){
//
//     coins.push(fives);
//
//     num -= fives;
//   }
//
//   while(num >= twos){
//
//     coins.push(twos);
//
//     num -= twos;
//
//   }
//
//   while(num != 0){
//
//     coins.push(ones);
//
//     num -= ones;
//   }
//
//   console.log('coins: '+ coins);
// }
//
// toCoins(37);


// console.log('03 - current date');
//
// // Q3. Write a Javascript function to get the current date which accepts the separator as an
// // argument and prints on the console.
// // Ex. getCurrentDate(“/”); Output => 10/09/2019
// // Ex. getCurrentDate(“-”); Output => 10-09-2019
//
// function getCurrentDate(str){
//
//   const day = new Date().getDate();
//   const month = new Date().getMonth() + 1;
//   const year = new Date().getFullYear();
//
//   console.log(day+str+month+str+year);
// }
//
// getCurrentDate('/');
// getCurrentDate('-');


// console.log('04 - future date');
//
// // Q4. Write a Javascript program which will accept a date and time in the future or in the
// // past and it will print how much time is remaining for future date to come or how much
// // time is completed since the past date and display on the console.
// // Ex and Hint:
// // You can use the format like this to pass the date and time:
// // futureDate = new Date("Sep 17, 2019 12:00:00").getTime();
// // Ex . calcDifference(futureDate);
// // Output => Time Remaining for Future Date : 6 Days 17 Hours 51 Minutes 40 Seconds
//
// const pastDate = new Date('Sep 15, 2019 19:45:00').getTime();
//
// const futureDate = new Date('Dec 1, 2019 00:00:00').getTime();
//
// // 1000 -> 1 seg
// // 60000 -> 1 min
// // 3 600 000 -> 1 hr
// // 86 400 000 -> 1 day
//
// function calcDifference(date) {
//
//   const newDate = new Date().getTime();
//
//   let days = 0;
//   let hours = 0;
//   let minutes = 0;
//   let seconds = 0;
//
//   console.log('date '+date);
//   console.log('new '+newDate);
//
//   if(date > newDate){
//
//     date = date - newDate;
//
//     days = Math.floor(date / 86400000);
//
//     date -= 86400000 * days;
//
//     hours = Math.floor(date / 3600000);
//
//     date -= 3600000 * hours;
//
//     minutes = Math.floor(date / 60000);
//
//     date -= 60000 * minutes;
//
//     seconds = Math.floor(date / 1000);
//
//     console.log('Time Remaining for Future Date: '
//             +days+' Days '+hours+' Hours '+minutes+' Minutes '+seconds+' Seconds')
//   }
//
//   else if(date < newDate){
//
//     date = newDate - date;
//
//     days = Math.floor(date / 86400000);
//
//     date -= 86400000 * days;
//
//     hours = Math.floor(date / 3600000);
//
//     date -= 3600000 * hours;
//
//     minutes = Math.floor(date / 60000);
//
//     date -= 60000 * minutes;
//
//     seconds = Math.floor(date / 1000);
//
//     console.log('Time Passed since Past Date: '
//             +days+' Days '+hours+' Hours '+minutes+' Minutes '+seconds+' Seconds')
//   }
//
// }
//
// calcDifference(futureDate);
//
// calcDifference(pastDate);

// console.log('05 - latest date');
//
// // Q5. Write a Javascript Function to find the latest date from the given array of dates.
// // Given Array: ['2019/02/01', '2018/09/22', '2019/05/15', '2019/03/03']
// // Output => Latest Date: 2019/05/15
//
// const dateArr = ['2019/02/01', '2018/09/22', '2019/05/15', '2019/03/03'];
//
// let latest = 0;
//
// for(let i = 0; i < dateArr.length; i++){
//
//   let split = dateArr[i].split('/');
//
//   let join = split.join('');
//
//   for(let z = 0; z < dateArr.length; z++){
//
//     let split2 = dateArr[z].split('/');
//     let join2 = split2.join('');
//
//     let num1 = parseInt(join);
//     let num2 = parseInt(join2);
//
//     if(num2 > num1){
//
//       latest = num2 ;
//     }
//   }
// }
//
// console.log('Latest Date: ' + latest);

// console.log('06 - upper case');
//
// // Q6. Write a Javascript function to test if the first character of given string is upper case
// // or not and print it on console.
// // Given String: (a) ‘Yes, it is possible.’ (b) ‘and it happened.’
//
// const stringA = 'Yes, it is possible.';
// const stringB = 'and it happened.';
//
// function isUpper(str){
//
//   for(let i = 0; i < str.length; i++){
//
//     let firstChar = str[0];
//
//     if(firstChar === str[0].toUpperCase()){
//
//       console.log('this string first char is uppercase');
//
//       break;
//     }
//     else {
//       console.log('this string first char is NOT uppercase');
//
//       break;
//     }
//   }
// }
//
// isUpper(stringA);
// isUpper(stringB);

console.log('07 - email regex');

// Q7. Write a Javascript function to check if the given email address is valid or not, using
// regular expressions. The valid email address can contain following characters:
// a. Upper case A-Z or Lower case a-z letters
// b. Digits 0-9
// c. Special Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// d. Dot . or period or full stop, and it should not be the first or last character

// console.log('08 - string date format');
//
// // Q8. Write a Javascript program to check if the given string has date in it of the format
// // mm-dd-yyyy and print the date in console.
// // Given String: “Avengers Endgame was released on 26-04-2019.”
//
//
// const string = 'Avengers Endgame was released on 26-04-2019.';
//
// const strArr = string.split(' ');
//
// console.log(strArr);
//
// for(let i = 0; i < strArr.length; i++){
//
//   for(let z = 0; z < strArr[i].length; z++){
//
//     let digit = parseInt(strArr[i][z]);
//
//     if(Number.isInteger(digit) && strArr[i][z+2] == '-' && strArr[i][z+5] == '-'){
//       console.log(strArr[i]);
//
//       break;
//     }
//   }
// }

// console.log('09 - count number of words');
//
// // Q9. Write a JavaScript program to count the number of words in string.
// // Note :
// // - Remove white-space from start and end position.
// // - Convert 2 or more spaces to 1.
// // - Exclude newline with a start spacing
// // String: “You can check this string.
// // Which contains this new line.
// // But it also consider the points in Note given above.”
//
// let string = '    You can check this string. Which contains this new line. But it also consider the points in Note given above.'
//
// string = string.trim();
//
// string = string.split(' ');
//
//
// console.log('number of words is: '+string.length);

// console.log('10 - get attributes')
//
// // Q10. Write a Javascript program to get the attributes - type, hreflang, rel, target, href and
// // the text in the link given below and print on console.
//
// const element = document.getElementById('paraLink');
//
// console.log(element.type);
// console.log(element.hreflang);
// console.log(element.rel);
// console.log(element.target);
// console.log(element.href);
// console.log(element.innerHTML);

// console.log('11 - insert table element');
//
// // Q11. Write a Javascript program to add rows to a table in the HTML code given below.
// // Sample HTML Code:
// // <table id="sampleTable" border="1">
// // <tr> <td>RowA Cell1</td> <td>RowA Cell2</td> </tr>
// // <tr> <td>RowB Cell1</td> <td>RowB Cell2</td> </tr>
// // </table>
// // Hint: You can use the inbuilt Javascript functions insertRow() to create a row and insertCell() to
// // create a table cell in the row.
//
// const table = document.getElementById('sampleTable');
//
// let row = table.insertRow(0);
//
// let cell1 = row.insertCell(0);
//
// cell1.innerHTML = 'cell 01';
//
// let cell2 = row.insertCell(1);
//
// cell2.innerHTML = 'cell 02';


// console.log('12 - mul function');
//
// // Q12. Write a mul function which will work properly when invoked with following syntax.
// // console.log(mul(2)(3)(4)); // output : 24
// // console.log(mul(4)(3)(4)); // output : 48
//
// function mul(int1) {
//
//   return int1 * int1;
//
// }
//
// mul(2)(3)(4);
