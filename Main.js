const TOKEN = '7079092015:AAFOhQM0L0PGWmKcfW2DULtjo0KHzBEHbz8'; // Ganti dengan token bot Telegram kamu
const CHAT_ID = '7355777672'; // Ganti dengan ID chat atau grup Telegram kamu

function SendToTelegram(message) {
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Pesan berhasil dikirim');
        } else {
            alert('Gagal mengirim pesan');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Coba lagi nanti.');
    });
}

function main() {
    // Mengambil nilai dari input
    const username = document.getElementById('username').value;

    // Mencari tombol yang aktif (dipilih)
    const buttonText = document.querySelector('.btn-group .btn-outline-primary.active')?.textContent;

    if (!username || !buttonText) {
        alert('Nama pengguna atau pilihan belum dipilih!');
        return;
    }

    // Mengirimkan pesan ke Telegram
    const message = `NAMA : ${username}\nKETERANGAN: ${buttonText}`;
    SendToTelegram(message);
}

// Menambahkan event listener untuk tombol absensi
document.querySelectorAll('.btn-group .btn-outline-primary').forEach(button => {
    button.addEventListener('click', function() {
        // Menghapus status active dari tombol lain
        document.querySelectorAll('.btn-group .btn-outline-primary').forEach(btn => btn.classList.remove('active'));
        // Menambahkan status active pada tombol yang diklik
        this.classList.add('active');
    });
});
