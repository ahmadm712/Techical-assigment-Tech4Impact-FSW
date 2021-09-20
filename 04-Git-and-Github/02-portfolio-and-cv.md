

    membuat sebuah folder kosong dengan namamu sendiri

    mkdir Ahmmad

    membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat
    "Halo perkenalkan aku halaman utama"

    touch README.md
    nano README.md

    insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan
    "Inisialisasi Git Repository"

    git init
    git add .
    git commit -m "Inisialisasi Git Repository"

    buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur

    git branch cv

    pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat:
    "Ini adalah file CV"

    git checkout cv
    touch cv.txt
    nano cv.txt

    kemudian dokumentasikan menggunakan commit dengan pesan
    "Inisialisasi CV"

    git add cv.txt
    git commit -m "Inisialisasi CV"

    tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit

    nano cv.txt
    git commit -am "menambahkan perusahaan pertama"
    nano cv.txt
    git commit -am "menambahkan perusahaan kedua"
    nano cv.txt
    git commit -am "menambahkan perusahaan ketiga"

    kembali ke branch master

    git checkout master

    ubah file README.md menjadi

    Halo perkenalkan aku halaman utama

    Ini adalah update pertama pada branch master

    jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
    "update master pertama"

    nano README.md
    git commit -am "update master pertama"

    gabungkan branch cv kedalam branch master menggunakan perintah git merge

    git merge cv

    unggah Git Repository tersebut kedalam GitHub

    git remote add origin https://github.com/iam-ahmadm712/02-portfolio-and-cv.git
    git branch -M main
    git push origin main

    Github repository
