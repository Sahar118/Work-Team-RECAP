
var mathExpression = "";
var previousResults = [];
let operatorFlag = false;


function pushToExpression(symbol) {
    debugger
    if(Number.isInteger(parseInt(symbol))) {
        mathExpression += symbol;
        operatorFlag = false;
    }
    else {
        switch(symbol) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                if(operatorFlag === true) //illegal operation
                operatorFlag = true;
                mathExpression += symbol;
                break;
            default:
                //illegal operation
        }

    }

    document.getElementById("res").innerHTML = mathExpression;
    
}


function assignExpression() {
    let result = eval(mathExpression);
    previousResults.push(result);
    mathExpression = result;
    document.getElementById("res").innerHTML = result;
    return result;
}

console.log();