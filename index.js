// Code your solutions in this file
for( let age = 30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for(let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);


const names = ['Charlie','Samip','Ali'];
let eventName= 'birthday';
function writeCards(names, eventName){

    let message = [];

    for(let i= 0; i<names.length; i++){
        
    message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    console.log(message);
    return message;
}

writeCards(names, 'birthday');


function countDown() {
    let shoeSize = 10;
    while(shoeSize >= 0){
    console.log(shoeSize)
    shoeSize--;
    }
    return shoeSize;
}
countDown();