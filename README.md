# ikra-app-web

İkra'nın tanıtım sitesi. Tek sayfa, statik; derleme adımı yok.

## Dosyalar

- `index.html` — tanıtım sayfası (TR varsayılan, EN geçişli).
- `styles.css` — mürekkep yeşili zemin, tek altın vurgu, sekiz köşeli yıldız örgüsü.
- `script.js` — dil değiştirici ve kaydırma animasyonları. JavaScript kapalıyken
  sayfa eksiksiz görünür, yalnızca animasyon çalışmaz.
- `assets/` — uygulama ikonu, mağaza görselleri ve kırpılmış kapak görseli.
- `app-ads.txt` — reklam ağı doğrulaması; taşınmamalı.

## Yayın

Netlify, depo kökünü olduğu gibi yayımlıyor: derleme komutu yok, yayın klasörü kök.
Adres: <https://ikraapp.netlify.app>

## Not

`assets/ss-*.webp` dosyaları App Store vitrin görselleri ve üzerlerindeki
başlıklar İngilizce. Türkçe vitrin görselleri hazırlanırsa aynı adlarla
değiştirilmeleri yeterli; `assets/hero.jpg` de `ss-1`in kırpılmış hâli.
