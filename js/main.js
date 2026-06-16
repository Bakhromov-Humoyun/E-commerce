/* ═══════════════════════════════════════════════
   SOLE — Premium Footwear | JavaScript SPA
   Author: Senior Frontend Developer
   Modules: State → i18n → Products → Router →
            Shop → Product Detail → Cart → Auth →
            Animations → UI Utilities
═══════════════════════════════════════════════ */

"use strict";

/* ─────────────────────────────────────────────
   1. APPLICATION STATE
───────────────────────────────────────────── */
const state = {
  lang: "en",
  cart: [], // [{ product, size, color, qty }]
  wishlist: new Set(),
  currentProduct: null,
  selectedSize: null,
  selectedColor: null,
  detailQty: 1,
  activeFilters: {
    brands: [],
    categories: [],
    priceMin: null,
    priceMax: null,
    sizes: [],
    sort: "featured",
  },
  currentPage: "home",
};

/* ─────────────────────────────────────────────
   2. TRANSLATIONS (i18n)
───────────────────────────────────────────── */
const translations = {
  en: {
    nav_home: "Home",
    nav_shop: "Shop",
    nav_auth: "Sign In",
    hero_eyebrow: "New Season 2025",
    hero_title: "Move<br><em>Beyond</em><br>Limits.",
    hero_sub:
      "Premium footwear engineered for those who never stop pushing forward. Every step, elevated.",
    hero_cta_shop: "Shop Now",
    hero_cta_explore: "Explore",
    stat_styles: "Styles",
    stat_customers: "Customers",
    stat_rating: "Rating",
    fc_new: "New Drop",
    trending_eyebrow: "Curated for you",
    trending_title: "Shop by Category",
    cat_running: "Running",
    cat_lifestyle: "Lifestyle",
    cat_basketball: "Basketball",
    cat_training: "Training",
    cat_count_run: "48 styles",
    cat_count_life: "62 styles",
    cat_count_bas: "35 styles",
    cat_count_train: "41 styles",
    promo_tag1: "Exclusive Drop",
    promo_h1: "The Velocity Series",
    promo_p1: "Where speed meets aesthetics",
    promo_tag2: "Up to 40% Off",
    promo_h2: "Season Sale",
    promo_tag3: "New Arrivals",
    promo_h3: "Women's Edition",
    promo_cta: "Shop Now →",
    feat_eyebrow: "Bestsellers",
    feat_title: "Trending Now",
    feat_viewall: "View All →",
    footer_tagline: "Premium footwear for those who move with purpose.",
    footer_shop: "Shop",
    footer_new: "New Arrivals",
    footer_men: "Men",
    footer_women: "Women",
    footer_sale: "Sale",
    footer_help: "Help",
    footer_faq: "FAQ",
    footer_ship: "Shipping",
    footer_returns: "Returns",
    footer_contact: "Contact",
    footer_follow: "Follow",
    footer_copy: "© 2025 SOLE. All rights reserved.",
    filter_brand: "Brand",
    filter_category: "Category",
    filter_price: "Price Range",
    filter_size: "Size (US)",
    filter_reset: "Reset Filters",
    shop_title: "All Shoes",
    sort_featured: "Featured",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_newest: "Newest",
    btn_filters: "Filters",
    back_shop: "Back to Shop",
    opt_color: "Color",
    opt_size: "Size (US)",
    size_guide: "Size Guide",
    btn_add_cart: "Add to Cart",
    btn_wishlist: "Add to Wishlist",
    acc_desc: "Description",
    acc_specs: "Specifications",
    acc_ship: "Shipping & Returns",
    ship_info:
      "Free standard shipping on orders over $100. Express delivery available. 30-day free returns on unworn items in original packaging.",
    cart_title: "Your Cart",
    cart_empty: "Your cart is empty",
    cart_shop: "Start Shopping",
    summary_title: "Order Summary",
    summary_subtotal: "Subtotal",
    summary_ship: "Shipping",
    summary_total: "Total",
    promo_placeholder: "Promo code",
    promo_apply: "Apply",
    btn_checkout: "Proceed to Checkout",
    btn_continue: "← Continue Shopping",
    checkout_title: "Checkout",
    form_contact: "Contact",
    form_email: "Email",
    form_email_ph: "you@email.com",
    form_shipping: "Shipping Address",
    form_fname: "First Name",
    form_fname_ph: "Jane",
    form_lname: "Last Name",
    form_address: "Address",
    form_city: "City",
    form_zip: "ZIP Code",
    form_payment: "Payment",
    form_card: "Card Number",
    form_exp: "Expiry",
    form_cvv: "CVV",
    form_password: "Password",
    btn_place_order: "Place Order",
    auth_left_title: "Your Next Favourite Pair Awaits.",
    auth_left_sub:
      "Join thousands of sneaker enthusiasts who trust SOLE for their footwear needs.",
    auth_feat1: "Exclusive member drops",
    auth_feat2: "Early access to sales",
    auth_feat3: "Free returns for members",
    tab_login: "Sign In",
    tab_signup: "Create Account",
    login_title: "Welcome back.",
    login_sub: "Good to see you again.",
    signup_title: "Create account.",
    signup_sub: "It's free and always will be.",
    remember_me: "Remember me",
    forgot_pass: "Forgot password?",
    auth_or: "or continue with",
    btn_login: "Sign In",
    btn_signup: "Create Account",
    terms_agree: "I agree to the Terms and Privacy Policy",
    order_success: "Order Placed!",
    order_msg:
      "Thank you for your purchase. You'll receive a confirmation email shortly.",
    btn_continue_shop: "Continue Shopping",
    quick_add: "Quick Add",
    toast_added: "✓ Added to cart",
    toast_removed: "Removed from cart",
    toast_promo: "✓ Promo code applied — 10% off!",
    toast_promo_err: "Invalid promo code",
    toast_login: "✓ Welcome back!",
    toast_signup: "✓ Account created!",
    toast_wishlist_add: "♡ Saved to wishlist",
    toast_wishlist_remove: "Removed from wishlist",
    toast_select_size: "Please select a size first",
    size_unavail: "Size unavailable",
  },
  uz: {
    nav_home: "Bosh sahifa",
    nav_shop: "Do'kon",
    nav_auth: "Kirish",
    hero_eyebrow: "Yangi Mavsum 2025",
    hero_title: "Chegara<br><em>bilmasdan</em><br>yur.",
    hero_sub:
      "Oldinga intilganlar uchun premium poyabzal. Har bir qadam — yangi balandlik.",
    hero_cta_shop: "Xarid qilish",
    hero_cta_explore: "Ko'rish",
    stat_styles: "Uslublar",
    stat_customers: "Mijozlar",
    stat_rating: "Reyting",
    fc_new: "Yangi keldi",
    trending_eyebrow: "Siz uchun tanlangan",
    trending_title: "Kategoriya bo'yicha",
    cat_running: "Yugurish",
    cat_lifestyle: "Turmush tarzi",
    cat_basketball: "Basketbol",
    cat_training: "Mashq",
    cat_count_run: "48 uslub",
    cat_count_life: "62 uslub",
    cat_count_bas: "35 uslub",
    cat_count_train: "41 uslub",
    promo_tag1: "Ekskluziv",
    promo_h1: "Velocity seriyasi",
    promo_p1: "Tezlik va go'zallik kesishmasida",
    promo_tag2: "40% chegirma",
    promo_h2: "Mavsum sotuvi",
    promo_tag3: "Yangi mahsulotlar",
    promo_h3: "Ayollar kolleksiyasi",
    promo_cta: "Xarid qilish →",
    feat_eyebrow: "Eng koʻp sotiladi",
    feat_title: "Hozir trend",
    feat_viewall: "Barchasini ko'rish →",
    footer_tagline: "Maqsad bilan yuruvchilar uchun premium poyabzal.",
    footer_shop: "Do'kon",
    footer_new: "Yangi kelishlar",
    footer_men: "Erkaklar",
    footer_women: "Ayollar",
    footer_sale: "Sotuv",
    footer_help: "Yordam",
    footer_faq: "FAQ",
    footer_ship: "Yetkazib berish",
    footer_returns: "Qaytarish",
    footer_contact: "Aloqa",
    footer_follow: "Kuzating",
    footer_copy: "© 2025 SOLE. Barcha huquqlar himoyalangan.",
    filter_brand: "Brend",
    filter_category: "Kategoriya",
    filter_price: "Narx oralig'i",
    filter_size: "O'lchov (US)",
    filter_reset: "Filtrlani tozalash",
    shop_title: "Barcha poyabzallar",
    sort_featured: "Tavsiya etilgan",
    sort_price_asc: "Narx: arzondan qimmatga",
    sort_price_desc: "Narx: qimmatdan arzonga",
    sort_newest: "Yangilari",
    btn_filters: "Filtrlar",
    back_shop: "Do'konga qaytish",
    opt_color: "Rang",
    opt_size: "O'lchov (US)",
    size_guide: "O'lchov jadvali",
    btn_add_cart: "Savatga qo'shish",
    btn_wishlist: "Istaklar ro'yxatiga qo'shish",
    acc_desc: "Tavsif",
    acc_specs: "Xususiyatlar",
    acc_ship: "Yetkazib berish va qaytarish",
    ship_info:
      "$100 dan yuqori buyurtmalarda bepul standart yetkazib berish. Ekspress yetkazib berish mavjud. 30 kunlik bepul qaytarish.",
    cart_title: "Savat",
    cart_empty: "Savat bo'sh",
    cart_shop: "Xarid boshlash",
    summary_title: "Buyurtma xulosasi",
    summary_subtotal: "Jami",
    summary_ship: "Yetkazib berish",
    summary_total: "Umumiy",
    promo_placeholder: "Promo kod",
    promo_apply: "Qo'llash",
    btn_checkout: "To'lovga o'tish",
    btn_continue: "← Xaridni davom ettirish",
    checkout_title: "To'lov",
    form_contact: "Aloqa",
    form_email: "Email",
    form_email_ph: "siz@email.com",
    form_shipping: "Yetkazib berish manzili",
    form_fname: "Ism",
    form_fname_ph: "Jasur",
    form_lname: "Familiya",
    form_address: "Manzil",
    form_city: "Shahar",
    form_zip: "Pochta indeksi",
    form_payment: "To'lov",
    form_card: "Karta raqami",
    form_exp: "Amal qilish muddati",
    form_cvv: "CVV",
    form_password: "Parol",
    btn_place_order: "Buyurtma berish",
    auth_left_title: "Keyingi sevimli poyabzalingiz kutmoqda.",
    auth_left_sub:
      "SOLE ga ishongan minglab poyabzal ixlosmandlariga qo'shiling.",
    auth_feat1: "Ekskluziv aksiyalar",
    auth_feat2: "Sotuvsalarga erta kirish",
    auth_feat3: "A'zolar uchun bepul qaytarish",
    tab_login: "Kirish",
    tab_signup: "Ro'yxatdan o'tish",
    login_title: "Qaytib kelganingizdan xursandmiz.",
    login_sub: "Sizni yana ko'rganimizdan xursandmiz.",
    signup_title: "Hisob yarating.",
    signup_sub: "Bu bepul va doim shunday bo'ladi.",
    remember_me: "Eslab qol",
    forgot_pass: "Parolni unutdingizmi?",
    auth_or: "yoki quyidagi orqali davom eting",
    btn_login: "Kirish",
    btn_signup: "Hisob yaratish",
    terms_agree: "Men Shartlar va Maxfiylik siyosatiga roziman",
    order_success: "Buyurtma berildi!",
    order_msg: "Xarid uchun rahmat. Tez orada tasdiqlash emaili yuboriladi.",
    btn_continue_shop: "Xaridni davom ettirish",
    quick_add: "Tez qo'shish",
    toast_added: "✓ Savatga qo'shildi",
    toast_removed: "Savatdan olib tashlandi",
    toast_promo: "✓ Promo kod qo'llandi — 10% chegirma!",
    toast_promo_err: "Noto'g'ri promo kod",
    toast_login: "✓ Xush kelibsiz!",
    toast_signup: "✓ Hisob yaratildi!",
    toast_wishlist_add: "♡ Istaklar ro'yxatiga saqlandi",
    toast_wishlist_remove: "Istaklar ro'yxatidan olib tashlandi",
    toast_select_size: "Iltimos, avval o'lchovni tanlang",
    size_unavail: "O'lchov mavjud emas",
  },
  ru: {
    nav_home: "Главная",
    nav_shop: "Магазин",
    nav_auth: "Войти",
    hero_eyebrow: "Новый сезон 2025",
    hero_title: "Двигайся<br><em>за пределы</em><br>возможного.",
    hero_sub:
      "Премиальная обувь для тех, кто никогда не останавливается. Каждый шаг — на новом уровне.",
    hero_cta_shop: "Купить",
    hero_cta_explore: "Исследовать",
    stat_styles: "Стилей",
    stat_customers: "Клиентов",
    stat_rating: "Рейтинг",
    fc_new: "Новинка",
    trending_eyebrow: "Специально для вас",
    trending_title: "Категории",
    cat_running: "Бег",
    cat_lifestyle: "Повседневные",
    cat_basketball: "Баскетбол",
    cat_training: "Тренировки",
    cat_count_run: "48 моделей",
    cat_count_life: "62 модели",
    cat_count_bas: "35 моделей",
    cat_count_train: "41 модель",
    promo_tag1: "Эксклюзив",
    promo_h1: "Серия Velocity",
    promo_p1: "Скорость встречает стиль",
    promo_tag2: "До 40% скидки",
    promo_h2: "Сезонная распродажа",
    promo_tag3: "Новинки",
    promo_h3: "Женская коллекция",
    promo_cta: "Купить →",
    feat_eyebrow: "Хиты продаж",
    feat_title: "Сейчас в тренде",
    feat_viewall: "Смотреть все →",
    footer_tagline: "Премиальная обувь для тех, кто движется с целью.",
    footer_shop: "Магазин",
    footer_new: "Новинки",
    footer_men: "Мужчинам",
    footer_women: "Женщинам",
    footer_sale: "Распродажа",
    footer_help: "Помощь",
    footer_faq: "FAQ",
    footer_ship: "Доставка",
    footer_returns: "Возврат",
    footer_contact: "Контакты",
    footer_follow: "Следите за нами",
    footer_copy: "© 2025 SOLE. Все права защищены.",
    filter_brand: "Бренд",
    filter_category: "Категория",
    filter_price: "Диапазон цен",
    filter_size: "Размер (US)",
    filter_reset: "Сбросить фильтры",
    shop_title: "Вся обувь",
    sort_featured: "Рекомендуемые",
    sort_price_asc: "Цена: по возрастанию",
    sort_price_desc: "Цена: по убыванию",
    sort_newest: "Новинки",
    btn_filters: "Фильтры",
    back_shop: "Назад в магазин",
    opt_color: "Цвет",
    opt_size: "Размер (US)",
    size_guide: "Таблица размеров",
    btn_add_cart: "В корзину",
    btn_wishlist: "В список желаний",
    acc_desc: "Описание",
    acc_specs: "Характеристики",
    acc_ship: "Доставка и возврат",
    ship_info:
      "Бесплатная стандартная доставка от $100. Экспресс-доставка доступна. 30-дневный бесплатный возврат.",
    cart_title: "Корзина",
    cart_empty: "Корзина пуста",
    cart_shop: "Начать покупки",
    summary_title: "Итого",
    summary_subtotal: "Подытог",
    summary_ship: "Доставка",
    summary_total: "Итого",
    promo_placeholder: "Промокод",
    promo_apply: "Применить",
    btn_checkout: "Оформить заказ",
    btn_continue: "← Продолжить покупки",
    checkout_title: "Оформление заказа",
    form_contact: "Контакт",
    form_email: "Электронная почта",
    form_email_ph: "вы@email.com",
    form_shipping: "Адрес доставки",
    form_fname: "Имя",
    form_fname_ph: "Алексей",
    form_lname: "Фамилия",
    form_address: "Адрес",
    form_city: "Город",
    form_zip: "Почтовый индекс",
    form_payment: "Оплата",
    form_card: "Номер карты",
    form_exp: "Срок действия",
    form_cvv: "CVV",
    form_password: "Пароль",
    btn_place_order: "Разместить заказ",
    auth_left_title: "Ваша следующая любимая пара ждёт.",
    auth_left_sub:
      "Присоединитесь к тысячам любителей кроссовок, доверяющих SOLE.",
    auth_feat1: "Эксклюзивные дропы",
    auth_feat2: "Ранний доступ к распродажам",
    auth_feat3: "Бесплатный возврат для участников",
    tab_login: "Войти",
    tab_signup: "Создать аккаунт",
    login_title: "С возвращением.",
    login_sub: "Рады снова видеть вас.",
    signup_title: "Создать аккаунт.",
    signup_sub: "Это бесплатно и навсегда.",
    remember_me: "Запомнить меня",
    forgot_pass: "Забыли пароль?",
    auth_or: "или войдите через",
    btn_login: "Войти",
    btn_signup: "Создать аккаунт",
    terms_agree: "Я соглашаюсь с Условиями и Политикой конфиденциальности",
    order_success: "Заказ размещён!",
    order_msg: "Спасибо за покупку. Вы скоро получите подтверждение по email.",
    btn_continue_shop: "Продолжить покупки",
    quick_add: "Быстро добавить",
    toast_added: "✓ Добавлено в корзину",
    toast_removed: "Удалено из корзины",
    toast_promo: "✓ Промокод применён — скидка 10%!",
    toast_promo_err: "Неверный промокод",
    toast_login: "✓ Добро пожаловать!",
    toast_signup: "✓ Аккаунт создан!",
    toast_wishlist_add: "♡ Сохранено в список желаний",
    toast_wishlist_remove: "Удалено из списка желаний",
    toast_select_size: "Пожалуйста, сначала выберите размер",
    size_unavail: "Размер недоступен",
  },
};

