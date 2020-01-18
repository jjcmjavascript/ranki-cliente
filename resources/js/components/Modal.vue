<template>
<div class="modal-main hide-modal-c mb-5" :id="id">
    <div class="dialog-modal-c">
        <div class="header-modal-c">
            <slot name="header"> </slot>
        </div>
        <div class="body-modal-c">
            <slot name="main">
            </slot>
        </div>
        <div class="footer-modal-c">
            <button type="button" name="button" class="btn btn-danger float-right ml-2" @click="close()" >Cerrar</button>
            <slot name="footer"> </slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'id',
    ],
    methods: {
        close() {
            document.getElementById(this.id).classList.add('hide-modal-c');
            document.getElementById(this.id).classList.remove('show-modal-c');
            this.$emit('close-modal');
        },
        show() {
            document.getElementById(this.id).classList.add('show-modal-c');
            document.getElementById(this.id).classList.remove('hide-modal-c');
            this.$emit('open-modal');
        },
        hide: function() {
            this.close();
        },
    },
};
</script>

<style scoped>
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
    min-height: 80px;
    text-align: center;
}
</style>
