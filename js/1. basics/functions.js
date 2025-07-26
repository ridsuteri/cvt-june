
// 1. function declaration
function sampleFunction() {
    console.log('hello, i am a sample function');
}

sampleFunction();


// 2. function expression
var funcExpression = function () {
    console.log('hello, i am a function expression');
}

funcExpression();

// 3. arrow function
var arrowFunExpression = () => {
    console.log('hello, i am a arrow function');
}

// field => field*2

arrowFunExpression();

// 4. Immediately Invoked function expression (IIFE)
(

function () {
    console.log('hello, i am a [IIFE] function expression');
}

)()


//*****  HIGHER ORDER FUNCTION *****
// Any function which can either accept another function as a parameter or return any function
// is called higher order function

function inner(){
    console.log('inner function')
}

// HOF ( higher order function )
function outer( functionToCall ){
    functionToCall()
    console.log('outer function')
}

outer(inner)

function wrapper(){
    return inner;
}

let result = wrapper();
result();