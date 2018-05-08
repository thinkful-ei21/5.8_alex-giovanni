function fizzBuzz(countTo) {
    let fizzBuzzArr = [];
    for (let x = 1; x <= countTo; x++) {
        if (x%3 === 0 && x%5 ===0){
            fizzBuzzArr.push('fizzbuzz');
        }
        else if (x%3 === 0){
            fizzBuzzArr.push('fizz');
        }
        else if (x%5 === 0 ){
            fizzBuzzArr.push('buzz');
        }
        else {
            fizzBuzzArr.push(x);
        }
    }
    return fizzBuzzArr;
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  (function testFizzBuzz() {
    // we'll use the variables in our test cases
    const countTo = 16;
    const expected = [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
      16,
    ];
  
    const actual = fizzBuzz(countTo) || [];
  
    if (
      expected.length === actual.length &&
      expected.every(function(item, index) {
        return actual[index] === item;
      })
    ) {
      console.log('SUCCESS: fizzBuzz is working');
    } else {
      console.log('FAILURE: fizzBuzz is not working');
    }
  })();
  