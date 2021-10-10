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

const isR18Plus = (age) => {
  return new Promise((resolve, reject) => {
    age > 18
      ? resolve("Anda sudah dewasa")
      : reject("Anda masih dibawah umur");
  });
};

const printR18Plus = async () => {
  try {
    const underAge = await isR18Plus(10);
    const properAge = await isR18Plus(20);

    console.log(underAge);
    console.log(properAge);
  } catch (error) {
    console.log(error);
  }
};

printR18Plus();
