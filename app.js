
    //Programación
    var vertices = new Array([0,0]);
    var arregloAristas = new Array("0,0");
    var verticeActual = 1;
    var arriba = 0;
    var izquierda = 0;
    var CONSTANTE = 10;  
    var color = obtenerColor();
    var numeroCromatico = 1;
    //var circuitosDeEuler = 0;
    //var caminosDeEuler = 0;
   // var circuitosDeHamilton = 0;
   // var caminosDeHamilton = 0;

    var canvas;
    var context;
    var primerClic = true;
    var de;
    var a;
    var matrizDeAdyacencia = [];
    var matrizDeAdyacenciann = new Array();
    var arreglo = [];      
    var m = 0;
    var contador = 1;
    var arregloConteo = [];
    var parcial = [];
    var listaVertices = [];
    var listaVertices = [];
    var gradoVertices = [];
    var maxInd = [];
    var colorpop = new Array();
    var colorpopi = new Array();
    var juntar = [];
    var h = 0;
    var conjInd = [];
    var botonAbrir =0;

var verticesOrden = [];
var cadenArista = [];
var aux = [];
var aux2 = [];
var dj;
var dj2;
 var col= ['blue','green','orange','purple','white','red','brown','aqua'];
 var d = 0;
 var colorNoAdj = 0;
  var h = 0;
  var parl = [];
         var siAdyacente = 1;
         var ks = 0 ;
         var ksr = 0;
        var f = 0;    
        var cl = [];   
        var cim = [];
        var cli = [];
        var puedesAdjuntar = 0;
          var t =  0;
         var j= 0;
         var g = 0;
         var apuntador = 0;
         var secuencia = 0;
         var guardaVert;
         var guardaArist;
         var vertiz = [];
         var acarreo = [];
         var dataCadena = [];
         var cardataCadena = [];
         var permutaciones = 0;
         var mejorOpcion2 = 0;
         var mejorOpcion = 0;
         var arregloFin = [];
         var arregloConteoFin = [];
         var numVertices = 0;
         var numAristas = 0;
          var abrirunoCadena = [];
             var cadfAcarreo =[];



 formularioGrafo.addEventListener('submit', function(e){
   e.preventDefault();
   console.log('me diste clic a formularioGrafo');
   var datosGrafo = new  FormData(formularioGrafo);
   console.log(datosGrafo);
   var datosGrafoVar = 0;
   datosGrafoVar = new String(datosGrafo.get('grafo'));

  var lG = datosGrafoVar.length - 2;
   var sin= 0;
   var cadenaAristaFor1 = [];
   var cadenaAristaFor = [];
   var cadenaVerticeFor = [];
   var abrirunoCadena = [];
   var auxFor = [];

   for ( var i = 1; i <= lG ; i = i + 2 ) {
      cadenaAristaFor1.push(datosGrafoVar[i]);

    if(Boolean(sin)){
      i++;
    }
    sin = ~sin;
  }
   

console.log(cadenaAristaFor1); //CADENA DE Aristas

lG = cadenaAristaFor1.length -1;
var iu = 0;
   for ( var r = 0; r <= lG ; r ++ ) {
  iu= parseInt(cadenaAristaFor1[r], 10);
  cadenaAristaFor.push(iu);
  cadenaVerticeFor.push(iu);
  abrirunoCadena.push(iu);
  auxFor.push(iu);
}
  console.log(cadenaAristaFor);
  console.log(cadenaVerticeFor);



   //HABILITAMOS EL LLAMADO A CALCULAR
   parcial = cadenaAristaFor;
   cadenArista = cadenaVerticeFor;
   cadf = auxFor;

   var arregloF = [];
   var contadorF = 1;
   var mF = 0;
  // var cadfAcarreo =[];
   
for (var i = 0; i <= (abrirunoCadena.length - 1); i++) {
               if (abrirunoCadena[i] != 0){
                contadorF = 1;
                   for (var j = i + 1; j <= (abrirunoCadena.length - 1); j++) {
                      if ( abrirunoCadena[i] == abrirunoCadena[j] ){
                         contadorF = contadorF + 1;
                         abrirunoCadena[j] = 0;
                      }
                    }
                arregloConteo.push(contadorF);
                 mF = mF + 1;
                 }
               }             
            console.log(abrirunoCadena);
            for (var i = 0; i <= abrirunoCadena.length - 1; i++) {
              if(abrirunoCadena[i] != 0){
                arregloF.push(abrirunoCadena[i]);
              }
             } 

             cadfAcarreo = arregloF;
             console.log(cadfAcarreo);

abriruno();
})

    function restablecer() {
        /*
        Coloreo
        */
        //Remover vértices
        for ( i = 1; i < verticeActual ; i++ ) {
          $("#vertice_" + i).remove();
        }
        //Reiniciar variables
         
    var CONSTANTE = 10;  
    numAristas = 0;
    numVertices = 0;
    botonAbrir = 0;


   contadorAF = 0;
   arregloConteoAF = [];
   arregloAF = [];
   lG = 0;
   sin= 0;
   cadenaAristaFor = [];
   cadenaVerticeFor = [];
   cadfAcarreo =[];
   conjInd = [];

     matrizDeAdyacencia = [];
     matrizDeAdyacenciann = new Array();
     arreglo = [];      
     m = 0;
     contador = 1;
     arregloConteo = [];
     parcial = [];
     listaVertices = [];
     listaVertices = [];
     gradoVertices = [];
     maxInd = [];
     colorpop = new Array();
     colorpopi = new Array();
     juntar = [];
     h = 0;
    
     verticesOrden = [];
     cadenArista = [];
     aux = [];
     aux2 = [];
     dj;
     dj2;
     col= ['blue','green','orange','purple','white','red','brown','aqua'];
     d = 0;
     colorNoAdj = 0;
     h = 0;
     siAdyacente = 1;
     ks = 0 ;
     ksr = 0;
     f = 0;    
     cl = [];  
     cim = []; 
     cli = [];
     puedesAdjuntar = 0;
     t =  0;
     j= 0;
     g = 0;
     apuntador = 0;
     secuencia = 0;
     guardaVert;
     guardaArist;
     vertiz = [];
     acarreo = [];
     dataCadena = [];
     cardataCadena = [];
     n = 0;
     nPn = [];
     r = 0;
     permutaciones = 0;
     parl = [];
     mejorOpcion2 = 0;
     mejorOpcion = 0;
     arregloFin = [];
     arregloConteoFin = [];
     
        vertices = new Array([0,0]);
        arregloAristas = new Array("0,0");
        verticeActual = 1;
        arriba = 0;
        izquierda = 0;
        color = obtenerColor();
        numeroCromatico = 1;
        circuitosDeEuler = 0;
        caminosDeEuler = 0;
        circuitosDeHamilton = 0;
        caminosDeHamilton = 0;
        //Borrar contenidos de trazos
        $('#aristas').html('');
        $('#resultados').html('');

        clearCanvas();
        //Quitar las aristas de los selects
        $('#de')
            .find('option')
            .remove()
            .end();
        $('#a')
            .find('option')
            .remove()
            .end();
    }

    function calcularOperaciones() {
      //Calcular número cromático
            //calculando el grado de cada vertice 
//Paso 1
             console. log(parcial);
             console.log(cadenArista);
             numAristas = (cadenArista.length)/2;

/*var w=[];
parl = [];
             for ( var i = 0; i <= (parcial.length - 2); i = i + 2 ) {
              w= [];
                w.push(parcial[i]);
                w.push(parcial[i+1]);
                parl.push(w);
             }
             console.log(w);
             console.log(parl);
             permutaciones = permutator(parl);
             console.log(permutaciones);
var parlk = [];
var parlkj =[];
var kji = 0;
 parlk = parl[0];
 parcial = [];
  for (var kj = 0;  kj<= (parlk.length - 2); kj = kj + 2 ) {
   kji = 0;
   parlkj= parlk[kj] ;

parcial.push(parlkj[0]);
parcial.push(parlkj[1]);

  }
  console.log (parcial);*/


        //for (var k = 0;  k<= (parl.length - 1); k++) {
          //parlk = parl[0];

let arregloConteo = [];
let contador = 0;
            for (var i = 0; i <= (parcial.length - 1); i++) {
             // arregloaux.push(0);
               if (parcial[i] != 0){
                contador = 1;
                   for (var j = i + 1; j <= (parcial.length - 1); j++) {
                      if ( parcial[i] == parcial[j] ){
                         contador = contador + 1;
                         parcial[j] = 0;
                      }
                    }
                arregloConteo.push(contador);
                 m = m + 1;
                 }
               }             
            console.log(parcial);

          /*  let engineering = new Set(parcial);
let freelancers = new Set(['Piccolo','Trunks', 'Vegeta', 'Goku', 'Gohan']);
let difference = new Set([...engineering].filter(x => !freelancers.has(x)));
console.log(difference);*/
            
   let arregloaux =[];
console.log(arregloaux);
let nuevoArreglo =[];


            parcial.forEach(function(elemento) {
             //  console.log(elemento);
              if(elemento > 0){
                arregloaux.push(elemento);
              }

             });

//Paso 2 ordenarlos    
console.log(arregloaux); 
console.log(arregloConteo); 
let arreglo = arregloaux;     
            console.log(arreglo); 

            listaVertices = arreglo;  
            console.log(arregloConteo); //grado del grado de los vertices
            numVertices = arregloConteo.length;

         for ( var j= 0; j<= (arregloConteo.length - 2); j++ ) {
            for ( var i= 0; i<= (arregloConteo.length - 2 -j); i++ ) {
               
              if ( arregloConteo[i] < arregloConteo[i+1] ) {
                aux = arregloConteo[i];
                arregloConteo[i] = arregloConteo[i+1];
                arregloConteo[i+1] = aux;

                aux2 = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = aux2; 
                }
              }
           }         

          /* if(mejorOpcion2 < mejorOpcion && k >= 1){
            arregloFin = arreglo;
            arregloConteoFin = arregloConteo;
           }
         }*/
    console.log(arregloConteo);
    console.log(arreglo);

    var concat = [];
    
    for ( var tc = 0; tc <= (parcial.length - 1); tc++ ) {


    }
/*var w=[];
parl = [];
             for ( var i = 0; i <= (parcial.length - 2); i = i + 2 ) {
              w= [];
                w.push(parcial[i]);
                w.push(parcial[i+1]);
                parl.push(w);
             }
             console.log(w);
             console.log(parl);
             permutaciones = permutator(parl);
             console.log(permutaciones);*/

   // arreglo.reverse();
    //console.log(arreglo);
                  
            //console.log(verticesOrden);  VERTICES ORDEN DEBE DARME LOS VERTICES DE MAYOUR A MENOR EN ORDEN DE GRADO

//Matriz de adyacencia f(cadenaArista, VerticesOrden) = matrizDeAdyacencia ;   VerticesOrden da rl numrto de vertices 1...n     
                                                                   /* cadenArista da el conjunto de aristas*/    

          var n = 0;
          var nPn = [];
          
console.log(cadenArista);

       for (var fil = 1; fil <= (arreglo.length ); fil++) {
          for (var col = 1; col <= (arreglo.length ); col++) {
            n=0;
            for (var j = 0; j <= (cadenArista.length - 1); j= j +2) {
              if ( (fil == cadenArista[j] && col == cadenArista[j+1]) || (col == cadenArista[j] && fil == cadenArista[j+1])){
              
               matrizDeAdyacencia.push(1);
               n=1;
              }
            }
            if (n != 1){
               matrizDeAdyacencia.push(0);  }          
          }

          matrizDeAdyacenciann.push(matrizDeAdyacencia);  
          matrizDeAdyacencia=[];
        } 
          console.log(matrizDeAdyacenciann);
console.log(matrizDeAdyacenciann[0][0]);
          console.log(matrizDeAdyacenciann[0].length);
          
////////////////  DIBUJANDO GRAFO


//var vertices = [[0, 0], [112, 220], [227, 221], [236, 392]];
//var vertice  = [[0, 0], [112, 220], [227, 221], [236, 392]];
//var vertice_  = [[0, 0], [112, 220], [227, 221], [236, 392]];

     

///////////////

/*Paso 3 asignacion de color f(arreglo, matrizAdayacenciann) = matriz Color-Vertice ;   arreglo tiene los vertices 1...n  de mayor a menor en GRADO  c                                                                    orzAdyacancianxn nos da la mat-Adj nxn*/ 

         console.log(arreglo);
        
         //colorpop tiene las cadenas parciales de cada cadena      
          
           for (var i = 0; i <= (arreglo.length -1); i++) {  //i recorre a arreglo
            if (i == 0){ 
                                            
              cli.push(arreglo[i]);     
            }
              if (i == 1){ 
                if( matrizDeAdyacenciann[arreglo[i]-1][arreglo[i-1]-1] == 0 ) {                          //i = 2           
                cli.push(arreglo[i]);    
                cl.push(cli);  
              }
              else{   
                cl.push(cli);
                cli = [];
                cli = arreglo[i];
                cl.push([cli]);
               }
              }  //probar hasta aqui 

              if(i >=2){
                puedesAdjuntar = 1; //1
                j=0;
                r=0;
                apuntador = 0;
               while( j <= (cl.length -1)) {
                  puedesAdjuntar = 1;
                 t = cl[j].length;                 
                  ks = 0;
                  ks =cl[j];
                  r=0;

                  while( r <= (t - 1) ) {  
                     ksr = 0;     
                     ksr = ks[r];
                  if ( matrizDeAdyacenciann[arreglo[i]-1][ksr-1] == 1 ){
                    puedesAdjuntar = 0;
                    r = t;
                    }
                    if((puedesAdjuntar==1) && (r == (t - 1))){
                      apuntador = j;
                      j = cl.length;
                    }
                    r = r + 1;         
                   }
                  j = j + 1;
                  }  
                    if(puedesAdjuntar == 1){
                      cli = [];
                    cli = arreglo[i];
                    cl[apuntador].push(cli);  
                    }
                    if(puedesAdjuntar == 0){
                    cli = [];
                    cli = arreglo[i];
                    cl.push([cli]);  
                    }
                }
        }
             console.log(cl);       
             numeroCromatico = cl.length;
             //calculando CONJ INDEPENDIENTE MÁXIMO
             
var c1 = [];
             var c2 = [];
             var aux = [];


//let arregloConRepetidos = cim;
let cim=[];

cim = cl;
console.log(cim); 



         for ( var j= 0; j<= (cim.length - 2); j++ ) {
            for ( var i= 0; i<= (cim.length - 2 -j); i++ ) {
               c1 = cim[i];
                c2 = cim[i+1];
              if ( c1.length < c2.length ) {
                aux = c1;
                cim[i] = c2;
                cim[i+1] = aux;
                }
              }
           }  
console.log(cim); 
conjInd = cim[0];

var cold = [];
   col= ['blue','green','orange','purple','white','red','brown','aqua'];
var w = 0;
var wr = 0;

for (var j = 0; j <= cl.length -1; j++) {
   w = 0;
   w = cl[j]; 
   cold=0;
   cold = col[j];

  for (var t = 0; t <= w.length -1; t++) {
    wr = 0;
    wr = w[t];
    $("#vertice_" +wr).css("background-color", cold);
  }
}

/*AQUI VA el texto del archivo borrado.txt*/

      //Desplegar
      $('#resultados').html('NÚMERO CROMÁTICO: ' + numeroCromatico + '<br />'+'<br />'+
        'Número de Vertices: ' + numVertices + '<br />' +
        'Número de Aristas: ' + numAristas + '<br />'+
        'Número de Aristas: ' + numAristas + '<br />'+
        'Conjunto Máx. Independiente: ' + conjInd  + '<br />'+
        'Matriz de coloreo: ' + cl[0] + '<br />'+
         cl[1] + '<br />'+
         cl[2] + '<br />'+
         cl[3] + '<br />'
       
         // 'Circuitos de Euler: ' + circuitosDeEuler + '<br />' +
          //'Caminos de Euler: ' + caminosDeEuler + '<br />' +
          //'Circuitos de Hamilton: ' + circuitosDeHamilton + '<br />' +
          //'Caminos de Hamilton: ' + caminosDeHamilton + '<br />'
          );
      $('#grafo').val(arreglo.join("@@@") + "###" + arregloAristas.join("@@@") + "###" + vertices.join("@@@") );

    }
