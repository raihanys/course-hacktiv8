/*
Algoritma kelulusan mahasiswa
1.  Diberikan nama dan nilai mahasiswa, jika nilai tersebut lebih besar atau sama dengan 60
    maka mahasiswa tersebut dinyatakan lulus, jika nilai lebih kecil dari  60 maka dinyatakan tidak lulus.
2.  Baca nama dan nilai mahasiswa  Jika nilai >= 60 maka  Keterangan = lulus
3.  Tetapi jika salah  Keterangan = tidak lulus  Tulis nama dan keterangan.

Pseudocode
1.  Minta masukan nama mahasiswa dan nilai mahasiswa
2.  Jika nilai mahasiswa >= 60 maka
     3. Keterangan = "Lulus"
   Selain itu
     4. Keterangan = "Tidak Lulus"
5. Tampilkan nama mahasiswa dan keterangan
*/

// Import library readline-sync untuk membaca masukan dari pengguna
const readline = require("readline-sync");

// Minta masukan nama dan nilai mahasiswa
const nama = readline.question("Masukkan nama mahasiswa: ");
const nilai = parseFloat(readline.question("Masukkan nilai mahasiswa: "));

// Inisialisasi variabel keterangan
let keterangan;

// Cek jika nilai >= 60
if (nilai >= 60) {
  keterangan = "Lulus";
} else {
  keterangan = "Tidak Lulus";
}

// Tampilkan nama dan keterangan
console.log("Nama:", nama);
console.log("Keterangan:", keterangan);
