window.Swal = require('sweetalert2');
window.swal = Swal.mixin({
    animation: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    showCancelButton: false,
    confirmButtonText: 'Aceptar',
    confirmButtonClass: 'btn btn-primary btn-flat',
    focusConfirm: false,
    cancelButtonText: 'Cerrar',
    cancelButtonClass: 'btn btn-secondary btn-flat',
    focusCancel: false,
    showCloseButton: true,
    buttonsStyling: false,
    position: 'center',
    title: 'Alerta!',
});