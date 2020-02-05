var listaDeSuper=["pera","papas","tomate"];
var noHabia,comprado;
function agregarProductoPush(nuevoProducto){
    listaDeSuper.push(nuevoProducto);
}

function agregarProductoUnshift(nuevoProducto){
    listaDeSuper.unshift(nuevoProducto);
}

function sacarProductoPop(){
    noHabia = listaDeSuper.pop();
}

function sacarProductoShift(){
    comprado=listaDeSuper.shift();
}

function logItems(arreglo){
    for(var i = 0;i<=arreglo.length;i++){
        console.log(arreglo[i]);
    }
}

function logItems2(arreglo){
    arreglo.forEach(function(elemento){
        console.log(elemento)
    })
}

function iterarLista2(){
    listaDeSuper.forEach(function(x){
        console.log(x);
    })
}

var poemaDesordenado = "roses red are bacon crispy i bacon love and is blue violets are"
var arregloDesordenado = poemaDesordenado.split(' ');
var arregloOrdenado = [];   
var poemaOrdenado = "";

function algoRaro(){
    while(arregloDesordenado.length > 0){
        var primerElemento = arregloDesordenado.shift()
        var segundoElemento = arregloDesordenado.pop()
        arregloOrdenado.unshift(primerElemento)
        arregloOrdenado.push(segundoElemento)
    }

   poemaOrdenado  = arregloOrdenado.join(' ') 
}

function printReverse(arreglo){
    var longitud = arreglo.length

    for(var i = 0;i<longitud;i++){
        console.log(arreglo[longitud-i-1])
    }
}

function reverser(arreglo){
    var longitud = arreglo.length
    var arregloAux = arreglo.slice()
    for(var i = 0;i<longitud;i++){
        arreglo[i] = arregloAux[longitud-i-1]
    }
    console.log(arreglo)

}

function isUniform(arreglo){
    var uniforme = true;
    var longitud = arreglo.length
    for(var i = 0;i<longitud;i++){
        if (arreglo[i]!=arreglo[i+1] && (i+1<longitud)){
            uniforme = false;
            break;
        }
    }

    console.log(uniforme);
}

function sumArray(arreglo){
    var longitud = arreglo.length
    var acumulador = 0
    for(var i = 0;i<longitud;i++){
acumulador+=arreglo[i]
    }

    console.log(acumulador)
}

function biggest_smallest(arreglo){
    var arregloResultante = [];
    var min = arreglo[0]
    var max =  arreglo[0];
    arreglo.forEach(function(elemento){
        if(min<elemento){
        }
        else{
            min = elemento
        }

        if(max>elemento){
        }
        else{
            max = elemento
        }
    })

    arregloResultante[0] = min;
    arregloResultante[1] = max;

    console.log(arregloResultante)
}



// To Do list

function pedirDatos(){
    var tareas = []
    var salir = false

    while(salir==false){
     var input = prompt("Que desea hacer?");
        input=input.toLocaleLowerCase();
        switch(input){
            case "list": listarDatos(tareas);break;
            case "new": agregarDato(tareas);break;
            case "delete": eliminarDato(tareas);break;
            case "quit": salir = true;break;
        }
    }
}


function eliminarDato(arreglo){
    var dato = prompt("Que numero de elemento desea eliminar?");

    dato = Number(dato);

    arreglo = arreglo.splice(dato-1,1);   

    console.log("Elemento numero "+dato+ " removido!");
}
function listarDatos(arreglo){
    var longitud = arreglo.length;

    if(longitud != 0){
        console.log("-----------");
        for(var i =0;i<longitud;i++){
           
            console.log([i+1]+" "+arreglo[i]);
        }
        console.log("-----------");
    }
    else{
        console.log("Lista vacia!");
    }
}

function agregarDato(arreglo){
    var dato = prompt("Que dato desea agregar?");
    arreglo.push(dato);
}