/* Helper: translate a key */
function t(key) {
  return translations[state.lang][key] || translations["en"][key] || key;
}

/* ─────────────────────────────────────────────
   3. PRODUCT DATA
───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    brand: "SOLE",
    name: "AirForm Pro X",
    category: "running",
    price: 189,
    oldPrice: null,
    badge: "new",
    colors: [
      { name: "Indigo / White", hex: "#6366f1" },
      { name: "Midnight / Black", hex: "#1e1b4b" },
      { name: "Electric Pink", hex: "#ec4899" },
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    unavailableSizes: [7],
    description:
      "The AirForm Pro X redefines running performance with its ultra-responsive foam midsole and seamless engineered upper. Designed for daily training and long-distance runs alike.",
    specs: [
      "Upper: Engineered mesh with Flyknit zones",
      "Midsole: AirForm Pro cushioning",
      "Outsole: Carbon-rubber heel, blown rubber forefoot",
      "Weight: 268g (US 10)",
      "Drop: 10mm",
      "Type: Neutral running",
    ],
    svgColor: "#6366f1",
    featured: true,
    isNew: true,
  },
  {
    id: 2,
    brand: "Velocity",
    name: "Velocity Ultra 3",
    category: "running",
    price: 149,
    oldPrice: 199,
    badge: "sale",
    colors: [
      { name: "Signal Orange", hex: "#f97316" },
      { name: "Stealth Black", hex: "#1c1917" },
      { name: "Cloud White", hex: "#f1f5f9" },
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    unavailableSizes: [12],
    description:
      "The Velocity Ultra 3 delivers explosive energy return with every stride. Featuring our patented ZoomCell technology for maximum responsiveness at minimum weight.",
    specs: [
      "Upper: Ultralight mesh with reflective detailing",
      "Midsole: ZoomCell reactive foam",
      "Outsole: Multi-directional rubber traction",
      "Weight: 232g (US 10)",
      "Drop: 8mm",
      "Type: Speed/race training",
    ],
    svgColor: "#f97316",
    featured: true,
    isNew: false,
  },
  {
    id: 3,
    brand: "SOLE",
    name: "Court Classic OG",
    category: "lifestyle",
    price: 129,
    oldPrice: null,
    badge: "hot",
    colors: [
      { name: "Triple White", hex: "#f1f5f9" },
      { name: "Panda", hex: "#0f172a" },
      { name: "Sail Gum", hex: "#d4a574" },
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    unavailableSizes: [],
    description:
      "A timeless silhouette reimagined for the modern era. The Court Classic OG blends heritage style with contemporary comfort for effortless, all-day wear.",
    specs: [
      "Upper: Premium leather with suede overlays",
      "Midsole: Memory foam sockliner",
      "Outsole: Non-marking vulcanized rubber",
      "Weight: 310g (US 10)",
      "Closure: Lace-up",
      "Type: Lifestyle/casual",
    ],
    svgColor: "#94a3b8",
    featured: true,
    isNew: false,
  },
  {
    id: 4,
    brand: "Apex",
    name: "Apex Jump Elite",
    category: "basketball",
    price: 219,
    oldPrice: null,
    badge: "new",
    colors: [
      { name: "Team Red", hex: "#dc2626" },
      { name: "Court Black", hex: "#111827" },
      { name: "Gold Rush", hex: "#f59e0b" },
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    unavailableSizes: [8],
    description:
      "Built for explosive on-court performance. The Apex Jump Elite features a high-top collar for ankle support, cushioned landing zones, and superior court traction.",
    specs: [
      "Upper: Reinforced synthetic leather",
      "Midsole: Dual-density impact foam",
      "Outsole: Multi-directional herringbone pattern",
      "Weight: 380g (US 10)",
      "Ankle: High-top support collar",
      "Type: Basketball",
    ],
    svgColor: "#dc2626",
    featured: false,
    isNew: true,
  },
  {
    id: 5,
    brand: "Form",
    name: "Form Adapt TRX",
    category: "training",
    price: 139,
    oldPrice: 169,
    badge: "sale",
    colors: [
      { name: "Forest Green", hex: "#10b981" },
      { name: "Iron Grey", hex: "#4b5563" },
      { name: "Electric Blue", hex: "#3b82f6" },
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    unavailableSizes: [11],
    description:
      "Engineered for cross-training versatility. The Form Adapt TRX excels in gym workouts, HIIT sessions, and outdoor training with its multi-surface outsole and lockdown fit.",
    specs: [
      "Upper: Stretch-knit with TPU cage",
      "Midsole: Responsive dual-layer foam",
      "Outsole: Multi-surface rubber compound",
      "Weight: 290g (US 10)",
      "Stability: Medial post support",
      "Type: Cross-training",
    ],
    svgColor: "#10b981",
    featured: true,
    isNew: false,
  },
  {
    id: 6,
    brand: "SOLE",
    name: "Cloud 9 Drift",
    category: "lifestyle",
    price: 165,
    oldPrice: null,
    badge: null,
    colors: [
      { name: "Lavender Mist", hex: "#a78bfa" },
      { name: "Mocha", hex: "#92400e" },
      { name: "Chalk White", hex: "#e2e8f0" },
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    unavailableSizes: [6],
    description:
      "The Cloud 9 Drift is designed for those who refuse to choose between comfort and style. Its plush foam construction and minimal silhouette make every outfit effortless.",
    specs: [
      "Upper: Nappa leather with perforations",
      "Midsole: CloudForm ultra-soft cushioning",
      "Outsole: Flex-groove rubber",
      "Weight: 255g (US 10)",
      "Insole: Removable memory foam",
      "Type: Lifestyle/comfort",
    ],
    svgColor: "#a78bfa",
    featured: false,
    isNew: false,
  },
  {
    id: 7,
    brand: "Velocity",
    name: "Velocity Sprint Carbon",
    category: "running",
    price: 299,
    oldPrice: null,
    badge: "new",
    colors: [
      { name: "Cyber Yellow", hex: "#eab308" },
      { name: "Carbon Black", hex: "#1f2937" },
    ],
    sizes: [8, 9, 10, 11, 12],
    unavailableSizes: [],
    description:
      "Race-day performance at its pinnacle. The Velocity Sprint Carbon features a full-length carbon fiber plate for maximum propulsion and our most advanced foam compound for record-breaking runs.",
    specs: [
      "Upper: Single-layer mesh race bootie",
      "Midsole: NitroCell race foam + carbon plate",
      "Outsole: Pebax forefoot rubber pods",
      "Weight: 198g (US 10)",
      "Drop: 4mm",
      "Type: Race/competition",
    ],
    svgColor: "#eab308",
    featured: false,
    isNew: true,
  },
  {
    id: 8,
    brand: "Apex",
    name: "Apex Slide Recover",
    category: "lifestyle",
    price: 69,
    oldPrice: 89,
    badge: "sale",
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "White", hex: "#f8fafc" },
      { name: "Terracotta", hex: "#b45309" },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    unavailableSizes: [],
    description:
      "Premium recovery slides engineered for post-workout comfort. Thick cushioned footbed and adjustable strap provide the perfect recovery experience.",
    specs: [
      "Upper: Neoprene strap with hook-and-loop closure",
      "Footbed: 40mm EVA foam cushioning",
      "Outsole: Non-slip rubber",
      "Weight: 140g per slide",
      "Type: Recovery/slide",
    ],
    svgColor: "#6b7280",
    featured: false,
    isNew: false,
  },
  {
    id: 9,
    brand: "Form",
    name: "Form Gravity Hike",
    category: "training",
    price: 179,
    oldPrice: null,
    badge: null,
    colors: [
      { name: "Trail Olive", hex: "#65a30d" },
      { name: "Desert Tan", hex: "#d97706" },
      { name: "Storm Grey", hex: "#6b7280" },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    unavailableSizes: [7, 13],
    description:
      "Engineered for outdoor adventures and urban exploration. The Gravity Hike blends trail-ready traction with all-day lifestyle comfort and waterproof protection.",
    specs: [
      "Upper: WaterShield treated canvas",
      "Midsole: Trail-tuned cushioning",
      "Outsole: Lugged rubber with stone ejectors",
      "Weight: 420g (US 10)",
      "Protection: Toe cap + heel guard",
      "Type: Trail/hiking",
    ],
    svgColor: "#65a30d",
    featured: false,
    isNew: false,
  },
  {
    id: 10,
    brand: "SOLE",
    name: "SOLE Low Classic",
    category: "lifestyle",
    price: 109,
    oldPrice: null,
    badge: null,
    colors: [
      { name: "Off-White", hex: "#fef9c3" },
      { name: "Slate Blue", hex: "#334155" },
      { name: "Rose", hex: "#fda4af" },
    ],
    sizes: [5, 6, 7, 8, 9, 10, 11],
    unavailableSizes: [5],
    description:
      "The SOLE Low Classic is an icon reborn. Clean lines, quality leather, and a perfectly tuned cupsole combine in a silhouette that pairs with everything in your wardrobe.",
    specs: [
      "Upper: Full-grain leather with canvas lining",
      "Midsole: Die-cut EVA",
      "Outsole: Cupsole with herringbone tread",
      "Weight: 285g (US 9)",
      "Closure: 5-eyelet lace-up",
      "Type: Lifestyle/classic",
    ],
    svgColor: "#e2e8f0",
    featured: false,
    isNew: false,
  },
  {
    id: 11,
    brand: "Apex",
    name: "Apex Prodigy Dunk",
    category: "basketball",
    price: 189,
    oldPrice: 229,
    badge: "sale",
    colors: [
      { name: "Cobalt Blue", hex: "#1d4ed8" },
      { name: "Court White", hex: "#f0fdf4" },
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    unavailableSizes: [8, 13],
    description:
      "Next-generation basketball performance in a low-profile design. The Prodigy Dunk delivers court feel and responsiveness for guards who rely on quickness and precision.",
    specs: [
      "Upper: Synthetic leather with mesh panels",
      "Midsole: Court-tuned impact foam",
      "Outsole: Translucent rubber herringbone",
      "Weight: 335g (US 10)",
      "Type: Basketball (low)",
    ],
    svgColor: "#1d4ed8",
    featured: false,
    isNew: false,
  },
  {
    id: 12,
    brand: "Velocity",
    name: "Velocity Trail Blaze",
    category: "training",
    price: 159,
    oldPrice: null,
    badge: "new",
    colors: [
      { name: "Lava Orange", hex: "#ea580c" },
      { name: "Forest Black", hex: "#1c1917" },
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    unavailableSizes: [],
    description:
      "Dominate any terrain with the Velocity Trail Blaze. Built for trail runners who demand speed and reliability across dirt, gravel, and technical mountain paths.",
    specs: [
      "Upper: Trail mesh with rock protection",
      "Midsole: TrailCell adaptive foam",
      "Outsole: Aggressive lug pattern in durable rubber",
      "Weight: 310g (US 10)",
      "Drop: 6mm",
      "Type: Trail running",
    ],
    svgColor: "#ea580c",
    featured: false,
    isNew: true,
  },
];

/* Helper: generate a shoe SVG thumbnail with custom color */
function generateShoeSVG(color = "#6366f1", scale = 1) {
  return `<svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="270" cy="310" rx="195" ry="28" fill="#0a0a14" opacity="0.5"/>
    <path d="M90 280 Q160 265 270 270 Q380 265 440 280 Q450 295 440 305 Q380 315 270 318 Q160 315 90 305 Z" fill="#e2e8f0"/>
    <path d="M110 270 Q130 200 180 175 Q230 155 300 160 Q360 162 400 175 Q430 185 440 210 Q445 240 440 270 Z" fill="${color}"/>
    <path d="M110 270 Q105 250 115 230 Q130 208 160 195 Q190 182 220 178 Q200 210 195 245 Q175 265 140 272 Z" fill="${adjustColor(
      color,
      -30
    )}"/>
    <path d="M390 172 Q425 178 438 200 Q445 220 442 250 Q440 265 438 272 Q415 260 400 240 Q388 218 390 195 Z" fill="${adjustColor(
      color,
      -20
    )}"/>
    <path d="M165 192 Q230 170 310 168 Q365 168 405 178 Q390 190 350 195 Q300 200 240 200 Q195 202 165 192 Z" fill="rgba(255,255,255,0.22)"/>
    <line x1="205" y1="173" x2="350" y2="170" stroke="white" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.6"/>
    <line x1="210" y1="183" x2="348" y2="180" stroke="white" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.6"/>
    <line x1="215" y1="193" x2="345" y2="190" stroke="white" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.6"/>
    <circle cx="330" cy="228" r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <text x="330" y="233" text-anchor="middle" font-family="Syne,sans-serif" font-weight="800" font-size="11" fill="white" opacity="0.85">S</text>
    <path d="M160 200 Q200 178 260 172 Q290 170 315 173" stroke="rgba(255,255,255,0.35)" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`;
}

