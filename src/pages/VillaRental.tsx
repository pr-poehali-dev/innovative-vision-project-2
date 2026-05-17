import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const villas = [
  {
    id: 1,
    name: "Villa Tropicana",
    location: "Убуд, Бали",
    type: "Тропическая вилла",
    beds: 4,
    baths: 4,
    guests: 8,
    pool: true,
    price: 450,
    currency: "USD",
    period: "ночь",
    images: [
      "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/dd61e252-2592-4332-9538-4e4181a5af8c.jpg",
      "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/72b1f96d-e092-4d2c-ad47-514ca7269dce.jpg",
    ],
    tag: "Хит сезона",
    description: "Роскошная вилла среди рисовых полей с панорамным бассейном и открытой гостиной с видом на закат.",
    features: ["Бассейн с видом на рисовые поля", "Открытая гостиная", "Полностью оборудованная кухня", "Зона барбекю"],
  },
  {
    id: 2,
    name: "Villa Blanc",
    location: "Семиньяк, Бали",
    type: "Европейская резиденция",
    beds: 5,
    baths: 5,
    guests: 10,
    pool: true,
    price: 780,
    currency: "USD",
    period: "ночь",
    images: [
      "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/e884a980-0b3f-4051-b747-91f7057fe2db.jpg",
      "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/5b63476a-0911-4a89-9975-99aac6210934.jpg",
    ],
    tag: "Премиум",
    description: "Белоснежная двухэтажная резиденция в европейском стиле с просторным садом, бассейном и роскошными террасами.",
    features: ["Двухэтажная архитектура", "Большой бассейн с подсветкой", "Терраса с видом на закат", "Консьерж-сервис"],
  },
  {
    id: 3,
    name: "Villa Zen",
    location: "Чангу, Бали",
    type: "Минималистичная вилла",
    beds: 3,
    baths: 3,
    guests: 6,
    pool: true,
    price: 320,
    currency: "USD",
    period: "ночь",
    images: [
      "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/5b63476a-0911-4a89-9975-99aac6210934.jpg",
      "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/dd61e252-2592-4332-9538-4e4181a5af8c.jpg",
    ],
    tag: "Для йоги",
    description: "Тихая вилла для восстановления духа — бассейн с видом на джунгли, терраса для медитаций, полный покой.",
    features: ["Инфинити-бассейн", "Йога-терраса", "Окружение тропического сада", "Slow living концепция"],
  },
]

const heroSlides = [
  {
    image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/dd61e252-2592-4332-9538-4e4181a5af8c.jpg",
    title: "Ваш собственный\nрай на Бали",
    sub: "Частные виллы с бассейном в аренду",
  },
  {
    image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/72b1f96d-e092-4d2c-ad47-514ca7269dce.jpg",
    title: "Интерьеры,\nкоторые вдохновляют",
    sub: "Роскошь и природа в идеальном балансе",
  },
  {
    image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/e884a980-0b3f-4051-b747-91f7057fe2db.jpg",
    title: "Белоснежные\nрезиденции",
    sub: "Приватность, пространство, уют",
  },
  {
    image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/5b63476a-0911-4a89-9975-99aac6210934.jpg",
    title: "Закаты с\nтеррасы вашей виллы",
    sub: "Каждый вечер — как последний",
  },
]

const amenities = [
  { icon: "Waves", label: "Частный бассейн", desc: "У каждой виллы — собственный бассейн" },
  { icon: "Shield", label: "Безопасность", desc: "Охраняемая территория 24/7" },
  { icon: "Wifi", label: "Быстрый интернет", desc: "Оптоволокно, до 200 Мбит/с" },
  { icon: "Car", label: "Трансфер", desc: "Встреча и доставка из аэропорта" },
  { icon: "ChefHat", label: "Личный повар", desc: "Завтраки и ужины по запросу" },
  { icon: "Sparkles", label: "Уборка", desc: "Ежедневный клининг включён" },
]

const testimonials = [
  {
    name: "Анастасия М.",
    city: "Москва",
    text: "Вилла превзошла все ожидания — закаты с террасы, тишина, бассейн в джунглях. Вернулась совсем другим человеком.",
    stars: 5,
  },
  {
    name: "Елена К.",
    city: "Санкт-Петербург",
    text: "Идеальный отдых для небольшой компании. Менеджер помог с экскурсиями, повар готовил фантастически. Рекомендую всем!",
    stars: 5,
  },
  {
    name: "Дарья В.",
    city: "Тбилиси",
    text: "Провела здесь ретрит по йоге. Атмосфера, пространство и сервис — на уровне пятизвёздочного отеля, но с полной приватностью.",
    stars: 5,
  },
]

