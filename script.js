// قائمة بـ 100 منتج مستقل تماماً وموزع على الأقسام
const productsData = [
  { id: 1, cat: "iphone", name: "جراب أيفون 15 برو ماكس فاخر", price: 350, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 15 Pro"], colors: [{ name: "أسود", hex: "#111" }, { name: "فضي", hex: "#ccc" }] },
  { id: 2, cat: "iphone", name: "جراب أيفون مانع للصدمات", price: 300, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 14", "iPhone 14 Pro"], colors: [{ name: "كحلي", hex: "#1b2a4a" }, { name: "رمادي", hex: "#555" }] },
  { id: 3, cat: "iphone", name: "جراب أيفون شفاف مقاوم للخدش", price: 250, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 13", "iPhone 13 Pro"], colors: [{ name: "شفاف", hex: "#fff" }] },
  { id: 4, cat: "iphone", name: "جراب أيفون جلد طبيعي فاخر", price: 450, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 14 Pro Max"], colors: [{ name: "بني", hex: "#8B4513" }, { name: "أسود", hex: "#111" }] },
  { id: 5, cat: "iphone", name: "جراب أيفون مع مسند معدني", price: 320, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15", "iPhone 15 Plus"], colors: [{ name: "تيتانيوم", hex: "#8c8882" }] },
  { id: 6, cat: "iphone", name: "جراب أيفون مزين بأطراف لامعة", price: 280, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 14", "iPhone 13"], colors: [{ name: "ذهبي", hex: "#d4af37" }, { name: "فضي", hex: "#c0c0c0" }] },
  { id: 7, cat: "iphone", name: "جراب أيفون سيليكون ناعم", price: 220, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 12", "iPhone 12 Pro"], colors: [{ name: "أزرق سماوي", hex: "#87ceeb" }, { name: "وردي", hex: "#ffc0cb" }] },
  { id: 8, cat: "iphone", name: "جراب أيفون درع حماية للكاميرا", price: 380, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 15 Pro"], colors: [{ name: "أسود داكن", hex: "#000" }] },
  { id: 9, cat: "iphone", name: "جراب أيفون تصميم رخامي أنيق", price: 290, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 14 Pro", "iPhone 14"], colors: [{ name: "أبيض رخامي", hex: "#f5f5f5" }] },
  { id: 10, cat: "iphone", name: "جراب أيفون مع حماية مغناطيسية", price: 410, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 13"], colors: [{ name: "رمادي داكن", hex: "#333" }] },
  { id: 11, cat: "iphone", name: "جراب أيفون ماج سيف أصلي", price: 490, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 15"], colors: [{ name: "أسود", hex: "#111" }, { name: "أحمر", hex: "#ff0000" }] },
  { id: 12, cat: "iphone", name: "جراب أيفون كربون فايبر قوي", price: 360, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 14 Pro Max", "iPhone 15 Pro"], colors: [{ name: "أسود كربون", hex: "#222" }] },
  { id: 13, cat: "iphone", name: "جراب أيفون قلاب مع جيب للبطاقات", price: 340, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15", "iPhone 13"], colors: [{ name: "بني داكن", hex: "#5c4033" }] },
  { id: 14, cat: "iphone", name: "جراب أيفون مضاد بصمات الأصابع", price: 270, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 12", "iPhone 14"], colors: [{ name: "مطفي أسود", hex: "#1a1a1a" }] },
  { id: 15, cat: "iphone", name: "جراب أيفون تصميم عسكري ثقيل", price: 420, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max"], colors: [{ name: "زيتي عسكري", hex: "#4b5320" }] },
  { id: 16, cat: "iphone", name: "جراب أيفون مطلي بالذهب الفاخر", price: 550, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 14 Pro Max"], colors: [{ name: "ذهبي", hex: "#d4af37" }] },
  { id: 17, cat: "iphone", name: "جراب أيفون قماشي فاخر مانع للانزلاق", price: 310, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 13", "iPhone 14"], colors: [{ name: "رمادي قماشي", hex: "#708090" }] },
  { id: 18, cat: "iphone", name: "جراب أيفون مع إطار كاميرا بارز", price: 290, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15"], colors: [{ name: "بنفسجي غامق", hex: "#301934" }] },
  { id: 19, cat: "iphone", name: "جراب أيفون الترا سليم نحيف جداً", price: 240, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 12", "iPhone 13"], colors: [{ name: "شفاف مطفي", hex: "#e0e0e0" }] },
  { id: 20, cat: "iphone", name: "جراب أيفون حماية الزوايا المتقدمة", price: 330, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 14 Pro", "iPhone 15 Pro"], colors: [{ name: "أزرق داكن", hex: "#000080" }] },
  { id: 21, cat: "iphone", name: "جراب أيفون مزود بحامل خلفي مدمج", price: 350, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max"], colors: [{ name: "أسود", hex: "#111" }] },
  { id: 22, cat: "iphone", name: "جراب أيفون بتصميم كلاسيكي راقي", price: 370, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 13 Pro Max", "iPhone 14"], colors: [{ name: "رمادي", hex: "#808080" }] },
  { id: 23, cat: "iphone", name: "جراب أيفون مانع للصدمات المزدوجة", price: 390, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Plus", "iPhone 15"], colors: [{ name: "أحمر داكن", hex: "#8b0000" }] },
  { id: 24, cat: "iphone", name: "جراب أيفون سيليكون سائل فاخر", price: 290, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 14", "iPhone 13"], colors: [{ name: "أخضر مينت", hex: "#98ff98" }] },
  { id: 25, cat: "iphone", name: "جراب أيفون بظهر زجاجي مقاوم للصدمات", price: 400, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 14 Pro Max"], colors: [{ name: "فضي لامع", hex: "#e0e0e0" }] },
  { id: 26, cat: "iphone", name: "جراب أيفون تصميم رياضي متين", price: 340, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 13", "iPhone 12"], colors: [{ name: "أصفر أسود", hex: "#ffcc00" }] },
  { id: 27, cat: "iphone", name: "جراب أيفون حماية كاملة 360 درجة", price: 430, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro", "iPhone 14 Pro"], colors: [{ name: "أسود بالكامل", hex: "#000" }] },
  { id: 28, cat: "iphone", name: "جراب أيفون شفاف مرن ضد الاصفرار", price: 260, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15", "iPhone 14"], colors: [{ name: "كريستال شفاف", hex: "#ffffff" }] },
  { id: 29, cat: "iphone", name: "جراب أيفون مع حلقة مغناطيسية للدوران", price: 380, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max"], colors: [{ name: "تيتانيوم طبيعي", hex: "#b0b0b0" }] },
  { id: 30, cat: "iphone", name: "جراب أيفون إصدار خاص فاخر جداً", price: 480, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 14 Pro Max"], colors: [{ name: "أسود ملكي", hex: "#0a0a0a" }] },
  { id: 31, cat: "iphone", name: "جراب أيفون جلد التمساح الفاخر", price: 520, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 14"], colors: [{ name: "بني تمساحي", hex: "#4a3b32" }] },
  { id: 32, cat: "iphone", name: "جراب أيفون مع حماية عدسات زجاجية", price: 330, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15", "iPhone 13"], colors: [{ name: "زهري فاتح", hex: "#ffb6c1" }] },
  { id: 33, cat: "iphone", name: "جراب أيفون نحيف للغاية بملمس حريري", price: 280, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 12", "iPhone 14"], colors: [{ name: "أبيض ناصع", hex: "#ffffff" }] },
  { id: 34, cat: "iphone", name: "جراب أيفون مانع للانزلاق بتصميم عصري", price: 310, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 14 Pro", "iPhone 13 Pro"], colors: [{ name: "رمادي معدني", hex: "#71797e" }] },
  { id: 35, cat: "iphone", name: "جراب أيفون مزود بفتحات تهوية للتبريد", price: 360, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["iPhone 15 Pro Max", "iPhone 15 Pro"], colors: [{ name: "أسود مطفي", hex: "#111" }] },

  // منتجات سامسونج (من 36 إلى 70)
  { id: 36, cat: "samsung", name: "جراب سامسونج جالاكسي إس 24 ألترا درع حماية", price: 360, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "أسود تيتانيوم", hex: "#222" }, { name: "رمادي", hex: "#666" }] },
  { id: 37, cat: "samsung", name: "جراب سامسونج جلوسي أنيق لامع", price: 310, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24+", "Galaxy S24"], colors: [{ name: "ذهبي وردي", hex: "#b76e79" }] },
  { id: 38, cat: "samsung", name: "جراب سامسونج سيليكون ناعم ومتين", price: 250, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A55", "Galaxy A35"], colors: [{ name: "أزرق داكن", hex: "#00008b" }, { name: "أسود", hex: "#000" }] },
  { id: 39, cat: "samsung", name: "جراب سامسونج مع حامل خلفي قابل للطي", price: 340, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S23 Ultra", "Galaxy S24 Ultra"], colors: [{ name: "فضي", hex: "#c0c0c0" }] },
  { id: 40, cat: "samsung", name: "جراب سامسونج حماية كاميرا منزلقة", price: 330, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A54", "Galaxy A34"], colors: [{ name: "أسود كلاسيكي", hex: "#111" }] },
  { id: 41, cat: "samsung", name: "جراب سامسونج جلد فاخر راقي", price: 420, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra", "Galaxy S23 Ultra"], colors: [{ name: "بني غامق", hex: "#3f2204" }] },
  { id: 42, cat: "samsung", name: "جراب سامسونج ضد الصدمات العالية", price: 380, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24+", "Galaxy S23+"], colors: [{ name: "رمادي غامق", hex: "#333" }] },
  { id: 43, cat: "samsung", name: "جراب سامسونج شفاف كريستالي مقاوم", price: 240, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A55", "Galaxy S24"], colors: [{ name: "شفاف", hex: "#fff" }] },
  { id: 44, cat: "samsung", name: "جراب سامسونج مغناطيسي متوافق مع الشحن", price: 390, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "تيتانيوم أسود", hex: "#1c1c1c" }] },
  { id: 45, cat: "samsung", name: "جراب سامسونج تصميم عسكري شديد التحمل", price: 440, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S23 Ultra", "Galaxy S22 Ultra"], colors: [{ name: "أخضر عسكري", hex: "#4b5320" }] },
  { id: 46, cat: "samsung", name: "جراب سامسونج بمسند خلفي معدني", price: 350, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A55", "Galaxy A15"], colors: [{ name: "أزرق ملكي", hex: "#4169e1" }] },
  { id: 47, cat: "samsung", name: "جراب سامسونج تصميم نحيف جداً", price: 270, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24", "Galaxy S23"], colors: [{ name: "أسود مطفي", hex: "#111" }] },
  { id: 48, cat: "samsung", name: "جراب سامسونج قلاب ذكي مع نافذة", price: 410, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra", "Galaxy A55"], colors: [{ name: "أسود أنيق", hex: "#000" }] },
  { id: 49, cat: "samsung", name: "جراب سامسونج حماية متكاملة 360 درجة", price: 460, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "فضي لامع", hex: "#d3d3d3" }] },
  { id: 50, cat: "samsung", name: "جراب سامسونج ألياف الكربون الفاخرة", price: 380, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S23 Ultra", "Galaxy S24+"], colors: [{ name: "أسود كربون", hex: "#222" }] },
  { id: 51, cat: "samsung", name: "جراب سامسونج ألوان باستيل ناعمة", price: 280, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A55", "Galaxy A35"], colors: [{ name: "لافندر", hex: "#e6e6fa" }, { name: "مشمشي", hex: "#ffe5b4" }] },
  { id: 52, cat: "samsung", name: "جراب سامسونج بتصميم أطراف مضادة للصدمات", price: 320, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A25", "Galaxy A15"], colors: [{ name: "أصفر داكن", hex: "#ffaa00" }] },
  { id: 53, cat: "samsung", name: "جراب سامسونج مع حلقة إصبع مرنة", price: 300, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24", "Galaxy S23"], colors: [{ name: "أحمر داكن", hex: "#8b0000" }] },
  { id: 54, cat: "samsung", name: "جراب سامسونج زجاجي مقاوم للخدش", price: 390, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "أبيض رخامي", hex: "#f8f8f8" }] },
  { id: 55, cat: "samsung", name: "جراب سامسونج إصدار خاص لرجال الأعمال", price: 450, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra", "Galaxy S23 Ultra"], colors: [{ name: "أسود رسمي", hex: "#0a0a0a" }] },
  { id: 56, cat: "samsung", name: "جراب سامسونج سيليكون سائل فاخر", price: 290, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A55", "Galaxy S24"], colors: [{ name: "أخضر غامق", hex: "#006400" }] },
  { id: 57, cat: "samsung", name: "جراب سامسونج حماية متطورة للكاميرا الخلفية", price: 340, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24+", "Galaxy S23+"], colors: [{ name: "رمادي معدني", hex: "#505050" }] },
  { id: 58, cat: "samsung", name: "جراب سامسونج تصميم هجين مزدوج الطبقات", price: 370, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "أزرق وأسود", hex: "#101030" }] },
  { id: 59, cat: "samsung", name: "جراب سامسونج مزود بمقبض خلفي مريح", price: 320, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A35", "Galaxy A55"], colors: [{ name: "بيج", hex: "#f5f5dc" }] },
  { id: 60, cat: "samsung", name: "جراب سامسونج مقاوم للبصمة بملمس متميز", price: 310, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24", "Galaxy S23"], colors: [{ name: "رمادي داكن", hex: "#2f4f4f" }] },
  { id: 61, cat: "samsung", name: "جراب سامسونج فائق النحافة شفاف بالكامل", price: 230, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A15", "Galaxy A25"], colors: [{ name: "شفاف", hex: "#ffffff" }] },
  { id: 62, cat: "samsung", name: "جراب سامسونج تصميم مموه عسكري", price: 360, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "مموه رمادي", hex: "#5a6b7c" }] },
  { id: 63, cat: "samsung", name: "جراب سامسونج جلد صناعي عالي الجودة", price: 380, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S23 Ultra", "Galaxy S24 Ultra"], colors: [{ name: "رمادي غامق جلد", hex: "#363636" }] },
  { id: 64, cat: "samsung", name: "جراب سامسونج مزود بحواف بارزة لحماية الشاشة", price: 290, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A54", "Galaxy A55"], colors: [{ name: "أسود", hex: "#111" }] },
  { id: 65, cat: "samsung", name: "جراب سامسونج إصدار خاص لمقاومة الصدمات القصوى", price: 480, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "تيتانيوم رمادي", hex: "#808080" }] },
  { id: 66, cat: "samsung", name: "جراب سامسونج مع حافظة قلم S-Pen مدمجة", price: 430, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra", "Galaxy S23 Ultra"], colors: [{ name: "أسود أسفل", hex: "#000" }] },
  { id: 67, cat: "samsung", name: "جراب سامسونج بتصميم كلاسيكي هادئ", price: 300, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy A35", "Galaxy A15"], colors: [{ name: "كحلي هادئ", hex: "#2c3e50" }] },
  { id: 68, cat: "samsung", name: "جراب سامسونج بظهر مطفي مضاد للبصمات", price: 280, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24", "Galaxy S23"], colors: [{ name: "أخضر فاقع", hex: "#2ecc71" }] },
  { id: 69, cat: "samsung", name: "جراب سامسونج معدني بالكامل واقي للصدمات", price: 400, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24 Ultra"], colors: [{ name: "ذهبي معدني", hex: "#d4af37" }] },
  { id: 70, cat: "samsung", name: "جراب سامسونج فخم بتفاصيل بارزة", price: 370, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["Galaxy S24+", "Galaxy S23+"], colors: [{ name: "أسود وفضي", hex: "#1a1a1a" }] },

  // الاكسسوارات (من 71 إلى 100)
  { id: 71, cat: "accessories", name: "بAirPods Pro 3
The world’s best in‑ear
Active Noise Cancellation.", price: 650, img: "AIRPODS.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود مات", hex: "#222" }, { name: "أبيض", hex: "#fff" }] },
  { id: 72, cat: "accessories", name: "حامل هاتف مغناطيسي للسيارة بفتحة التهوية", price: 250, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود", hex: "#000" }] },
  { id: 73, cat: "accessories", name: "شاحن جداري سريع بتقنية PD قوة 25 واط", price: 320, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أبيض", hex: "#fff" }] },
  { id: 74, cat: "accessories", name: "سماعة بلوتوث لاسلكية عازلة للضوضاء", price: 550, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود فخم", hex: "#111" }] },
  { id: 75, cat: "accessories", name: "وصلة شحن متعددة الرؤوس 3 في 1 قوية", price: 180, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "رمادي معدني", hex: "#808080" }] },
  { id: 76, cat: "accessories", name: "قاعدة شحن لاسلكية مزدوجة سريعة", price: 590, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود", hex: "#000" }] },
  { id: 77, cat: "accessories", name: "حامل مكتب للهاتف قابل تعديل الارتفاع", price: 220, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "فضي", hex: "#c0c0c0" }] },
  { id: 78, cat: "accessories", name: "عدسات كاميرا إضافية للهاتف احترافية", price: 400, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود", hex: "#111" }] },
  { id: 79, cat: "accessories", name: "إضاءة سيلفي دائرية Ring Light للمكتب", price: 350, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أبيض", hex: "#fff" }] },
  { id: 80, cat: "accessories", name: "محفظة مغناطيسية تلتصق بخلفية الهاتف", price: 290, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "بني جلد", hex: "#5c4033" }, { name: "أسود", hex: "#000" }] },
  { id: 81, cat: "accessories", name: "قلم تاتش ذكي دقيق للرسم والكتابة", price: 310, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أبيض", hex: "#fff" }, { name: "أسود", hex: "#111" }] },
  { id: 82, cat: "accessories", name: "حامل هاتف مغناطيسي يثبت على تابلوه السيارة", price: 280, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود مطفي", hex: "#222" }] },
  { id: 83, cat: "accessories", name: "شاحن سيارة سريع بمنفذين USB و Type-C", price: 260, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "فضي معدني", hex: "#a9a9a9" }] },
  { id: 84, cat: "accessories", name: "سلك شحن قماشي مقاوم للقطع طول 2 متر", price: 150, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أحمر", hex: "#ff0000" }, { name: "أسود", hex: "#000" }] },
  { id: 85, cat: "accessories", name: "منظم أسلاك وتوصيلات المكاتب السليكوني", price: 120, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "رمادي", hex: "#808080" }] },
  { id: 86, cat: "accessories", name: "حامل هاتف للدراجات النارية والهوائية", price: 330, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود", hex: "#000" }] },
  { id: 87, cat: "accessories", name: "مروحة تبريد صغيرة للهاتف أثناء الألعاب", price: 390, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود بإضاءة RGB", hex: "#1a1a1a" }] },
  { id: 88, cat: "accessories", name: "قبضة تحكم للألعاب للبث والهواتف", price: 420, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود أحمر", hex: "#330000" }] },
  { id: 89, cat: "accessories", name: "باور بانك ضخم بسعة 20000 مللي أمبير", price: 890, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود", hex: "#111" }] },
  { id: 90, cat: "accessories", name: "قاعدة شحن لاسلكية 3 في 1 للساعة والهاتف والسماعة", price: 750, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أبيض", hex: "#fff" }, { name: "أسود", hex: "#000" }] },
  { id: 91, cat: "accessories", name: "حامل تثبيت مغناطيسي للجدران", price: 160, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "فضي", hex: "#d3d3d3" }] },
  { id: 92, cat: "accessories", name: "مجموعة تنظيف الشاشات والأجهزة الاحترافية", price: 140, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أزرق", hex: "#0000ff" }] },
  { id: 93, cat: "accessories", name: "محول صوت من Type-C إلى منفذ سماعة 3.5مم", price: 130, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أبيض", hex: "#ffffff" }] },
  { id: 94, cat: "accessories", name: "حزام رياضي للذراع للجري وممارسة الرياضة", price: 210, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود", hex: "#000000" }] },
  { id: 95, cat: "accessories", name: "شاحن جداري فائق السرعة 65 واط بتقنية GaN", price: 580, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود مطفي", hex: "#111" }] },
  { id: 96, cat: "accessories", name: "حامل هاتف يثبت على الرقبة للمشاهدة المريحة", price: 240, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أزرق", hex: "#4682b4" }] },
  { id: 97, cat: "accessories", name: "حافظة بطاقات وحماية للهواتف الذكية", price: 190, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود جلد", hex: "#1a1a1a" }] },
  { id: 98, cat: "accessories", name: "سماعة رأس ألعاب (Gaming Headset) بإضاءة", price: 790, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "أسود مع أحمر", hex: "#550000" }] },
  { id: 99, cat: "accessories", name: "قاعدة تثبيت مغناطيسية دائرية للتابلت والهاتف", price: 270, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "فضي", hex: "#e0e0e0" }] },
  { id: 100, cat: "accessories", name: "حقيبة سفر صغيرة منظمة لإكسسوارات الشواحن", price: 340, img: "WhatsApp Image 2026-10-16 at 4.34.13 PM.jpeg", models: ["عام لجميع الأجهزة"], colors: [{ name: "رمادي غامق", hex: "#2f4f4f" }] }
];

let cart = [];
let selectedProduct = null;
let chosenColor = "";
let chosenModel = "";

// عناصر الواجهة
const homeView = document.getElementById("homeView");
const shopSection = document.getElementById("shop");
const productsGrid = document.getElementById("products");
const featuredProducts = document.getElementById("featuredProducts");
const shopTitle = document.getElementById("shopTitle");
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");
const shippingCostSpan = document.getElementById("shippingCost");

// Modal Elements
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const mImg = document.getElementById("mImg");
const mName = document.getElementById("mName");
const mPrice = document.getElementById("mPrice");
const mModel = document.getElementById("mModel");
const mColors = document.getElementById("mColors");
const mColorName = document.getElementById("mColorName");
const mAdd = document.getElementById("mAdd");

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  setupNavigation();
  setupModal();
  setupOrderForm();
});

// عرض 4 منتجات مميزة في الرئيسية
function renderFeatured() {
  if (!featuredProducts) return;
  featuredProducts.innerHTML = productsData.slice(0, 4).map(p => createProductCard(p)).join("");
  attachCardEvents();
}

function createProductCard(p) {
  return `
    <div class="product-card" data-id="${p.id}">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">${p.price} ج.م</div>
      <button class="btn view-btn">عرض التفاصيل</button>
    </div>
  `;
}

function attachCardEvents() {
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openModal(id);
    });
  });
}

// التنقل بين الأقسام
function setupNavigation() {
  const catButtons = document.querySelectorAll(".catbtn, .cat-card");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-cat");
      
      document.querySelectorAll(".catbtn").forEach(b => b.classList.remove("active"));
      const activeBtn = document.querySelector(`.catbtn[data-cat="${cat}"]`);
      if(activeBtn) activeBtn.classList.add("active");

      if (cat === "home") {
        homeView.hidden = false;
        shopSection.hidden = true;
      } else {
        homeView.hidden = true;
        shopSection.hidden = false;
        renderShopCategory(cat);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.getElementById("brand").addEventListener("click", (e) => {
    e.preventDefault();
    homeView.hidden = false;
    shopSection.hidden = true;
    document.querySelectorAll(".catbtn").forEach(b => b.classList.remove("active"));
    document.querySelector('.catbtn[data-cat="home"]').classList.add("active");
  });
}

function renderShopCategory(cat) {
  const filtered = productsData.filter(p => p.cat === cat);
  const titles = { iphone: "منتجات الأيفون", samsung: "منتجات السامسونج", accessories: "الاكسسوارات" };
  shopTitle.textContent = titles[cat] || "منتجاتنا";
  productsGrid.innerHTML = filtered.map(p => createProductCard(p)).join("");
  attachCardEvents();
}

// نافذة تفاصيل المنتج (Modal)
function setupModal() {
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  mAdd.addEventListener("click", () => {
    if (!selectedProduct) return;
    chosenModel = mModel.value;
    
    cart.push({
      ...selectedProduct,
      model: chosenModel,
      color: chosenColor || "افتراضي"
    });

    updateCartUI();
    closeModal();
    alert("تمت الإضافة إلى السلة بنجاح!");
  });
}

function openModal(id) {
  selectedProduct = productsData.find(p => p.id == id);
  if (!selectedProduct) return;

  mImg.src = selectedProduct.img;
  mName.textContent = selectedProduct.name;
  mPrice.textContent = selectedProduct.price + " ج.م";

  mModel.innerHTML = selectedProduct.models.map(m => `<option value="${m}">${m}</option>`).join("");
  
  chosenColor = selectedProduct.colors[0].name;
  mColorName.textContent = chosenColor;
  mColors.innerHTML = selectedProduct.colors.map((c, index) => `
    <div class="swatch ${index === 0 ? 'active' : ''}" style="background-color: ${c.hex}" data-name="${c.name}"></div>
  `).join("");

  document.querySelectorAll(".swatch").forEach(swatch => {
    swatch.addEventListener("click", () => {
      document.querySelectorAll(".swatch").forEach(s => s.classList.remove("active"));
      swatch.classList.add("active");
      chosenColor = swatch.getAttribute("data-name");
      mColorName.textContent = chosenColor;
    });
  });

  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
  selectedProduct = null;
}

// تحديث السلة
function updateCartUI() {
  cartCount.textContent = cart.length;
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>السلة فارغة حالياً.</p>";
    totalSpan.textContent = "0 ج.م";
    shippingCostSpan.textContent = "0 ج.م";
    return;
  }

  let subtotal = 0;
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    subtotal += item.price;
    return `
      <div class="cart-item">
        <span>${item.name} (${item.model} - ${item.color})</span>
        <span>${item.price} ج.م</span>
        <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">✕</button>
      </div>
    `;
  }).join("");

  const shipping = 50;
  shippingCostSpan.textContent = shipping + " ج.م";
  totalSpan.textContent = (subtotal + shipping) + " ج.م";
}

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  updateCartUI();
};

// نموذج الطلب وإرساله لواتساب
function setupOrderForm() {
  const form = document.getElementById("orderForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("سلة المشتريات فارغة!");
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");

    let message = `*طلب جديد من متجر TITO Store*%0A`;
    message += `---------------------------%0A`;
    message += `*الاسم:* ${name}%0A`;
    message += `*الهاتف:* ${phone}%0A`;
    message += `*العنوان:* ${address}%0A`;
    message += `---------------------------%0A`;
    message += `*المنتجات:*%0A`;
    
    cart.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} | الموديل: ${item.model} | اللون: ${item.color} | السعر: ${item.price} ج.م%0A`;
    });

    message += `---------------------------%0A`;
    message += `*الإجمالي شامل الشحن:* ${totalSpan.textContent}`;

    const whatsappNumber = "201274183333"; // استبدل هذا برقم واتساب الخاص بك
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  });
}
