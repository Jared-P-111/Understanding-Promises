//The get todos functiont that creates a promise each time it is called.
//the promise then uses an XMLHttpRequest to "GET" the data from the API.
//From that API call we can determine if its an error or a resolved call. 

const getTodos = (resource) => {
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('Error getting resource');
            }
        })
        request.open('GET', resource);
        request.send();
    })
}

//This is promise chaining the return gives a new promise which lets us call the next request
//The thing to note is that the catch function at the end will catch any error with any chained
//promise. 

getTodos('./todos/luigi.json').then(data => {
    console.log('promise 1 resolved', data);
    return getTodos('./todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data)
    return getTodos('./todos/yoshi.json');
}).then(data => {
    console.log('promise 3 resolved:', data)
}).catch(error => {
    console.log('promise rejected', error);
})