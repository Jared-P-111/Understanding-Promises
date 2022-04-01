
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4){
            callback('Could not fetch data', undefined);
        }
    })
    request.open('GET', resource);
    request.send();
}

// Promise Example
//First thing with promises is return a new Promise() remember that a promise has two outcomes.
//1: it is an error or it resolves to doing something. 
const getSomething = () => {
    //Promises have the keywords "resolve" and "reject" built into the API
    return new Promise((resolve, reject) => {
        //fetch something
        resolve('some data');
        reject('some error');
    });
}


