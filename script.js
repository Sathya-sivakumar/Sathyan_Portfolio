function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const texts = ["Fast Learner", "Developer", "Video Editor", "Graphics Designer"];
const typingTextElement = document.getElementById('typing-text');

let index = 0;

function typeText() {
  typingTextElement.innerHTML = "";
  const currentText = texts[index];
  let charIndex = 0;

  function typeChar() {
    typingTextElement.innerHTML += currentText.charAt(charIndex);
    charIndex++;
    if (charIndex < currentText.length) {
      setTimeout(typeChar, 100); // Adjust speed here
    } else {
      setTimeout(() => {
        eraseText();
      }, 2000); // Pause before erasing
    }
  }

  function eraseText() {
    let charIndex = currentText.length;
    function eraseChar() {
      typingTextElement.innerHTML = currentText.substring(0, charIndex);
      charIndex--;
      if (charIndex >= 0) {
        setTimeout(eraseChar, 50); // Adjust speed here
      } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 500); // Pause before typing next text
      }
    }
    eraseChar();
  }

  typeChar();
}

// Start the typing effect
typeText();
