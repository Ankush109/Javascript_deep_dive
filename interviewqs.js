// function x() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
//   console.log("hi"); // this does  not wait
// }
// x();
// print 1 to 5 in every sec

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         // each  time it refs to diff locations and set closure for each time in the loop
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }
// x();
a();
// function statement :-
// function a() {
//   console.log("hey there ");
// }
// function statement will exec without any prob
// funtion expression will throw as its variable hence its not defined

// function expression :-
// var b = function () {
//   console.log("b called");
// };

// function declaration or function statement

// anonoymous function
// when the functions are used as values

// named functioned expression
// -> function with a name

// diff between parameters and arguments
// parameters -> used in func() and it can be used locally in that func()
// arguments ->which are passed into func()

// First class function

// function can be passed as arguments
// eg -

// var b = function (p1) {
//   return function xyz() {
//     console.log("hhehe");
//   };
// };
// console.log(b());
