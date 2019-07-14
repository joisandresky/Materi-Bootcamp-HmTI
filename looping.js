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
