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
                					  <i class="fa fa-user-secret fa-stack-2x icon-background"></i>
                					</span>
                					Ingrese su Nueva contraseña
                				</h5>
                                <hr class="mt-0">
                                <div class="row">
                                    <div class="col-xs-12 col-lg-12 text-center">
                                        <template v-if="pass.nueva != pass.confirm">
                                            <div class="alert alert-danger">Las contraseñas no coinciden</div>

                                        </template>
                                    </div>

                                    <div class="form-group col-xs-12 col-md-6">
                                        <label>Nueva Contraseña</label>
                                        <div class="input-group mb-1">
                                            <input :type="showPassword[1] ? 'text' : 'password'" class="form-control" v-model="pass.nueva" placeholder="*********">
                                            <div class="input-group-prepend">
                                                <a href="javascript:void(0)" class="input-group-text">
                                                    <i class="fa fa-eye" @click="changeTypeInput(1)"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="form-group col-xs-12 col-md-6">
                                        <label>Confirmar nueva contraseña</label>
                                        <div class="input-group mb-1">
                                            <input :type="showPassword[2] ? 'text' : 'password'" class="form-control" v-model="pass.confirm" placeholder="*********">
                                            <div class="input-group-prepend">
                                                <a href="javascript:void(0)" class="input-group-text">
                                                    <i class="fa fa-eye" @click="changeTypeInput(2)"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xs-12 col-lg-12 text-center">
                                        <button class="btn btn-primary"
                                        :disabled="passwordDisabled"
                                        @click="guardarContrasena()">
                                            Guardar cambios
                                            <i class="fa fa-angle-right"></i>
                                        </button>
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
                    current: this.$root.base_url + 'password/reset',
                },
                showPassword: [false, false, false],
                pass: {
                    nueva: null,
                    confirm: null
                },
			}
		},
		created() {

        },
        computed: {
            passwordDisabled(){
                return !this.pass.confirm || !this.pass.nueva
                || (this.pass.confirm  != this.pass.nueva)
                || this.pass.confirm.length < 8
                || this.pass.nueva.length < 8
            }
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
            changeTypeInput(key) {
                if (this.showPassword[key]) {
                    Vue.set(this.showPassword, key, false);
                } else {
                    Vue.set(this.showPassword, key, true);
                }
            },
            guardarContrasena() {
                if (
                    !this.$root.noScript(this.pass.confirm) ||
                    !this.$root.noScript(this.pass.nueva) ||
                    (!this.pass.confirm || !this.pass.nueva)
                ) {
                    this.alerta("error", "Ups... algunos datos son incorrectos!");
                } else {
                    this.start();
                    const request = new FormData();
                    this.$route.query.token && request.append("token", this.$route.query.token);
                    this.$route.query.email && request.append("email", this.$route.query.email);
                    this.pass.nueva && request.append("password", this.pass.nueva);
                    this.pass.confirm &&
                        request.append("password_confirmation", this.pass.confirm);

                    axios
                        .post(this.url.current, request)
                        .then(res => {
                            this.alerta("success", "Exito", "Tu clave fue modificada!");
                            this.pass.nueva = null;
                            this.pass.confirm = null;
                            window.location.href = this.$root.base_url;
                        })
                        .catch(err => {
                            this.stop();
                            this.alerta("error", "Ups...!", err);
                        })
                        .finally(() => {});
                }
            },
        }
	}
</script>

<style scoped>
</style>
