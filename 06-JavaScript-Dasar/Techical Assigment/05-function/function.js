/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary=0) {
    let pajak = 0;
    if(salary < 5000000){
        pajak = 0;
        console.log("TaxCal should be "+pajak);
    }else if(salary <= 5000000 && salary < 10000000){
        pajak = salary * 0.05;
        console.log("TaxCal should be "+pajak);
    }else if(salary <= 10000000 && salary < 20000000){
        pajak = salary * 0.1;
        console.log("TaxCal should be "+pajak);
    }else if(pajak <= 20000000){
        pajak = salary * 0.2;
        console.log("TaxCal should be "+pajak);
    }
    return pajak;
 }

taxCalc(4500000)

taxCalc(5000000)

taxCalc(20000000)


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. 
/// Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(weight, height) { 
    let BMI = 0;
    BMI = (weight / Math.pow(height,2)) * 10000
    if (BMI < 18.5){
        result = "under weight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        result = "normal";
    } else if (BMI > 25 && BMI < 29.9) {
        result = "over weight";
    } else if (BMI > 30 && BMI < 34.9) {
        result = "obese";
    } else {
        result = "extremely obese";
    }
    return result;
}

input1 = checkBMI(80,170);
console.log(input1);

input2 = checkBMI(80,160);
console.log(input2);

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) { 
    let result = ""
    sentence = sentence.toLowerCase();
    sentence = sentence.split(" ");
    for(let word = 0; word < sentence.length; word++){
        sentence[word] = sentence[word].charAt(0).toUpperCase() + sentence[word].slice(1);
    }
    result = sentence.join(" ");
    return result;
}
 
input1 = convToUpperCase("hello bandung");
console.log(input1);

input2 = convToUpperCase("helloworldwide");
console.log(input2);


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    for(let i = 0; i< word.length; i++){
        if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
            return word[i];
        }
    }
    return ""
}

input1 = firstNonRepeatedChar("alloha");
console.log(input1);

input2 = firstNonRepeatedChar("wooohoowh");
console.log(input2);