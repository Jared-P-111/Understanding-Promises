
// Promise Example
//First thing with promises is return a new Promise() remember that a promise has two outcomes.
//1: it is an error or it resolves to doing something. 
const getSomething = () => {
    //Promises have the keywords "resolve" and "reject" built into the API
    return new Promise((resolve, reject) => {
        //fetch something
        resolve('some data');//<- Passed through to the .then 
        reject('some error');//<-- also if there passed through to the .then
    });
}


//By calling getSomething it instantiates the new Promise.
//When we get a new promise back from a function like below. We can use the .then method.
//By passing a function into the .then its saying okay when the promise is returned I will fire this 
//function. "Callback" remember the data is passed through. Only one of the two can fire.if its an error 
//the catch will get it if its data .then will pass it. 
getSomething().then((data) => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

//This is a fully functional promise with api call this is the working example of above. 
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
getTodos('./todos/luigis.json').then(data => {
    console.log('promise resolved', data);
}).catch(error => {
    console.log('promise rejected', error);
})