/* Slightly darken a hex color for accents */
function adjustColor(hex, amount) {
  try {
    const r = Math.max(0, parseInt(hex.slice(1, 3), 16) + amount);
    const g = Math.max(0, parseInt(hex.slice(3, 5), 16) + amount);
    const b = Math.max(0, parseInt(hex.slice(5, 7), 16) + amount);
    return `rgb(${r},${g},${b})`;
  } catch {
    return hex;
  }
}

/* ─────────────────────────────────────────────
   4. ROUTER
───────────────────────────────────────────── */
function navigate(page, filter = null) {
  // Hide all pages
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));

  const map = {
    home: "pageHome",
    shop: "pageShop",
    product: "pageProduct",
    cart: "pageCart",
    auth: "pageAuth",
  };

  const el = document.getElementById(map[page]);
  if (!el) return;
  el.classList.add("active");
  state.currentPage = page;

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Page-specific init
  if (page === "shop") {
    if (filter) {
      // Pre-check the filter category checkbox
      const checkboxes = document.querySelectorAll(
        '#shopSidebar input[type="checkbox"]'
      );
      checkboxes.forEach((cb) => {
        if (cb.value === filter) cb.checked = true;
      });
    }
    renderShopGrid();
  }
  if (page === "home") {
    renderFeaturedGrid();
  }
  if (page === "cart") {
    renderCart();
  }

  // Re-apply translations
  applyTranslations();

  // Run intersection observer
  setTimeout(initScrollReveal, 100);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─────────────────────────────────────────────
   5. LANGUAGE SWITCHING
