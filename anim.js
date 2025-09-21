// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 15 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del sol iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 46 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 51 },
  { text: "No te apures no detengas, el instante del encuentro", time: 60 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 64 },
  { text: "No te olvides, que la vida casi nunca está dormida", time: 67 },
  { text: "En ese bar tan desierto los esperaba el encuentro", time: 94 },
  { text: "Ella llegó en limosina amarilla por supuesto", time: 101 },
  { text: "Él se acercó de repente y la miró tan de frente", time: 110 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 117 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 124 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 128 },
  { text: "No te apures no detengas, el instante del encuentro", time: 136 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 139 },
  { text: "No te olvides, que la vida casi nunca está dormida", time: 145 },
  { text: "Ella sabía que él sabía, que algún día pasaría", time: 148 },
  { text: "Que vendría a buscarla, con sus flores amarillas", time: 173 },
  { text: "No te apures no detengas, el instante del encuentro", time: 182 },
  { text: "Está dicho que es un hecho, no la pierdas no hay derecho", time: 186 },
  { text: "No te olvides, que la vida casi nunca está dormida", time: 189 },
  { text: "Ella sabía que él sabía", time: 199 },
  { text: "Él sabía, ella sabia", time: 200 },
  { text: "Él sabía, ella sabía y se olvidaron, de sus flores amarillas", time: 205 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);