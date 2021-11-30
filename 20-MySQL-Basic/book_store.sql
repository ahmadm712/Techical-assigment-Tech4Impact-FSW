-- Show Database
SHOW DATABASES;

-- Create Databases
CREATE DATABASE bookstore;

-- USe Db
USE bookstore;

-- Show Table
SHOW TABLES;

-- Create Table
CREATE TABLE books(
    id INT AUTO_INCREMENT PRIMARY_KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title VARCHAR(100),
    description TEXT,
    place_sell CHAR(3),
    stock INT DEFAULT 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Update Column
ALTER TABLE
    books
ADD
    price INT DEFAULT 0,
ADD
    status ENUM('available', 'out of stock', 'limited'),
    DROP COLUMN place_sell;

-- Insert Data
INSERT INTO
    books
VALUES
    (
        '',
        'Andrew Hunt',
        'David Thomas',
        '',
        'The Pragmatic Programmer: Your Journey to Mastery',
        'The Pragmatic Programmer merupakan salah satu buku programmer paling terkenal di dunia. Diterbitkan pertama kali tahun 1999, buku ini akan memberikan Anda segudang informasi berharga terkait dunia programming yang mudah untuk dipahami.',
        66,
        '2021-11-12',
        99000,
        'available'
    ),
    (
        '',
        'Harold Abelson',
        'Gerald Jay Sussman',
        'Julie Sussman',
        'Structure and Interpretation of Computer Programs',
        'Dikenal luas dengan sebutan SICP, buku ini dibuat berdasarkan materi kuliah programming di Massachusetts Institute of Technology (MIT). ',
        '',
        '2011-12-13',
        700000,
        'out of stock'
    ),
    (
        '',
        'Steve McConnel',
        '',
        '',
        'Code Complete: A Practical Handbook of Software Construction',
        'A #1 internationally bestselling book of spiritual wisdom about learning to love ourselves, with all our imperfections.',
        7,
        DEFAULT,
        999000,
        'limited'
    ),
    (
        '',
        'Robert C. Martin',
        '',
        '',
        'Robert C. Martin',
        'Seperti namanya, buku coding ini mengajarkan Anda untuk menulis kode “sebersih” mungkin.',
        8,
        '2010-11-12',
        780000,
        'available'
    );

-- SELECT BOOKS
SELECT
    *
FROM
    books;

-- SELECT ALIAS
SELECT
    id AS ID,
    author1 AS A1,
    author2 AS A2,
    author3 AS A3
FROM
    books;

-- SELECT WITH COMMON ID
SELECT
    *
FROM
    books
WHERE
    id = 2;

-- SELECT WITH AND
SELECT
    *
FROM
    books
WHERE
    price > 100000
    AND price <= 200000;

-- SELECT WITH OR
SELECT
    *
FROM
    books
WHERE
    status = 'limited'
    OR status = 'out of stock';

-- SELECT WITH NOT
SELECT
    *
FROM
    books
WHERE
    author2 != 'John Marrs';

-- ORDER BY
SELECT
    *
FROM
    books
ORDER BY
    id ASC;

-- LIMIT
SELECT
    *
FROM
    books
LIMIT
    2;

-- UPDATE DATA
UPDATE
    books
SET
    author1 = 'Haemin Sunim',
    price = 190000
WHERE
    id = 3;

-- DELETE DATA
DELETE FROM
    books
WHERE
    id = 1;