───────────────────────────────────────────── */
const langMeta = {
  en: { flag: "🇺🇸", label: "EN" },
  uz: { flag: "🇺🇿", label: "UZ" },
  ru: { flag: "🇷🇺", label: "RU" },
};

function setLang(lang) {
  state.lang = lang;
  document.getElementById("langFlag").textContent = langMeta[lang].flag;
  document.getElementById("langLabel").textContent = langMeta[lang].label;
  document.documentElement.lang = lang;

  // Highlight active lang option
  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  closeLangDropdown();
  applyTranslations();

  // Re-render dynamic content after lang switch
  if (state.currentPage === "shop") renderShopGrid();
  if (state.currentPage === "home") renderFeaturedGrid();
  if (state.currentPage === "cart") renderCart();
}

function applyTranslations() {
  // data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val) el.innerHTML = val;
  });
  // data-i18n-placeholder inputs
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = t(key);
    if (val) el.placeholder = val;
  });
}

/* Lang dropdown toggle */
function toggleLangDropdown() {
  const dropdown = document.getElementById("langDropdown");
  dropdown.classList.toggle("open");
}
function closeLangDropdown() {
  document.getElementById("langDropdown").classList.remove("open");
}
document.getElementById("langBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  toggleLangDropdown();
});
document.addEventListener("click", () => closeLangDropdown());

