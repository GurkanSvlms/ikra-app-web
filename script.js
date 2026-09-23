/* =========================================================================
   İkra — language switch and scroll choreography.
   Turkish is the default; English is the second store language for the
   landing page. The app itself ships in 21.
   ========================================================================= */

const storageKey = "ikra-language";
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const languageButtons = document.querySelectorAll("[data-lang-option]");

const translations = {
  tr: {
    metaTitle: "Namaz Vakitleri, Kur'an ve Kıble Uygulaması | İkra",
    metaDescription:
      "Namaz vakitleri, Kur'an okuma ve dinleme, kıble, zikirmatik, dua, hadis ve İslami takvim tek uygulamada. iPhone ve Android için İkra, 21 dilde.",
    skip: "İçeriğe geç",
    navFeatures: "Özellikler",
    navScreens: "Ekranlar",
    navDownload: "İndir",
    heroEyebrow: "iPhone ve Android · 21 dil",
    heroTitle: "Günün her vaktinde yanında.",
    heroLede:
      "Namaz vakitleri, Kur'an okuma ve dinleme, kıble, zikir, dua, hadis ve İslami takvim tek uygulamada. İkra sabah ezanından yatsıya kadar gününe eşlik eder.",
    storeAppleSmall: "İndir",
    storeGoogleSmall: "İndir",
    ratingText: "4,5 · 87 değerlendirme · App Store Türkiye, 23 Eylül 2026",
    statLangs: "dil",
    statSurahs: "sure",
    statNames: "esma",
    statPrayers: "vakit",
    featuresEyebrow: "Tek uygulamada",
    featuresTitle: "Sabah ezanından yatsıya, günün tamamı.",
    f1t: "Namaz vakitleri ve ezan",
    f1b: "Bulunduğun konuma göre beş vakit, imsak ve güneş saatleri; bir sonraki vakte kalan süre ve vakit bildirimleri.",
    f2t: "Kur'an: oku, dinle, öğren",
    f2b: "114 surenin tamamı, meal ve dinleme desteğiyle. Kaldığın yerden devam et, ayetleri favorilerine ekle.",
    f3t: "Kıble",
    f3b: "Pusula tabanlı kıble yönü; şehir değiştirdiğinde yeniden ayarlamaya gerek yok.",
    f4t: "Zikirmatik ve dua",
    f4b: "Sayaçlı zikir, günlük dualar ve Esmaü'l-Hüsna; hepsi tek dokunuşla ulaşılabilir yerde.",
    f5t: "Yapay zekâ asistanı",
    f5b: "Kur'an ve hadis kaynaklı sorularını sorabildiğin bir asistan; merak ettiğin konuyu uygulamadan çıkmadan öğren.",
    f6t: "İslami takvim",
    f6b: "Hicri tarih, mübarek gece ve günler, Ramazan geri sayımı ve günün ayeti.",
    screensEyebrow: "Uygulamadan",
    screensTitle: "Ekranlar",
    shot2: "Yapay zekâ asistanı ekranı",
    shot3: "Namaz vakitleri ekranı",
    shot4: "Ana ekran widget'ları",
    shot5: "Zikirmatik ekranı",
    shot6: "İbadet alışkanlığı takibi ekranı",
    railNote: "Kaydırarak gezin. Ekran görüntüleri uygulamanın güncel sürümünden.",
    quoteText:
      "İkra, bir gün içinde defalarca açılan bir uygulama. Bu yüzden her ekranı hızlı, sade ve okunaklı olacak şekilde kuruldu: vakti öğrenmek üç saniye, bir ayeti bulmak iki dokunuş.",
    downloadEyebrow: "Ücretsiz",
    downloadTitle: "Bugün indir, yarın sabah ezanıyla başla.",
    downloadText: "iPhone ve Android'de yayında. Mağaza sayfaları 21 dile çevrildi.",
  },
  en: {
    metaTitle: "Prayer Times, Quran and Qibla App | Ikra",
    metaDescription:
      "Prayer times, Quran reading and listening, qibla, dhikr counter, duas, hadith and the Islamic calendar in one app. Ikra for iPhone and Android, in 21 languages.",
    skip: "Skip to content",
    navFeatures: "Features",
    navScreens: "Screens",
    navDownload: "Download",
    heroEyebrow: "iPhone and Android · 21 languages",
    heroTitle: "With you at every hour of the day.",
    heroLede:
      "Prayer times, Quran reading and listening, qibla, dhikr, duas, hadith and the Islamic calendar in one app. Ikra keeps you company from the dawn call to the night prayer.",
    storeAppleSmall: "Download on the",
    storeGoogleSmall: "Get it on",
    ratingText: "4.5 · 87 ratings · App Store Türkiye, 23 September 2026",
    statLangs: "languages",
    statSurahs: "surahs",
    statNames: "names",
    statPrayers: "prayers",
    featuresEyebrow: "All in one app",
    featuresTitle: "From the dawn call to the night prayer.",
    f1t: "Prayer times and adhan",
    f1b: "The five daily prayers plus imsak and sunrise for your location, the time left until the next one, and prayer notifications.",
    f2t: "Quran: read, listen, learn",
    f2b: "All 114 surahs with translation and audio. Pick up where you left off and keep favourite verses close.",
    f3t: "Qibla",
    f3b: "Compass-based qibla direction that follows you when you change city.",
    f4t: "Dhikr counter and duas",
    f4b: "A counted dhikr, daily duas and the 99 Names — all one tap away.",
    f5t: "AI assistant",
    f5b: "Ask questions grounded in the Quran and hadith, and get an answer without leaving the app.",
    f6t: "Islamic calendar",
    f6b: "The Hijri date, holy nights and days, a Ramadan countdown and the verse of the day.",
    screensEyebrow: "From the app",
    screensTitle: "Screens",
    shot2: "The AI assistant screen",
    shot3: "The prayer times screen",
    shot4: "Home Screen widgets",
    shot5: "The dhikr counter screen",
    shot6: "The worship habit tracking screen",
    railNote: "Swipe to browse. Screenshots are from the current release.",
    quoteText:
      "Ikra is opened many times a day, so every screen was built to be fast, plain and legible: three seconds to check a prayer time, two taps to find a verse.",
    downloadEyebrow: "Free",
    downloadTitle: "Download today, start with tomorrow's dawn call.",
    downloadText: "Live on iPhone and Android. The store listing is translated into 21 languages.",
  },
};

