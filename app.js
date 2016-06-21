//

var pro = 'Hello World!';


// to get to 1

console.log(pro.indexOf('e'));

//to get NaN
console.log(Number(pro));

//to get ['H', 'e', 'l','l','o']

console.log(pro.slice(0, 5).split(''));

// to get "string"

console.log(typeof pro);

// to get 9

console.log(pro.slice(0,9).length);

// to get 'e'
console.log(pro.charAt(1));

// to get "HELLO WORLD!"
console.log(pro.toUpperCase());

// to get "Hello World?"
console.log(pro.replace('!', '?'));

//to get "'ello"
console.log(pro.slice(0, 5).replace('H', '\''));

//to get "!dlroW olleH"
console.log(pro.split('').reverse().join(''));

//to get "1111"
console.log(pro.slice(0,4).replace('Hell', '1111'));

//to get ["Hello", "World!"]
console.log(pro.split(' '));
