// Frases aleatorias
const quotes = [
    {
        text: "La vida es cambio, el crecimiento es opcional. Elige sabiamente.",
        author: "Karen Kaiser Clark"
        
    },
    {
        text: "No importa lo lento que vayas, siempre y cuando no te detengas.",
        author: "Confucio"
    },
    {
        text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
        author: "Albert Schweitzer"
    },
    {
        text: "Si no puedes explicarlo de forma sencilla, es que no lo entiendes lo suficiente.",
        author: "Albert Einstein"
    },
    {
        text: "La verdadera oportunidad de éxito está en la persona que eres.",
        author: "Jim Rohn"
    }
];
 
// Función para obtener una frase aleatoria
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Función para actualizar la interfaz con una nueva frase
function updateQuote() {
    const quote = getRandomQuote();
    document.getElementById("quote-text").innerText = quote.text;
    document.getElementById("quote-author").innerText = "- " + quote.author;
}

// Función para inicializar la aplicación
function initializeApp() {
    updateQuote();

    // Evento clic del botón "Nueva Frase"
    document.getElementById("new-quote-btn").addEventListener("click", function() {
        updateQuote();
    });
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    initializeApp();
});
// Función para realizar el retweet en Twitter
function retweet() {
    const quote = document.getElementById("quote-text").innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}&via=mifrasealeatoria`;

    // Abrir ventana emergente de Twitter para realizar el retweet
    window.open(tweetUrl, "_blank", "width=600,height=400");
}

// Evento clic del botón "Retweet"
document.getElementById("tweet-btn").addEventListener("click", function() {
    retweet();
});