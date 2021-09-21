

 **   membuat sebuah folder kosong dengan namamu sendiri**

    mkdir Ahmmad

    cd Ahmmad

 **   membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat
    "Halo perkenalkan aku halaman utama"**

    touch README.md
    echo "Perkenalkan Aku Halaman utama" > README.md

    **insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan
    "Inisialisasi Git Repository"**

    git init
    git add .
    git commit -m "Inisialisasi Git Repository"

   ** buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur**

    git branch cv

   ** pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat:
    "Ini adalah file CV"**

    git checkout cv
    touch cv.txt
    nano cv.txt

   ** kemudian dokumentasikan menggunakan commit dengan pesan
    "Inisialisasi CV"**

    git add cv.txt
    git commit -m "Inisialisasi CV"

   ** tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit
**
    echo "Skilvul" >> cv.txt
    git commit -am "menambahkan perusahaan pertama"
    echo "Bukalapak" >> cv.txt
    git commit -am "menambahkan perusahaan kedua"
    echo "Tokopedia" >> cv.txt
    git commit -am "menambahkan perusahaan ketiga"

   ** kembali ke branch master**

    git checkout master

    **ubah file README.md menjadi

    Halo perkenalkan aku halaman utama

    Ini adalah update pertama pada branch master

    jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
    "update master pertama"**

    echo "Ini adalah update pertama pada branch master" >> README.md
    git commit -m "update master pertama"

    **gabungkan branch cv kedalam branch master menggunakan perintah git merge**

    git merge cv

   ** unggah Git Repository tersebut kedalam GitHub**

    git remote add origin https://github.com/ahmadm712/Techical-Assigment-Github.git
    git branch -M main
    git push -u origin main

    Github repository
    
    
    
    
   [image](https://user-images.githubusercontent.com/66357389/134121005-dfb0c49d-91a0-4e8d-a4aa-c2b1861eacc5.png)

    
    
    
