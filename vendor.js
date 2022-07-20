// const defultResult = 0;
// let calc = defultResult;

// function add(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// calc = add(1,2);
// let calculatonDescription = `(${defultResult} + 10) * 3`;
// results(calculatonDescription, calc);

const defultResult = 0;
let calc = defultResult;
let logEntries = [];
//function to dynamically write the outputs
function createAndWriteOutPut(operator, initialValue, inputData) {
  //39
  const calculatonDescription = `${initialValue} ${operator} ${inputData}`;
  results(calculatonDescription, calc);
}

//fun to make dynamic object for operation data
function writeToLog(operationIdentifier, prev, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prvResult: prev,
    num: operationNumber,
    resut: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
//get user input value
function getInputValue() {
  return input.value;
}

// function add() {
//   const inputValue = getInputValue(); //5lenaha more dynamic
//   let firstVlaue = calc; //0 5
//   calc = calc + Number(inputValue); //input always take a string so it concats it with calc so we make it a number by number fun 36 /5 7
//   createAndWriteOutPut("+", firstVlaue, inputValue); //5 7 2
//   writeToLog('add', firstVlaue, inputValue, calc)
//   //  const logEntry = {
//   //    operation:'add',
//   //    prvResult:firstVlaue,
//   //    num: inputValue,
//   //    resut: calc
//   //  };
//   // logEntries.push(writeToLog("add"));
//   // console.log(logEntries);
//   // results(calculatonDescription, calc); //it will excute when the button is clicked with the fun if i put it outside it will run when the script initially runs //34
// }

// function minus() {
//   const inputValue = getInputValue();
//   let firstVlaue = calc;
//   calc = calc - Number(inputValue);
//   createAndWriteOutPut("-", firstVlaue, inputValue);
// }

// function getMultiply() {
//   const inputValue = getInputValue();
//   let firstVlaue = calc;
//   calc = calc * Number(inputValue);
//   createAndWriteOutPut("*", firstVlaue, inputValue);
// }

// function getDivide() {
//   const inputValue = getInputValue();
//   let firstVlaue = calc;
//   calc = calc / Number(inputValue);
//   createAndWriteOutPut("/", firstVlaue, inputValue);
// }

function calculate(operation) {
  const inputValue = getInputValue();
  let firstVlaue = calc;
  let operate ;

  if (operation === "add") {
    calc = calc + Number(inputValue);
    operate = '+'
  } else if (operation === "subtract") {
    calc = calc - Number(inputValue);
    operate = '-'
  } else if (operation === "divide") {
    calc = calc / Number(inputValue);
    operate = '/'
  } else if (operation === "multiply") {
    calc = calc * Number(inputValue);
    operate = '*'
  }
  createAndWriteOutPut(operate, firstVlaue, inputValue);
  writeToLog(operation, firstVlaue, inputValue, calc);
}
console.log('x')

plus.addEventListener("click", calculate.bind(this,"add"));
subtract.addEventListener("click", calculate.bind(this,"subtract"));
multiply.addEventListener("click", calculate.bind(this,"divide"));
divisin.addEventListener("click", calculate.bind(this,"multiply"));
