# Soru-Cevap Çalışma Uygulaması (React + Vite)

Bu küçük uygulama, mülakat sorularını **flashcard** gibi çalışman için tasarlandı.

## Özellikler
- 110 kartlık hazır deste (React + JavaScript + HTML/CSS)
- Cevabı aç/kapat, **Bildim/Bilemedim** ile tekrar zamanını otomatik ayarla
- Kategori, arama, **sadece zamanı gelenler**, favoriler
- Klavye kısayolları
- JSON yedekle / içe aktar (custom kartlar + ilerleme)

## Kurulum
```bash
npm install
npm run dev
```
Tarayıcıda genelde: `http://localhost:5173`

## Kartlar nerede?
- Hazır deste: `src/data/deck.ts`
- Uygulamadan eklediğin kartlar: tarayıcı `localStorage` içinde tutulur.

## Yedekleme
- Sol menüden **JSON Dışa Aktar** ile yedeğini al.
- Başka PC’de aynı menüden **JSON İçe Aktar**.
