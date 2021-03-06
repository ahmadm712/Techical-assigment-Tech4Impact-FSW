// Soal - 04

// Kamu diminta untuk membuat sebuah website yang mana akan menampilkan GitHub user, berikut adalah deskripsi dari program yang akan kalian buat:

//     buatlah file dengan nama 04-asynchronous.html dan 04-asynchronous-dom.js
//     copy and paste baris kode dibawah sesuai dengan file yang telah ditentukan
//     user akan memasukan username GitHub yang ingin dicari melalui GitHub API

//         apabila kita menemukan user tersebut maka ia akan menampilkan hasil seperti dibawah ini

//         skilvul

//         apabila kita tidak menemukan user tersebut maka kita akan menampilkan hasil seperti dibawah

//         skilvul

// Berikut merupakan langkah-langkah pengerjaan yang dapat kalian ikuti:

//     copy and paste fungsi yang sudah kalian buat pada soal-03 kedalam file 04-asynchronous-dom.js
//     ambil data dari form "username" serta jangan lupa untuk menggunakan preventDefault untuk mencegah agar jendela browser tidak terjadi refresh
//     setelah kita mengambil data "username", kita akan mengambil GitHub user menggunakan GitHub API

const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
  try {
    if (!username) {
      return null;
    }
    const data = await fetch("https://api.github.com/users/" + username);
    let res = await data.json();
    if (res?.login) {
      return res;
    }
    return { login: "Not Found" };
  } catch (error) {
    throw error;
  }
};

elFormUsername.onsubmit = async (event) => {
  event.preventDefault();

  const data = await getGitHubUser(elFormUsername.firstElementChild.value);
  elCardTitle.innerText = data.login;
  if (data.id) {
    elCardImg.src = data.avatar_url;
    elCardBtn.classList.remove("d-none");
    elCardImg.classList.remove("d-none");
  } else {
    elCardBtn.classList.add("d-none");
    elCardImg.classList.add("d-none");
  }
  elCard.classList.remove("d-none");
};
