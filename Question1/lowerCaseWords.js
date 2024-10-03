// Mixed Function to lowercase words in an array
function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject("Input must be array.");
        }
        const lowerCased = arr
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());        // Lowercasing

        resolve(lowerCased);
    });
}
//Test1
lowerCaseWords([20, 'Happy', true, 'Boy'])
    .then(result => console.log(result))
    .catch(error => console.error(error));

//Test2
lowerCaseWords(['0', 'JavaScript', false , '9',42, 'Language', '-+'])
    .then(result => console.log(result))
    .catch(error => console.error(error));