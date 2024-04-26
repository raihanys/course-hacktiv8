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