/* ─────────────────────────────────────────────
   6. SHOP PAGE
───────────────────────────────────────────── */
let filteredProducts = [...PRODUCTS];

function applyFilters() {
  const brands = [
    ...document.querySelectorAll(
      '#shopSidebar input[value="sole"], #shopSidebar input[value="velocity"], #shopSidebar input[value="apex"], #shopSidebar input[value="form"]'
    ),
  ]
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);
  const categories = [
    ...document.querySelectorAll(
      '#shopSidebar input[value="running"], #shopSidebar input[value="lifestyle"], #shopSidebar input[value="basketball"], #shopSidebar input[value="training"]'
    ),
  ]
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);
  const priceMin = parseFloat(document.getElementById("priceMin").value) || 0;
  const priceMax =
    parseFloat(document.getElementById("priceMax").value) || Infinity;
  const sort = document.getElementById("sortSelect").value;

  state.activeFilters = {
    brands,
    categories,
    priceMin,
    priceMax,
    sizes: state.activeFilters.sizes,
    sort,
  };

  filteredProducts = PRODUCTS.filter((p) => {
    const brandMatch =
      brands.length === 0 || brands.includes(p.brand.toLowerCase());
    const catMatch = categories.length === 0 || categories.includes(p.category);
    const priceMatch = p.price >= priceMin && p.price <= priceMax;
    const sizeMatch =
      state.activeFilters.sizes.length === 0 ||
      state.activeFilters.sizes.some((s) => p.sizes.includes(+s));
    return brandMatch && catMatch && priceMatch && sizeMatch;
  });

  // Sort
  if (sort === "price-asc") filteredProducts.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc")
    filteredProducts.sort((a, b) => b.price - a.price);
  else if (sort === "newest") filteredProducts.sort((a, b) => b.id - a.id);

  renderShopGrid();
}

