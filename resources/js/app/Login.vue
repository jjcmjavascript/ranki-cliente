<template>
<!--register form -->
<div class="main-register-wrap modal">
    <div class="reg-overlay"></div>
    <div class="main-register-holder">
        <div class="main-register fl-wrap">
            <div class="close-reg color-bg"><i class="fal fa-times"></i></div>
            <ul class="tabs-menu">
                <li class="current"><a href="#tab-1"><i class="fal fa-sign-in-alt"></i> Registrar </a></li>
                <li><a href="#tab-2"><i class="fal fa-user-plus"></i> Iniciar</a></li>
            </ul>
            <!--tabs -->
            <div id="tabs-container">
                <div class="tab">
                    <!--tab -->
                    <div id="tab-1" class="tab-content">
                        <h3>
                            INICIA
                            <span>
                                en
                                <strong>Metro Cuadrado</strong>
                            </span>
                        </h3>
                        <div class="custom-form">
                            <!-- form uno -->
                            <form method="post" name="registerform">
                                <div>
                                    <template v-if="alertaEnviar && alertaEmail">
                                        <label>*El correo invalido</label>
                                    </template>
                                    <input type="text" placeholder="Correo" v-model="user.correo" :class="{danger : alertaEnviar && alertaEmail }" />
                                </div>
                                <div>
                                    <template v-if="alertaEnviar && alertaPass">
                                        <label>*Clave invalida</label>
                                    </template>
                                </div>
                                <input type="password" placeholder="Contraseña" v-model="user.clave" :class="{danger : alertaEnviar && alertaPass}" />
                                <div class="soc-log fl-wrap n-padding">
                                    <a href class="twitter-log" @click.prevent="iniciar()">iniciar</a>
                                </div>
                                <br />
                                <div class="filter-tags">
                                    <input id="check-a" type="checkbox" v-model="user.remember" />
                                    <label for="check-a">Recordar me</label>
                                </div>
                            </form>
                            <div class="lost_password">
                                <a href="#">Olvido su contraseña?</a>
                            </div>
                        </div>

                    </div>
                    <!--tab end -->
                    <!--tab -->
                    <div class="tab">
                        <div id="tab-2" class="tab-content">
                            <h3>REGISTRATE <span>en<strong>&nbsp; METRO CUADRADO</strong></span></h3>
                            <div class="custom-form">
                                <form class="main-register-form">
                                    <div>
                                        <template v-if="alertaRegistrar && alertaNombre">
                                            <label>*Nombre invalido o vacio</label>
                                        </template>
                                        <input type="text" :class="{danger : alertaRegistrar && alertaNombre }" placeholder="Nombre" v-model="userDos.nombre" />
                                    </div>
                                    <div>
                                        <template v-if="alertaRegistrar && alertaApellido">
                                            <label>*Apellido invalido o vacio</label>
                                        </template>
                                        <input type="text" :class="{danger : alertaRegistrar && alertaApellido }" placeholder="Apellido" v-model="userDos.apellido" />
                                    </div>
                                    <div>
                                        <template v-if="alertaRut && alertaRegistrar">
                                            <label>*Rut invalido o vacio</label>
                                        </template>
                                        <input type="text" :class="{danger : alertaRegistrar && alertaRut }" placeholder="Rut" v-model="userDos.rut" />
                                    </div>
                                    <div>
                                        <template v-if="alertaRegistrar && alertaEmailDos">
                                            <label>*Correo invalido o vacio</label>
                                        </template>
                                        <input type="text" :class="{danger : alertaRegistrar && alertaEmailDos }" placeholder="Correo" v-model="userDos.correo" />
                                    </div>
                                    <!-- <div>
                                    <template v-if="alertaRegistrar && alertaTelefono">
                                      <label>*Telefono invalido o vacio</label>
                                    </template>
                                    <input
                                      type="text"
                                      class="numeros"
                                      :class="{danger : alertaRegistrar && alertaTelefono }"
                                      placeholder="Teléfono"
                                      v-model="userDos.telefono"
                                    />
                                  </div>-->
                                    <div>
                                        <template v-if="alertaRegistrar && alertaPassDos">
                                            <label>*Contraseña invalido o vacio</label>
                                        </template>
                                        <template v-if="alertaPassDifentes">
                                            <label>*Las contraseñas no coinciden</label>
                                        </template>
                                        <input type="password" :class="{danger : alertaRegistrar && alertaPassDos }" placeholder="Clave" v-model="userDos.clave" />
                                    </div>
                                    <div>
                                        <input type="password" :class="{danger : alertaRegistrar && alertaPassConfirm }" placeholder="Confirmar Clave" v-model="userDos.claveConfirm" />
                                    </div>

                                    <div class="soc-log fl-wrap n-padding">
                                        <a href class="twitter-log" @click.prevent="registrar()">Registrar</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!--tab end -->
                </div>
                <!--tabs end -->
                <div class="log-separator fl-wrap"><span>or</span></div>
                <div class="soc-log fl-wrap">
                    <p>Inicia o Registrate con tus redes.</p>
                    <a href="#" class="facebook-log"><i class="fab fa-facebook-f"></i>Connect with Facebook</a>
                    <a :href="$root.base_url+'/auth/google'" class="google-log">
                        <i class="fab fa-google"></i> Inicia con Google
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<!--register form end -->
</template>

