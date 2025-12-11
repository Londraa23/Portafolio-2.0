// Theme Toggle

// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle")
const navMenu = document.getElementById("navMenu")

mobileToggle.addEventListener("click", () => {
  mobileToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// FAQ Accordion
function toggleFaq(button) {
  const faqItem = button.closest(".faq-item")
  const isActive = faqItem.classList.contains("active")

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active")
  }
}

// Contact Modal
const contactModal = document.getElementById("contactModal")
const contactForm = document.getElementById("contactForm")

function openContactModal() {
  contactModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeContactModal() {
  contactModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Close modal on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && contactModal.classList.contains("active")) {
    closeContactModal()
  }
})

// Handle form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  console.log("Form submitted:", formData)

  // Here you would typically send the data to a server
  alert("¡Gracias por tu mensaje! Te contactaremos pronto.")

  closeContactModal()
  contactForm.reset()
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Update current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Add scroll effect to header
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = "translateY(-100%)"
  } else {
    header.style.transform = "translateY(0)"
  }

  lastScroll = currentScroll
})
