//operacion
let numero1 = 2
let numero2 = 4

console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log(numero1 / numero2)
console.log(numero1 ** numero2)

//incremento 
let incrent = 6
++incrent   //Aqui se suma uno
console.log(incrent)

var abcd = 3
++abcd
console.log(abcd) 

var der = 9
++der
console.log(der) 

//Ahora usaremos el (--) para restar 1
let descre = 7 
--descre
console.log(descre)

let other = 33
--other
console.log(other)

let another = 0
--another
console.log(another)

//operaciones de asignacion
let nuevaAsignacion = 3
nuevaAsignacion += 2     //es lo mismo de let nuevaAsignacion = nuevaasignacion + 2
                        // nuevaasignacion = 3 + 2
                        // nuevaasgniacaion = 5
console.log(nuevaAsignacion)

let asignacion = 4
asignacion += 2
console.log(asignacion)
// asignacion = 4 + 2
// resultado = 6

let us = 5
us += 3
console.log(us)
// us = 5 + 3
// resultado = 8

let variable7 = "hola"
variable7 += 2
console.log(variable7)

/*
tambien se pueden
usar otras operadores como
+, /, *, **, -
*/
let menos = 9
menos -= 2
console.log(menos)
// menos = 9 - 2
//resultado = 7

let otrosa = 12
otrosa -= 34
console.log(otrosa)

let mul = 9
mul *= 2
console.log(mul)
//mul = 9 * 2
//resultado = 18

let dive = 8
dive /= 2
console.log(dive)

//comparacion

let z = 6
let x = 2

console.log(z)
console.log(x)

console.log(z < x)
console.log(z > x)
console.log(z >= x)
console.log(z <= x)
console.log(z == x)
console.log(z == z)
console.log(z == 6) //igualdad de valor
console.log(z == "6")
console.log(z === "6") //igualdad de identidad y valor
console.log(z === 6)
console.log(z != 4)
console.log(z !== 4)
console.log(z !== "6")
console.log(z !== 5)
console.log(0 == true)
console.log(1 == false)
console.log(0 == false)
console.log(1 == true)
console.log(1 === "dwa")
console.log(0 == "0")

//Operadores logicos

//AND (&&)
console.log(15 < 20 && 6 < 89)
console.log(3> 1 && 8 < 22)
console.log(4>2 && 8< 22 && 90 > 100)
//Se deben cumplir todas las comparaciones, si no saldra false

//OR (||)
console.log(34 > 55 || 4 > 2 )
console.log(8<23 || 90 > 34 || 33 > 45)
console.log(6> 2 || 4 < 6 || 5> 34)
//Solo se debe cumpli una condicion, con una sola sale true

//Tambine podemos usar los operadores logicos juntos
console.log(6>2 && 8>3 || 4>2 || 9< 2)
console.log(6<1 && 3<1 || 4>1 || 10<2)
//Aqui no aplica el AND pero el OR si cumple asi que sale true, igual viceversa


//NOT (!)
console.log(!(2>1 && 3>2))
console.log(!(2>1 && 3>6))
console.log(!(3>5 || 9>3))
console.log(!(true))
//Solo pone la opeacion al contrario

//Operadores ternarios