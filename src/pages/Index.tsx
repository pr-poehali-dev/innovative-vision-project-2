import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Icon from "@/components/ui/icon"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Index() {
  const missionStatement =
    "Представь: утро на Бали, ты выходишь на пилатес с видом на рисовые террасы. Потом — океан, смех, новые подруги, которые понимают тебя без слов. Вечером — огненный закат у храма Uluwatu. Это не просто тур. Это 10 дней, когда ты наконец ставишь себя на первое место. Возвращаешься другой — влюблённой в себя, наполненной и готовой к переменам."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/33224057-00e1-47b6-8572-9b5326804c71.jpg",
      alt: "Пилатес на Бали",
      title: "Пилатес каждый день",
      description:
        "Ежедневные практики с Маргаритой — тренером, которая помогает не просто двигаться, а чувствовать тело. Подходит для любого уровня: от новичка до продвинутого. Ты удивишься, как тело раскрывается, когда вокруг — тропический рай.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/de5c766f-2f3e-48c3-b4d0-6dc6d7b4a3e1.jpg",
      alt: "Снорклинг с мантами на Нуса-Пениде",
      title: "Снорклинг с мантами",
      description:
        "Остров Нуса-Пенида — место, где мечты сбываются. Ты окунёшься в кристальный океан и проплывёшь рядом с огромными мантами. Это один из тех моментов, которые остаются с тобой навсегда и меняют взгляд на мир.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/5c28a7cb-b9bb-404f-8c9b-5b2a56fe515b.jpg",
      alt: "Серфинг на Бали",
      title: "Первая волна — твоя",
      description:
        "День 8 — урок серфинга с инструктором на пляжах Куты. Никакого опыта не нужно. Ты встанешь на доску, поймаешь волну и почувствуешь что-то, что сложно описать словами — чистую свободу и гордость за себя.",
      layout: "left" as const,
    },
  ]

  const programDays = [
    { day: "22 июля", title: "БАЛИ ВСТРЕЧАЕТ", location: "Убуд", desc: "Встреча в аэропорту Денпасар, трансфер на виллу, восстановительная тренировка на закате, общий ужин и знакомство." },
    { day: "23 июля", title: "ИЗУМРУДНЫЕ ТЕРРАСЫ", location: "Убуд", desc: "Рисовые плантации Tegallalang, водопады Tegenungan и Kanto Lampo, свободное время в Убуде." },
    { day: "24 июля", title: "ДРАЙВ НА ВОДЕ", location: "Убуд", desc: "Рафтинг по горной реке, лес обезьян, отдых на вилле." },
    { day: "25 июля", title: "ДЕНЬ БЕЗ БУДИЛЬНИКА", location: "Убуд", desc: "Завтрак, дневная тренировка, свободное время — спа, рынки, рестораны." },
    { day: "26 июля", title: "ЗАКАТ И КЕЧАК", location: "Убуд → Кута", desc: "Утренняя тренировка, трансфер на юг острова, храм Uluwatu и закат, балийский танец «Кечак»." },
    { day: "27 июля", title: "ШОПИНГ И РЕЛАКС", location: "Южная Кута", desc: "Дневная тренировка, шопинг, свободное время у океана." },
    { day: "28 июля", title: "В ГОСТЯХ У МАНТОВ", location: "Нуса-Пенида", desc: "Ранний выезд, трансфер на остров, снорклинг с мантами, панорамы Нуса-Пениды." },
    { day: "29 июля", title: "ПЕРВАЯ ВОЛНА", location: "Кута", desc: "Утренняя тренировка, урок серфинга с инструктором, свободное время у океана." },
    { day: "30 июля", title: "ПРОЩАЛЬНЫЙ ЗАКАТ", location: "Кута", desc: "Утренняя тренировка, свободное время — серфинг / спа / шопинг, прощальный ужин." },
    { day: "31 июля", title: "ДО НОВЫХ ВСТРЕЧ", location: "Денпасар", desc: "Трансфер в аэропорт Денпасар." },
  ]

  const faq = [
    { q: "Какой уровень подготовки нужен?", a: "Подойдёт и новичкам, и продвинутым. Маргарита адаптирует программу под каждую участницу." },
    { q: "Я лечу одна, с кем буду жить?", a: "У каждой участницы будет своё личное пространство. Если хочешь жить одна — выбираешь отдельную спальню. Если уже знаешь, с кем хочешь делить комнату — можно заселиться вдвоём." },
    { q: "Как передвигаемся по острову?", a: "Основные переезды — на трансфере (минивен): из аэропорта, между Убудом и Кутой. На многие локации в свободное время — мототакси (распространено и недорого) или обычное авто." },
    { q: "Какая погода в июле?", a: "Июль — разгар сухого сезона, лучшее время на Бали. Дождей почти нет, 28–30°C днём, океан 26–27°C, 10–11 часов солнца в день. Медные и фиолетовые закаты гарантированы." },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection />

      {/* Mission */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">О туре</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              10 ДНЕЙ ВНЕ ВРЕМЕНИ
            </h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />

            {/* For whom */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <p className="text-sm text-gray-500 col-span-full text-center mb-2 tracking-wider uppercase">Этот тур для тебя, если...</p>
              {[
                { icon: "🌿", text: "Устала от городского ритма и хочешь выдохнуть" },
                { icon: "🤍", text: "Едешь одна, но хочешь тепла и новых подруг" },
                { icon: "🧘‍♀️", text: "Хочешь совместить отдых с движением для тела и души" },
                { icon: "🌊", text: "Хочешь увезти с Бали не только загар, но и покой" },
                { icon: "📸", text: "Пора обновить Instagram-ленту — и саму себя" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — key experiences */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">Программа</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                ЧТО ВАС ЖДЁТ
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                10 дней незабываемых впечатлений, пилатеса и настоящих приключений
              </p>
            </div>
          </div>
          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Full Program */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">День за днём</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              ПОЛНАЯ ПРОГРАММА
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {programDays.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-center min-w-[52px]">
                    <div className="text-xs text-gray-400 leading-tight">{d.day.split(" ")[0]}</div>
                    <div className="text-2xl font-black text-gray-900">{d.day.split(" ")[1]}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold tracking-wider text-gray-900">{d.title}</span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{d.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">Стоимость</p>
            <div className="text-7xl md:text-8xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              265 000 ₽
            </div>
            <p className="text-gray-500 mb-10 text-sm">за человека</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle" size={18} className="text-green-500" />
                  Что включено
                </h3>
                <ul className="space-y-2">
                  {[
                    "Две роскошные виллы (Убуд и Кута)",
                    "Ежедневные пилатес-практики",
                    "Завтраки каждый день",
                    "Программа тура и длительные трансферы",
                    "Трансфер аэропорт ↔ вилла",
                    "Входные билеты на локациях",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Info" size={18} className="text-gray-400" />
                  Не включено
                </h3>
                <ul className="space-y-2">
                  {[
                    "Авиабилеты",
                    "Виза ($35, онлайн или по прибытии)",
                    "Страховка",
                    "Обеды и ужины",
                    "Самостоятельный трансфер",
                    "Спа, массаж и личные расходы",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-gray-300 mt-0.5">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-left mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">✈️ Рекомендованные рейсы</p>
              <p className="text-sm text-amber-700">Прямые рейсы из Москвы. По возможности объединим всю группу на один рейс, чтобы познакомиться уже в пути. Если удобен другой вариант — вас также встретят и сопроводят до виллы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizer */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-10">Организатор и тренер</p>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                  <span className="text-3xl">👩‍🦰</span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Абрамович Маргарита
              </h3>
              <p className="text-sm text-gray-400 tracking-wider mb-6">@helyfely</p>
              <p className="text-gray-600 leading-relaxed text-base max-w-lg mx-auto">
                Тренер по пилатесу, растяжке и функциональному тренингу. Твой друг, наставник и проводник в мир осознанного движения. Глубоко верю, что каждое тело уникально. На тренировках не просто учу двигаться — учу чувствовать и слышать тело, успокаивать ум и раскрывать внутреннюю силу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">Отзывы</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              ОНИ УЖЕ БЫЛИ <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">С НАМИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные истории участниц, которые вернулись обновлёнными и влюблёнными в себя.
            </p>
          </motion.div>
          <StaggerTestimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">FAQ</p>
              <h2 className="text-4xl font-black tracking-wider text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                ВОПРОСЫ И ОТВЕТЫ
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl border border-gray-100 px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Parallax */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/7c43185d-5e16-4386-95bb-549dc6f9299f.jpg"
          mobileImage="https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/7c43185d-5e16-4386-95bb-549dc6f9299f.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>

      {/* Footer Contacts */}
      <footer className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.5em] text-gray-500 uppercase mb-3">Готова к путешествию?</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              SHE BALI
            </h2>
            <p className="text-gray-400 text-sm">22 — 31 июля · Остров Бали</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:+79677749016"
              className="group flex flex-col items-center gap-3 bg-gray-900 hover:bg-gray-800 rounded-2xl p-6 transition-colors border border-gray-800 hover:border-gray-600"
            >
              <div className="w-12 h-12 bg-gray-800 group-hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Phone" size={20} className="text-gray-300" />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Позвонить</p>
                <p className="text-white font-semibold tracking-wide">+7 967 774 90 16</p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/helyfely"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-gray-900 hover:bg-blue-950 rounded-2xl p-6 transition-colors border border-gray-800 hover:border-blue-800"
            >
              <div className="w-12 h-12 bg-gray-800 group-hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Send" size={20} className="text-gray-300 group-hover:text-blue-300" />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Telegram</p>
                <p className="text-white font-semibold tracking-wide">@helyfely</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/helyfely"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 bg-gray-900 hover:bg-pink-950 rounded-2xl p-6 transition-colors border border-gray-800 hover:border-pink-800"
            >
              <div className="w-12 h-12 bg-gray-800 group-hover:bg-pink-900 rounded-full flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} className="text-gray-300 group-hover:text-pink-300" />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Instagram</p>
                <p className="text-white font-semibold tracking-wide">@helyfely</p>
              </div>
            </a>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mb-12">
            <a
              href="https://wa.me/79677749016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-base tracking-wider uppercase px-10 py-4 rounded-full transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              Написать в WhatsApp
            </a>
            <p className="text-gray-600 text-xs mt-4">Ответим на все вопросы и поможем забронировать место</p>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs tracking-wider">
              © 2025 SHE BALI · Организатор: Абрамович Маргарита
            </p>
            <div className="flex gap-6">
              <span className="text-gray-600 text-xs">22–31 июля 2025</span>
              <span className="text-gray-600 text-xs">Бали, Индонезия</span>
              <span className="text-gray-600 text-xs">265 000 ₽</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