function toggleSizeFilter(btn) {
  btn.classList.toggle("active");
  const size = btn.dataset.size;
  if (btn.classList.contains("active")) {
    state.activeFilters.sizes.push(size);
  } else {
    state.activeFilters.sizes = state.activeFilters.sizes.filter(
      (s) => s !== size
    );
  }
  applyFilters();
}

function resetFilters() {
  document
    .querySelectorAll('#shopSidebar input[type="checkbox"]')
    .forEach((cb) => (cb.checked = false));
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";
  document
    .querySelectorAll(".size-chip")
    .forEach((c) => c.classList.remove("active"));
  state.activeFilters = {
    brands: [],
    categories: [],
    priceMin: null,
    priceMax: null,
    sizes: [],
    sort: "featured",
  };
  document.getElementById("sortSelect").value = "featured";
  filteredProducts = [...PRODUCTS];
  renderShopGrid();
}

function toggleSidebar() {
  const sidebar = document.getElementById("shopSidebar");
  sidebar.classList.toggle("open");
}

function renderShopGrid() {
  const grid = document.getElementById("shopGrid");
  const count = document.getElementById("shopCount");
  if (!grid) return;

  const products = filteredProducts.length ? filteredProducts : PRODUCTS;
  count.textContent = `${products.length} ${
    products.length === 1 ? "product" : "products"
  }`;

  grid.innerHTML = products.map((p, i) => createProductCard(p, i)).join("");

  // Stagger animation
  grid.querySelectorAll(".product-card").forEach((card, i) => {
    card.style.animationDelay = `${i * 0.06}s`;
  });
}

function renderFeaturedGrid() {
  const grid = document.getElementById("homeFeaturedGrid");
  if (!grid) return;
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  grid.innerHTML = featured.map((p, i) => createProductCard(p, i)).join("");
  grid.querySelectorAll(".product-card").forEach((card, i) => {
    card.style.animationDelay = `${i * 0.08}s`;
  });
}

