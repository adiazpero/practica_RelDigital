function pintarReloj() {

    var momentoActual = new Date();

    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();

    var reloj = hora + ':' + minuto + ':' + segundo;

    document.getElementById('display').value = reloj;

    setTimeout('pintarReloj()', 1000);
}





function pintarFecha() {

}