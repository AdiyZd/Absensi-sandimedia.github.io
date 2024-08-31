function main() {
    // Mengambil nilai dari input
    const usr = document.getElementById('username').value;

    // Token API Telegram 
    const TOKEN = '7079092015:AAFOhQM0L0PGWmKcfW2DULtjo0KHzBEHbz8';

    // Target kirim
    const GRUB = '7355777672';

    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    // Melakukan kirim dengan username
    const pesan = `${usr} : Telah Absen`;

    // Pengiriman pesan ke target
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: GRUB,
            text: pesan
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Absensi terkirim');
        } else {
            alert('Gagal terkirim, cek koneksi internet anda!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan, silahkan coba lagi');
    });
}
