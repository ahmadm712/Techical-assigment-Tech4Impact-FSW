// Soal - 01

// Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

//     fungsi harus ditulis menggunakan recursive
//     memiliki 1 parameter:
//         arr [Array] => array of number yang nanti kita akan cari jumlahnya
//     return value [Number] => nilai kembalian berupa sebuah Number

// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
  let sum = 0;
  arr.forEach((items) => {
    if (Array.isArray(items)) {
      sum += sumOfArray(items);
    } else {
      sum += items;
    }
  });
  return sum;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));