    let plata1 = 0;
    let plata2 = 0;
    let plata3 = 0;
    let plata4 = 0;
    let plata5 = 0;
    let plata6 = 0;
    


function calcular(){
plata1 = document.getElementById('gastos1').value;
plata2 = document.getElementById('gastos2').value;
plata3 = document.getElementById('gastos3').value;
plata4 = document.getElementById('gastos4').value;
plata5 = document.getElementById('gastos5').value;
plata6 = document.getElementById('gastos6').value;
console.log(plata1)
console.log(plata6)
let plataTotal = [plata1,plata2,plata3,plata4,plata5,plata6]
console.log(plataTotal)
let total = 0;
total = parseInt(plata1)+parseInt(plata2)+parseInt(plata3)+parseInt(plata4)+parseInt(plata5)+parseInt(plata6);
console.log(total)
let cantidadPer = 0;
cantidadPer = document.getElementById('personas').value;
let cadaUno = 0;
cadaUno = Math.round(total/cantidadPer);
console.log(cadaUno)
    document.getElementById('pagar').innerHTML = "El total es "+ total + ", Total a pagar cada uno es " + cadaUno;
   
    for(let i = 0; i < plataTotal.length; i++){
    if(plataTotal[i] < cadaUno){
       let t = cadaUno - plataTotal[i];
        document.getElementById('paga' + i).innerHTML = "Debe pagar " + t;
    }else{
        t = plataTotal[i] - cadaUno;
        document.getElementById('paga' + i).innerHTML = "Se le paga " + t;
          }
        }
}
   