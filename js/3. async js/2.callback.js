function login(sucessFunction){

    const response = fetch('http://localhost:3000/login') // psuedo code for fetching response
    if(response.statusCode == 200){
        sucessFunction()
    }
}

function showFeed(){
}


//***  bad way of dealing with sync and async piece of codes ***

// const response = login() // blocking in nature - will be hanlded in background
// response.statusCode == 200 ? showFeed() : console.log('login not success') // non blocking in nature 

//*****  better way of dealing with sync and async piece of codes *****
login(showFeed)

// 1(2(3(4)))