function permutator (input) {
  var set =[];
  function permute (arr, data) {
    var cur, memo = data || [];

    for (var i = 0; i < arr.length; i++) {
       cur = arr.splice(i, 1)[0];
       if (arr.length === 0) set.push(memo.concat([cur]));
       permute(arr.slice(), memo.concat([cur]));
       arr.splice(i, 0, cur);
    }
    return set;
 }
 return permute(input);
}

    function obtenerColor() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      var w = canvas.width;
      canvas.width = 1;
      canvas.width = w;
    }
    function agregarArista() {
      //Validar si no existe ya
       
      if ( arregloAristas.indexOf(de + "," + a) == -1 ){ //revisa que no exista ya ese par de aristas
        //No existe, dibujar arista
        //context.lineWidth = 2;
        
        context.beginPath(); //comienza el camino
        context.lineTo(vertices[de][1] + CONSTANTE, vertices[de][0] + CONSTANTE); //inicio 
        context.lineTo(vertices[a][1] + CONSTANTE, vertices[a][0] + CONSTANTE); // fin del camino
        context.stroke(); //lo dibuja


        //Agregar a arreglo
        arregloAristas.push(de + "," + a); 
        
        
        console.log(de);
        console.log(a);
        parcial.push(de); 
        parcial.push(a);
        console.log(parcial);
        cadenArista.push(de); 
        cadenArista.push(a);

        parl.push(de); 
        parl.push(a);

console.log(cadenArista);
console.log(vertices);

        //Variables
          $('#vertice_', +a); ///////
        color = obtenerColor();
        numeroCromatico++;

        
        $('#aristas').append('(' + de + ',' + a + ')'); //cadena que se imprimira en pantalla
      } else {
        //Ya existe
        alert('No se pueden duplicar aristas...');
      }
    }
    //Otra funcion
    function dibujarVertice(calculaOperaciones) {
      $('#div_canvas').append('<div id="vertice_' + verticeActual +
      '" class="vertice" style="top: ' + arriba + 'px; left: ' +
      izquierda + 'px;">' + verticeActual + '</div>');
      if( calculaOperaciones){
        vertices.push([arriba, izquierda]);
      }
      
      var o = new Option(verticeActual, verticeActual);
      $(o).html(verticeActual);
      $("#de").append(o);
      o = new Option(verticeActual, verticeActual);
      $(o).html(verticeActual);
      $("#a").append(o);
      $("#vertice_" + verticeActual).css("background-color", color);
      $('#vertice_' + verticeActual).click(function() {
        var arregloInterno = $(this).attr('id').split("_");
        if ( primerClic ) {
          de = Number(arregloInterno[1]);
          primerClic = false;
          $("#etiquetaArista").html("De: " + de);
        } else {
          a = Number(arregloInterno[1]);
          $("#etiquetaArista").html("De: " + de + " a " + a);
          if ( de == a ) {
            //Arco
            agregarArco();
          } else {
            //Lanza arista
            agregarArista();
          }
          primerClic = true;
        }
      });
      verticeActual++;
      if ( calculaOperaciones ) {
        calcularOperaciones();
      }
    }

    $(document).ready(function() {
      //Coordenadas para dibujar
      $('#html_canvas').mousemove(function(e){
          var parentOffset = $(this).parent().offset();
          arriba = (e.pageY - parentOffset.top);
          izquierda = (e.pageX - parentOffset.left);
      });
      //Dibujar vértice
      $(document).ready(function() {
          //Coordenadas para dibujar
          $('#html_canvas').mousemove(function(e){
              var parentOffset = $(this).parent().offset();
              arriba = (e.pageY - parentOffset.top);
              izquierda = (e.pageX - parentOffset.left);
          });
          //Dibujar vértice
          $('#html_canvas').click(function() {
            dibujarVertice(true);
          });
          canvas = document.getElementById('html_canvas');
          context = canvas.getContext('2d');
      });
      
      canvas = document.getElementById('html_canvas');
      context = canvas.getContext('2d');
    });
    /*$(document).ready(function() {
        //Coordenadas para dibujar
        $('#html_canvas').mousemove(function(e){
            var parentOffset = $(this).parent().offset();
            arriba = (e.pageY - parentOffset.top);
            izquierda = (e.pageX - parentOffset.left);
        });
        //Dibujar vértice
         $('#html_canvas').click(function(){

          $('#div_canvas').append('<div id="vertice_' + verticeActual +
          '" class="vertice" style="top: ' + arriba + 'px; left: ' +
          izquierda + 'px;">' + verticeActual + '</div>');

          //$("#grafo").val($("#grafo").val() + "@(" + arriba + "," + izquierda + ")");          Aqui lo puso Paco

          vertices.push([arriba, izquierda]);
          vertiz.push(arriba);
          vertiz.push(izquierda);
          console.log(vertices);
          var o = new Option(verticeActual, verticeActual);
         // o = [274.5, 224];
          $(o).html(verticeActual);
          $("#de").append(o);
          o = new Option(verticeActual, verticeActual);
          $(o).html(verticeActual);
          $("#a").append(o);
          //colorpop=['blue','green','orange','purple','white','red','brown','aqua'];

          $("#vertice_" + verticeActual).css("background-color", color);
         // h = h +1;
          $('#vertice_' + verticeActual).click(function(){
            var arregloInterno = $(this).attr('id').split("_");
            if ( primerClic ) {
              de = Number(arregloInterno[1]);
              primerClic = false;
              $("#etiquetaArista").html("de " + de);
            } else {
              if ( de == a ) {
                //Arco
                
              } else {
                //Lanza arista
                a = Number(arregloInterno[1]);
                agregarArista();
                color = obtenerColor();////////////////
                 $('#vertice_', +a); ///////
              }
              primerClic = true;
              $("#etiquetaArista").html("de " + de + " a " + a);
            }
          });

          verticeActual++;
          //calcularOperaciones();
          // $('#grafo').val(arreglo.join("@@@") + "###" + arregloAristas.join("@@@") + "###" + vertices.join("@@@") );

        });
        canvas = document.getElementById('html_canvas');
        context = canvas.getContext('2d');
    });*/
