let person = {
    // properties
    name: 'riddhi',
    age: 23,
    gender: 'm',

    // methods
    teach: function (){
        console.log('he teaches')
    },

    code: function (){
        console.log('he codes')
    },

    age: 99,
}

person.employed = true;
delete person.age;

let propertyToRefer = 'age'
// dot notation
// console.log(person.name);

// console.log('trying to access property: ', propertyToRefer);

// square bracket notation
// console.log(person[propertyToRefer]);
// console.log(person['gender']);

// console.log(person);

for (let key in person){
 console.log(key, ': ', person[key]);   
}