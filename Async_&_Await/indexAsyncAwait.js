// Async & Await are two keywords that allow us to have asyncronus functions that will return a promise
// This lets us create cleaner code then all the other types of promise's especially for promise chaining. 

const getTodos = async () => { //ASYNC always returns a promise. 
    const responseLuigi = await fetch('./todos/luigi.json');//<-- we don't need .then here cause await returns a promise and await stops JS from assigning befofe a return from fetch
    const data = await responseLuigi.json();// Remember fetch returns a promise, use .json to get data, which returns a promise, the await will return the data. 

    //How to chain mario to the fetch's
    const responseMario = await fetch('./todos/mario.json');
    const marioData = await responseMario.json();
    return [marioData, data];
}

//This last .then is done outside the async function and it will return the data. 
getTodos().then((data) => {
    console.log(data)
})


