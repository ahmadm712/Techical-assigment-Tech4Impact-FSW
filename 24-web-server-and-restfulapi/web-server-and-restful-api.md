1. Apa perbedaan antara static web server dan dynamic web server?

   Website Dinamis (Dynamic Website) adalah jenis halaman web yang disusun oleh konten dan layout yang kaya akan informasi didalamnya.

   Kemudian, website Statis (Static Website) adalah sebuah website yang kontennya statis / tidak berubah-ubah. Sekali dibuat dan online di Internet, pada umumnya website tersebut tidak dapat diubah kecuali diubah secara manual melalui pengubahan bahasa pemograman website tersebut. Oleh karena itu, terjadinya interaksi pun jarang sekali, sehingga dapat dikatakan seperti brosur online karena informasi yang diberikan juga terbatas.

2. Jelaskan arsitektur static site dan dynamic site

   Arsitektur dari static site adalah browser akan melakukan request ke web server, di dalam web server tersebut terdapat file html, css, javascript dan file pendukung lainnya, kemudian server akan mengirimkan response file tersebut ke browser.

   Arsitektur dari dynamic site adalah seperti berikut ini client melakukan request ke web server dengan request methodnya yang kemudian masuk ke web server dan diarahkan ke web application, di dalam web application akan ada processing data sesuai dengan methodnya untuk dikomunikasikan ke database, kalau get maka akan dilakukan pengambilan data dari database, data yang sudah didapatkan tersebut akan disematkan di dalam html kemudian diberikan ke web server bersama dengan static resource yang ada, baru akhirnya diberikan response ke client dan tampil di browsernya.

3. Apa saja yang dapat kita buat pada sisi server?

   Penyimpanan dan pengirimian informasi yang efisien
   User experience yang disesuaikan dengan menggunakan informasi pengguna yang disimpan pada server sehingga dapat memberikan user experience yang nyaman dan sesuai dengan pengguna
   Pengontrolan akses terhadap konten yang disediakan, akses terhadap konten dibatasi hanya untuk pengguna yang berwenang dan diizinkan
   Penyimpanan informasi session/state

4. Mohon jelaskan apa itu RESTful?

   REST API merupakan salah satu dari desain arsitektur yang terdapat di dalam API itu sendiri. Dan cara kerja dari RESTful API yaitu REST client akan Melakukan akses pada data/resource pada REST server dimana masing-masing resource. Atau data/resource tersebut akan dibedakan oleh sebuah global ID atau URIs (Universal Resource Identifiers).

   Jadi, Nantinya data yang diberikan oleh REST server itu bisa berupa format text, JSON atau XML. Dan saat ini format yang paling populer dan paling banyak digunakan adalah format JSON.

5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)

   GET, berfungsi untuk membaca data/resource dari REST server
   
   POST, berfungsi untuk membuat sebuah data/resource baru di REST server
   
   PUT, berfungsi untuk memperbaharui data/resource di REST server
   
   DELETE, berfungsi untuk menghapus data/resource dari REST serve
   
   OPTIONS, berfungsi untuk mendapatkan operasi yang disupport pada resource dari REST server.

6. Apa fungsi dari Response Codes?

    membantu mengidentifikasikan masalah ketika ada sebuah halaman web atau resource yang tidak termuat dengan benar
