<template>
<div class="container">
    <!--dasboard-wrap-->
    <div class="dasboard-wrap fl-wrap">
        <!-- dashboard-content-->
        <div class="dashboard-content fl-wrap">
            <div class="box-widget-item-header">
                <h3> Perfil</h3>
            </div>
            <!-- profile-edit-container-->
            <div class="profile-edit-container">
                <div class="custom-form">
                    <div class="form-group col-xs-12">

                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                        <label>
                            Nombre
                            <i class="fa fa-user"></i>
                        </label>
                        <input type="text" placeholder="Nombre" v-model="usuario.nombre" />
                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                        <label>
                            apellidos
                            <i class="fa fa-user"></i>
                        </label>
                        <input type="text" placeholder="Apellidos" v-model="usuario.apellidos" />
                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                        <label>
                            Correo
                            <i class="fa fa-envelope"></i>
                        </label>
                        <input type="text" placeholder="Correo" v-model="usuario.email" />
                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                        <label>
                            Telefono Movil
                            <i class="fa fa-phone"></i>
                        </label>
                        <input type="text" placeholder="+9(123)987654" class="numeros" v-model="usuario.telefono_movil" />
                    </div>

                    <div class="form-group col-xs-12 col-md-6">
                        <label>
                            Telefono Fijo
                            <i class="fa fa-phone"></i>
                        </label>
                        <input type="text" placeholder="+9(123)987654" class="numeros" v-model="usuario.telefono_fijo" />
                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                        <label>
                            Direccion
                            <i class="fa fa-map-marker"></i>
                        </label>
                        <input type="text" placeholder="Santiago" v-model="usuario.direccion" />
                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                        <label>
                            Avatar
                            <i class="fa fa-file-image"></i>
                        </label>
                        <input type="file" accept=".jpeg, .jpg, .png" class="form-control" @change="cambiarImagen($event)" />
                        <p>Tamaño maximo 2MB</p>
                    </div>
                    <div class="col-xs-12">

                        <button class="btn small-btn color-bg flat-btn" :disabled="send" @click="editar()">
                            Guardar Cambios
                        </button>
                    </div>
                </div>
                <div class="profile-edit-container" v-if="!usuario.provider_id">
                    <div class="profile-edit-header fl-wrap" style="margin-top:30px">
                        <h4>Cambiar contraseña</h4>
                    </div>

                    <div class="custom-form no-icons">
                      <div class="form-group col-xs-12">
                        <div class="pass-input-wrap fl-wrap">
                          <label>Contraseña Actual</label>
                          <input type="password" class="pass-input" v-model="pass.actual" />
                          <span class="eye">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </span>
                        </div>

                      </div>
                        <div class="form-group col-xs-12 col-md-6">
                            <div class="pass-input-wrap fl-wrap">
                                <label>Nueva Contraseña</label>
                                <input type="password" class="pass-input" v-model="pass.nueva" />
                                <span class="eye">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </span>
                            </div>

                        </div>
                        <div class="form-group col-xs-12 col-md-6">
                            <div class="pass-input-wrap fl-wrap">
                                <label>Confirma</label>
                                <input type="password" class="pass-input" v-model="pass.confirm" />
                                <span class="eye">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <div>
                            <template v-if="pass.nueva != pass.confirm">
                                <label class="danger">Las contraseñas no coinciden</label>
                            </template>
                        </div>

                        <button class="btn big-btn color-bg flat-btn" :disabled="!pass.nueva || !pass.confirm || !pass.actual" @click="guardarContrasena()">
                            Guardar Cambios
                            <i class="fa fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- dashboard-list-box end-->
    </div>
    <!-- dasboard-wrap end-->
</div>
</template>

