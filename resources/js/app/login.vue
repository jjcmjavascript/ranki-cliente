<template>
    <div>
        <div class="container-fluid  no-gutters h-100">
            <div class="row h-100 bg-white">
                <!-- IMAGEN -->
                <div class="col-lg-7 no-padding">
                    <div class="background-01" style="background-image: linear-gradient(150deg, rgba(51, 170, 255, 0.6)15%, rgba(4, 209, 255, 0.6)70%, rgba(164, 254, 199, 0.6)94%), url(../img/login-2.jpeg);background-size: cover;">
                        <div class="authentication-col-content mx-auto">
                            <h1 class="gradient-text-01">
                                Metro cuadrado
                            </h1>
                            <p>
                                ¡La inmobiliaria pensada para ti!
                            </p>
                        </div>
                    </div>
                </div>

                <!-- LOGIN -->
                <div class="col-lg-5 my-auto">
                    <!-- Begin Form -->
                    <div class="authentication-form mx-auto">
                        <h3 class="mb-3">Iniciar Sesión</h3>
                        <alertas :success="success" :error="error"></alertas>

                        <form v-on:submit.prevent="login">
                            <div class="form-group">
                                <label>Usuario</label>
                                <input type="text" v-model="usuario" class="form-control" :class="{ 'danger' : alertUser }"
                                v-on:keypress.enter="validateLogin">
                            </div>
                            <div class="form-group">
                                <label>Contraseña</label>
                                <input type="password" v-model="password" class="form-control" :class="{ 'danger' : alertPass }"
                                v-on:keypress.enter="validateLogin">
                            </div>
                        </form>

                        <div class="row mb-4">
                            <!-- <div class="col-6 text-left">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                                  <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                </div>
                            </div> -->
                            <div class="col-12 text-right">
                                <span class="link" v-on:click="recoverView">Olvidó su contraseña?</span>
                            </div>
                        </div>

                        <div class="sign-btn">
                            <button class="btn-theme btn-theme-primary mb-4" v-on:click="login"
                            :disabled="disableLogin">Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <modal id="modalRecover" size="medium" ref="modal" v-on:close="limpiar">
            <template slot="header">Recuperar Contraseña</template>

            <template slot="main">
                <alertas :success="modal.success" :error="modal.error"></alertas>

                <div class="row">
                    <div class="form-group col-12">
                        <label>Usuario</label>
                        <input type="text" v-model="modal.user" class="form-control" autocomplete="off" />
                    </div>

                    <div class="form-group col-12">
                        <label>Correo electrónico</label>
                        <input type="text" v-model="modal.email" class="form-control" autocomplete="off"
                        placeholder="Correo registrado del usuario" />
                    </div>

                    <div class="form-group col-12" v-if="modal.view == 'recuperar'">
                        <label>Código</label>
                        <input type="text" v-model="modal.token" class="form-control" autocomplete="off" />
                    </div>

                    <div class="form-group col-12" v-if="modal.view == 'recuperar'">
                        <label>
                            Contraseña
                            <i class="fas fa-exclamation-triangle danger" title="Contraseña debe tener entre 6 y 100 caracteres"
                            v-if="modal.password && (modal.password.length < 6 || modal.password.length > 100)"></i>
                        </label>
                        <input type="password" v-model="modal.password" class="form-control" autocomplete="off" />
                    </div>

                    <div class="form-group col-12" v-if="modal.view == 'recuperar'">
                        <label>
                            Confirmar contraseña
                            <i class="fas fa-exclamation-triangle danger" title="Contraseña difiere de confirmación"
                            v-if="modal.password_check && modal.password_check != modal.password"></i>
                        </label>
                        <input type="password" v-model="modal.password_check" class="form-control" autocomplete="off" />
                    </div>
                </div>

                <div class="row">
                    <small class="col-12 text-right">
                        <span class="link" v-if="modal.view == 'recuperar'" v-on:click="recoverViewChange('solicitar')"
                        :class="{ 'hidden' : modal.view == 'solicitar' }">Solicitar código para recuperar contraseña</span>

                        <span class="link" v-if="modal.view == 'solicitar'" v-on:click="recoverViewChange('recuperar')"
                        :class="{ 'hidden' : modal.view == 'recuperar' }">Si ya tiene un código haga click aquí.</span>
                    </small>
                </div>
            </template>

            <template slot="footer">
                <button class="btn-theme btn-theme-primary" v-if="modal.view == 'solicitar'" v-on:click="recoverRequest"
                :disabled="deshabilitarSolicitarCodigo">Solicitar código</button>

                <button class="btn-theme btn-theme-primary" v-if="modal.view == 'recuperar'" v-on:click="recover"
                :disabled="deshabilitarCambiarContrasena">Cambiar contraseña</button>
            </template>
        </modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                error: [],
                success: [],
                usuario: null,
                password: null,
                modal: {
                    error: [],
                    success: [],
                    view: 'solicitar',
                    user: null,
                    email: null,
                    token: null,
                    password: null,
                    password_check: null,
                }
            }
        },
        computed: {
            alertUser: function() {
                return !this.usuario
                || !this.$root.noScript(this.usuario);
            },
            alertPass: function() {
                return !this.password
                || !this.$root.noScript(this.password);
            },
            disableLogin: function() {
                return this.alertUser || this.alertPass;
            },
            deshabilitarSolicitarCodigo: function() {
                return !this.modal.user || !this.modal.email || !this.$root.validEmail(this.modal.email);
            },
            deshabilitarCambiarContrasena: function() {
                return !this.modal.user
                    || !this.modal.email
                    || !this.$root.validEmail(this.modal.email)
                    || !this.modal.token
                    || !this.modal.password
                    || (this.modal.password && (this.modal.password.length < 6 || this.modal.password.length > 100))
                    || !this.modal.password_check
                    || this.modal.password != this.modal.password_check
            },
        },
        methods: {
            validateLogin: function() {
                if (this.usuario && this.password) {
                    this.login();
                }
            },
            login: function() {
                loading();
                this.success = [];
                this.error = [];

                if (this.$root.noScript(this.usuario) && this.$root.noScript(this.password)) {
                    let request = new FormData;
                    request.append('usuario', this.usuario);
                    request.append('password', this.password);

                    axios.post('/login', request)
                    .then((response) => {
                        loaded();
                        if ('intended' in response.data && response.data.intended.indexOf('.js') === -1) {
                            window.location.href = response.data.intended;
                        }
                        else if ('success' in response.data) {
                            window.location.href = '/';
                        }
                        else {
                            this.error = this.$root.arrayResponse(response);
                        }
                    })
                    .catch((error) => {
                        loaded();
                        this.error = this.$root.arrayResponse(error);
                    });
                }
                else {
                    this.error = [
                        'No puede ingresar links o scripts en campos Usuario o Contraseña',
                        'Por favor verifique sus datos antes de continuar'
                    ];
                    loaded();
                }
            },
            limpiar: function() {
                this.success = [];
                this.error = [];
                this.modal = {
                    error: [],
                    success: [],
                    view: 'solicitar',
                    user: null,
                    email: null,
                    token: null,
                    password: null,
                    password_check: null,
                };
            },
            recoverView: function() {
                this.limpiar();
                this.modal.user = this.usuario;
                this.$refs.modal.show();
            },
            recoverViewChange: function(view) {
                this.modal.error = [];
                this.modal.success = [];
                this.modal.view = view;
                this.modal.token = null;
                this.modal.password = null;
                this.modal.password_check = null;
            },
            recoverRequest: function() {
                loading();
                this.modal.success = [];
                this.modal.error = [];

                if (this.$root.noScript(this.modal.user) && this.$root.noScript(this.modal.email)) {
                    let request = new FormData;
                    request.append('usuario', this.modal.user);
                    request.append('email', this.modal.email);

                    axios.post('/login/recover/request', request)
                    .then((response) => {
                        loaded();
                        if ('success' in response.data) {
                            this.modal.success = this.$root.arrayResponse(response.data.success);
                            this.modal.view = 'recuperar';
                        }
                        else {
                            this.modal.error = this.$root.arrayResponse(response);
                        }
                    })
                    .catch((error) => {
                        loaded();
                        this.modal.error = this.$root.arrayResponse(error);
                    });
                }
                else {
                    this.error = [
                        'No puede ingresar links o scripts en campos Usuario o Correo electrónico',
                        'Por favor verifique sus datos antes de continuar.'
                    ];
                    loaded();
                }
            },
            recover: function() {
                loading();
                this.success = [];
                this.error = [];
                this.modal.success = [];
                this.modal.error = [];

                if (this.$root.noScript(this.modal.user) && this.$root.noScript(this.modal.email)
                    && this.$root.noScript(this.modal.token) && this.$root.noScript(this.modal.password)
                ) {
                    let request = new FormData;
                    request.append('usuario', this.modal.user);
                    request.append('email', this.modal.email);
                    request.append('codigo', this.modal.token);
                    request.append('contrasena', this.modal.password);

                    axios.post('/login/recover', request)
                    .then((response) => {
                        loaded();
                        if ('success' in response.data) {
                            this.usuario = this.modal.user;
                            this.password = this.modal.password;
                            this.$refs.modal.hide();

                            this.success = this.$root.arrayResponse(response.data.success);
                        }
                        else {
                            this.modal.error = this.$root.arrayResponse(response);
                        }
                    })
                    .catch((error) => {
                        loaded();
                        this.modal.error = this.$root.arrayResponse(error);
                    });
                }
                else {
                    this.error = [
                        'No puede ingresar links o scripts en campos Usuario o Correo electrónico',
                        'Por favor verifique sus datos antes de continuar.'
                    ];
                    loaded();
                }
            },
        },
    }
</script>

