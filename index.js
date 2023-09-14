let num1;
let num2;
let sign;

const output=document.getElementById("output");
const buttons=document.getElementById("buttons");
const operators=document.getElementsByClassName("operator");


buttons.addEventListener("click",(event)=>{
  const button = event.target;

  if (button.classList.contains("number") && sign && num2){
    output.textContent+=button.value;
    num2=output.textContent;

    } else  if (button.classList.contains("number") && sign){
      output.textContent=""
      output.textContent+=button.value;
      num2=output.textContent;   

    } else if (button.classList.contains("number")){
      output.textContent+=button.value;
      num1=output.textContent;

    } else if (button.classList.contains("operator")){
      const operator = event.target;
      sign=operator.value;
    }
  })



function operate(num1,num2,sign){
  if (sign==="+"){
    add(num1,num2);
  }else if (sign==="-"){
    subtract(num1,num2);
  }else if (sign==="*"){
    multiply(num1,num2);
  }else if (sign==="/"){
    divide(num1,num2);
  }
}

function add(a,b){
  return a+b;
}  

function subtract(a,b){
  return a-b;
}  

function multiply(a,b){
  return a*b;
}  

function divide(a,b){
  return a/b;
}  

