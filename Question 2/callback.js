// Function that resolves after a delay
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}; //output for resolve
            resolve(success); // Resolve the promise
        }, 500);
    });
}
// Function that rejects after a delay
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!'); // output for error
            } catch (e) {
                reject(e.message); // Reject the promise
            }
        }, 500);
    });
}

//Test
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));  //error handling

rejectedPromise()
    .then(result => console.log(result)) //result
    .catch(error => console.log(error));
