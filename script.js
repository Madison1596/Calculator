var containerEle = document.body.querySelector(".container");


var num1 = Number(prompt("Enter a number"));

if(num1==isNaN()){
   containerEle.HTML= num1
}else{
  containerEle.innerHTML="Error"
}

 var num2 = Number(prompt("Enter another number"));
  
 if(num1==isNaN()){
 containerEle.HTML = num1
}else{
  containerEle.innerHTML="Error"
}
  
var operator = prompt("Enter operator ( +, -, *,  / )")


var result;


if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = number1 / number2;
}
  
containerEle.innerHTML = "The answer is " +result;