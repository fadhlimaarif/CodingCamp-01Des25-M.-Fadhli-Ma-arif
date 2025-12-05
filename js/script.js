// Pastikan semua kode dijalankan setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- BAGIAN 1: SAMBUTAN DINAMIS (Point 4) ---

    // 1. Minta Nama Pengguna
    let userName = prompt("Selamat datang di Defiant Security! Silakan masukkan Nama Anda:");
    const welcomeElement = document.getElementById('welcome-speech');

    if (userName && welcomeElement) {
        userName = userName.trim(); 
        if (userName !== "") {
            // Mengisi elemen HTML dengan sambutan
            welcomeElement.textContent = `Hi ${userName}, Welcome To Website`;
        } else {
            welcomeElement.textContent = "Hi Tamu Kehormatan, Welcome To Website";
        }
    } else if (welcomeElement) {
        welcomeElement.textContent = "Hi Tamu Kehormatan, Welcome To Website";
    }

    // --- BAGIAN 2: VALIDASI FORMULIR DAN TAMPILAN OUTPUT (Point 5) ---

    const form = document.getElementById('contact-form');
    const outputDisplay = document.querySelector('.output-display');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        // Mencegah formulir reload
        event.preventDefault(); 

        // Ambil Nilai Input
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message-text').value.trim();

        let isValid = true;
        let errorMsg = '';

        // Validasi Field Kosong
        if (!name || !email || !phone || !message) {
            isValid = false;
            errorMsg = 'Semua field wajib diisi. Mohon lengkapi data Anda.';
        }

        // Validasi Format Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isValid && !emailRegex.test(email)) {
            isValid = false;
            errorMsg = 'Format Email tidak valid. (Contoh: user@domain.com)';
        }
        
        // Validasi Nomor Telepon (hanya angka dan minimal 8 digit)
        const phoneRegex = /^\d{8,}$/;
        if (isValid && !phoneRegex.test(phone)) {
            isValid = false;
            errorMsg = 'Nomor Telepon harus berupa angka dan minimal 8 digit.';
        }
        
        // Tampilkan Hasil Validasi
        if (isValid) {
            // Sukses: Sembunyikan error dan tampilkan output
            errorMessage.style.display = 'none';
            
            document.getElementById('output-name').textContent = `Nama: ${name}`;
            document.getElementById('output-email').textContent = `Email: ${email}`;
            document.getElementById('output-phone').textContent = `Telepon: ${phone}`;
            document.getElementById('output-message').textContent = `Pesan: ${message}`;
            
            outputDisplay.style.display = 'block';

            alert('Pesan berhasil dikirim! Data Anda tercatat di ringkasan permintaan.');
            form.reset(); 
        } else {
            // Gagal: Sembunyikan output dan tampilkan error
            outputDisplay.style.display = 'none';
            errorMessage.textContent = errorMsg;
            errorMessage.style.display = 'block';
        }
    });
});