//var cadf = [1, 2, 4, 2, 4, 3, 1, 3, 5, 3, 6, 5];
//<var j = 0;





var cadf = [];//[1, 2, 3, 2, 3, 8, 3, 4, 5, 3, 6, 5, 7, 3];
var j = 0;
     //acarreo = [1, 65.15277481079102, 78,  2, 126.15277481079102, 181, 3, 194.15277481079102, 283, 4, 233.15277481079102, 462, 5, 358.152774810791, 351, 
     //6, 502.152774810791, 410, 7, 376.152774810791, 227, 8, 65.15277481079102, 443];

     var numUno = 0;
     var numDos = 0;
     var a=30;
     var b= 600;
     var acarreo = [];
     var cadfAcarreo = [];

function abriruno(){

  //if () AQUI INGRESAREMOS LOS IF PARA VER SI SE GRAFICA DESDE EL TXT O DESDE EL BOTON DIBUJAR
if(botonAbrir == 1){
  cadfAcarreo= [1, 65.15277481079102, 78,  2, 126.15277481079102, 181, 3, 194.15277481079102, 283, 4, 233.15277481079102, 462, 5, 358.152774810791, 351, 
     6, 502.152774810791, 410, 7, 376.152774810791, 227, 8, 65.15277481079102, 443];
  cadf = [1, 2, 3, 2, 3, 8, 3, 4, 5, 3, 6, 5, 7, 3];
}
console.log(cadfAcarreo);
console.log(cadf);
a= 50;
b= 600;

 for (var k = 0; k <= cadfAcarreo.length -1; k++) {
      acarreo.push(cadfAcarreo[k]);

      numUno = Math.round(Math.random()*(b-a)+parseInt(a)); 
      numDos = Math.round(Math.random()*(b-a)+parseInt(a));
      acarreo.push(numUno);
      acarreo.push(numDos);
    }

    console.log(acarreo);


     $(document).ready(function() {
        //Coordenadas para dibujar
        $('#html_canvas').mousemove(function(e){
            var parentOffset = $(this).parent().offset();
            arriba = (e.pageY - parentOffset.top);
            izquierda = (e.pageX - parentOffset.left);
        });
        //Dibujar vértice
         // $('#html_canvas').click(function(){
           
          for (var i = 0; i <= acarreo.length -3; i= i+3) {
        
          verticeActual = acarreo[i];
          arriba = acarreo[i+1];
          izquierda = acarreo[i+2];

          $('#div_canvas').append('<div id="vertice_' + verticeActual +
          '" class="vertice" style="top: ' + arriba + 'px; left: ' +
          izquierda + 'px;">' + verticeActual + '</div>');


          vertices.push([arriba, izquierda]);
          vertiz.push(arriba);
          vertiz.push(izquierda);
          console.log(vertices);
          var o = new Option(verticeActual, verticeActual);
         // o = [274.5, 224];
          $(o).html(verticeActual);
          $("#de").append(o);
          o = new Option(verticeActual, verticeActual);
          $(o).html(verticeActual);
          $("#a").append(o);
          //colorpop=['blue','green','orange','purple','white','red','brown','aqua'];

          $("#vertice_" + verticeActual).css("background-color", color);
         // h = h +1;
          $('#vertice_' + verticeActual).click(function(){
            var arregloInterno = $(this).attr('id').split("_");
            if ( primerClic ) {
              de = Number(arregloInterno[1]);
              primerClic = false;
              $("#etiquetaArista").html("de " + de);
            } else {
              if ( de == a ) {
                //Arco
                
              } else {
                //Lanza arista
                a = Number(arregloInterno[1]);
                agregarArista();
                color = obtenerColor();////////////////
                 $('#vertice_', +a); ///////
              }
              primerClic = true;
              $("#etiquetaArista").html("de " + de + " a " + a);
            }
         // });

         // verticeActual++;
          //calcularOperaciones();
        });
        canvas = document.getElementById('html_canvas');
        context = canvas.getContext('2d');
      }
    }); 
       
       for (var j = 0; j <= cadf.length -2; j= j+2) {
       de = cadf[j];
       a = cadf[j+1];

       context.beginPath(); //comienza el camino
        context.lineTo(vertices[de][1] + CONSTANTE, vertices[de][0] + CONSTANTE); //inicio 
        context.lineTo(vertices[a][1] + CONSTANTE, vertices[a][0] + CONSTANTE); // fin del camino
        context.stroke();
       // j = j+2;
      }

     /////// parcial = [1, 2, 3, 2, 3, 8, 3, 4, 5, 3, 6, 5, 7, 3]; 
      /////cadenArista = [1, 2, 3, 2, 3, 8, 3, 4, 5, 3, 6, 5, 7, 3];
   }
 

