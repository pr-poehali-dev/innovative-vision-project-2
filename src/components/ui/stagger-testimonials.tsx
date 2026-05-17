import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Running club testimonials data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Я ехала на Бали в поисках перезагрузки — нашла себя. Пилатес на рассвете, завтраки в тропиках, девочки, которые стали подругами навсегда. SHE BALI — это не тур, это трансформация.",
    by: "Анастасия К., Москва",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnastasijaK&backgroundColor=e879a0&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Летела одна и боялась. Вернулась с 15 новыми подругами и ощущением, что жизнь началась заново. Маргарита создала атмосферу, в которой хочется быть лучшей версией себя.",
    by: "Дарья М., Санкт-Петербург",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DarjaM&backgroundColor=a78bfa&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Снорклинг с мантами — это что-то, что невозможно описать словами. Я плакала от восторга прямо в маске. SHE BALI дал мне воспоминания, которые останутся на всю жизнь.",
    by: "Ольга Р., Екатеринбург",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaR&backgroundColor=38bdf8&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Тренировки с Маргаритой — это магия. Она чувствует каждую из нас, видит потенциал и помогает его раскрыть. После тура я продолжаю заниматься пилатесом — он стал частью жизни.",
    by: "Кристина Л., Казань",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KristinaL&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Такого заката у Улувату я не видела нигде — оранжевое небо, танец кечак, океан. Стояла и думала: вот оно счастье. Рекомендую каждой женщине, которая хочет выдохнуть.",
    by: "Мария В., Новосибирск",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MariaV&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Я первый раз встала на доску для серфинга — и поймала волну! Чувство непередаваемое. SHE BALI — это про смелость, рост и настоящее женское сообщество.",
    by: "Виктория П., Ростов-на-Дону",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ViktorijaP&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Я думала, что просто отдохну. Но случилось нечто большее — я вернулась другим человеком. Спокойной, уверенной, влюблённой в жизнь. Спасибо Маргарите за это волшебство.",
    by: "Елена Т., Уфа",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaT&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Виллы — просто мечта. Завтраки среди зелени, бассейн, запах тропиков. После рафтинга мы смеялись до слёз — вот такие воспоминания и остаются на всю жизнь.",
    by: "Наталья С., Краснодар",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NatalyaS&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Уже планирую следующий тур с Маргаритой. SHE BALI — это не просто путешествие, это сообщество женщин, которые поддерживают и вдохновляют друг друга.",
    by: "Алиса Н., Москва",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlisaN&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Рисовые террасы Тегалланга на рассвете — это открытка, которую не передать словами. Я сделала столько фото, что лента взорвалась. Подруги до сих пор спрашивают, куда я ездила.",
    by: "Полина Г., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=PolinaG&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Поехала впервые в жизни одна — теперь не понимаю, как раньше так не делала. Группа приняла как родную с первого вечера. Это лучшее вложение в себя за долгое время.",
    by: "Ирина Б., Воронеж",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IrinaB&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "10 дней пролетели как один. Море, движение, смех, тишина — всё было в балансе. Маргарита — потрясающий человек: чуткий, профессиональный и искренний.",
    by: "Светлана Д., Омск",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SvetlanaD&backgroundColor=059669&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}