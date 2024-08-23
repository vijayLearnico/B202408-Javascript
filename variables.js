// const heroName = 'Superman';
// const age = 45;
// const height = 6.2;
// const isHeroAvaiable = false;

// const prevPhoneNums = [99999999999, 88888888888, 77777777777]

// const heroDetails = {
//     name: 'Superman',
//     age: 45,
//     isAvaiable: true,
//     prevPhoneNums:[99999999999, 88888888888, 77777777777]
// }


// console.log(heroDetails.name)

// Rules to write to variable name

// 1. Should not with number or special char
// 2. Should not use keywords
// 3. SHould not have space between the variable name
// 4. There should not be an duplications

// Data types
// 1. Interger -> Number
// 2. Character -> a b c
// 3. String -> combination of char -> 'the cat is on the wall'
// 4. Boolean -> true/false
// 5. Array -> []
// 6. Object -> {}
// 7. float -> 5.6
// 8. undefinded
// 9. null

// variable decalration methods

// 1. const
// 2. let
// 3. var


// const pi = 3.1415
// console.log(stock)
// var stock = 5;

// 5 hours later

// stock = 2;

// console.log(stock)

// If/ else

// const a = 5;
// const b = 10;
// const c = 80;

// if(a > b){
//     console.log('A is greater')
// }else if (b > c){
//     console.log('B is greater')
// } else {
//     console.log('C is greater')
// }

// const bankBalance = 7000;

// if(bankBalance > 5000){
//     console.log('You can have the dinner');
// } else {
//     console.log('Soory Buddy! someother day :(');
    
// }


// Operators

// 1. Uni -> ! , ++ , --
// 2. Bi -> +, -, *,/,%, &&, ||, == , ===, <=, >=
// 3. tri -> ?:


// console.log(true || false)

// And -> &&
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// OR -> ||
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// const age = 10;
// const area = 'cbe';

// if((age > 18) || (area === 'cbe')){
//   console.log('Eligible to vote')
// } else {
//   console.log('Not Eligible to vote')
// }

// const a = 15
// const b = '15';

// console.log(18 <= 18);

// For Loop

// for(let i = 0 ; i < 5; i++){
//   console.log(i)
// }

// 1st time
// i = 0 -> condition check -> 0 < 5(true) -> print 0 -> i = 0 + 1

// 2nd time
// i = 1 -> condition check -> 1 < 5(true) -> print 1 -> i = 1 + 1

// 3rd time
// i = 2 -> condition check -> 2 < 5(true) -> print 2 -> i = 2 + 1

// 4th time
// i = 3 -> condition check -> 3 < 5(true) -> print 3 -> i = 3 + 1

// 5th time
// i = 4 -> condition check -> 4 < 5(true) -> print 4 -> i = 4 + 1

// 6th time
// i = 5 -> condition check -> 5 < 5(false) -> end loop


// -3 -2 -1 0 1 2 3 4 5

// for(let i = 0 ; i > -5; i--){
//     console.log(i)
//   }

// 1st time
// i = 0 -> condition check -> 0 < 5(true) -> print 0 -> i = 0 - 1

// 2nd time
// i = -1 -> condition check -> -1 < 5(true) -> print -1 -> i = - 1 - 1

// 3rd time
// i = -2 -> condition check -> -2 < 5(true) -> print -2 -> i = -2 - 1

const studentsName = ['Madhavan','Kanna','Vignesh','Fathima'];
// Index starts from 0

// console.log('1st student joined today was:',studentsName[0]);
// console.log('2nd student joined today was:',studentsName[1]);
// console.log('3rd student joined today was:',studentsName[2]);
// console.log('4th student joined today was:',studentsName[3]);
// console.log('5th student joined today was:',studentsName[4]);

// for(let i = 0 ; i < 40; i++){
//   console.log(studentsName[i])
// }

// i -> 0 => studentsName[0] => Madhavan
// i -> 1 => studentsName[1] => Kanna
// i -> 2 => studentsName[2] => Vignesh


// Functions

// function addition(){
//     console.log(5 + 5)
// }

// function sub(){
//     console.log(5 - 5)
// }
// addition()
// sub()



// alarm -> 12 AM 
// netflix()


// function netflix(){
//     // Do some work
//     const customerId = 123;
//     const amountTobeCollected = 199;

//     const dataFromBank = bank(customerId,amountTobeCollected)
//     console.log('from netflix',dataFromBank)
// }

// function bank(customerId,amountTobeCollected){
//   // Collect money
// console.log('customerId',customerId);
// console.log('amountTobeCollected',amountTobeCollected);


//   const isPaymentCollected = true;

//   if(isPaymentCollected){
//     return []
//   }else{
//     return ('false')
//   }
// }

// const a = 5;
// const b =6;

// function1(a,b)

// function function1(x,y){
//   console.log(x,y)
// }


// Closure

// 1. Global scope
// 2. Lexical scope

// const a = 5

// function test(){
//     console.log(a)
// }

// test()

// String Methods

const string1 = 'Sample ';
const string2 = 'test';

const phoneNum = '9999999999 555555555555555555  888888888888888888'


// console.log(string1.length);
// console.log(string1.toUpperCase());
// console.log(string1.toLowerCase());
// console.log(string1 + string2);
// console.log(string1.concat(string2));
// console.log(string1.trim().length);
// console.log(string1.trimStart().length);
// console.log(string1.trimEnd().length);
// console.log(phoneNum.split(' '))


// Array Methods

const array = [100,200,300,400,500]
// const array2 = [600,700,800,900]

// console.log(array.length)
// array.push(700)
// array.push(600)
// console.log(array);
// array.pop()
// array.shift()
// const concatArr = array.concat(array2)

// splice -> mutable -> cut -> (starting index, no.of elements)
// slice -> immutable -> copy -> (starting index, ending index + 1 )

console.log(array);
array.splice(2,2);
// const janAndFebElecBill = array.splice(0,2)
// const janAndFebElecBill = array.slice(0,2)
console.log(array);
// console.log(janAndFebElecBill);















