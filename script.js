// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

// Typing effect
const typingText = ["Full Stack Web Developer (MERN)"];
let index = 0;
let charIndex = 0;
let currentText = '';
let typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < typingText[index].length) {
    currentText += typingText[index].charAt(charIndex);
    typingElement.textContent = currentText;
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      currentText = '';
      charIndex = 0;
      index = (index + 1) % typingText.length;
      typeEffect();
    }, 1500);
  }
}
typeEffect();

// Form submit
function handleSubmit(event) {
  event.preventDefault();
  alert("✅ Message sent successfully!");
  event.target.reset();
  return false;
}
