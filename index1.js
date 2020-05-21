const display = document.getElementById("demo");
const displaySol = document.getElementById("demo2");
const EqualTo = document.getElementById("solution");
let onButton = document.getElementById("On");
onButton.onclick = onMe;
function onMe () { 
display.innerHTML = 0;
displaySol.innerHTML = "Answer";
} 
let offButton = document.getElementById("Off");
function allOff () {
 offMe();
 offUs();
}
offButton.onclick = allOff;
function offMe () { 
switch (display.innerHTML) {
case " ":
 display.innerHTML = " ";
 break;
case "0" :
 display.innerHTML = " ";
 break;
default: 
 display.innerHTML = " ";
 
}
}
function offUs() {
 displaySol.innerHTML = "";
}
// Display 5 at the output if button no. 5 is clicked.
let number5 = document.getElementById("five");
number5.onclick = displayFive;
function displayFive () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "5";
 break;
default: 
 display.innerHTML = `${display.innerHTML}5`
 
 }
}
// Display 4 at the output if button no. 4 is clicked.
let number4 = document.getElementById("four");
number4.onclick = displayFour;
function displayFour () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "4";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}4`
 
 }
}
// Display 3 at the output if button no. 3 is clicked.
let number3 = document.getElementById("three");
number3.onclick = displayThree;
function displayThree () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "3";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}3`
 
 }
}
// Display 2 at the output if button no. 2 is clicked.
let number2 = document.getElementById("two");
number2.onclick = displayTwo;
function displayTwo () {
 switch(display.innerHTML){
 case" ": 
  display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "2";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}2`
 
 }
}
// Display 1 at the output if button no. 1 is clicked.
let number1 = document.getElementById("one");
number1.onload = offMode;
function offMode () {
 number1.onclick = dontShow;
 function dontShow () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 
 case "0":
 display.innerHTML = "1";
 break;
 
 default: 
 display.innerHTML = `${display.innerHTML}1`
 
 }
 
 }
 return dontShow;
}
offMode();
let number6 = document.getElementById("six");
number6.onclick = displaySix;
function displaySix () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "6";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}6`
 
 }
}
let number7 = document.getElementById("seven");
number7.onclick = displaySeven;
function displaySeven () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "7";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}7`
 
 }
}
let number8 = document.getElementById("eight");
number8.onclick = displayEight;
function displayEight () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "8";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}8`
 
 }
}
let number9 = document.getElementById("nine");
number9.onclick = displayNine;
function displayNine () {
 switch(display.innerHTML){
 case" ":
  display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "9";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}9`
 
 }
}
let number0 = document.getElementById("zero");
number0.onclick = displayZero;
function displayZero () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "0";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}0`
 
 }
}
// Display x at the output if button name x is clicked.
let operatorX = document.getElementById("multiply");
operatorX.onclick = displayX;
function displayX () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "x";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}x`
  
 }
}
//display 2 each time it is clicked on
let operatorX2 = document.getElementById("scuare");
function myFunc () {
displayX2();
calculateX2();
}
operatorX2.onclick = myFunc;
function displayX2 () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "2";
 break;
 default: 
 display.innerHTML = `${display.innerHTML} ^2`
 
 }
}
// it square and assign answer to = sign.
function calculateX2 () {
 let a = parseInt(display.innerHTML);
 let calc = a*a;
 let giveSol = calc;
 EqualTo.onclick = showAnswer;
function showAnswer () {
 displaySol.innerHTML = giveSol;
 }
 return showAnswer;
}
// Display root at the output if button root is clicked.
let root = document.getElementById("root");
// All equalTo function
function allEqualTo () {
 calcRoot();
 calcSine();
 doMultiplication();
 doAddition();
 doSubtraction();
 doDivision();
 calcCosine();
 calcTangent();
 calcLog();
}
EqualTo.onclick = allEqualTo;
root.onclick = displayRoot;
function displayRoot () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "root";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}root`
 
 }
}
function calcRoot () {
 let b;
 let a;
 let p;
 let m;
 let s = display.innerHTML;
 let reg = /root[0-9]/;
 if(reg.test(s) === true) {
 m = s.replace(/root(?=[0-9])/, "");
 p = parseInt(m);
 a = Math.sqrt(p);
 b = a.toFixed(3);
 console.log(b);
 displaySol.innerHTML = b;
 }
} 
 
