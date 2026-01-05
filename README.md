MD SHOP — Deploy ke Vercel

Instruksi singkat untuk deploy situs statis ini ke Vercel.

1) Siapkan (hanya sekali):

```powershell
npm i -g vercel
vercel login
```

2) Deploy cepat dari folder proyek (lokal):

```powershell
cd "c:\Users\auril\OneDrive\Desktop\MD SHOP chatgpt"
vercel             # ikuti prompt; pertama kali akan membuat project
vercel --prod      # untuk menerbitkan ke produksi
```

3) Deploy otomatis via GitHub / GitLab / Bitbucket:
- Push repo ke GitHub.
- Hubungkan repo di https://vercel.com/new → pilih org / project.
- Vercel akan otomatis build & deploy pada setiap push ke branch terkonfigurasi.

Catatan:
- `vercel.json` sudah ditambahkan untuk memastikan situs diperlakukan sebagai static site dan semua rute diarahkan ke `index.html`.
- Jika kamu menggunakan domain custom, atur domain di dashboard Vercel setelah deploy.

Butuh saya sambungkan project ini ke akun Vercel kamu atau menjalankan `vercel --prod` di terminal sekarang? 
