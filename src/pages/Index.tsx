import HeroSection from "@/components/HeroSection"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Icon from "@/components/ui/icon"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Index() {
  const programDays = [
    {
      date: "21 июля", day: 0, title: "ПЕРЕЛЁТ", subtitle: "Вылет из Москвы",
      location: "Москва → Денпасар",
      items: ["Вылет из Москвы (рекомендованный рейс).", "Начало путешествия — знакомство с попутчицами на борту."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/520c3d60-f0b2-4b4c-8dce-20f9c101518e.jpg",
    },
    {
      date: "22 июля", day: 1, title: "БАЛИ ВСТРЕЧАЕТ", subtitle: "Прибытие на Бали — Убуд",
      location: "Убуд",
      items: ["Встреча в аэропорту (Денпасар).", "Трансфер на виллу.", "Заселение и отдых.", "Восстановительная тренировка на закате.", "Общий ужин и знакомство."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/474f5c03-ba01-4597-97f6-875af7568e5f.png",
    },
    {
      date: "23 июля", day: 2, title: "ИЗУМРУДНЫЕ ТЕРРАСЫ", subtitle: "Убуд",
      location: "Убуд",
      items: ["Завтрак.", "Рисовые плантации Tegallalang.", "Водопады Tegenungan и Kanto Lampo.", "Свободное время в Убуде."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/c9d5caae-03f8-41ab-a611-cae6ce99fb57.jpg",
    },
    {
      date: "24 июля", day: 3, title: "ДРАЙВ НА ВОДЕ", subtitle: "Убуд",
      location: "Убуд",
      items: ["Завтрак.", "Рафтинг по горной реке.", "Лес обезьян.", "Отдых на вилле."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/bf4fac7b-c41f-453a-9ff1-4987a14be71e.jpg",
    },
    {
      date: "25 июля", day: 4, title: "ДЕНЬ БЕЗ БУДИЛЬНИКА", subtitle: "Убуд",
      location: "Убуд",
      items: ["Завтрак.", "Дневная тренировка.", "Свободное время: спа, рынки, рестораны."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/863e80eb-a1d8-4595-aaae-ad4fb10587a7.jpg",
    },
    {
      date: "26 июля", day: 5, title: "ЗАКАТ И ТАНЕЦ КЕЧАК", subtitle: "Убуд → Кута",
      location: "Убуд → Кута",
      items: ["Завтрак.", "Утренняя тренировка.", "Трансфер на юг острова и заселение на виллу.", "Храм Uluwatu и закат.", "Балийский танец «Кечак»."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/48ecb7d5-1b31-4171-8eff-4a58ab8a62fa.jpg",
    },
    {
      date: "27 июля", day: 6, title: "ШОПИНГ И РАССЛАБЛЕНИЕ", subtitle: "Кута",
      location: "Кута",
      items: ["Завтрак.", "Дневная тренировка.", "Свободное время."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/e8e4d1d4-4de3-4a33-9486-acd56e9d7b39.png",
    },
    {
      date: "28 июля", day: 7, title: "В ГОСТЯХ У МАНТОВ", subtitle: "Нуса-Пенида",
      location: "Нуса-Пенида",
      items: ["Ранний завтрак.", "Трансфер на остров.", "Снорклинг с мантами.", "Панорамы Нуса-Пениды."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/de5c766f-2f3e-48c3-b4d0-6dc6d7b4a3e1.jpg",
    },
    {
      date: "29 июля", day: 8, title: "ПЕРВАЯ ВОЛНА", subtitle: "Кута",
      location: "Кута",
      items: ["Завтрак.", "Утренняя тренировка.", "Урок серфинга с инструктором.", "Свободное время у океана."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/5c28a7cb-b9bb-404f-8c9b-5b2a56fe515b.jpg",
    },
    {
      date: "30 июля", day: 9, title: "ПРОЩАЛЬНЫЙ ЗАКАТ", subtitle: "Кута",
      location: "Кута",
      items: ["Завтрак.", "Утренняя тренировка.", "Свободное время (повторный серфинг / спа / магазины).", "Прощальный ужин с командой."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/5fd7e5b2-fc2f-49cc-a078-afcc0e6631da.png",
    },
    {
      date: "31 июля", day: 10, title: "ДО НОВЫХ ВСТРЕЧ!", subtitle: "Трансфер в аэропорт",
      location: "Денпасар",
      items: ["Трансфер в аэропорт Денпасар."],
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/71420848-16bc-4aa9-9f7e-55f30148ea0b.jpg",
    },
  ]

  const faq = [
    { q: "Какой уровень подготовки нужен?", a: "Подойдёт и новичкам, и продвинутым. Маргарита адаптирует программу под каждую участницу." },
    { q: "Я лечу одна, с кем буду жить?", a: "У каждой участницы будет своё личное пространство. Если хочешь жить одна — выбираешь отдельную спальню. Если уже знаешь, с кем хочешь делить комнату — можно заселиться вдвоём." },
    { q: "Как передвигаемся по острову?", a: "Основные переезды — на трансфере (минивен): из аэропорта, между Убудом и Кутой. На многие локации в свободное время — мототакси (распространено и недорого) или обычное авто." },
    { q: "Какая погода в июле и августе?", a: "Июль и август — разгар сухого сезона, лучшее время на Бали. Дождей почти нет, 28–30°C днём, океан 26–27°C, 10–11 часов солнца в день. Медные и фиолетовые закаты гарантированы." },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection />

      {/* Mission */}
      <section id="mission" className="relative flex items-center justify-center py-12 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">О туре</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              10 ДНЕЙ ВНЕ ВРЕМЕНИ
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Вас ждут 10 дней вне времени и суеты. Пилатес, приключения, круг единомышленниц и полная свобода быть собой. Программа составлена так, чтобы вы вернулись обновлёнными — влюбленными в себя и этот мир!
            </p>

            {/* For whom */}
            <div className="mt-10 max-w-3xl mx-auto">
              <p className="text-xs text-gray-400 tracking-[0.4em] uppercase text-center mb-8">Этот тур для тебя, если...</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: "🌿", title: "Нужна пауза", text: "Устала от городского ритма и хочешь наконец выдохнуть" },
                  { icon: "🤍", title: "Едешь одна", text: "Хочешь тепла, искренних разговоров и новых подруг" },
                  { icon: "🧘‍♀️", title: "Тело и душа", text: "Хочешь совместить настоящий отдых с движением и практикой" },
                  { icon: "🌊", title: "Глубокий покой", text: "Хочешь увезти с Бали не только загар, но и внутреннюю тишину" },
                  { icon: "📸", title: "Новая ты", text: "Пора обновить не только ленту, но и взгляд на себя и мир" },
                  { icon: "✨", title: "Момент для себя", text: "Ты давно заслуживаешь это путешествие — и знаешь об этом" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Program — Timeline */}
      <section id="community" className="relative py-12 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-8 text-center">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">Программа</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              ЧТО ВАС ЖДЁТ
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

            {programDays.map((d, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative mb-10 md:mb-14"
                >
                  {/* dot */}
                  <div className="absolute left-1/2 top-8 w-3 h-3 rounded-full bg-gray-900 border-2 border-white -translate-x-1/2 z-10 hidden md:block" />

                  <div className="container mx-auto px-6">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isLeft ? "" : "md:[direction:rtl]"}`}>
                      {/* Image */}
                      <div className={isLeft ? "" : "md:[direction:ltr]"}>
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-sm">
                          <img
                            src={d.image}
                            alt={d.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <span className="text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                              {d.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={isLeft ? "" : "md:[direction:ltr]"}>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 flex-wrap">
                            {d.day > 0 && (
                              <span className="text-xs bg-gray-900 text-white px-2.5 py-1 rounded-full font-semibold">
                                День {d.day}
                              </span>
                            )}
                            {d.day === 0 && (
                              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">{d.date}</span>
                            )}
                          </div>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-wide text-gray-900"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            {d.title}
                          </h3>
                          <p className="text-sm text-gray-400 italic">{d.subtitle}</p>
                          <ul className="space-y-2 pt-1">
                            {d.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-gray-700 text-sm md:text-base leading-relaxed">
                                <span className="text-gray-300 mt-1 flex-shrink-0">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="relative py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">Где живём</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              РАЗМЕЩЕНИЕ
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Две роскошные виллы — в тропическом Убуде и у океана в Куте. Полное погружение в атмосферу острова.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/9e4e1563-5ee9-4048-b46c-c16dc40fe4e9.jpg",
              "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/154bd058-4ee0-4691-8dec-522d6f0da4b6.jpg",
              "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/b05b795f-cd01-4cb3-87b6-10a01b8211d2.jpg",
              "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/334a193a-19a5-4688-b15d-6968a1378c4c.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200 shadow-sm group"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="relative py-12 bg-white">
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

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-left mb-8">
              <p className="text-base font-bold text-amber-900 mb-1 flex items-center gap-2">
                ✈️ Рекомендованные рейсы
              </p>
              <p className="text-sm text-amber-700 mb-5">По возможности объединим всю группу на один рейс, чтобы познакомиться уже в пути. Если удобен другой вариант — вас встретят и сопроводят до виллы.</p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-amber-100">
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-3">21 июля → 31 июля · Москва ↔ Денпасар</p>
                  <img
                    src="https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/43782d96-b561-4934-8333-1f2656ba6438.png"
                    alt="Рекомендованные рейсы июль"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 border border-amber-100">
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-3">4 августа → 14 августа · Москва ↔ Денпасар</p>
                  <img
                    src="https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/427c51b8-e517-49a1-bca5-2911c8182188.png"
                    alt="Рекомендованные рейсы август"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizer */}
      <section className="relative py-12 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #f9a8d4 0%, transparent 60%), radial-gradient(circle at 20% 80%, #818cf8 0%, transparent 50%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Photo placeholder */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden">
                    <img
                      src="https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/a7ead507-8608-470a-bbbd-02325a878021.jpg"
                      alt="Маргарита Абрамович"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2">
                    <p className="text-white text-xs font-semibold tracking-wider">@helyfely</p>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="text-center md:text-left">
                <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-3">Организатор и тренер</p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Абрамович Маргарита
                </h3>
                <p className="text-gray-400 leading-relaxed text-base mb-6 max-w-md">
                  Тренер по пилатесу, растяжке и функциональному тренингу. Твой друг, наставник и проводник в мир осознанного движения. Глубоко верю, что каждое тело уникально — на тренировках учу чувствовать и слышать себя, успокаивать ум и раскрывать внутреннюю силу.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["Пилатес", "Растяжка", "Функциональный тренинг", "Осознанное движение"].map((tag) => (
                    <span key={tag} className="text-xs text-gray-300 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
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
      <footer id="contacts" className="bg-gray-950 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.5em] text-gray-500 uppercase mb-3">Готова к путешествию?</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              SHE BALI
            </h2>
            <p className="text-gray-400 text-sm">22 — 31 июля · 5 — 14 августа 2026 · Остров Бали</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
          <div className="text-center mb-8">
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
              © 2026 SHE BALI · Организатор: Абрамович Маргарита
            </p>
            <div className="flex gap-6">
              <span className="text-gray-600 text-xs">22–31 июля · 5–14 августа 2026</span>
              <span className="text-gray-600 text-xs">Бали, Индонезия</span>
              <span className="text-gray-600 text-xs">265 000 ₽</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}