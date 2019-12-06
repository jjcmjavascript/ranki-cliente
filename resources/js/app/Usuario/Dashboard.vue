<template>


</template>
<script>
export default {
  data() {
    return {
      url: this.$root.base_url + "dashboard",
      usuario: {
        nombre: null
      }
    };
  },
  created() {
    this.iniciar();
  },
  methods: {

    stop() {
      this.$root.stop();
    },
    alerta(tipo, titulo, mensaje = null) {
      this.$root.alertas(tipo, titulo, mensaje);
    },
    iniciar() {
      axios
        .post(this.url)
        .then(res => {
          this.usuario = res.data.usuario;
        })
        .finally(() => {
          // this.stop();
        });
    }
  }
};
</script>
