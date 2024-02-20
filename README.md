## Revou Milestone Project React - Wirayuda

### 📑 Tentang Website

Website ini merupakan website yang terdiri atas multi step registration page, login page, dashboard page, dan add item page. User dapat mendaftarkan diri pada website, masuk kedalam website dengan akun mereka, menambahkan barang, menghapus barang, dan melihat barang serta data diri mereka.

### 💡 Fitur Pada Website
- 🔐 **Fitur Registrasi Multi Langkah**

	Pengguna dapat melakukan registrasi dengan langkah-langkah yang disusun dengan baik.
	Setiap langkah memiliki validasi yang ketat untuk memastikan data yang dimasukkan oleh pengguna valid.

- 🔑 **Fitur Masuk**

	Pengguna yang telah mendaftar dapat masuk ke akun mereka menggunakan _email_ dan kata sandi yang terdaftar.
	Terdapat opsi untuk lupa kata sandi untuk memudahkan pemulihan akun.

- 📊 **Fitur Dashboard**

	Dashboard memberikan rincian mengenai data diri pengguna.
	Pada halaman ini juga terdapat tabel _shopping cart_ yang menampilkan barang yang user dapat tambahkan.

- 🛒 **Fitur Add Item**

	Pengguna dapat menambahkan item baru ke dalam sistem dengan mengisi formulir yang sesuai.
	Validasi formulir akan memastikan bahwa data yang dimasukkan sesuai dengan persyaratan.
	item yang telah ditambah akan tampil pada halaman dashboard.

### 📦 Library yang Digunakan

- **React Router**: React Router digunakan untuk menangani navigasi antar halaman
- **Antd**: Ant Design digunakan untuk membangun antarmuka pengguna, menyediakan desain yang konsisten dan menarik secara visual
- **Dayjs**: Dayjs digunakan untuk mengubah format tanggal menjadi format yang mudah dibaca
- **Bcryptjs**: Bcryptjs digunakan untuk mengamankan kata sandi dengan cara mengenkripsi kata sandi
- **Recoil**: Recoil digunakan untuk memudahkan manajemen state dalam aplikasi React
- **i18next**: i18next digunakan untuk internasionalisasi pada website
- **React Testing Library**: React Testing Library digunakan untuk menguji komponen pada aplikasi React

### 🚀 Cara Menjalankan Website

1. Clone repository
2. Jalankan `npm install`
3. Jalankan `npm start`
4. Website akan berjalan pada `https://localhost:3000`

### 📂 Struktur Folder

- **public**: Folder ini berisi berkas statis yang akan disajikan oleh server, seperti favicon, gambar, atau berkas lainnya.
- **src**: Folder utama yang berisi semua file sumber untuk proyek.
	- **components**: Folder ini berisi komponen React yang digunakan dalam proyek.
	- **css**: Folder ini berisi file-file CSS (Cascading Style Sheets) yang digunakan untuk styling komponen-komponen dalam aplikasi.
	- **hooks**: Folder ini berisi kumpulan custom hooks yang digunakan dalam aplikasi.
	- **locales**: Folder ini berisi file-file terkait bahasa, seperti file terjemahan untuk aplikasi berbasis multibahasa
	- **pages**: Folder ini berisi halaman utama atau komponen yang mewakili halaman utama proyek.
	- **routes**: Folder ini berisi definisi rute atau navigasi dalam aplikasi.
	- **tests**: Folder ini berisi semua berkas tes untuk proyek.

	- **atom.ts** = File ini berisi konfigurasi yang digunakan untuk library Recoil
	- **i18n.ts** = File ini berisi konfigurasi yang digunakan untuk library i18next
	- **utils.ts** = File ini berisi data statik yang digunakan pada website