export default function VillaRental() {
  const [slide, setSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedVilla, setSelectedVilla] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", phone: "", dates: "", guests: "" })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const navItems = [
    { label: "Виллы", href: "#villas" },
    { label: "Удобства", href: "#amenities" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#booking" },
  ]

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const villa = selectedVilla !== null ? villas.find(v => v.id === selectedVilla) : null

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[slide].image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
          <div className="text-white font-bold text-xl tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}>
            BALI VILLAS
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button key={item.label} onClick={() => scrollTo(item.href)}
                className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300 relative group">
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/70 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button onClick={() => scrollTo("#booking")}
              className="border border-white/60 text-white text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-white hover:text-gray-900 transition-all duration-300">
              Забронировать
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={26} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 z-30 flex flex-col items-center justify-center gap-10"
            >
              <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
                <Icon name="X" size={26} />
              </button>
              {navItems.map(item => (
                <button key={item.label} onClick={() => scrollTo(item.href)}
                  className="text-white text-2xl tracking-[0.3em] uppercase font-light">
                  {item.label}
                </button>
              ))}
              <button onClick={() => scrollTo("#booking")}
                className="border border-white/60 text-white text-lg tracking-widest uppercase px-10 py-3 mt-4 hover:bg-white hover:text-gray-900 transition-all">
                Забронировать
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-white/60 text-xs tracking-[0.5em] uppercase mb-5">
                Бали · Частные виллы · 2025
              </p>
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif", whiteSpace: "pre-line" }}>
                {heroSlides[slide].title}
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-10">
                {heroSlides[slide].sub}
              </p>
            </motion.div>
          </AnimatePresence>
          <button onClick={() => scrollTo("#villas")}
            className="bg-white text-gray-900 text-sm font-semibold tracking-[0.25em] uppercase px-10 py-4 hover:bg-white/90 transition-all duration-300 shadow-lg">
            Смотреть виллы
          </button>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`transition-all duration-300 rounded-full ${i === slide ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase"
        >
          <Icon name="ChevronDown" size={20} />
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-stone-900 py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center md:text-left">
          {[
            { num: "12+", label: "Вилл на выбор" },
            { num: "500+", label: "Гостей за сезон" },
            { num: "4.9★", label: "Рейтинг сервиса" },
            { num: "24/7", label: "Поддержка клиентов" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col md:border-r md:border-white/10 md:pr-16 last:border-0">
              <span className="text-white text-3xl font-bold tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {stat.num}
              </span>
              <span className="text-white/50 text-xs tracking-widest uppercase mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VILLAS */}
      <section id="villas" className="py-24 px-6 bg-stone-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] text-stone-400 uppercase mb-3">Наши объекты</p>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Виллы для аренды
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {villas.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedVilla(v.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={v.images[0]} alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white text-stone-800 text-xs font-semibold tracking-widest uppercase px-3 py-1">
                    {v.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">{v.location}</p>
                  <h3 className="text-xl font-bold text-stone-900 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {v.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-2">{v.description}</p>
                  <div className="flex items-center gap-4 text-stone-400 text-xs mb-5">
                    <span className="flex items-center gap-1"><Icon name="Bed" size={13} />{v.beds} спальни</span>
                    <span className="flex items-center gap-1"><Icon name="Users" size={13} />{v.guests} гостей</span>
                    {v.pool && <span className="flex items-center gap-1"><Icon name="Waves" size={13} />Бассейн</span>}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-stone-900">${v.price}</span>
                      <span className="text-stone-400 text-sm ml-1">/ {v.period}</span>
                    </div>
                    <button className="text-xs tracking-widest uppercase border border-stone-300 text-stone-700 px-4 py-2 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300">
                      Подробнее
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Modal */}
      <AnimatePresence>
        {selectedVilla !== null && villa && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedVilla(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-3xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-80">
                <img src={villa.images[0]} alt={villa.name} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedVilla(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white w-9 h-9 flex items-center justify-center transition-colors">
                  <Icon name="X" size={18} />
                </button>
                <span className="absolute top-4 left-4 bg-white text-stone-800 text-xs font-semibold tracking-widest uppercase px-3 py-1">
                  {villa.tag}
                </span>
              </div>
              <div className="p-8">
                <p className="text-xs text-stone-400 tracking-widest uppercase mb-1">{villa.location} · {villa.type}</p>
                <h3 className="text-3xl font-bold text-stone-900 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{villa.name}</h3>
                <p className="text-stone-500 leading-relaxed mb-6">{villa.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {villa.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <Icon name="Check" size={14} className="text-stone-400" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-stone-100 pt-6">
                  <div>
                    <span className="text-3xl font-bold text-stone-900">${villa.price}</span>
                    <span className="text-stone-400 text-sm ml-1">/ {villa.period}</span>
                  </div>
                  <button onClick={() => { setSelectedVilla(null); scrollTo("#booking") }}
                    className="bg-stone-900 text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 hover:bg-stone-700 transition-colors">
                    Забронировать
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EXPERIENCE SECTION */}
      <section className="relative py-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
          <div className="relative h-80 md:h-auto">
            <img
              src="https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/fdcf4ddf-e5c6-49c3-8e45-5925c9231c23.jpg"
              alt="Йога на Бали"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-stone-900 flex flex-col items-start justify-center px-10 md:px-16 py-16">
            <p className="text-stone-500 text-xs tracking-[0.5em] uppercase mb-5">Опыт</p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Бали меняет людей
            </h2>
            <p className="text-stone-400 text-base leading-relaxed mb-8 max-w-md">
              Инфинити-бассейн над джунглями, рассвет над рисовыми полями, тихий вечер с кокосом на террасе.
              Наши виллы — это не просто жильё. Это пространство для трансформации.
            </p>
            <div className="flex flex-col gap-4">
              {["Полная приватность без отеля", "Роскошь как норма жизни", "Природа прямо за окном"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                  <div className="w-5 h-5 border border-stone-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-stone-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] text-stone-400 uppercase mb-3">Всё включено</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Сервис, который не оставит вопросов
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {amenities.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-6 border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-4">
                  <Icon name={a.icon} size={22} className="text-stone-600" />
                </div>
                <p className="font-semibold text-stone-900 text-sm mb-1">{a.label}</p>
                <p className="text-stone-400 text-xs leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/e884a980-0b3f-4051-b747-91f7057fe2db.jpg"
          alt="Villa Blanc"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Каждый вечер — как произведение искусства
          </motion.h2>
          <p className="text-white/70 text-lg">Балийские закаты и ваша личная вилла</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 bg-stone-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] text-stone-400 uppercase mb-3">Отзывы</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Что говорят гости
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 border border-stone-100"
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <span key={si} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs tracking-wider">{t.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-24 px-6 bg-stone-900">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-stone-500 text-xs tracking-[0.5em] uppercase mb-3">Связаться с нами</p>
            <h2 className="text-white text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Забронировать виллу
            </h2>
            <p className="text-stone-400 mt-4 text-sm leading-relaxed">
              Оставьте заявку — наш менеджер свяжется с вами в течение 2 часов и подберёт идеальную виллу
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 border border-white/30 flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={28} className="text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Заявка отправлена!
              </h3>
              <p className="text-stone-400 text-sm">Менеджер свяжется с вами в течение 2 часов</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-stone-500 text-xs tracking-widest uppercase">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Анна"
                  className="bg-transparent border border-stone-700 text-white placeholder-stone-600 px-4 py-3 text-sm focus:outline-none focus:border-stone-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-stone-500 text-xs tracking-widest uppercase">Телефон / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="bg-transparent border border-stone-700 text-white placeholder-stone-600 px-4 py-3 text-sm focus:outline-none focus:border-stone-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-stone-500 text-xs tracking-widest uppercase">Даты аренды</label>
                <input
                  type="text"
                  value={formData.dates}
                  onChange={e => setFormData({ ...formData, dates: e.target.value })}
                  placeholder="Напр.: 15–25 августа 2025"
                  className="bg-transparent border border-stone-700 text-white placeholder-stone-600 px-4 py-3 text-sm focus:outline-none focus:border-stone-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-stone-500 text-xs tracking-widest uppercase">Количество гостей</label>
                <input
                  type="number"
                  min={1}
                  value={formData.guests}
                  onChange={e => setFormData({ ...formData, guests: e.target.value })}
                  placeholder="2"
                  className="bg-transparent border border-stone-700 text-white placeholder-stone-600 px-4 py-3 text-sm focus:outline-none focus:border-stone-400 transition-colors"
                />
              </div>
              <div className="md:col-span-2 pt-2">
                <button type="submit"
                  className="w-full bg-white text-stone-900 font-semibold tracking-[0.25em] uppercase py-4 text-sm hover:bg-stone-100 transition-colors duration-300">
                  Отправить заявку
                </button>
              </div>
              <p className="md:col-span-2 text-stone-600 text-xs text-center">
                Нажимая «Отправить заявку», вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/80 font-bold text-lg tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            BALI VILLAS
          </span>
          <p className="text-stone-600 text-xs tracking-wider">
            © 2025 Bali Villas. Все права защищены.
          </p>
          <div className="flex gap-6">
            {navItems.map(item => (
              <button key={item.label} onClick={() => scrollTo(item.href)}
                className="text-stone-500 hover:text-white text-xs tracking-widest uppercase transition-colors">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}