var cadf = [1, 2, 2, 3, 3, 4, 4 ,1, 4, 5, 5, 6];//[1, 2, 3, 2, 4, 3, 5, 3, 6, 3, 7, 3, 8, 3, 9, 8, 10, 3];
var j = 0;

function abrir(){
  abrirY =1;
     $(document).ready(function() {
        //Coordenadas para dibujar
        $('#html_canvas').mousemove(function(e){
            var parentOffset = $(this).parent().offset();
            arriba = (e.pageY - parentOffset.top);
            izquierda = (e.pageX - parentOffset.left);
        });
        //Dibujar vértice
         // $('#html_canvas').click(function(){
           acarreo = [1, 94.07638549804688, 231,  2, 267.0763854980469, 140, 3, 268.0763854980469, 351, 4, 463.0763854980469, 270, 5, 488.0763854980469, 477, 6, 278.0763854980469, 620];
           //acarreo = [1, 94.81944274902344, 120,  2, 177.819, 254, 3, 245.819, 365, 4, 100.819, 471, 5, 181.819, 544, 6, 263.819, 578, 7, 361.819, 545, 8, 410.819, 453, 9, 521.819, 515, 10, 424.819, 343];

          for (var i = 0; i <= acarreo.length -3; i= i+3) {
        
          verticeActual = acarreo[i];
          arriba = acarreo[i+1];
          izquierda = acarreo[i+2];

          $('#div_canvas').append('<div id="vertice_' + verticeActual +
          '" class="vertice" style="top: ' + arriba + 'px; left: ' +
          izquierda + 'px;">' + verticeActual + '</div>');


          vertices.push([arriba, izquierda]);
          vertiz.push(arriba);
          vertiz.push(izquierda);
          console.log(vertices);
          var o = new Option(verticeActual, verticeActual);
         // o = [274.5, 224];
          $(o).html(verticeActual);
          $("#de").append(o);
          o = new Option(verticeActual, verticeActual);
          $(o).html(verticeActual);
          $("#a").append(o);
          //colorpop=['blue','green','orange','purple','white','red','brown','aqua'];

          $("#vertice_" + verticeActual).css("background-color", color);
         // h = h +1;
          $('#vertice_' + verticeActual).click(function(){
            var arregloInterno = $(this).attr('id').split("_");
            if ( primerClic ) {
              de = Number(arregloInterno[1]);
              primerClic = false;
              $("#etiquetaArista").html("de " + de);
            } else {
              if ( de == a ) {
                //Arco
                
              } else {
                //Lanza arista
                a = Number(arregloInterno[1]);
                agregarArista();
                color = obtenerColor();////////////////
                 $('#vertice_', +a); ///////
              }
              primerClic = true;
              $("#etiquetaArista").html("de " + de + " a " + a);
            }
         // });

          verticeActual++;
          //calcularOperaciones();
        });
        canvas = document.getElementById('html_canvas');
        context = canvas.getContext('2d');
      }
    }); 
       for (var j = 0; j <= cadf.length -2; j= j+2) {
       de = cadf[j];
       a = cadf[j+1];
       context.beginPath(); //comienza el camino
        context.lineTo(vertices[de][1] + CONSTANTE, vertices[de][0] + CONSTANTE); //inicio 
        context.lineTo(vertices[a][1] + CONSTANTE, vertices[a][0] + CONSTANTE); // fin del camino
        context.stroke();
       // j = j+2;
      }
      parcial = [1, 2, 2, 3, 3, 4, 4 ,1, 4, 5, 5, 6];//[1, 2, 3, 2, 4, 3, 5, 3, 6, 3, 7, 3, 8, 3, 9, 8, 10, 3]; 
      cadenArista = [1, 2, 2, 3, 3, 4, 4 ,1, 4, 5, 5, 6];//[1, 2, 3, 2, 4, 3, 5, 3, 6, 3, 7, 3, 8, 3, 9, 8, 10, 3];
   }

 var contenido = document.querySelector('#contenido')

   function traer() {
     
        abrir();
   }

    function archivoGuardar() {
        $.ajax({
            type: "GET",
            url: "archivoGuardar.php",
            data: { datos: $('#grafo').val() }
        }).done(function( result ) {
          document.location = "descargar.php";
        });
    }
    function archivoAbierto(datos) {
      //console.log(datos);
      //$('#grafo').val(datos);
      
      restablecer();
      verticeActual = 1;
      arriba = 0;
      izquierda=0;
      primerClic = true;
      de = 0;
      a = 0;
      grados = 0;
      mayorGrado = 0;
      //color = obtenerColor();
      //Obtenemos los arreglos
      var arrayAux = eval(datos.split("###"));
      //Obtenemos los elementos de cada arreglo
      var auxVertices=arrayAux[2].split("@@@");
      var auxArregloAristas=arrayAux[1].split("@@@");
      //var auxCoordenadas=arrayAux[2].split("@@@");
      //Inicializamos arreglos
      vertices = new Array([0,0]);
      arregloAristas = new Array("0,0");
      matrizDeAdyacencia = new Array();
      //Llenamos arreglo de vértices
      for( xx=1; xx<auxVertices.length; xx++ ) {
        var coordVertices = auxVertices[xx].split(",");
        vertices.push([Number(coordVertices[0]), Number(coordVertices[1])]);
        izquierda= Number(coordVertices[1]);
        arriba = Number (coordVertices[0]);
        dibujarVertice(false);
        if ( xx == (auxVertices.length-1) ) {
          //Llenamos arreglo de aristas
          for( yy=1; yy<auxArregloAristas.length; yy++ ) {
            var obtenerAristas = auxArregloAristas [yy].split(",");
            de = Number (obtenerAristas[0]);
            a = Number (obtenerAristas[1]);
            agregarArista(false);
            if ( yy == (auxArregloAristas.length-1) ) {
              calcularOperaciones();
              break;
            }
          }
        }
      }
      
    }