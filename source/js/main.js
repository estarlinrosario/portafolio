window.onload = function() {
    var contactme = document.getElementById('contactme');
    let verMas = document.getElementsByName('readmore');
    var msj = '849-268-1558';




    verMas.forEach(function(vermas) {
        vermas.addEventListener('click', function() {
            mensajeError();
        });
    })



    contactme.addEventListener('click', function(msj) {
        mensaje(msj);
    });




    function mensaje() {
        swal({
            title: 'Phone Number',
            text: msj,
            icon: 'success'
        })
    }

    function mensajeError() {
        msj = '';
        msj = 'Working in Progress';
        swal({
            title: 'Warning',
            text: msj,
            icon: 'warning'
        })
    }

}