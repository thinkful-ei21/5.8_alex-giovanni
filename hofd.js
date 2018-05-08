function repeat(fn, n){
    for(x = 0; x<n ; x++){
        fn();
    };
};

function hello(){console.log('Hello world')};
function goodbye(){console.log('Goodbye world')};

//repeat(hello, 5);
//repeat(goodbye, 5);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

//console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
    let newArr = [];
    for (let x = 0; x < arr.length; x++){
        if(fn(arr[x])){newArr.push(arr[x])}
    }
    return newArr;
}

console.log(filter(myNames, name => name[0] === 'R'));
