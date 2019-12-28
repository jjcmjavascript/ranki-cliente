<template>
    <div id="wrapper">
        <!-- content-->
        <div class="content">
            <section  id="sec1" class="grey-b lue-bg middle-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <div class="list-single-main-item fl-wrap">
                                <div class="list-single-main-item-title fl-wrap">
                                    <h3>Recupear Contraseña</h3>
                                </div>

                                <h5 class="text-info mb-2">
                            		<span class="fa-stack">
                					  <i class="fa fa-envelope fa-stack-2x icon-background"></i>
                					</span>
                					Ingrese su Correo
                				</h5>
                                <hr class="mt-0">
                               	<div class="row">
                                    <div class="form-group col-xs-12 col-md-6">
                                        <div class="input-group">
                                            <input type="text" class="form-control" v-model="correo">
                                            <div class="input-group-append">
                                              <button class="btn btn-outline-success"   @click="EnviarCorreo()" >Enviar</button>
                                            </div>
                                        </div>
                                    </div>
                               	</div>
                          </div>
                       </div>
                  </div>
              </div>
            </section>
        </div>
        <login />
    </div>
</template>

<script>
    import Login from '../Login.vue'
	export default {
        components: {
            login: Login,
        },
		data() {
            return {
				url: {
                    current: this.$root.base_url + this.$route.path,
                },
                correo : null,
			}
		},
		created() {

        },
        computed: {

        },
		methods: {
            start() {
                this.$root.cargando();
            },
            stop() {
                this.$root.stop();
            },
            alerta(tipo, titulo, mensaje = null) {
                this.$root.alertas(tipo, titulo, mensaje);
            },
            EnviarCorreo(){
                if(!this.$root.validEmail(this.correo) ){
                    this.alerta('error','Error', 'El correo ingresado es invalido.');
                }else{
                    this.start();
                    axios
                        .post(this.url.current, {email : this.correo})
                        .then( res =>{
                            this.correo =null;
                            this.alerta('success','Exito', res.data.exito);
                        })
                        .catch(err =>{
                            this.stop();
                            this.alerta('error','Error', err);
                        })
                }
            },
        }
	}
</script>

<style scoped>
input[type="file"] {
    display: none;
}

</style>
