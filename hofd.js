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

//console.log(filter(myNames, name => name[0] === 'R'));


function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;

    return function(location){
        warningCounter ++;
        let t = 'time';
        if(warningCounter >1){t = 'times'};
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${t} today!`)

    }
}
/*
const rocksWarning = hazardWarningCreator('Rocks on the Road');

rocksWarning('portland');
rocksWarning('chicago');
rocksWarning('Los Angeles')

const coffeeWarning = hazardWarningCreator('not enough coffeee');

coffeeWarning('portland')
*/

let turtleArr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtleArr = turtleArr.filter(function(x){
    return x[0] < 0 || x[1] < 0? false: true;
})
turtleArr = turtleArr.map(function(x){return x[0]+x[1]}).forEach(x=>console.log(x));
//turtleArr.forEach(x=>console.log(x));
//console.log(turtleArr);



let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'

function reducer(accumulated, passed){
    if(passed.length === 3){return accumulated += ' '}
    else{return accumulated += passed[passed.length-1].toUpperCase()};
}


console.log(input.split(' ').reduce(reducer, ''))

