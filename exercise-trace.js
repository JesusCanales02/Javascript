function cuatro() {
    console.log("🏁 ¡Llegamos al piso 4! Tomando foto de la ruta...");
    console.trace(); // 🕵️‍♂️ Aquí se dibuja el mapa
}

function tres() {
    cuatro(); // Llama a cuatro
}

function dos() {
    tres(); // Llama a tres
}

function uno() {
    dos(); // Llama a dos
}

// Arrancamos en el piso 1
uno();

// ==========================================
// PRÁCTICA: Ver el orden real con console.log()
// ==========================================

function cuatro() {
    console.log("➡️ 4. Entramos a la función CUATRO");
    console.log("🏁 ¡Llegamos al final! Tomando foto de la ruta...");
    console.trace(); 
}

function tres() {
    console.log("➡️ 3. Entramos a la función TRES");
    cuatro(); // Llama a cuatro
}

function dos() {
    console.log("➡️ 2. Entramos a la función DOS");
    tres(); // Llama a tres
}

function uno() {
    console.log("➡️ 1. Entramos a la función UNO");
    dos(); // Llama a dos
}

// Aquí arranca todo el archivo
console.log("🚀 El archivo inicia e invoca a uno()");
uno();