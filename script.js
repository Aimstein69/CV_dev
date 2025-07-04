// Animation des barres de compétences
document.addEventListener("DOMContentLoaded", () => {
  // Observer pour déclencher les animations quand les éléments sont visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".skill-progress")
        progressBars.forEach((bar) => {
          const level = bar.getAttribute("data-level")
          setTimeout(() => {
            bar.style.width = level + "%"
          }, 200)
        })
      }
    })
  })

  // Observer la section des compétences
  const skillsSection = document.querySelector(".skills")
  if (skillsSection) {
    observer.observe(skillsSection)
  }

  // Animation d'apparition des éléments
  const animateElements = document.querySelectorAll(".timeline-item, .project-item, .tool-item")

  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  })

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    elementObserver.observe(el)
  })

  // Effet hover sur les outils
  const toolItems = document.querySelectorAll(".tool-item")
  toolItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 8px 16px rgba(52, 152, 219, 0.3)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"
    })
  })

  // Fonction pour imprimer le CV
  function printCV() {
    window.print()
  }

  // Ajouter un bouton d'impression (optionnel)
  const header = document.querySelector(".header")
  const printButton = document.createElement("button")
  printButton.innerHTML = '<i class="fas fa-print"></i> Imprimer'
  printButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    `

  printButton.addEventListener("click", printCV)
  printButton.addEventListener("mouseenter", function () {
    this.style.background = "rgba(255, 255, 255, 0.3)"
    this.style.transform = "translateY(-2px)"
  })

  printButton.addEventListener("mouseleave", function () {
    this.style.background = "rgba(255, 255, 255, 0.2)"
    this.style.transform = "translateY(0)"
  })

  header.style.position = "relative"
  header.appendChild(printButton)
})
