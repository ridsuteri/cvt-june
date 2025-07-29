let a = 10;
let b = a;
b = 20;

// console.log('a :', a)
// console.log('b :', b)

let obj1 = {
    a: 10,
    nested: {
        nestedA: 10
    }
}

// let obj2 = obj1;  // bad way to copy objects

// spread operator
// let obj2 = {...obj1}; // better way to copy objects -> delinking the object reference

let obj2 = JSON.parse(JSON.stringify(obj1)) // best way to copy objects
obj2.a = 20;
obj2.nested.nestedA = 20;

console.log('obj1.nested :', obj1.nested.nestedA)
console.log('obj2.nested :', obj2.nested.nestedA) 