<script>
export default {
    data() {
        return {
            file: null,
            url: this.$root.base_url + 'perfil',
            pass: {
                actual: null,
                nueva: null,
                confirm: null
            },
            usuario: {
                nombre: null,
                apellidos: null,
                direccion: null,
                telefono_fijo: null,
                telefono_movil: null,
                email: null,
                _avatar: null,
            }
        };
    },
    computed: {
        send() {
            this.usuario.nombre ||
                this.usuario.apellidos ||
                this.usuario.direccion ||
                this.usuario.telefono_fijo ||
                this.usuario.telefono_movil ||
                this.usuario.email;
        },
        all() {
            return (
                this.alertaNombre ||
                this.alertaapellidos ||
                this.alertaTelefono ||
                this.alertaTelefonoFijo ||
                this.alertaDireccion ||
                this.alertaEmail
            );
        },
        alertaNombre() {
            return !this.$root.noScript(this.usuario.nombre);
        },
        alertaapellidos() {
            return !this.$root.noScript(this.usuario.apellidos);
        },
        alertaTelefono() {
            return !this.$root.noScript(this.usuario.telefono_movil);
        },
        alertaTelefonoFijo() {
            return !this.$root.noScript(this.usuario.telefono_fijo);
        },
        alertaDireccion() {
            return;
            !this.$root.noScript(this.usuario.direccion);
        },
        alertaEmail() {
            return (
                !this.$root.noScript(this.usuario.email) ||
                !this.$root.validEmail(this.usuario.email)
            );
        },
        urlImagen() {
            if (this.usuario && this.usuario._avatar && this.usuario._avatar.length > 0) {

                return `/storage/${this.usuario._avatar[ this.usuario._avatar.length -1 ].ruta}`;

            } else if (this.usuario && this.usuario.avatar) {

                return this.usuario.avatar
                
            } else {
                return "https://pgimgmt.com/wp-content/uploads/2018/05/generic-user.jpg";
            }
        },
    },
    mounted() {
        document.querySelector('html').style['overflow-y'] = 'auto';
        this.iniciar();
    },
    methods: {
        validarFormato(file) {
            let rules = ['img', 'png', 'jpeg', 'jpg', 'gif'];

            return rules.includes(file.name.split('.').pop().toLowerCase());
        },
        validarSize(file) {
            //mega
            let size = 2.048;

            return ((file.size / 1024) / 1024) < size;
        },
        guardarContrasena() {
            if (
                !this.$root.noScript(this.pass.actual) ||
                !this.$root.noScript(this.pass.confirm) ||
                !this.$root.noScript(this.pass.nueva) ||
                (!this.pass.actual || !this.pass.confirm || !this.pass.nueva)
            ) {
                this.alerta("error", "Ups... algunos datos son incorrectos!");
            } else {
                this.start();
                const request = new FormData();
                this.usuario.id && request.append("id", this.usuario.id);
                this.pass.actual && request.append("actual", this.pass.actual);
                this.pass.nueva && request.append("password", this.pass.nueva);
                this.pass.confirm &&
                    request.append("password_confirmation", this.pass.confirm);

                axios
                    .post(this.url + "/clave", request)
                    .then(res => {
                        this.stop();
                        this.alerta("success", "Exito", "Tu clave fue modificada!");
                        this.pass.actual = null;
                        this.pass.nueva = null;
                        this.pass.confirm = null;
                        this.usuario = res.data.usuario;
                    })
                    .catch(err => {
                        this.stop();
                        this.alerta("error", "Ups...!", err);
                    })
                    .finally(() => {});
            }
        },

        start() {
            this.$root.cargando();
        },

        stop() {
            this.$root.stop();
        },

        alerta(tipo, titulo, mensaje = null) {
            this.$root.alertas(tipo, titulo, mensaje);
        },

        iniciar() {
            this.start();
            axios
                .post(this.url, this.usuario)
                .then(res => {
                    this.usuario = res.data.usuario;
                })
                .catch(err => {})
                .finally(() => {
                    this.stop();
                });
        },

        editar() {
            if (this.all) {
                this.alerta("error", "Ups... algunos datos son incorrectos!");
            } else {
                this.start();
                const request = new FormData();
                this.usuario.id && request.append("id", this.usuario.id);
                this.usuario.nombre && request.append("nombre", this.usuario.nombre);
                this.usuario.apellidos &&
                    request.append("apellidos", this.usuario.apellidos);
                this.usuario.direccion &&
                    request.append("direccion", this.usuario.direccion);
                this.usuario.telefono_fijo &&
                    request.append("telefono_fijo", this.usuario.telefono_fijo);
                this.usuario.telefono_movil &&
                    request.append("telefono_movil", this.usuario.telefono_movil);
                this.usuario.email && request.append("email", this.usuario.email);
                this.file && request.append('avatar', this.file);

                axios
                    .post(this.url + '/guardar', request)
                    .then(res => {
                        this.stop();
                        this.alerta("success", "Exito", "Tus datos fueron modificados!");
                        this.usuario = res.data.usuario;
                        //document.querySelector("#imagen_header").src = this.urlImagen;
                        //document.querySelector("#imagen_lateral").src = this.urlImagen;

                    })
                    .catch(err => {
                        this.stop();
                        this.alerta("error", "Lo sentimos!", err);
                    })
            }
        },

        cambiarImagen(event) {
            this.file = null;
            try {

                if (event.target.files[0]) {

                    if (!this.validarFormato(event.target.files[0])) {
                        throw Error("La imagen que ingreso no es valida.");
                    } else if (!this.validarSize(event.target.files[0])) {
                        throw Error('El peso del archivo excede el maximo permitido.');
                    }

                    this.file = event.target.files[0];
                }

            } catch (e) {
                document.querySelector("input[type='file']").value = null;

                this.alerta(
                    "error",
                    "Ups...!",
                    e
                );
            }

        }

    }
};
</script>

<style scoped>
.danger {
    color: #ef5350;
}

@media (max-width: 576px) {}

@media (min-width: 768px) {}



.fa-picture-o {
    margin: 0px;
    padding: 0px;
}
</style>
