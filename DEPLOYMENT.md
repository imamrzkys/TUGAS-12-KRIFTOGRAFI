# 🚀 Panduan Deployment ke Vercel

## Persiapan Selesai ✅

Repository sudah siap untuk di-deploy ke Vercel:
- ✅ Git repository sudah dibuat
- ✅ Code sudah di-push ke GitHub
- ✅ `.gitignore` sudah dikonfigurasi
- ✅ `vercel.json` sudah ditambahkan untuk SPA routing
- ✅ README.md sudah lengkap

## 📦 Link Repository
```
https://github.com/imamrzkys/TUGAS-12-KRIFTOGRAFI.git
```

---

## 🌐 Cara Deploy ke Vercel

### Opsi 1: Deploy via Vercel Dashboard (Recommended)

1. **Buka Vercel**
   - Kunjungi [vercel.com](https://vercel.com/)
   - Login dengan akun GitHub Anda

2. **Import Project**
   - Klik "**Add New...**" → "**Project**"
   - Pilih repository: `imamrzkys/TUGAS-12-KRIFTOGRAFI`
   - Klik "**Import**"

3. **Configure Project**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy**
   - Klik "**Deploy**"
   - Tunggu proses build selesai (± 1-2 menit)
   - Aplikasi akan otomatis live di URL Vercel

5. **Custom Domain (Opsional)**
   - Setelah deploy, buka "**Settings**" → "**Domains**"
   - Tambahkan custom domain jika diperlukan

---

### Opsi 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Deploy ke preview
   vercel

   # Deploy ke production
   vercel --prod
   ```

---

## 🔧 Environment Variables (Jika Diperlukan)

Aplikasi ini tidak memerlukan environment variables karena murni frontend dan tidak ada API keys.

Jika di masa depan Anda menambahkan environment variables:

1. Buka **Project Settings** di Vercel
2. Pilih tab "**Environment Variables**"
3. Tambahkan variabel dengan format:
   ```
   VITE_API_KEY=your_api_key_here
   ```

---

## 🎯 Verifikasi Deployment

Setelah deployment berhasil, verifikasi:

1. **Homepage**: Pastikan aplikasi berjalan dengan baik
2. **Routing**: Test navigasi ke `/docs` dan `/algorithms`
3. **Simulator**: Coba enkripsi dan dekripsi
4. **Theme Toggle**: Test dark/light mode
5. **Responsive**: Cek di mobile dan desktop

---

## 🔄 Auto Deployment

Setiap kali Anda push ke branch `main`, Vercel akan otomatis:
- ✅ Build aplikasi
- ✅ Run tests (jika ada)
- ✅ Deploy ke production
- ✅ Update live URL

Untuk preview deployment (tanpa production):
- Push ke branch lain (misal: `dev`, `feature/xxx`)
- Vercel akan membuat preview URL khusus

---

## 📊 Monitoring & Analytics

Vercel Dashboard menyediakan:
- **Analytics**: Traffic dan performance metrics
- **Logs**: Build dan runtime logs
- **Performance**: Web Vitals dan speed insights

---

## 🐛 Troubleshooting

### Build Gagal?
1. Cek build logs di Vercel dashboard
2. Pastikan `package.json` dan dependencies sudah benar
3. Test build lokal: `npm run build`

### Routing 404?
- `vercel.json` sudah dikonfigurasi untuk SPA routing
- Jika masih error, cek file `vercel.json` sudah ter-commit

### Slow Loading?
- Vercel secara otomatis mengoptimasi assets
- Gunakan Vercel Analytics untuk identifikasi bottleneck

---

## 📝 Build Configuration

File `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Build settings:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (auto-detected)

---

## ✅ Checklist Post-Deployment

- [ ] Aplikasi live dan accessible
- [ ] Semua routing berfungsi
- [ ] Simulator enkripsi/dekripsi works
- [ ] Dark/light mode berfungsi
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Update README.md dengan live URL

---

## 🎉 Done!

Setelah deployment berhasil, aplikasi Anda akan live di:
```
https://your-project-name.vercel.app
```

Share link ini untuk demo aplikasi S-DES Simulator Anda!

---

**Need Help?**
- 📖 [Vercel Documentation](https://vercel.com/docs)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)