function createProductCard(product, index) {
  const badgeHTML = product.badge
    ? `<span class="card-badge badge-${
        product.badge
      }">${product.badge.toUpperCase()}</span>`
    : "";
  const oldPriceHTML = product.oldPrice
    ? `<span class="card-price-old">$${product.oldPrice}</span>`
    : "";
  const colorDots = product.colors
    .map(
      (c) =>
        `<span class="color-dot" style="background:${c.hex}" title="${c.name}"></span>`
    )
    .join("");

  return `
    <div class="product-card" onclick="openProduct(${product.id})">
      ${badgeHTML}
      <button class="card-wish ${state.wishlist.has(product.id) ? "liked" : ""}"
              onclick="event.stopPropagation(); toggleWishlistById(${
                product.id
              }, this)"
              aria-label="Wishlist">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="${
          state.wishlist.has(product.id) ? "currentColor" : "none"
        }" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      </button>
      <div class="card-img-wrap">
        ${generateShoeSVG(product.svgColor)}
        <button class="quick-add" onclick="event.stopPropagation(); quickAdd(${
          product.id
        })" data-i18n="quick_add">${t("quick_add")}</button>
      </div>
      <div class="card-body">
        <div class="card-brand">${product.brand}</div>
        <div class="card-name">${product.name}</div>
        <div class="card-price-row">
          <span class="card-price">$${product.price}</span>
          ${oldPriceHTML}
        </div>
        <div class="card-colors">${colorDots}</div>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────
   7. PRODUCT DETAIL PAGE
───────────────────────────────────────────── */
function openProduct(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  state.currentProduct = product;
  state.selectedSize = null;
  state.selectedColor = product.colors[0];
  state.detailQty = 1;

  // Populate gallery
  const mainGallery = document.getElementById("galleryMain");
  const thumbsGallery = document.getElementById("galleryThumbs");

  mainGallery.innerHTML = generateShoeSVG(product.svgColor);

  // Generate 4 thumbs with color variations
  thumbsGallery.innerHTML = product.colors
    .slice(0, 4)
    .map(
      (c, i) =>
        `<div class="gallery-thumb ${
          i === 0 ? "active" : ""
        }" onclick="switchGallery(this, '${c.hex}')">
      ${generateShoeSVG(c.hex)}
    </div>`
    )
    .join("");

  // Add extra angle thumbs if fewer than 4 colors
  const extraAngles = 4 - product.colors.length;
  for (let i = 0; i < extraAngles; i++) {
    const thumb = document.createElement("div");
    thumb.className = "gallery-thumb";
    thumb.innerHTML = generateShoeSVG(
      adjustColor(product.svgColor, -30 * (i + 1))
    );
    thumb.onclick = function () {
      switchGallery(this, adjustColor(product.svgColor, -30 * (i + 1)));
    };
    thumbsGallery.appendChild(thumb);
  }

  // Populate info
  document.getElementById("detailBrand").textContent = product.brand;
  document.getElementById("detailBadge").textContent = product.badge
    ? product.badge.toUpperCase()
    : "";
  document.getElementById("detailBadge").style.display = product.badge
    ? "inline"
    : "none";
  document.getElementById("detailName").textContent = product.name;
  document.getElementById("detailPrice").textContent = `$${product.price}`;
  document.getElementById("colorLabel").textContent = state.selectedColor.name;
  document.getElementById("qtyDisplay").textContent = "1";

  // Color swatches
  const swatchesEl = document.getElementById("colorSwatches");
  swatchesEl.innerHTML = product.colors
    .map(
      (c, i) =>
        `<button class="color-swatch ${i === 0 ? "selected" : ""}" 
             style="background:${c.hex}" 
             title="${c.name}"
             onclick="selectColor('${c.hex}', '${c.name}', this)"></button>`
    )
    .join("");

  // Size grid
  const sizeEl = document.getElementById("sizeGrid");
  sizeEl.innerHTML = product.sizes
    .map(
      (s) =>
        `<button class="size-btn ${
          product.unavailableSizes.includes(s) ? "unavailable" : ""
        }"
             onclick="${
               product.unavailableSizes.includes(s)
                 ? ""
                 : `selectSize(${s}, this)`
             }"
             ${
               product.unavailableSizes.includes(s)
                 ? 'disabled title="' + t("size_unavail") + '"'
                 : ""
             }>${s}</button>`
    )
    .join("");

  // Description and specs
  document.getElementById("detailDesc").textContent = product.description;
  document.getElementById("detailSpecs").innerHTML = product.specs
    .map((s) => `<li>${s}</li>`)
    .join("");

  // Close all accordion bodies
  document.querySelectorAll(".accordion-body").forEach((b) => {
    b.classList.remove("open");
    b.style.maxHeight = null;
  });
  document
    .querySelectorAll(".accordion-trigger")
    .forEach((t) => t.classList.remove("open"));

  navigate("product");
}

function switchGallery(thumb, color) {
  document
    .querySelectorAll(".gallery-thumb")
    .forEach((t) => t.classList.remove("active"));
  thumb.classList.add("active");
  document.getElementById("galleryMain").innerHTML = generateShoeSVG(color);
}

function selectColor(hex, name, btn) {
  document
    .querySelectorAll(".color-swatch")
    .forEach((s) => s.classList.remove("selected"));
  btn.classList.add("selected");
  state.selectedColor = { hex, name };
  document.getElementById("colorLabel").textContent = name;
  // Update gallery main
  document.getElementById("galleryMain").innerHTML = generateShoeSVG(hex);
}

function selectSize(size, btn) {
  document
    .querySelectorAll(".size-btn:not(.unavailable)")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  state.selectedSize = size;
}

function changeQty(delta) {
  state.detailQty = Math.max(1, Math.min(10, state.detailQty + delta));
  document.getElementById("qtyDisplay").textContent = state.detailQty;
}

function addCurrentToCart() {
  if (!state.selectedSize) {
    showToast(t("toast_select_size"), "error");
    // Shake the size grid
    const sizeGrid = document.getElementById("sizeGrid");
    sizeGrid.style.animation = "none";
    sizeGrid.offsetHeight; // reflow
    sizeGrid.style.animation = "shake 0.4s ease";
    return;
  }

  addToCart(
    state.currentProduct,
    state.selectedSize,
    state.selectedColor,
    state.detailQty
  );
  const btn = document.getElementById("addToCartBtn");
  btn.innerHTML = '✓ <span data-i18n="btn_added">Added!</span>';
  btn.style.background = "var(--clr-accent-3)";
  setTimeout(() => {
    btn.innerHTML = `<span data-i18n="btn_add_cart">${t(
      "btn_add_cart"
    )}</span>`;
    btn.style.background = "";
  }, 1500);
}

function toggleWishlist(btn) {
  const isWished = btn.classList.toggle("wishlisted");
  showToast(isWished ? t("toast_wishlist_add") : t("toast_wishlist_remove"));
}

function toggleAccordion(trigger) {
  const body = trigger.nextElementSibling;
  const isOpen = trigger.classList.contains("open");

  // Close all
  document
    .querySelectorAll(".accordion-trigger")
    .forEach((t) => t.classList.remove("open"));
  document.querySelectorAll(".accordion-body").forEach((b) => {
    b.classList.remove("open");
    b.style.maxHeight = null;
  });

  if (!isOpen) {
    trigger.classList.add("open");
    body.classList.add("open");
    body.style.maxHeight = body.scrollHeight + "px";
  }
}

/* ─────────────────────────────────────────────
   8. CART
───────────────────────────────────────────── */
function addToCart(product, size, color, qty = 1) {
  const key = `${product.id}-${size}-${color?.hex}`;
  const existing = state.cart.find(
    (item) =>
      item.product.id === product.id &&
      item.size === size &&
      item.color?.hex === color?.hex
  );

  if (existing) {
    existing.qty = Math.min(10, existing.qty + qty);
  } else {
    state.cart.push({
      product,
      size,
      color: color || product.colors[0],
      qty,
      key,
    });
  }

  updateCartBadge();
  showToast(t("toast_added"), "success");
}

function quickAdd(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  // Add with first available size
  const firstSize = product.sizes.find(
    (s) => !product.unavailableSizes.includes(s)
  );
  addToCart(product, firstSize, product.colors[0], 1);
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = total;
  badge.classList.remove("pulse");
  void badge.offsetWidth; // reflow
  badge.classList.add("pulse");
}

function renderCart() {
  const listEl = document.getElementById("cartItemsList");
  const emptyEl = document.getElementById("cartEmpty");
  const summaryEl = document.getElementById("orderSummary");

  if (!listEl) return;

  if (state.cart.length === 0) {
    listEl.innerHTML = "";
    emptyEl.style.display = "flex";
    summaryEl.style.display = "none";
    return;
  }

  emptyEl.style.display = "none";
  summaryEl.style.display = "block";

  listEl.innerHTML = state.cart
    .map(
      (item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">${generateShoeSVG(
        item.color?.hex || item.product.svgColor
      )}</div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.product.brand}</div>
        <div class="cart-item-name">${item.product.name}</div>
        <div class="cart-item-meta">Size US ${item.size} · ${
        item.color?.name || ""
      }</div>
        <div class="cart-item-actions">
          <div class="item-qty-ctrl">
            <button onclick="changeCartQty(${idx}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeCartQty(${idx}, 1)">+</button>
          </div>
          <button class="item-remove" onclick="removeFromCart(${idx})" data-i18n="item_remove">Remove</button>
        </div>
      </div>
      <div class="cart-item-price">$${(item.product.price * item.qty).toFixed(
        2
      )}</div>
    </div>
  `
    )
    .join("");

  updateCartSummary();
}

