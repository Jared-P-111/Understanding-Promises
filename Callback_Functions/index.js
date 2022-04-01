
//  Using callbacks allows us to be more verstile this is a way to make a function that can be called
//  When we need to make a request. Thus making more reusable code. 

//This function can be called to make a request. 
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4){
            callback('Could not fetch data', undefined);
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

//  Here we specify a callback as a paramater to the getTodo function, we also pass 2 paramaters to the callback
//  the err and the data. Remember that this is asynchronus because the callback is fired but a response isn't 
//  needed for the stack to continue. A external thread picks it up to do on the side. Upon completion the callback
//  is fired and the response is logged. 

console.log(1);
console.log(2);

getTodos((err, data) => {
    if(err){
        console.log(err)
    } else{
        console.log(data)
    }
});

console.log(3);
console.log(4);


