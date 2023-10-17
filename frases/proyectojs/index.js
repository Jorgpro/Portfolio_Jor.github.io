

const cronometro=document.getElementById('cronometro');
const botonIniciar= document.getElementById('boton-iniciar');
const botonReiniciar= document.getElementById('boton-reiniciar');


cronometro.innerText =`${horasConFormato}:${minutosconFormato}:${segundosconFormato}`

botonIniciar.addEventListener('click' ,function(){
if (estadoCronometro === 'pausado'){
    intervaloDeTiempo= window.setInterval(actualizarCronometro, 1000);
    botonIniciar.innerHTML = '<i class="bi bi-pause-circle"></i>';
    botonIniciar.classList.remove('iniciar');
    botonIniciar.classList.add('pausar');
    estadoCronometro='andando';

}else{
window.clearInterval(intervaloDeTiempo);
botonReiniciar.innerHTML = '<i class="bi bi-play-circle"></i>';
botonReiniciar.classList.remove('pausar')
botonReiniciar.classList.add('iniciar');
estadoCronometro='pausado';

}
});





let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro= 'pausado';

function actualizarCronometro(){
    segundos++; 
    if(segundos / 60 ===1){
  segundos = 0;
  minutos++;
  if(minutos/ 60=== 1)
   minutos = 0;
    horas++;
    }
}
const segundosconFormato =asignarFormato(segundos);
const minutosconFormato =asignarFormato(minutos);
const horasconFormato =asignarFormato(horas);


function asignarFormato(unidadDeTiempo){
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;


}