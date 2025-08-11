// 3 states of promises
// i. resolved - success
// ii. rejected - failed
// iii. pending - yet to be decided


// we can handle a promise in 2 ways
// i. .then().catch()
// ii. async await

// setTimeout(()=>{
//     return true
// },200)

// fetch('https://catfact.ninja/fact').then((response)=>{
//     console.log(response.status);
// }).catch((error)=>{
//     console.log('error occured with api')
// })

async function callApi(){
    const response = await fetch('https://catfact.ninja/fact')
    const status = response.status
    console.log(status);
}

callApi()


const student1 = new Student()
const myPromise = new Promise()