let operatorSine = document.getElementById("sine");
operatorSine.onclick = displaySine;
function displaySine () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "sin";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}sin`
 
 }
}
//EqualTo.onclick = allEqualTo;
function calcSine () {
 let b;
 let a;
 let p;
 let m;
 let s = display.innerHTML;
 let reg = /sin[0-9]/;
 if(reg.test(s) === true) {
 m = s.replace(/sin(?=[0-9])/, "");
 p = parseInt(m);
 a = Math.sin(p * (Math.PI/180));
 b = a.toFixed(3);
 console.log(b);
 
 displaySol.innerHTML = b;
 }
}
let operators = document.getElementsByName("operators");
operators.forEach(element => {
 element.style.backgroundColor = "orange"
});
let brackets = document.getElementsByName("bracket");
brackets.forEach(element => {
 element.style.backgroundColor = "grey"
});
let bracket = document.getElementById("obracket");
bracket.onclick = displayBrackets; 
function displayBrackets (){
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "(";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}(`
 } 
}
let cbracket = document.getElementById("cbracket");
cbracket.onclick = displayCBrackets;
function displayCBrackets (){
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = ")";
 break;
 default: 
 display.innerHTML = `${display.innerHTML})`
 } 
}
// multiplication code
EqualTo.onclick = allEqualTo;
function doMultiplication () {
 let reg = /[0-9]+x/;
 if(reg.test(display.innerHTML)=== true) {
 let p = parseInt(display.innerHTML);
 let n = display.innerHTML.replace(/[0-9]+x(?=[0-9])/, "");
 let ans = parseInt(n);
 let b = p * ans;
 displaySol.innerHTML = b;
 }
}
let addition = document.getElementById("addition");
addition.onclick = displayAddition;
function displayAddition (){
 switch(display.innerHTML){
 case" ":
display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "+";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}+`
 } 
}
EqualTo.onclick = allEqualTo;
function doAddition () {
 let reg = /[0-9]+\+/;
 if(reg.test(display.innerHTML)=== true) {
 let p = parseInt(display.innerHTML);
 let n = display.innerHTML.replace(/[0-9]+\+(?=[0-9])/, "");
 let ans = parseInt(n);
 let b = p + ans;
 displaySol.innerHTML = b;
 }
}
let subtraction = document.getElementById("subtraction");
subtraction.onclick = displaySubtraction;
function displaySubtraction (){
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "-";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}-`
 } 
}
EqualTo.onclick = allEqualTo;
function doSubtraction () {
 let reg = /[0-9]+\-/;
 if(reg.test(display.innerHTML)=== true) {
 let p = parseInt(display.innerHTML);
 let n = display.innerHTML.replace(/[0-9]+\-(?=[0-9])/, "");
 let ans = parseInt(n);
 let b = p - ans;
displaySol.innerHTML = b;
 }
}
let division = document.getElementById("division");
division.onclick = displayDivision;
function displayDivision (){
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "/";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}/`
 } 
}
EqualTo.onclick = allEqualTo;
function doDivision () {
 let reg = /[0-9]+\//;
 if(reg.test(display.innerHTML)=== true) {
 let p = parseInt(display.innerHTML);
 let n = display.innerHTML.replace(/[0-9]+\/(?=[0-9])/, "");
 let ans = parseInt(n);
 let b = p / ans;
 displaySol.innerHTML = b;
 }
}
let Cosine = document.getElementById("cosine");
Cosine.onclick = displayCosine;
function displayCosine () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "cos";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}cos`
 }
}
function calcCosine () {
 let b;
 let a;
 let p;
 let m;
 let s = display.innerHTML;
 let reg = /cos[0-9]/;
 if(reg.test(s) === true) {
 m = s.replace(/cos(?=[0-9])/, "");
 p = parseInt(m);
 a = Math.cos(p * (Math.PI/180));
 b = a.toFixed(3);
 displaySol.innerHTML = b;
 }
}
let Tangent = document.getElementById("tangent");
Tangent.onclick = displayTangent;
function displayTangent () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "tan";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}tan`
 
 }
}
function calcTangent () {
 let b;
 let a;
 let p;
 let m;
 let s = display.innerHTML;
 let reg = /tan[0-9]/;
 if(reg.test(s) === true) {
 m = s.replace(/tan(?=[0-9])/, "");
 p = parseInt(m);
 a = Math.tan(p * (Math.PI/180));
 b = a.toFixed(3);
 displaySol.innerHTML = b;
 }
}
let Log = document.getElementById("log");
Log.onclick = displayLog;
function displayLog () {
 switch(display.innerHTML){
 case" ":
 display.innerHTML = " ";
 break;
 case "0":
 display.innerHTML = "log";
 break;
 default: 
 display.innerHTML = `${display.innerHTML}log`
 
 }
}
function calcLog () {
 let b;
 let a;
 let p;
 let m;
 let s = display.innerHTML;
 let reg = /log[0-9]/;
 if(reg.test(s) === true) {
 m = s.replace(/log(?=[0-9])/, "");
 p = parseInt(m);
 a = Math.log10(p);
 b = a.toFixed(3);
 displaySol.innerHTML = b;
 }
}




