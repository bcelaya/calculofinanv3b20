function calculofinanv3b20(){
// aquí empezamos el programa para calcular la financiación a 12 meses
   
var nodosprecios = document.getElementsByClassName("price");
   
var arrayprecios = new Array();
   
// ahora aquí lo que vamos a hacer es recorrer el array
   
for (i = 0; i < nodosprecios.length; i ++){
var prtext = nodosprecios[i].textContent;
  
if (prtext.includes("–")) 
{
prtext = prtext.split("–")[1];
}
   
var precio = prtext.replace(/\s/g,'');
   
var preci = precio.replace('.', '');
   
precio = preci.replace(',','.');
   
precio = parseFloat(precio);
 
if (precio > 6000){ precio = precio * 1.03;}
if ((precio > 600) && (precio <= 6000) ){ precio = precio *1.0120;}
   
mensualidad = precio/12;
   
mensualidad = mensualidad.toFixed(2);
   
arrayprecios[i] = mensualidad;
   
var precioenentero = parseInt(arrayprecios[i]) * 12;
   
if (( precioenentero >= 600 ) && (precioenentero <= 6000)) {
  

nodosprecios[i].innerHTML = nodosprecios[i].innerHTML + '<br><span class="financiacion2">Financiación a 12 meses: ' + arrayprecios[i] + '€ al mes (sin intereses)</div>'
   
  }
 else{
 if ((precioenentero > 6000)){
nodosprecios[i].innerHTML = nodosprecios[i].innerHTML + '<br><span class="financiacion3">Financiación a 12 meses: ' + arrayprecios[i] + '€ al mes <br>(3% intereses)</div>'
                            }
 else{
 nodosprecios[i].innerHTML = nodosprecios[i].innerHTML + '<br><span class="sincompetencia">Precio Intermaquinas.online <br>Precio sin competencia!</div>';

 }
    }
 }
}
