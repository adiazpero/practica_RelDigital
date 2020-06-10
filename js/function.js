function pintarReloj() {

    var momentoActual = new Date();

    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();

    var reloj = hora + ':' + minuto + ':' + segundo;

    document.getElementById('displayReloj').value = reloj;

    setTimeout('pintarReloj()', 1000);
}





function pintarFecha() {
    /*   var meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'); */
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var year = fecha.getFullYear();

    var fechaActual = dia + ' de ' + mes + ' del ' + year;

    document.getElementById('displayFecha').value = fechaActual;
}