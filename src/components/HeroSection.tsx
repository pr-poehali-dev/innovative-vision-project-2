import { LiquidButton } from "@/components/ui/liquid-glass-button"
import Icon from "@/components/ui/icon"
import { useState } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/6383735b-7620-40ca-bbdc-47b355089c69.jpg",
      alt: "Роскошная вилла на Бали на закате",
    },
    {
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/bucket/71420848-16bc-4aa9-9f7e-55f30148ea0b.jpg",
      alt: "Девушка с ковриком для йоги на Бали",
    },
    {
      image: "https://cdn.poehali.dev/projects/bdf8a898-15f1-41f5-9b63-360bf5aa4633/files/5c28a7cb-b9bb-404f-8c9b-5b2a56fe515b.jpg",
      alt: "Серфинг на Бали на закате",
    },
  ]

  const navItems = [
    { name: "О туре", href: "#mission" },
    { name: "Программа", href: "#community" },
    { name: "Стоимость", href: "#price" },
    { name: "Вопрос-ответ", href: "#faq" },
    { name: "Забронировать", href: "#contacts" },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        <div className="text-white font-bold text-xl tracking-widest" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          SHE BALI
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white/90 hover:text-white transition-colors duration-300 font-medium tracking-wide pb-1 group text-sm"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <p className="text-sm md:text-base font-light tracking-[0.3em] mb-4 text-white/70 uppercase">
            22 июля — 31 июля · Бали
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            SHE BALI
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide mb-3 text-white/90">
            10 дней, чтобы влюбиться в себя
          </p>
          <p className="text-sm md:text-base text-white/60 font-light mb-10 max-w-md mx-auto">
            Пилатес · Океан · Остров, который меняет людей
          </p>

          <LiquidButton
            size="xxl"
            className="font-semibold text-base tracking-widest uppercase"
            onClick={() => scrollToSection("#contacts")}
          >
            Забронировать место
          </LiquidButton>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button onClick={prevSlide} className="text-white hover:text-gray-300 transition-colors p-2" aria-label="Предыдущий слайд">
            <Icon name="ChevronLeft" size={24} />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
                aria-label={`Слайд ${index + 1}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="text-white hover:text-gray-300 transition-colors p-2" aria-label="Следующий слайд">
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-px h-8 transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}