let curso = {
    titulo: "React para Frontend",
    duracion: 30,
    plataforma: "YouTube",
    instructor: {
        nombre: "Carlos",
        tecnologia: "JavaScript"
    }
}
//Ejercicio 1 (Acceso): Imprime en la consola el titulo del curso usando la notación de punto.
console.log(curso.titulo)
//Ejercicio 2 (Notación de corchetes): Imprime en la consola la plataforma del curso, pero usando la notación de corchetes ([]).
console.log(curso["plataforma"])
//Ejercicio 3 (Modificación): Cambia la duracion del curso a un string que diga "45 horas". Luego imprime el tipo de dato (typeof) de esa propiedad para verificar que cambió.
curso["duracion"] = "45 horas"
console.log(typeof(curso.duracion))
//Ejercicio 4 (Anidación): Accede al objeto de adentro (instructor) e imprime en la consola su nombre.
console.log(curso.instructor.nombre)
//Ejercicio 5 (Nueva propiedad): Añade una nueva propiedad al objeto curso llamada estado y que su valor sea "activo". Imprime el objeto completo para ver el cambio.
curso.estado = "activo"
console.log(curso.estado)
//Ejercicio 6 (Eliminación): Elimina la propiedad plataforma del objeto curso. Imprime el objeto para asegurarte de que ya no existe.
delete curso.plataforma
console.log(curso)
//Ejercicio 7 (Métodos): Crea un objeto llamado reproductor. Debe tener una propiedad cancion: "Blinding Lights" y un método (función) llamado reproducir que imprima en consola: "Sonando: Blinding Lights" (usa this para acceder al nombre de la canción). Ejecuta el método.
let reproductor = {
    cancion: "Blinding Lights",
    reproducir : function(){
        console.log(`Sonando ${this.cancion}`)
    }
}
console.log(reproductor)
reproductor.reproducir()

//Ejercicio 8 (Referencia/Igualdad): ¿Qué mostrará la consola (true o false) en el siguiente código y por qué?

/*Respuesta:
Mostrara false, porque comparas el objeto y cada objeto ocupa un lugar diferente en memoria, solo compara
su referencia, por eso solo sale false
*/
let auto1 = { marca: "Toyota" };
let auto2 = { marca: "Toyota" };
console.log(auto1 === auto2);

//Ejercicio 9 (Iteración de Claves): Usa un bucle for...in para imprimir únicamente las llaves (propiedades) del siguiente objeto:
let smartphone = { marca: "Apple", modelo: "iPhone 15", dePaquete: true };
for(let value in smartphone){
    console.log(value) 
}

//Ejercicio 10 (Iteración Completa): Usa otro bucle for...in en el mismo objeto smartphone para imprimir la clave y su valor de esta forma: "marca: Apple", "modelo: iPhone 15", etc.
for(let value in smartphone){
    console.log(value + ": " + smartphone[value])
}