function applyLanguage(lang) {
  const active = translations[lang] ? lang : "tr";
  const dict = translations[active];

  document.documentElement.lang = active;
  document.title = dict.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dict.metaDescription);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", dict.metaTitle);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", active === "tr" ? "tr_TR" : "en_US");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value) el.setAttribute("alt", value);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === active;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(storageKey, active);
  } catch (error) {
    /* Private mode: the choice just doesn't persist. */
  }
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (translations[saved]) return saved;
  } catch (error) {
    /* fall through to the browser preference */
  }
  return navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
});

applyLanguage(initialLanguage());

/* ------------------------------------------------------------- motion */

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      child.setAttribute("data-reveal", "");
      child.style.setProperty("--d", `${index * 85}ms`);
    });
  });

  const pending = new Set(document.querySelectorAll("[data-reveal]"));
  if (!pending.size) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    pending.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const reveal = (el) => {
    el.classList.add("is-in");
    pending.delete(el);
    observer.unobserve(el);
  };

  /* A fast jump can carry an element past the viewport between two samples,
     so after every callback we release anything already above the fold. */
  const sweep = () => {
    if (!pending.size) return;
    const fold = window.innerHeight * 0.92;
    Array.from(pending).forEach((el) => {
      if (el.getBoundingClientRect().top < fold) reveal(el);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
      sweep();
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 },
  );

  pending.forEach((el) => observer.observe(el));
})();
