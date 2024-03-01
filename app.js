let numeroSecreto = 0;
let intentos = 0;
// se crea una cadena donde almacenara el numero sorteado 
let listaNumerosSorteados = [];
// se crea una variable con el numeo de intentos 
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    
    if (numeroDeUsuario === numeroSecreto) 
     // aqui colocamos nuestro string teplent  como operador ternario como operador
        // colocamos si el usuario no asigno una vez el numero secreto , aqui le decismos
        //los intentos que tubo para llegar al numero secreto correcto el ? se convierte como el if
        // los dos puntos : se converten como el else lo contrario de la condicion 
    
    {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //String Teplete como operador 
        // en un parametro , el signo de interrogacion es como si fuera el if si es un intento sera singular 
        // los dos puntos es como si fuera lo contrario si el resultado de numero de intentos es plural 
//////////////////////////////////////////////////////////////////////////////////////////////////
        //aqui colocamos nuestro document para activar nuestro boton de reiniciar el juego 
        // despues de que termino el juesgo y quiere jugar de nuevo llamamos nuestro 
        //atributo reiniciar  de nuestro HTML , con removedAttribute removemos nuestro
        // atributo disabled para que se active nuestro atributo y asi se pueda reinicir el juesgo
        //con otro numero secreto 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        //aqui se asigna un contador de numros que no fueron acertados en 
        //en nuestra funcion llamada intentos 
        intentos++;
        // aqui llamamos la funcion que limpie la caja 
        limpiarCaja();
    }
    return;
}
// aqui colocamos una funcion para limpiar la caja cundo nuestro usuario acierta se limpia la caja 
//para colocar otro numero , la funcion siempre va hacia fuera de los corchetes
// colocamos querySelector y el simbolo gato # llamndo nuesro   ID  de nuestro  getElementById valorUsuario 
// el ID es el imput de nuestro boton de HTML
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // aqui indicamos que evalue  nuestra caja vacia
}
// se crea una funcion de generar un nuemro secreto 
function generarNumeroSecreto() {
    // aqui llamamos nuestra funcion numero generado
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; //// este Mat.floor es para que nuestro numero secreto sea un resultado entero 
    // y no un nuemero decimal 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) //aqui realizamos una comparacion de mi numero sorteado sea el mismo tamaño 
    // de nuesro numero maximo 
    
    {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');// simi numero maximo rebaso ya esta en el mismo tamaño
        // de nuestra cadena entonces muestra este mensaje 
    } else {
        //Si el numero generado está incluido en la lista  el include lo que hace es recorrer 
        //todo nuestro areglo  y verifica si ya existe  nos debuelve un boleano ,verdedo o falso
        if (listaNumerosSorteados.includes(numeroGenerado))
        
        
        {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);// guardamos el numero en la lista para que no se vuelva arepetir el 
            // numero en el proximo juego , con push colocamos el nuero al final de la lista 
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();