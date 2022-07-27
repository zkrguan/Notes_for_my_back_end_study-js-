/*
1 AJAX AND FETCH

Fetch API to make AJAX requests.
by calling the Constructor of request and supplied with 
    the location of the source,
    a set of options( in the object format)

*/

var myRequest = new Request('https://reqres.in/api/users/', { 
                    method: 'POST',
                    body: JSON.stringify({user:"John Doe", job:"unknown"}),
                    headers: {
                        'Content-Type': 'application/json'
                    } 
});

/**
 * Now the request is configured, we can fetch the data back by using FETCH
 * 
 * Fetch will return a promise back 
 * Resolve that promise, you will get a response object
 *      The response contains a lot of methods:
 *          e.g.    response.text()     read the response stream. This also returns a promise,
 *                      if resolved, you will get the json in the text format.
 *                  
 *                  response.json()     read the response stream. This can also return a promise
 *                      if resolved, you will get the result in the object format
 *  * 
 */

fetch(myRequest)
// first .then to resolve and get the response
.then(function(response) {
    return response.json();
    // second .then to resolve the promise returned from the response.json()
}).then(function(json){
    console.log(json); // here is the parsed JSON response 
});

// Chained up promises will be pretty common at the future work place//



