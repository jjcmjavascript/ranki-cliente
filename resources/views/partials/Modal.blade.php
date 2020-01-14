
<!--  header end -->
<div class="modal-main hide-modal-c" id="id_modal_test">
    <div class="dialog-modal-c">
        <div class="header-modal-c">
            Alerta!
        </div>
        <div class="body-modal-c text-center">
            <label class="text-center"> Debe registrar un rut para poder realizar una publicación</label>
        </div>
        <div class="footer-modal-c">
            <button class="btn btn-warning" id="closeModal" >Cerrar</button>
        </div>
    </div>
</div>


<style>
.show-modal-c {
    display: flex;
}

.hide-modal-c {
    display: none;
}

.modal-main {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.dialog-modal-c {
    width: 50%;
    height: auto;
    padding: 0;
    padding: 1.25em;
    border: none;
    border-radius: .3125em;
    background: #fff;
}

.header-modal-c {
    text-align: center;
    font-weight: bold;
    color: #595959;
    font-size: 1.875em;
    font-weight: 600;
}

.body-modal-c {
    padding: 5px;
}

.footer-modal-c {
    min-height: 20px;
    text-align: center;
    margin-top: 20px;
}
</style>
<script >
    function close() {
        document.getElementById('id_modal_test').classList.add('hide-modal-c');
        document.getElementById('id_modal_test').classList.remove('show-modal-c');
    };

    function show() {
        document.getElementById('id_modal_test').classList.add('show-modal-c');
        document.getElementById('id_modal_test').classList.remove('hide-modal-c');
    };

    setTimeout(
        function(){
           document.getElementById('closeModal').addEventListener('click',close);
           document.getElementById('openModal2').addEventListener('click',show);
           document.getElementById('openModal').addEventListener('click',show);
       },2000)

</script>
