/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE


for (i=1; i<=100; i++) {
    let j = 0
    let count = 0
    for(j = i; j >= 1; j = j - 1){
      if(i%j === 0){
        count = count + 1
      }
    }
    if(count === 2){
      console.log(i)
    }
 }



/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
const fiftiethPrime = 50;

/// EDIT HERE
let jumlah = 0

while(primeCounter <= 250){
  primeCounter++
  
  let count = 0
  for(j = primeCounter; j >= 1; j = j - 1){
    if(primeCounter%j === 0){
      count = count + 1
    }
  }
  
  if(count === 2){
    jumlah++
    
    if(jumlah === fiftiethPrime){
      console.log(primeCounter + " ke- " + jumlah + " Choosen")
    }else{
      console.log(primeCounter + " ke- " + jumlah)
    }
  }
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
const fiftiethOdd=50;
let jj = 0
/// EDIT HERE
do {
    oddCounter++
    if((oddCounter % 2) === 1){
      console.log(oddCounter)
      console.log("Ke - "+jj++)

      if(jj === fiftiethOdd){
        console.log("Bilangan Ganjil "+ jj +" adalah " + oddCounter)
      }
    }
} while (oddCounter<100)
