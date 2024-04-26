    var saludo="hola mundo desde js"
    console.log(saludo)
    //comentarios una sola linea
    /*
    aqui va nuestro comentarios

    forma de escribir la sintaxis 
    var nombre 
    var $nombre
    var _nombre
    var nombre1
    var nombre_estudiante
        COMO NO SE PUEDE ESCRIBIR
    var  8nombre 
    tampoco se puede utilizar palabras reservadas de javascript
     no puede tener
     if
     while
     case
     for
      Cómo creamos nuestro archivo js
       JAVASCRIPT.js------ no se puede escribir en mayusculas el nombre de archivo
       convenciones de programacion al escribir codigos 
       var Holamundo
       def Holamundo{

       }

     */
    /*
    -------Dos tipos de variables en java script-----
      1. var => es una variable global  puede ser utilizadas  toda la 
      vidad del programa o todos los alcances.
      2. let=> es una variable pribada que se utiliza en una parte espesifica de mi programa
      eso quiere decir que es una variable local.
    

    */
   /* reduce el funcionamiento o el uso de memoria que se ocupa*/
  var a
  a=7
  console.log("el valor de a es:",a)
  let b
  b=6
  console.log("el valor de b es",b)

  console.log(window)
  console.log(window.a)
  console.log(window.b)
  /*-----------variables tipos var*/
  var musica="Baladas"
  console.log("Variable antes del bloque",musica)
  {
    var musica="Cumbia"
    console.log("Variable dentro del bloque",musica)

  }
  console.log("Variable fuera del bloque",musica)
  console.log("********************** Let****************************")
let musica2="salsa"
console.log("variable antes de entrar al bloque",musica2)
{
    let musica2="Merenge"
    console.log("variable dentro del bloque", musica2)

}
console.log("variable fuera del bloque", musica2)