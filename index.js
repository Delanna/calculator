let num1;
let num2;
let sign;

const output=document.getElementById("output");
const buttons=document.getElementById("buttons");
const operators=document.getElementsByClassName("operator");
const clearBtn=document.getElementById("clear");
const equalBtn=document.getElementById("equal");


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

    } else if (button.classList.contains("operator") && num1 && num2 && sign){
      const operator = event.target;
      output.textContent=operate(num1,num2,sign);
      num1=output.textContent;
      num2=0;
      sign=operator.value;

    } else if (button.classList.contains("operator")){
      const operator = event.target;
      sign=operator.value;
    }
  })


equalBtn.addEventListener("click",()=>{
  output.textContent=operate(num1,num2,sign);
  num1=operate(num1,num2,sign);
  num2=0;
  sign="";
});

clearBtn.addEventListener("click",clear);


function operate(num1,num2,sign){
  if (sign==="add"){
    return add(parseInt(num1),parseInt(num2));
  }else if (sign==="subtract"){
    return subtract(num1,num2);
  }else if (sign==="multiply"){
    return multiply(num1,num2);
  }else if (sign==="divide"){
    return divide(num1,num2);
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


function clear(){
  num1=0;
  num2=0;
  sign="";
  output.textContent="";
}