function changeCartQty(idx, delta) {
  if (!state.cart[idx]) return;
  state.cart[idx].qty = Math.max(1, Math.min(10, state.cart[idx].qty + delta));
  updateCartBadge();
  renderCart();
}

function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  updateCartBadge();
  renderCart();
  showToast(t("toast_removed"));
}

function updateCartSummary() {
  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const fmt = (n) => `$${n.toFixed(2)}`;
  const shipLabel = shipping === 0 ? "Free" : fmt(shipping);

  document.getElementById("summarySubtotal").textContent = fmt(subtotal);
  document.getElementById("summaryShipping").textContent = shipLabel;
  document.getElementById("summaryTotal").textContent = fmt(total);
}

function applyPromo() {
  const code = document.getElementById("promoCode").value.trim().toUpperCase();
  if (code === "SOLE10" || code === "SALE10") {
    showToast(t("toast_promo"), "success");
    document.getElementById("promoCode").value = "";
  } else {
    showToast(t("toast_promo_err"), "error");
  }
}

function showCheckoutForm() {
  if (state.cart.length === 0) return;
  document.getElementById("checkoutFormWrap").style.display = "block";
  document
    .getElementById("checkoutFormWrap")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const listEl = document.getElementById("checkoutItemsList");
  listEl.innerHTML = state.cart
    .map(
      (item) => `
    <div class="checkout-item">
      <div class="checkout-item-img">${generateShoeSVG(
        item.color?.hex || item.product.svgColor
      )}</div>
      <div class="checkout-item-info">
        <strong>${item.product.name}</strong>
        <span>Size US ${item.size} × ${item.qty}</span>
      </div>
      <div class="checkout-item-price">$${(
        item.product.price * item.qty
      ).toFixed(2)}</div>
    </div>
  `
    )
    .join("");

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const shipping = subtotal > 100 ? "Free" : "$9.99";
  document.getElementById(
    "checkoutSubtotal"
  ).textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("checkoutShipping").textContent = shipping;
  document.getElementById("checkoutTotal").textContent =
    shipping === "Free"
      ? `$${subtotal.toFixed(2)}`
      : `$${(subtotal + 9.99).toFixed(2)}`;
}

function placeOrder(e) {
  e.preventDefault();
  // Clear cart and show success
  state.cart = [];
  updateCartBadge();
  document.getElementById("successModal").style.display = "flex";
}

function closeSuccessModal() {
  document.getElementById("successModal").style.display = "none";
  navigate("home");
}

function formatCard(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 16);
  val = val.replace(/(.{4})/g, "$1 ").trim();
  input.value = val;
}

/* ─────────────────────────────────────────────
   9. AUTH
───────────────────────────────────────────── */
function switchAuthTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");

  if (tab === "login") {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  } else {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  }
}

function handleLogin() {
  showToast(t("toast_login"), "success");
  setTimeout(() => navigate("home"), 800);
}

function handleSignup() {
  showToast(t("toast_signup"), "success");
  setTimeout(() => navigate("home"), 800);
}

function togglePass(inputId) {
  const input = document.getElementById(inputId);
  input.type = input.type === "password" ? "text" : "password";
}

/* Wishlist from product card */
function toggleWishlistById(id, btn) {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    btn.classList.remove("liked");
    btn.querySelector("path").setAttribute("fill", "none");
    showToast(t("toast_wishlist_remove"));
  } else {
    state.wishlist.add(id);
    btn.classList.add("liked");
    btn.querySelector("path").setAttribute("fill", "currentColor");
    showToast(t("toast_wishlist_add"));
  }
}

/* ─────────────────────────────────────────────
   10. UI UTILITIES
───────────────────────────────────────────── */

/* Toast */
let toastTimer;
function showToast(msg, type = "") {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = "toast" + (type ? ` ${type}` : "") + " show";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* Navbar scroll behavior */
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

/* Hamburger menu */
document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.getElementById("navLinks").classList.toggle("open");
});

/* Magnetic button effect */
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".magnetic").forEach((btn) => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const threshold = 80;
    if (dist < threshold) {
      const strength = (threshold - dist) / threshold;
      btn.style.transform = `translate(${dx * strength * 0.3}px, ${
        dy * strength * 0.3
      }px)`;
    } else {
      btn.style.transform = "";
    }
  });
});

/* Scroll reveal with Intersection Observer */
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal-fade, .reveal-stagger");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el) => {
    el.classList.remove("visible");
    observer.observe(el);
  });
}

/* Hero parallax on scroll */
window.addEventListener("scroll", () => {
  if (state.currentPage !== "home") return;
  const shoe = document.getElementById("floatingShoe");
  if (!shoe) return;
  const scrollY = window.scrollY;
  shoe.style.transform = `translateY(${scrollY * 0.08}px) rotate(${
    -3 + scrollY * 0.005
  }deg)`;
});

/* Close sidebar when clicking outside on mobile */
document.addEventListener("click", (e) => {
  const sidebar = document.getElementById("shopSidebar");
  if (sidebar && sidebar.classList.contains("open")) {
    if (
      !sidebar.contains(e.target) &&
      !e.target.classList.contains("filter-toggle-btn")
    ) {
      sidebar.classList.remove("open");
    }
  }
});

/* Add CSS keyframe for shake animation */
const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
  @keyframes shake {
    0%,100%{transform:translateX(0)}
    20%{transform:translateX(-8px)}
    40%{transform:translateX(8px)}
    60%{transform:translateX(-6px)}
    80%{transform:translateX(6px)}
  }
`;
document.head.appendChild(shakeStyle);

/* ─────────────────────────────────────────────
   11. INIT
───────────────────────────────────────────── */
function init() {
  // Set initial lang option active state
  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });

  // Render home featured grid
  renderFeaturedGrid();

  // Apply translations
  applyTranslations();

  // Init scroll reveal
  setTimeout(initScrollReveal, 200);

  // Initial cart badge
  updateCartBadge();

  // Open first accordion on product page
  // (handled per-product in openProduct)

  console.log(
    "%cSOLE — Premium Footwear",
    "color:#6366f1;font-family:Syne,sans-serif;font-size:16px;font-weight:800"
  );
  console.log("%cFrontend SPA initialized successfully.", "color:#94a3b8");
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", init);
