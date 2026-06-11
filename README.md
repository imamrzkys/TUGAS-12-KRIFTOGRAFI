# 🔐 S-DES Cryptography Simulator

> Simulasi interaktif algoritma **Simplified Data Encryption Standard (S-DES)** dengan visualisasi langkah demi langkah yang mendalam dan intuitif.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.40-FF0080?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Fitur Utama

### 🎯 **Simulator Interaktif**
- **Enkripsi & Dekripsi Manual**: Klik bit untuk mengubah nilai, proses enkripsi/dekripsi secara real-time
- **Input Fleksibel**: 8-bit plaintext/ciphertext dan 10-bit key dengan kontrol penuh
- **Mode Ganda**: Enkripsi dan dekripsi dalam satu aplikasi

### 📊 **Visualisasi Mendalam**
- **Trace Lengkap**: Setiap langkah algoritma divisualisasikan dari awal hingga akhir
- **Pembangkitan Kunci**: Detail proses P10, LS-1, P8, LS-2 untuk menghasilkan K1 dan K2
- **Feistel Round**: Visualisasi EP, XOR, S-Box (S0/S1), P4 pada setiap putaran
- **S-Box Interaktif**: Lihat cara kerja S-Box dengan highlight baris, kolom, dan hasil

### 🎨 **UI/UX Modern**
- **Glassmorphism Design**: Desain futuristik dengan glass effect dan animasi halus
- **Dark & Light Mode**: Tema yang dapat disesuaikan dengan preferensi pengguna
- **Responsive**: Sempurna di desktop, tablet, dan mobile
- **Smooth Animations**: Transisi dan animasi menggunakan Framer Motion

### 📚 **Dokumentasi & Algoritma**
- Penjelasan lengkap tentang S-DES dan komponen-komponennya
- Referensi tabel permutasi (P10, P8, EP, P4, IP, IP⁻¹)
- Tabel S-Box (S0 dan S1) dengan penjelasan

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ dan npm/yarn
- Browser modern (Chrome, Firefox, Edge, Safari)

### Installation

```bash
# Clone repository
git clone https://github.com/imamrzkys/TUGAS-12-KRIFTOGRAFI.git
cd TUGAS-12-KRIFTOGRAFI/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
# Build aplikasi
npm run build

# Preview build
npm run preview
```

---

## 🏗️ Struktur Project

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar & Footer
│   │   ├── simulator/       # Komponen simulator (BitInput, KeyDisplay, dll)
│   │   └── ui/              # Komponen UI reusable (BitBox, GlassCard, dll)
│   ├── features/
│   │   ├── simulator/       # ResultPanel, SolutionTrace, VisualMatrix
│   │   └── keygen/          # KeyGenTrace, SubkeyDisplay
│   ├── context/             # SimulatorContext (state management)
│   ├── hooks/               # Custom hooks (useSdes, useBitInput, useTheme)
│   ├── services/            # sdes.js (algoritma S-DES)
│   ├── utils/               # bitUtils, formatters, sboxLookup
│   ├── layout/              # MainLayout, SimulatorLayout
│   ├── pages/               # SimulatorPage, DocumentationPage, AlgorithmsPage
│   └── App.jsx              # Main app
├── public/                  # Assets statis
└── package.json
```

---

## 🎓 Cara Penggunaan

### 1. **Input Data**
   - Klik bit pada **Plaintext** (8-bit) atau **Ciphertext** untuk mengubah nilai 0/1
   - Klik bit pada **Kunci** (10-bit) untuk mengatur key

### 2. **Pilih Mode**
   - Klik **ENKRIPSI** untuk enkripsi plaintext
   - Klik **DEKRIPSI** untuk dekripsi ciphertext

### 3. **Lihat Hasil**
   - Hasil ditampilkan langsung dengan nilai dalam biner, desimal, dan heksadesimal
   - Subkunci K1 dan K2 ditampilkan

### 4. **Eksplorasi Trace**
   - Klik "**Tampilkan Langkah-Langkah Penyelesaian**" untuk melihat detail proses
   - Setiap langkah dijelaskan dengan visualisasi bit, tabel permutasi, dan S-Box

### 5. **S-Box Visualization**
   - Lihat S-Box S0 dan S1 di sidebar
   - Pelajari cara kerja substitusi pada S-DES

---

## 🔧 Teknologi

| Tool | Purpose |
|------|---------|
| **React 19** | UI framework dengan hooks modern |
| **Vite 8** | Build tool super cepat dengan HMR |
| **Framer Motion** | Animasi dan transisi yang smooth |
| **React Router** | Navigasi multi-page |
| **CSS Modules** | Styling component-based |

---

## 📖 Algoritma S-DES

S-DES (Simplified Data Encryption Standard) adalah versi sederhana dari DES untuk keperluan edukasi. Algoritma ini mengenkripsi plaintext 8-bit menggunakan key 10-bit melalui:

1. **Pembangkitan Kunci**: Key 10-bit → K1 dan K2 (masing-masing 8-bit)
   - P10 → LS-1 → P8 (K1)
   - LS-2 → P8 (K2)

2. **Initial Permutation (IP)**: Plaintext diacak posisinya

3. **Feistel Rounds** (2 putaran):
   - **Round 1**: EP → XOR(K1) → S-Box → P4 → XOR(L)
   - **Swap**: Tukar L dan R
   - **Round 2**: EP → XOR(K2) → S-Box → P4 → XOR(L)

4. **Inverse Permutation (IP⁻¹)**: Kembalikan ke posisi semula → Ciphertext

Untuk **dekripsi**, prosesnya sama tapi urutan kunci dibalik (K2 → K1).

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📝 License

Project ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detailnya.

---

## 👨‍💻 Author

**Imam Rizki Saputra**  
📧 Email: imamrzkys@gmail.com  
🔗 GitHub: [@imamrzkys](https://github.com/imamrzkys)

---

## 🙏 Acknowledgments

- Algoritma S-DES dikembangkan oleh Edward Schaefer untuk keperluan edukasi
- Desain UI terinspirasi dari glassmorphism trend dan modern crypto tools
- Terima kasih kepada komunitas React dan Vite untuk dokumentasi yang luar biasa

---

<div align="center">

**⭐ Star project ini jika Anda merasa bermanfaat!**

Made with ❤️ by [Imam Rizki Saputra](https://github.com/imamrzkys)

</div>
