import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  const problems = [
    {
      number: "01",
      title: "Потерянные контракты",
      category: "Внезапный простой срывает поставки и обязательства",
      year: "Риск",
      direction: "left",
    },
    {
      number: "02",
      title: "Ремонт в 2–3 раза дороже",
      category: "Аварийный выезд и срочные запчасти — по завышенным ценам",
      year: "Деньги",
      direction: "right",
    },
    {
      number: "03",
      title: "Нервы и аврал",
      category: "Остановка производства без предупреждения — хуже всего",
      year: "Стресс",
      direction: "left",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Проблема
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ваш компрессор работает — но вы не знаете, когда он встанет</p>
        </div>

        <div className="mb-8 max-w-2xl">
          <p
            className={`text-base leading-relaxed text-foreground/80 transition-all duration-700 md:text-lg ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Датчики вибрации от западных брендов стоят сотни тысяч рублей. Делать «на глаз» — гадание. Внезапный простой означает:
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {problems.map((project, i) => (
            <ProblemCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
    </div>
  )
}
