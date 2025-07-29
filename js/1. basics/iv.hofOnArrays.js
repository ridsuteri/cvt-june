let array = [10, 20, 30, 40, 50, 60];

const logElement = function (element){
    console.log(element)
}

const doubleElement = function (element){
    return 2*element
}

const multipleOf4 = function (element){
    if(element%4 == 0){
        return element
    }
}

const summationOfElements = function(accumulator, element){
    return accumulator = accumulator + element
    //  30 = 10 + 20
}


// iteration on array elemnts

// it iterates over each element of the function and gives you the power to run a function for every element

// let transformedArray =  array.forEach(doubleElement)

// array.forEach(function (element){
//     console.log(element)
// })


// targetArray.forEach( functionToCall(element, index, targetArray) ){
    // start iterating over the target array
    //  call this functionToCall in evry iteration
// }


// let transformedArray = array.map(doubleElement)

// let transformedArray =  array.filter(multipleOf4)


let reducedValue = array.reduce(function(accumulator, element){
    return accumulator = accumulator + element
    //  30 = 10 + 20
},0)

console.log(reducedValue)

// array.find()
// array.sort()

// console.log(transformedArray)
// console.log('original array', array)