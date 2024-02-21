alert("Selamat Datang di Aplikasi Pemesanan Tiket")

const nama = prompt("Masukkan nama Anda:")
const umur = prompt("Masukkan umur Anda:")

// Cek apakah umur lebih besar dari 13
if (umur > 13) {
    const studio = prompt("Pilih studio (A, B, atau C):") // Jika lebih besar dari 13, pilih studio
    
    // Cek pilihan studio   
    if (studio === "A") {
        alert("Tiket atas nama " + nama + ", Studio A, Umur " + umur)
    } else if (studio === "B") {
        alert("Tiket atas nama " + nama + ", Studio B, Umur " + umur)
    } else if (studio === "C") {
        alert("Tiket atas nama " + nama + ", Studio C, Umur " + umur)
    } else {
        alert("Studio tidak valid!")
    }
} else {
    alert("Maaf, Anda tidak boleh masuk studio karena umur Anda di bawah 13 tahun.") // Jika tidak, tidak boleh masuk studio
}