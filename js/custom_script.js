const swiper = new Swiper(".slide-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   responsive points
  breakpoints: {
    0: {
      // Extra small screens (mobile)
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1536: {
      // Ultra large screens (very large desktops)
      slidesPerView: 4,
    },
  },
});

// --------------------- Read more -------------------

const maxLength = 110; // Maximum number of characters to show initially

// Function to initialize content with limited text
function initializeContent() {
  document.querySelectorAll(".project-title").forEach((content) => {
    const fullText = content.getAttribute("data-full-text");
    const previewText = fullText.slice(0, maxLength);
    const extraContent = fullText.slice(maxLength);

    // Insert preview and extra content into the paragraph
    content.querySelector(
      ".text-content"
    ).innerHTML = `${previewText}<span class="dot">...</span><span class="extra-content">${extraContent}</span>`;
  });
}

// Function to toggle "Read More" and "Read Less"
function toggleReadMore() {
  document.querySelectorAll(".project-title").forEach((content) => {
    const extraContent = content.querySelector(".extra-content");
    const button = content.querySelector(".more");
    const dot = content.querySelector(".dot");

    button.addEventListener("click", () => {
      if (
        extraContent.style.display === "none" ||
        extraContent.style.display === ""
      ) {
        extraContent.style.display = "inline"; // Show extra content
        dot.style.display = "none"; // Show extra content
        button.textContent = "Read Less"; // Change button text
      } else {
        extraContent.style.display = "none"; // Hide extra content
        button.textContent = "Read More"; // Change button text back
        dot.style.display = "inline";
      }
    });
  });
}

// Initialize content on page load
initializeContent();
toggleReadMore();
