function fizzBuzz() {  
    // Your code here
    for (let i =0;i<100;i++){
        if(i % 3 == 0){
            return 'Fizz';
        }
        else if (i % 5 ==0){
            return 'Buzz';
        }
        else if ( i % 3 == 0 && i % 5 ==0){
            return 'FizzBuzz';
        }
        else {
            return i;
        }
    }
}

console.log(fizzBuzz(100));