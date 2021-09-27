/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// Jawaban 
/// - Type Error: kesalahan yang terjadi ketika variabel atau parameter bukan dari tipe yang valid, misalnya ketika kita mencoba menggunakan .toUpperCase() ke variabel numerik.
/// - Reference Error : kesalahan yang terjadi saat dereferencing referensi yang tidak valid, misalnya ketika kita mencoba untuk memanggil variabel yang belum didefinisikan.
/// - Range Error : kesalahan yang terjadi ketika variabel numerik atau parameter berada di luar jangkauan yang valid, misalnya ketika kita mencoba untuk melewati nilai buruk ke Number.prototype.toExponential(), Number.prototype.toFixed() atau Number.prototype.toPrecision().
/// - Syntax Error : eror yang terjadi ketika ada kesalahan sintaks, misalnya ketika kita mencoba untuk kode '1.toUpperCase()' atau apa pun yang bukan sintaks yang valid dalam JavaScript.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// Jawaban 
/// - Output akan menjadi '150000000' untuk konsol pertama.log dan 'ReferenceError: salaryWithConst tidak didefinisikan' untuk yang kedua.
/// - Reference Error
/// - Alasannya: ini adalah implementasi JavaScript Hoisting, yang merupakan perilaku default JavaScript untuk memindahkan deklarasi ke atas.
/// - SalaryWithVar akan return 15000000 sejak dinyatakan menggunakan VAR. Variabel yang dinyatakan dengan VAR akan diangkat dan diinisialisasi, oleh karena itu dapat digunakan sebelum dinyatakan.
/// - salaryWithConst akan retuen ReferenceError karena dinyatakan menggunakan const. Variabel yang dinyatakan dengan const diangkat tetapi tidak diinisialisasi, oleh karena itu tidak dapat digunakan sebelum dinyatakan.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
