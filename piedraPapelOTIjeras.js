function jugar() {
    const opciones = ['piedra', 'papel', 'tijeras'];
  
    const jugador = prompt("Elegí: piedra, papel o tijeras").toLowerCase();
    const computadora = opciones[Math.floor(Math.random() * 3)];
  
    console.log(`Vos elegiste: ${jugador}`);
    console.log(`La computadora eligió: ${computadora}`);
  
    if (jugador === computadora) {
      console.log("¡Empate!");
    } else if (
      (jugador === 'piedra' && computadora === 'tijeras') ||
      (jugador === 'papel' && computadora === 'piedra') ||
      (jugador === 'tijeras' && computadora === 'papel')
    ) {
      console.log("¡Ganaste!");
    } else if (opciones.includes(jugador)) {
      console.log("¡Perdiste!");
    } else {
      console.log("Opción no válida. Por favor elegí piedra, papel o tijeras.");
    }
  }
  
  jugar();