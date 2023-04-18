// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 100;
//   console.log(x);
// }
// exectution stack and memory are two things in js
// first js scrapes the whole code and defines variables as undefined and funtions are stored
// after that it starts its execution phase and a global exectution context is pushed in the call stack
// and on every function exectuion an new local exection context is made and pushed into the call stack and after that completes its gets popped and control return backs to golbal exectution context
// scope :-
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     // here javascript will find the value of b from its parent contexts
//     console.log(b);
//   }
// }

// a();

// scope means where you can access a variable
// scopes :
// local scope
// global scope
// scope chain -> find value to the next level of chain jumping from lexical environment
// lexical env: -
// it is created when execution context is created local memory and lexical env of parent
// let and const decalarations are hoisted
// hoisting :-
// console.log(b);
// let a = 10;
// var b = 100;
// let and const are not gloably stored and they are stored in a diff memory space
// temporal dead zone
// time between let variable is hoisted and initialized a val
// block scoped :- {}
// var a = 100;
// {
//   var a = 10; // global scope will change from 100 to 10 this is called shadowing
//   let b = 20; // block scope
//   const c = 30; //block scope
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b); // cannot be acceesed since its is block scoped
// console.log(c); // same
// ilegal shadowing :-
// let a = 20;
// {
//   var a = 20;
// }
// const a = 20;
// {
//   const a = 100;
//   {
//     const a = 200;
//     console.log(a); //  nearest a
//   }
// }
// closures

// function x() {
//   var x = 7;
//   function y() {
//     console.log(x); // func ()  with lexical scope is called closure
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// 1 . What is a closure ?
// -> function bundled together with lexical e nv
// z(); // still remembers as it was return the entire closure(all the parantal env)
