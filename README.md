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

GitHub Pages, main dalının kökünü olduğu gibi yayımlıyor; derleme adımı yok.
Adres: <https://gurkansvlms.github.io/ikra-app-web/>

`ikraapp.netlify.app` bu depodan beslenmiyor — orada ayrı bir İkra sitesi
duruyor. Alan adı buraya taşınırsa index.html'deki canonical ve og:url
satırları da güncellenmeli.

## Not

`assets/ss-*.webp` dosyaları App Store vitrin görselleri ve üzerlerindeki
başlıklar İngilizce. Türkçe vitrin görselleri hazırlanırsa aynı adlarla
değiştirilmeleri yeterli; `assets/hero.jpg` de `ss-1`in kırpılmış hâli.
