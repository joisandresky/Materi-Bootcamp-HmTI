// deklarasi variable name
var name;

// Set Nilai variable Name
name = "HMTI";

// tampilkan di console
console.log("Namanya: " + name);

// tipe data number
var angka1 = 10; // integer
var angka2 = 5.5; // double / float

// Tipe data boolean
var sudahNikah = true; // atau false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahNikah);

// Tipe data array
var names = ["Jois", "Fardan", "Ibnu", "Egi", "Asep", "Ega"];

console.log(names);
console.log(names[2]);
console.log("Data Terakhir", names[names.length - 1]);
console.log("Total: ", names.length);

var biodata = [
  "Fardan",
  25,
  "Bekasi"
];

var biodata = {
  name: "Fardan",
  age: 25,
  address: "Bekasi",
  "sudah nikah": false,
  hobbies: ["Coding", "Singing", "Sepak Bola", "Nyuci Baju"],
  ucapKata: function () {
    console.log("Ada ibu ibu guys!");
  }
};

console.log(biodata);
console.log("Nama nya: ", biodata.name);
console.log("Umurnya: ", biodata['age']);
console.log("Hobi ke 2", biodata.hobbies[1]);
console.log("Hobi ke 3", biodata["hobbies"][2]);
console.log("Hobi Terakhir", biodata.hobbies[biodata.hobbies.length - 1]);
biodata.ucapKata();

// Array of Object
var peserta = [
  {
    name: "Fardan",
    age: 20,
    hobbies: ["Coding", "Nyuci Baju"]
  },
  {
    name: "Ibnu",
    age: 20,
    address: "Bekasi"
  }
];

console.log(peserta);
console.log("Peserta Pertama", peserta[0]["name"]);
console.log("Umur Peserta pertama", peserta[0].age);

console.log(2 === '2');