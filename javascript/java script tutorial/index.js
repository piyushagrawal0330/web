// in javascript semicolon ; is optional 

//1.ways to print in javascript
// document.write('this is document write')// iisae document par likh sakte hai mtlb html mai paragraph likhne kae kaam aata hai
// alert('me');  // alert puarna console log hai jo msg deta hai upar ek rectangle box mai

// //2.javascript console api
// console.log('hello world', 4 + 6, "another log")
// console.warn('this is warning'); //console mai warning dene kae kaam aata hai
// console.error('this is error');  // console mai red colour mai error d  eta hai
// // console.clear console par iska use karkae console khali ho jata hai


//3. javascript variables
// what are variables? - containers to store data values.
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. Datatypes in javascript

//strings
var str1 = "this is a string";
var str2 = "this is also a string";

//numbers
var num1 = 455;
var num2 = 56.76;

//objects
var marks = {
    ravi: 34, shubham: 78, harry: 99.99
}

console.log(num1);
console.log(str1);
console.log(marks);

//booleans
var a = true;
var b = false;
console.log(a, b);

var und;
console.log(und)

var n = null;
console.log(n);

/*
at a very high level ther eare two type of data types in javascript
1. primitive data types: undefined,null number, string, boolean, symbol
2. referencedata types: arrays,objects
*/

//arrays
var arr = [1, 2, "pinki", 4, 5];
console.log(arr)

// 5.operators in java

//Arithmetic operators
var a = 34;
var b = 56;
console.log('the value of a + b : ', a + b);
console.log('the value of a - b : ', a - b);
console.log('the value of a * b : ', a * b);
console.log('the value of a / b : ', a / b);

//Assignment operators
var c = b;
console.log(c);
c += 2;
console.log(c);
c++;
console.log(c);
c *= 2;
console.log(c);

//comparison operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);

//logical operators
console.log(true && true);
console.log(true || false);
console.log(!true);

// 6. /javascript functions
// work on dry principal do not repeat yourself
function avg(a, b) {
    return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(14, 16);

console.log(c1, c2);

// 7.conditions in javascript

var age = 10;
// if(age > 8){
//     console.log("you are not a kid")
// }
// else{
//     console.log("you are a kid")
// }
// if(age > 18){
//     console.log("you can drink water")
// }
// else{
//     console.log("you can not drink water")
// }

// if-else ladder
/*
if(age>32){
    console.log("you are not a kid")
}
else if(age>26){
    console.log("bacche nahi rahe")
}
else if(age>22){
    console.log(" yes bacche nahi rahe")
}
else if(age>18){
    console.log("18 sae jyd kae ho gaye")
}
else{
    console.log("bacche ho")
}
console.log("end of ladder")*/

// 8. Looping

// for loop
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if(i==2)
    // break;
    continue;
    console.log(arr[i]);
}

arr.forEach(function (element) {
    console.log(element)
})
const ac = 0; //here we cannot chage ac bcz it is constant

// while loop
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

// do while loop
do{
    console.log(arr[j]);
    j++;

}while(j<arr.length)


// 10.array methods
let myarr = ["Fan","camera",34,null,true,undefined]
// find length of array
console.log(myarr.length);
// pop last element
myarr.pop();
console.log(myarr);
// add last element at last
myarr.push("haary");
console.log(myarr);
// remove first element
myarr.shift();
console.log(myarr);
// add element at start
myarr.unshift("harry");
console.log(myarr);
// count element
console.log(myarr.unshift("harry"));
// convert arr to string
console.log(myarr.toString());
// sort array like a dictionary not in assending order
arr=[3,6,43,6,3,1];
console.log(arr.sort());


// 11.string methods in javascript
let str = "harry is a good boy and i am laso good";
// find string length
console.log(str.length);
// find index of substring in a string 
console.log(str.indexOf("good"));
// find index of last substring in a string 
console.log(str.lastIndexOf("good"));
// slicing of a string from index 1 to 20(n-1)
console.log(str.slice(1,21));
// replace string part
str1=str.replace("harry","piyush");
console.log(str,str1) ;

// 12.date
let mydate = new Date();
console.log(mydate);
console.log(mydate.getFullYear());
console.log(mydate.getTime());
console.log(mydate.getMinutes());
console.log(mydate.getDate);

// 13.dom manipulation - document object model
let elem = document.getElementById('click');
console.log(elem); //document mai buton banaya tha click karkae uspar click ho jayega
let elemclass = document.getElementsByClassName('container');
console.log(elemclass); 
elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
console.log(elemclass[0].innerText);
console.log(elemclass[0].innerHTML);
// get elements by their tag name
tn = document.getElementsByTagName('div');
console.log(tn);
console.log(document.getElementsByTagName('button'));
// add element
createdelement= document.createElement('p');
createdelement.innerText = 'this is a created paragrph';
tn[0].appendChild(createdelement);

// removeChild(element)--> remove that element

//selecting using query
sel = document.querySelector(".container");
console.log(sel);
sel = document.querySelectorAll(".container");
console.log(sel);


// 14. events in javascript
//function operate after click button
// function clicked(){
//     console.log("button was clicked");
// }
// window.onload = function(){
//     console.log("the document waas loaded");
// }
// firstcontainer.addEventListener('click',function(){
//     // container mai click krne kae baad change reflect kar dega
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We Have Clicked</b>"
//     console.log("clicked on container")
// })
// // kitni baar mouse container mai aaya
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// })
// // kini baar mouse container sae out hua
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse out of container")
// })
// similary ther is mouseup and mousedown event


// Arrow Functions
function sum(a,b){
    return a+b;
}
// \this is equal to
sum = (a,b)=>{
    return a+b;
}


// 15. SetTimeout and setInterval
logkaro =()=>{
    console.log("i am your log")
}
setTimeout(logkaro,2000);// page reload karne kae baad 2 sec baad logkaro function chalega
// clr=setInterval(logkaro,2000) //har 2 sec baad logkaro function chalega
// set interval aur setTimeout ko rokne kae liye
//iskae liye clearInterval(clr)/clearTimeout(clr) ka use karengae console par


// 16. Local storage in javscript -->google it aur ss pde hai iskae
// localStorage.setItem('name','harry');
// localStorage;
// localStorage.getItem('name');
// localstorage.clear
// localStorage.removeItem('name')



//17. Json(javscript object notation)
var obj = {name:"harry",length:1};
var jso= JSON.stringify(obj);//convert object to string
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse(`{"name":"harry","length":1}`);
console.log(parsed)

// 18.Javascript Versions -google ecmascript ->it is a standad used to maintain javascript
// template literals - backticks
a=34;
console.log(`this is my ${a}`)