<script>
export default {
    data() {
        return {
            error: [],
            success: [],
            alertaEnviar: false,
            alertaRegistrar: false,
            erroresInciar: [],
            user: {
                correo: null,
                clave: null,
                remember: null
            },
            userDos: {
                nombre: null,
                apellido: null,
                rut: null,
                correo: null,
                telefono: null,
                clave: null,
                claveConfirm: null
            }
        };
    },
    computed: {
        alertaResgistrar() {
            return (
                this.alertaNombre ||
                this.alertaApellido ||
                this.alertaRut ||
                this.alertaPassDifentes ||
                this.alertaPassConfirm ||
                this.alertaPassDos ||
                this.alertaEmailDos
            );
        },
        alertaNombre() {
            return !this.userDos.nombre || !this.$root.noScript(this.userDos.nombre);
        },
        alertaApellido() {
            return (
                !this.userDos.apellido || !this.$root.noScript(this.userDos.apellido)
            );
        },
        alertaRut() {
            return !this.userDos.rut || !this.$root.modulo11(this.userDos.rut).valid;
        },

        alertaPassDifentes() {
            return (
                (this.userDos.clave || this.userDos.claveConfirm) &&
                this.userDos.clave != this.userDos.claveConfirm
            );
        },
        alertaPassConfirm() {
            return (
                !this.userDos.claveConfirm ||
                !this.$root.noScript(this.userDos.claveConfirm)
            );
        },
        alertaPassDos() {
            return !this.userDos.clave || !this.$root.noScript(this.userDos.clave);
        },
        alertaEmailDos() {
            return (
                !this.userDos.correo ||
                !this.$root.noScript(this.userDos.correo) ||
                !this.$root.validEmail(this.userDos.correo)
            );
        },

        alertaPass() {
            return !this.user.clave || !this.$root.noScript(this.user.clave);
        },
        alertaEmail() {
            return (
                !this.user.correo ||
                !this.$root.noScript(this.user.correo) ||
                !this.$root.validEmail(this.user.correo)
            );
        },
        disableLogin: function() {
            return !this.alertaPass || !this.alertaEmail;
        }
    },
    methods: {
        iniciar() {
            this.alertaEnviar = true;

            if (!this.alertaPass && !this.alertaEmail) {
                try {
                    const request = new FormData();
                    this.user.correo && request.append("email", this.user.correo);
                    this.user.clave && request.append("password", this.user.clave);
                    this.user.remember && request.append("remember", this.user.remember);

                    this.$root.cargando();
                    axios
                        .post("/iniciar", request)
                        .then(res => {
                            this.$swal.disableLoading();
                            this.mostrarAlerta("success", "Exito", "Lo estamos redirigiendo");
                            window.location.href = res.data.url;
                        })
                        .catch(error => {
                            this.$swal.disableLoading();
                            this.mostrarAlerta("error", "Ups, ha ocurrido un error", error);
                        })
                        .finally(() => {});
                } catch (err) {
                    this.alertaEnviar = false;
                    console.error(err);
                }
            }
        },
        registrar() {
            this.alertaRegistrar = true;

            try {
                const request = new FormData();
                this.userDos.nombre && request.append("nombre", this.userDos.nombre);
                this.userDos.apellido &&
                    request.append("apellidos", this.userDos.apellido);
                this.userDos.rut && request.append("rut", this.userDos.rut);
                this.userDos.correo && request.append("email", this.userDos.correo);
                // this.userDos.telefono &&
                //   request.append("telefono_movil", this.userDos.telefono);
                this.userDos.clave && request.append("password", this.userDos.clave);
                this.userDos.claveConfirm &&
                    request.append("password_confirmation", this.userDos.claveConfirm);

                if (!this.alertaResgistrar) {
                    this.$root.cargando();

                    axios
                        .post("/crear", request)
                        .then(res => {
                            this.$swal.disableLoading();
                            this.mostrarAlerta("success", "Exito", "Lo estamos redirigiendo");
                            window.location.href = res.data.url;
                        })
                        .catch(error => {
                            this.$swal.disableLoading();
                            this.mostrarAlerta("error", "Ups, ha ocurrido un error", error);
                        })
                        .finally(() => {});
                }
            } catch (err) {
                this.alertaRegistrar = false;
                console.error(err);
            }
        },
        mostrarAlerta(tipo, titulo, mensaje = null) {
            this.$root.alertas(tipo, titulo, mensaje);
        }
    }
};
</script>
<style scoped>
.danger {
    border: 1px solid #ef5350 !important;
}

.n-padding {
    padding: 0px;
}

li {
    text-align: left;
    padding-bottom: 3px;
}

label {
    color: #ef5350;
}

.google-log {
    background: #f44336;
}

.google-log:hover {
    background: #ef5350;
}
</style>>
