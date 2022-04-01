
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

//This is callback hell and it can get crazy could you imagine 20 callbacks all in order? NO good... for this we use promises.
getTodos(`./todos/luigi.json`, (err, data) => {
    console.log(data);
    getTodos('./todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('./todos/yoshi.json', (err, data) => {
            console.log(data);
        })
    })
});


