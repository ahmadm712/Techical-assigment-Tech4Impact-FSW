// Soal - 03

// Kalian diminta untuk membuat fungsi yang mana akan mencari sebuah nilai didalam array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

//     fungsi harus ditulis menggunakan recursive
//     memiliki 2 parameter:
//         arr [Array] => array of number yang nanti akan kita cari value-nya
//         num [Number] => angka yang hendak kita cari
//     return value:
//         apabila kita tidak menemukan angka tersebut maka kita akan mengembalikan "angka tidak ditemukan"
//         apabila kita menemukan angka tersebut maka kita akan mengembalikan "angka ditemukan pada index: $INDEX"

const arr = [1, 2, 3, 4, 5];
function searchInArray( arr,num ) { 
    (arr.indexOf(num) === -1) ? console.log("Angka Tidak Di temukan") : console.log("Angka ditemukan pada index : " + arr.indexOf(num))
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

