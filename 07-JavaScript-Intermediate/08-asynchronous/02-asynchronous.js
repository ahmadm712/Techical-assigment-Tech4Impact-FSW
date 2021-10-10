// Kamu diminta untuk membuat sebuah fungsi yang akan melakukan pengecekan apakah seseorang sudah memasuki usia dewasa atau tidak, berikut adalah deskripsi fungsi tersebut:

//     name => isR18Plus
//     parameter
//         age [Number] => usia user dalam satuan tahun
//     return value => Promise
//         mengembalikan "anda sudah dewasa" menggunakan resolve apabila age user sudah melebihi 18 tahun
//         mengembalikan "anda masih dibawah umur" menggunakan reject apabila age user sudah kurang dari 18 tahun
//     clue
//         gunakan Promise
//         resolve dapat kita gunakan untuk mengembalikan hasil yang benar
//         reject dapat kita gunakan untuk mengembalikan hasil yang salah
//         Error dapat kita gunakan untuk mengembalikan nilai berupa reject

const isR18Plus = (  ) => { }
const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underage);
  console.log(properAge);
}

printR18Plus();

