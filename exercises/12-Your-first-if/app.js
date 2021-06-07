var total = prompt('How many km are left to go?');
let k = parseInt(total,10)

// Your code below:
if( k > 100){
    console.log('We still have a bit of driving left to go');
}
else if(k > 50){
    console.log("We'll be there in 5 minutes");
}
else{
    console.log("I'm parking. I'll see you right now");
}