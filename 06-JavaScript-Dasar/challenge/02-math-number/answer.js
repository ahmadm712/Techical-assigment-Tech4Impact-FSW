console.log("SOAL Pertama");

function rand(min, max) {
    if(min == null &&  max == null){
        return 0;
    }else if(max == null){
        max = min;
        min = 0
        
    }

    return Math.floor((Math.random() * (max - min + 1)) + min);
}


console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());

console.log("----------------");

console.log("SOAL Kedua");

function chooseDecimals(n, d) {

    return n.toFixed(d);
}


console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));

console.log("----------------");

console.log("SOAL Ketiga");

function isItNumeric(n) {
    if(n == " "){
        return false;
    }
    return  !(isNaN(n));
}

console.log(isItNumeric(12));
console.log(isItNumeric('abcd'));
console.log(isItNumeric('12'));
console.log(isItNumeric(' '));
console.log(isItNumeric(1.20));
console.log(isItNumeric(-200));

console.log("----------------");

console.log("SOAL Keempat");

function roundUpToFive(n) {
    return Math.ceil(n/5)*5;
}

console.log(roundUpToFive(32));
console.log(roundUpToFive(137));
console.log(roundUpToFive(142));

