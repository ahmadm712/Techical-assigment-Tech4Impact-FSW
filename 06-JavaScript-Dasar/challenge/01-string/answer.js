console.log("Nomor satu");

function checkBlank(word) {
    if(word===""){
        return true;
    }else{
        return false;
    }
}

console.log(checkBlank("")); 

console.log("----------------");
console.log("Nomor dua");

function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num)
  }
  
  console.log(truncateString("Terra Skilvul",5)); 

  console.log("----------------");
  console.log("Nomor Ketiga");

  function firstNameOnly(fullname) {
    const myStr = fullname.split(" ");
    if(myStr.length <= 1){
        return myStr[0];
    }
    return (myStr[0] + " " + myStr[1].substr(0, 1));
}

  console.log(firstNameOnly("Ahmad muji"));

  console.log("----------------");
  console.log("Nomor Keempat");

  function capitalize(kalimat) {
    kata = kalimat.split(" ");

    for (let i = 0; i < kata.length; i++) {
        kata[i] = kata[i][0].toUpperCase() + kata[i].substr(1);
    }

    return kata.join(" ");
}

console.log("----------------");
  console.log("Nomor Kelima");
  function text_truncate(str, length = 100, ending = "...") {
    kalimat = str.substr(0, length);
    return kalimat.concat(ending);
}


console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))