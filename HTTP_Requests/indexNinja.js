//---------- HTTP Requests -----------
/*
Understanding the old way of making http requests with the xmlhttp this is mostly replaced but still usable. 
*/

const request = new XMLHttpRequest(); // <-- iNSTANTIATE REQEST
    request.addEventListener('readystatechange', () => {
        // console.log(
        //     request, //<-- log the instantiated object each change
        //     request.readyState //<-- log the readystate property from the object
        // )
        if(request.readyState === 4){
            console.log("Request successful");
            console.log(request.responseText);
        }
    }); // <-- Attaches a listener to the REQUEST 
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/') // <-- SETS UP REQUEST
    console.log(request.send());