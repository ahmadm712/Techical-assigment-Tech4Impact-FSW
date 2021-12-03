--- CREATE database bernama skilvulbookstore
create database skilvulbookstore;

use skilvulbookstore;

--- Buatlah table bernama penerbit dengan attribute/column yang berisi:
create table penerbit(
    id int(10) auto_increment primary key not null,
    nama varchar(50),
    kota varchar(50)
);

--- Buatlah table bernama penulis dengan attribute/column yang berisi:
create table penulis(
    id int(10) auto_increment primary key not null,
    nama varchar(50),
    kota varchar(50)
);

--- insert data penerbit
insert into
    penerbit(nama, kota)
values
    ('Nasional Book', 'Bojonogoro'),
    ('Satria Book', 'Kertajati'),
    ('Gramedia Solo', 'Solo'),
    ('Gramedia Pusat', 'Jakarta');

--- insert data penulis
insert into
    penulis(nama, kota)
values
    ('Ahmad Syafii', 'Arab'),
    ('Dustin Tiffany', 'Bandung'),
    ('Tretan Muslim', 'Madura');

--- Buatlah table bernama buku lengkap dengan relasi terhadap penulis dan penerbit dengan attribute/column yang berisi:
create table buku(
    id int(10) auto_increment primary key not null,
    isbn varchar(50),
    judul varchar(50),
    penulis int(10),
    penerbit int(10),
    harga int(10),
    stock int(10),
    constraint fk_buku_penulis foreign key(penulis) references penulis(id),
    constraint fk_buku_penerbit foreign key(penerbit) references penerbit(id)
);

--- insert data buku
insert into
    buku
values
    (
        '',
        '78798711',
        'The Pragmatic Programmer: Your Journey to Mastery',
        1,
        1,
        99000,
        66
    ),
    (
        '',
        '46544564',
        'Structure and Interpretation of Computer Programs',
        3,
        3,
        700000,
        77
    ),
    (
        '',
        '414654654',
        'Code Complete: A Practical Handbook of Software Construction',
        2,
        2,
        999000,
        94
    ),
    (
        '',
        '7879778',
        'Seperti namanya, buku coding ini mengajarkan Anda untuk menulis kode “sebersih” mungkin.',
        1,
        1,
        780000,
        77
    );

--- Lakukan INNER JOIN dari table buku terhadap table penerbit
select
    buku.id,
    isbn,
    judul,
    penulis,
    penerbit.nama as penerbit,
    harga,
    stock
from
    buku
    inner join penerbit on buku.penerbit = penerbit.id;

--- Lakukan LEFT JOIN dari table buku terhadap table penerbit
select
    buku.id,
    isbn,
    judul,
    penulis,
    penerbit.nama as penerbit,
    harga,
    stock
from
    buku
    left join penerbit on buku.penerbit = penerbit.id;

--- Lakukan RIGHT JOIN dari table buku terhadap table penerbit
select
    buku.id,
    isbn,
    judul,
    penulis,
    penerbit.nama as penerbit,
    harga,
    stock
from
    buku
    right join penerbit on buku.penerbit = penerbit.id;

--- Cek nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10
select
    MAX(harga)
from
    buku
where
    stock < 10;

--- Cek nilai MIN dari column harga pada table book
select
    MIN(harga)
from
    buku;

--- Gunakan COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000
select
    COUNT(*)
from
    buku
where
    harga < 100000;