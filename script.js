// script.js
// Page navigation
const welcomePage = document.getElementById('welcome-page');
const quotesPage = document.getElementById('quotes-page');
const cakePage = document.getElementById('cake-page');
const videoPage = document.getElementById('video-page');
const finalPage = document.getElementById('final-page');

const startButton = document.getElementById('start-button');
const quotesBack = document.getElementById('quotes-back');
const quotesNext = document.getElementById('quotes-next');
const cakeBack = document.getElementById('cake-back');
const videoBack = document.getElementById('video-back');
const videoNext = document.getElementById('video-next');
const finalBack = document.getElementById('final-back');

const cakeVideo = document.getElementById('cakeVideo');
const finalVideo = document.getElementById('finalVideo');
const quoteTextElem = document.getElementById('quoteText');

// Quotes array
const quotes = [
  "Wishing you a day filled with happiness and a year filled with joy!",
  "Happy Birthday! May your day be filled with lots of love and laughter.",
  "Cheers to you on your special day! May all your dreams come true."
];

// Function to switch pages
function showPage(page) {
  // Hide all pages
  [welcomePage, quotesPage, cakePage, videoPage, finalPage].forEach(p => p.classList.remove('active'));
  // Show target
  page.classList.add('active');
  // If showing quotes page, trigger text reveal
  if (page === quotesPage) {
    quotesNext.disabled = true;
    revealQuote();
  }
}

// Quote text reveal
function revealQuote() {
  // Clear text
  quoteTextElem.textContent = '';
  // Pick random quote
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  let i = 0;
  function typeLetter() {
    if (i < quote.length) {
      quoteTextElem.textContent += quote.charAt(i);
      i++;
      setTimeout(typeLetter, 50);
    } else {
      // Enable Next button after reveal
      quotesNext.disabled = false;
    }
  }
  typeLetter();
}

// Event listeners
startButton.addEventListener('click', () => {
  showPage(quotesPage);
});

quotesBack.addEventListener('click', () => {
  showPage(welcomePage);
});

quotesNext.addEventListener('click', () => {
  showPage(cakePage);
});

cakeBack.addEventListener('click', () => {
  showPage(quotesPage);
});

videoBack.addEventListener('click', () => {
  showPage(cakePage);
});

videoNext.addEventListener('click', () => {
  showPage(finalPage);
});

finalBack.addEventListener('click', () => {
  showPage(videoPage);
});

// Cake selection
document.querySelectorAll('.cake-option').forEach(option => {
  option.addEventListener('click', () => {
    const cakeId = option.getAttribute('data-cake');
    // Set cake video source based on selection
    cakeVideo.src = "cake" + cakeId + ".mp4"; // Placeholder video file name
    showPage(videoPage);
  });
});

// Set final video source (placeholder)
finalVideo.src = "finalAnimation.mp4"; // Replace with actual final video
