function fizzBuzz() {  
    // Your code here
for (let i=0; i<100; i++){
  console.log(i)
  if (i % 3 === 0 ){
    console.log('Ping')
  }
  else if (i % 5 === 0){
    console.log('Pong')
  }
  else if (i % 3 === 0 || i % 5 === 0){
    console.log('PingPong')
  }
}
}

console.log(fizzBuzz(100));