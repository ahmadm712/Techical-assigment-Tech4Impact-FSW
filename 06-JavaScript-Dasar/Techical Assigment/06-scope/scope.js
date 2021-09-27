/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// Jawaban

/// Ada 3 variable scopes : 
/// - Block scope: variables that are declared using `let` and `const` in a {} block cannot be accessed from outside the block (Variables declared using `var` can not have block scope since it is accessible outside the block).
/// - Local / function scope : variables that are declared inside a function and are not accessible outside the function (created when a function starts and deleted when the function is completed).
/// - Global scope: variables declared outside a function and are accessible throughout the file.
/// implementation:

/// Block scope
{
    let a = 712;
  }
  console.log(a); // error
  
  {
    let a = 712;
    console.log(a); // 77
  }
  
  /// Local / function scope
  function myname(){
    let b = "Ahmmad";
    console.log(b);
  }
  console.log(b); // error
  myname(); //"Ahmmad"
  
  /// Global scope
  let c = "Ahmmad";
  console.log(c); // "Ahmmad"
  
  function myname(){
    console.log(c);
  }
  myname(); // "Ahmmad"

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// Jawaban
/// - Console.log akan mereturn atau menampilkan kata Mariah
/// - Pengembalian tidak akan menjadi "John" karena "nama" dalam fungsi printFirstName adalah parameter, bukan "nama" variabel global yang berisi "John Watson".
/// - Kemudian, di konsol.log, pengguna memasukkan argumen "Mariah Carey" yang akan menjadi parameter "nama" dalam fungsi printFirstName. 
/// - Oleh karena itu, hasilnya adalah "Mariah", bukan "Jhon".
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
