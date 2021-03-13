window.onload = function() {
    var contactme = document.getElementById('contactme');
    let verMas = document.getElementsByName('readmore');

    verMas.forEach(function(vermas) {
        vermas.addEventListener('click', function() {
            mensajeError();

        });
    })

    contactme.addEventListener('click', function(msj) {

        mensaje(msj);

    });

    function mensaje() {
        var msj = '849-268-1558';

        swal({
            title: 'Phone Number',
            text: msj,
            icon: 'success'
        })

    }

    function mensajeError() {
        var msjerror = 'Working in Progress';
        swal({
            title: 'Warning',
            text: msjerror,
            icon: 'warning'
        })

    }

}