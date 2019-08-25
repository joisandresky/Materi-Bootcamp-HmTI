var names = ["Fardan", "Ibnu", "Ega", "Asep"];
var peserta = [
  {
    name: "Fardan"
  },
  {
    name: "Ibnu"
  }
]

// 1. While
var i = 0;
while (i < names.length) {
  console.log("Nama: ", names[i]);
  i++;
}

// Do While
var x = 0;
do {
  console.log('Do While', x);
  x++;
} while (x < 1);

console.log('ini tambahan lagi di looping.js');
console.log('tambah lagi');

// 1. Buat Masing2 2 Variable untuk tipe data Boolean, Array, Object dan Array Of Object
// 2. Buat Code Looping dengan menggunakan Array of Object
// [
//   {
//     name,
//     age,
//     gender
//   }
// ]
// di dalam fungsi looping nya, tampilkan dalam 1 baris "Fardan - Umur 20 - Laki-Laki"

// BIlangan Genap
for (var i = 0; i <= 10; i = i + 2) {
  console.log('Genap: ', i);
}

// Bilangan Ganjil
for (var i = 1; i <= 10; i = i + 2) {
  console.log('Ganjil: ', i);
}

var students = ["Ibnu", "Yayang", "Denny", "Chelsea", "Icha"];
for (student of students) {
  console.log('student', student);
}

var participants = [
  {
    name: "Denny",
    score: 10,
    hobbies: ["Ngoding", "Ngising", "Makan"]
  },
  {
    name: "Ibnu",
    score: 5,
    hobbies: ["Ngoding", "Ngising", "Makan"]
  },
  {
    name: "Mumun",
    score: 7,
    hobbies: ["Nakutin Orang"]
  }
];

// Array Function
// map, forEach, filter, findIndex, find
// 1. MAP
participants.map(function (p, index) {
  console.log('[MAP] Valuenya: ', p);
  console.log("[MAP] Index nya:", index);
});

// 2. forEach
participants.forEach(function (p, index) {
  console.log('[forEach] Valuenya: ', p.name);
  console.log("[forEach] Index nya:", index);
});

// 3. filter
// 3.1 Filter score < 10
var filteredScore = participants.filter(function (p) {
  return p.score < 10;
});
console.log('Filter Score', filteredScore);

// 3.2 Filter Hobi nya lebih dari 1
var filteredHobbies = participants.filter(function (p) {
  return p.hobbies.length > 1;
});
console.log('Filter Hobbies', filteredHobbies);

// 3.3 Filter tampilin name yg huruf pertama nya d
var filteredNames = participants.filter(function (p) {
  return p.name[0].toLowerCase() === "d";
  // Denny
  // 0-D 1-e 2-n 3-n 4-y ["D", "e", "n", "n", "y"]
});
console.log('Filter Names', filteredNames);

// 3.4 filter huruf tengah nya m untuk yg namanya hanya 1 kata
var filteredMiddleName = participants.filter(function (p) {
  // ambil total huruf
  var totalHuruf = p.name.length;

  // cari nilai tengah nya
  var nilaiTengah = totalHuruf / 2;

  // jika nilai tengah genap set bahwa dia genap, jika tidak berarti ganjil
  var isGenap = (nilaiTengah % 2 === 0) ? true : false;

  // set nilai index, jika nilai genap langsung kasih dari var nilaiTengah
  // jika ganjil bulatkan ke atas nilai tengah
  var index = isGenap ? nilaiTengah : Math.ceil(nilaiTengah);

  // gunakan variable index - 1 untuk mengetahui index tengah nya
  return p.name[index - 1].toLowerCase() === "m";
});
console.log('filterMiddleName', filteredMiddleName);

// Operator ternary - simple if else in set variable
var aa = "A";
var bb = (aa.toLowerCase() === "a") ? 10 : 11;

console.log('B', bb);

// 4. findIndex
var index = participants.findIndex(function (p) {
  return p.name.toLowerCase() === "mumun";
});
// kalo ketemu akan return 0 - n, klo gak ketemu return -1
console.log('index yg didapat', index);

// 5. find
var foundValue = participants.find(function (p) {
  return p.name.toLowerCase() === "mumun";
});
// klo ketemu akan return data nya, klo tidak return undefined
console.log('value yang di cari', foundValue);

// contoh join & split
var words = "aku suka makan nasi padang";
var splittedWord = words.split(" ");
var joinedWord = splittedWord.join(" - ");
console.log(words, splittedWord, joinedWord);

// for in
// for (index in participants) {
//   participants[index].score += 10;
//   console.log(participants[index]);
// }

// for of
// for (p of participants) {
//   console.log('Contoh Pertama')
//   console.log("Name nya :", p.name);
//   for (hobby of p.hobbies) {
//     console.log("Hobi nya: ", hobby);
//   }
//   console.log("===========================");
// }

// for (p of participants) {
//   console.log("Contoh Kedua");
//   console.log("Name nya :", p.name);
//   console.log("Hobi2 nya: ", p.hobbies.join(" - "));
//   console.log("===========================");
// }

// tambahkan score masing2 participant dengan angka 10
// denny = 20, Ibnu score = 15
// score = score + 10;
// score += 10;

// 1. student = students[0]
//     student = "Ibnu";
// 2. student = students[1]
//     student = "Yayang"

/*
1. Buatlah sebuah filter function untuk menyaring nama participant
yang huruf tengah nya mengangung huruf (bebas apa aja terserah!!!!)
tapi namanya harus lebih dari 1 kata.

2.var kata = "aku suka makan nasi padang"
pecahlah variable tersebut menjadi array dengan ekspektasi output seperti
berikut:
[
  "aku suka",
  "aku suka makan",
  "aku suka makan nasi",
  "aku suka makan nasi padang"
]

3. buat lah 1 contoh penggunaan array function
-> map, filter, forEach, find, findIndex
notes: tidak boleh sama dengan contoh
*/

