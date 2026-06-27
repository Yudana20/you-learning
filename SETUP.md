# Setup Guide — Windows Network Drive (UNC Path)

Jika project ini berada di network drive (path `\\server\...`), npm tidak bisa langsung dijalankan dari UNC path karena limitasi Windows.

## Solusi: Map Network Drive ke Drive Letter

Buka **Command Prompt** atau **PowerShell** sebagai Administrator:

```cmd
net use Z: "\\nasdanapati\DS1621 Shared File" /persistent:yes
```

Lalu masuk ke folder project via drive letter:

```cmd
Z:
cd "Banana Digital Boost\Banana Digital Boost x Claude Code\Team\IT\Personal\Yudana\E-Library\you-learning"
npm install
npm run dev
```

## Alternatif: Salin ke Drive Lokal

1. Copy folder `you-learning` ke `C:\Projects\you-learning`
2. Jalankan dari sana:

```cmd
cd C:\Projects\you-learning
npm install
npm run dev
```

## Deploy ke Vercel (Tidak Perlu Local Install)

Jika hanya ingin deploy tanpa setup lokal:

1. Push folder `you-learning` ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import repository
3. Vercel akan `npm install` dan `npm run build` otomatis di cloud
4. Done — tidak perlu jalankan npm di mesin lokal

---

*node_modules tidak perlu di-commit ke Git — Vercel akan install sendiri saat deploy.*
