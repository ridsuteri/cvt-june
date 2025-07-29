// **** GLOBAL SCOPE ******
var globalVar = 100;
let globalLet = 100;
const globalConst = 100;

console.log('globalVar', globalVar)
console.log('globalLet', globalLet)
console.log('globalConst', globalConst)

function test() {

  // ****** FUNCTION SCOPE *****
  var functionalVar = 200;
  let functionalLet = 200;
  const functionalConst = 200;
}

console.log('functionalVar', functionalVar)
console.log('functionalLet', functionalLet)
console.log('functionalConst', functionalConst)

if (10 == 10) {

  // ***** BLOCK SCOPE
  var blockVar = 300;
  let blockLet = 300;
  const blockConst = 300;
}

console.log('blockVar', blockVar)
console.log('blockLet', blockLet)
console.log('blockConst', blockConst)

