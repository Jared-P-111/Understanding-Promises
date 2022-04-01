//The Fetch API is built directly into the javascript library. Advantages are it requires far 
//less boilerplate to do an api call. It handles promises with elegance as well. 

const Luigi = fetch('./todos/luigi.json');

Luigi.then((response) => {
    return response.json()//<- Response.json returns a promise so you can't do JSON.parse(response) .json -> this returns a javascript object!
}).then((data) => {
    console.log(data);
    fetch('./todos/mario.json');
    return response
}).catch((error) => {
    console.log("Rejected: ", error);
})