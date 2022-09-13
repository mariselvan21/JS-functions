//function declaration
// function add(value1,value2){
//     var x=value1;
//     var y=value2;
// return  sum=x+y;//return value go to function calling 
// }
// //function calling
// console.log(add(5,4));
// console.log(add(20,10));
// //function called to button onclick time 
// function changeValue(){
//     a=100;
//     b=200;
//     console.log(a+b);
// }
// var sub=(value1,value2) => {
//     return sub=value1-value2;
// }
// console.log(sub(5,2));

var a=parseInt(prompt("Enter the any number"));
var b=parseInt(prompt('Enter the another number'));
var operator=prompt('Enter the any operator');
function calculation(){
switch(operator)
{
    case '+':
        console.log('Addition' );
        console.log(a+b);
        break;
    
    case '-':
        console.log('subtraction');
        console.log(a-b);
        break;

    case '*':
        console.log('multiplication');
        console.log(a*b);
        break;

    case '/':
        console.log('division');
        console.log(a/b);
        break;
    
    case '^':
        console.log("power value");
        console.log(Math.pow(a,b));
        break;

    case '%':
        console.log("modulo value");
        console.log(a%b);
        break;
}
}

calculation();