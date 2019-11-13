$(document).ready(function() {

  // console.log('13 - text area');
  //
  // let fifteen = 15
  //
  // $('#textArea').on('keyup', function(e) {
  //
  //   let rest = fifteen - e.target.value.length;
  //
  //   $('#p-textArea').html( rest )
  //
  //   console.log(rest);
  //
  // if(rest <= 0){
  //   console.log('if');
  //   e.target.value = '';
  //   $('#p-span').html($('#p-textArea').html('LIMIT REACHED'));
  //   ;
  // }
  //
  // });


// console.log('14 - select children')
// //   Q14. Write a program using jQuery to count the number of paragraphs in the HTML code
// // given below. Print the content of each p tag in the console.
//
//   const children = $('#selected').children();
//
//   console.log('Element has: '+ children.length+' children');
//
//   for(let i = 0; i < children.length; i++){
//
//       console.log(children[i].innerHTML);
//   }

console.log('15 - random char');

// Q15. Write a Javascript function that accepts the length and generate a string of given
// specific length of random characters. You can use the character list given below to
// generate the random string.
// Sample Char List =
// ”ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&-”
// Ex. randomString(8); // here the randomString is a function which you have to write
// Output => “t3giAkft”

// const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&-';
//
// function randomString(int){
//
//   const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&-';
//
//   let randomArr = [];
//
//   let count = 0;
//
//   while(count < int){
//
//     let random = Math.floor(Math.random() *(charList.length - 0 + 1) + 0)
//
//     randomArr.push(charList[random]);
//
//     count++;
//   }
//
//   let randomStr = randomArr.join('');
//
//   console.log(randomStr);
//
// } //end Function
//
//
// randomString(8);


}); //end jquery
