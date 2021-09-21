#### 1.Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu

![ss fork](https://user-images.githubusercontent.com/66357389/134172737-07e387d3-8a7e-46eb-b35d-08b643496ccd.png)



#### 2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya.
`git clone https://github.com/ahmadm712/tech4impact-students-bio`

#### 3. Buatlah branch baru dengan nama lengkap kamu. Misalnya david-winalda. Jangan melakukan perubahan pada branch master.
`git branch ahmadmuji`

#### 4.Checkout ke dalam branch tersebut yang telah kamu buat
`git checkout ahmadmuji`

#### 5.Buatlah 1 file format .md dengan nama lengkap kamu. Contoh davidwinalda.md
`touch ahmadmuji.md`

#### 6.Isi file tersebut davidwinalda.md dengan konten di bawah ini:
![image](https://user-images.githubusercontent.com/66357389/134173816-c1242057-c228-4f69-8c1f-f1af265e8eea.png)

`echo "Nama Lengkap: Ahmad Muji Burohman" > ahmadmuji.md`

`echo "Umur : 20" >> ahmadmuji.md`

`echo "Pesan Yang Ingin Di sampaikan : Never Give Up & Do it the best" >> ahmadmuji.md`

![image](https://user-images.githubusercontent.com/66357389/134174474-df2a5f50-3c7c-40a0-976e-8d8219707959.png)


#### 7. Masukkan file .md tersebut ke dalam staging area
`git add ahmadmuji.md`

#### 8.Commit dengan memberikan pesan nama file .md kamu
`git commit -m "Ahmad Muji"`

#### 9.Merge branch yang telah kamu buat ke dalam branch master
`git merge ahmadmuji`

#### 10. Push ke dalam branch master
`git push origin ahmadmuji`


#### 11.Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch master pada GitHub Repository aslinya.
![image](https://user-images.githubusercontent.com/66357389/134174854-1e6e88e3-e4ef-4ab4-a391-0b5c97a96f10.png)
