const healthQuotes = [
    "\"The greatest wealth is health.\" - Virgil",
    "\"Heal yourself, change the world.\" - Nicole Foss",
    "\"Health is a state of complete harmony of the body, mind and spirit. - B.K.S. Iyengar\"",
    "\"Take care of your body. It's the only place you have to live. - Jim Rohn\"",
    "\"To enjoy the glow of good health, you must exercise. - Gene Tunney\""
];

const quoteTextElement = document.getElementById('quote-text');
let currentQuoteIndex = 0;


function changeAndAnimateQuote() {
    // 1. Start fade out
    quoteTextElement.classList.add('fade-out');
    
    // 2. After fade completes (1 second), change text and fade in
    setTimeout(() => {
        quoteTextElement.textContent = healthQuotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % healthQuotes.length;
        quoteTextElement.classList.remove('fade-out');
    }, 1000);
}

// Initial setup - show first quote immediately
quoteTextElement.textContent = healthQuotes[currentQuoteIndex];
currentQuoteIndex = 1; // Set to next quote

// Set interval (30 seconds between changes)
const intervalTime = 30 * 1000; // 30 seconds
setInterval(changeAndAnimateQuote, intervalTime);