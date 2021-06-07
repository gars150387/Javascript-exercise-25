let guests = prompt('How many people are coming to your wedding?');
let g = parseInt(guests,10);

function getPrice(g){
    let cost = 0;
    // Your code here
    if (g > 200){
        return cost + 20000;
    }
    else if (g > 100 && g < 201){
        return cost + 15000;
    }
    else if (g > 50 && g < 101){
        return cost + 10000;
    }
    else{
        return cost + 4000;
    }
}

let price = getPrice(g);
console.log('Your wedding will cost $'+price+' dollars');