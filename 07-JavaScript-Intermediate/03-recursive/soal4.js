// Soal - 04

// Kalian diminta untuk membuat fungsi yang mana nantinya akan mencetak sebuah piramida alfabet, fungsi tersebut memiliki spesifikasi sebagai berikut:

//     fungsi harus ditulis menggunakan recursive

//     memiliki 2 parameter yang identik dengan tipe data Number, hal ini kita butuhkan untuk membuat sebuah perulangan menggunakan recursive

//     bentuk segitiga dapat kalian cetak menggunakan console.log didalam fungsi trianglePattern

//     kalian hanya diperbolehkan untuk membuat "1 BUAH TRADITIONAL LOOP", hal ini untuk mempermudah kalian dalam proses penyelesaian tugas.

//     akan tetapi kalian juga diperbolehkan untuk menyelesaikan soal ini tanpa menggunakan traditional loop

function trianglePattern(a,b) {
    if (a === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < b; i++) {
        if (i < a - 1) {
            space += " " 
        }else{
         space += String.fromCharCode(64 + (b - a + (i - a) + 2))
        }
    }
    console.log(space);
    trianglePattern(a - 1, b)
}

trianglePattern(5, 5);
