/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let Miobjeto = {
    Nombre : "jesus",
    Apellido : "Canales",
    Edad : 23,
    Trabajo : function(){
        console.log("Hola!")
    }
}
// 2. Accede y muestra su valor
console.log(Miobjeto)
// 3. Agrega una nueva propiedad
Miobjeto.estado = "Baja California"
console.log(Miobjeto)
// 4. Elimina una de las 3 primeras propiedades
delete Miobjeto.Apellido
console.log(Miobjeto)
// 5. Agrega una función e invócala
Miobjeto.Trabajo()

// 6. Itera las propiedades del objeto
for (let value in Miobjeto) {
    console.log(value)
}
// 7. Crea un objeto anidado
let NuevoObjeto = {
    Pais : "Mexico",
    Ciudad : "Ensenada",
    Colonia : "Chapultepec",
    Mundial : function(){
        console.log("Bienvenidos a ")
    },
    Carrera : {
        Ingenieria : "Software",
        Grado : "6to",
        Ingreso : 2021,
        Escuela : function(){
            console.log("Somos de CETYS Universidad!!")
        }
    }
}


// 8. Accede y muestra el valor de las propiedades anidadas
console.log(NuevoObjeto)
console.log(NuevoObjeto.Carrera)

// 9. Comprueba si los dos objetos creados son iguales
console.log(NuevoObjeto === NuevoObjeto.Carrera)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(NuevoObjeto.Ciudad === NuevoObjeto.Carrera.Grado)