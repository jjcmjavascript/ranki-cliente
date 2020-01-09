<template>
<div class="container">

    <!--dasboard-wrap-->
    <div class="dasboard-wrap fl-wrap">
        <!-- dashboard-content-->
        <div class="dashboard-content fl-wrap">
            <br>
            <div class="box-widget-item-header">
                <h3>Perfil</h3>
            </div>
            <!-- profile-edit-container-->
            <div class="row">
                <div class="form-group col-xs-12 col-md-6">
                    <label>
                        Nombre
                    </label>
                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-user text-yellow"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" v-model="usuario.nombre">
                    </div>
                </div>
                <div class="form-group col-xs-12 col-md-6">
                    <label>
                        Apellidos
                    </label>
                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-user text-yellow"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" v-model="usuario.apellidos" placeholder="Indique sus apellidos">
                    </div>
                </div>
                <div class="form-group col-xs-12 col-md-12">
                    <label>
                        Correo
                    </label>
                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-envelope text-yellow"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" v-model="usuario.email" placeholder="Indique sus correo">
                    </div>
                </div>
                <div class="form-group col-xs-12 col-md-6">
                    <label>
                        Telefono Movil
                    </label>
                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-phone text-yellow"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control numeros" v-model="usuario.telefono_movil" placeholder="+9(123)987654">
                    </div>
                </div>

                <div class="form-group col-xs-12 col-md-6">
                    <label>
                        Telefono Fijo
                    </label>
                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-phone text-yellow"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control numeros" v-model="usuario.telefono_fijo" placeholder="+9(123)987654">
                    </div>
                </div>
                <div class="form-group col-xs-12 col-md-10">
                    <label>
                        Dirección
                    </label>
                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-map-marker text-yellow"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control numeros" v-model="usuario.direccion" placeholder="San Joaquin, Santiago de Chile">
                    </div>
                </div>
                <div class="form-group col-xs-12 col-md-2">
                    <label>
                        Avatar
                        <i class="far fa-thumbs-up text-dark" v-if="file" title="La imagen cargada se encuentra dentro de los parametros establecidos"></i>
                    </label>
                    <div>
                        <label class="btn btn-success c-pointer">
                            <input type="file" class="hide" accept=".jpeg, .jpg, .png" @change="cambiarImagen($event)" />
                            Subir imagen
                        </label>

                    </div>
                    <p>Tamaño max. 2MB</p>
                </div>
                <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div class="custom-control custom-checkbox mt-4 pt-2">
                        <label style="color:transparent;"> &nbsp; &nbsp;</label>
                        <label class="checktainer">
                            Recibir Promociones/Notificaciones
                          <input type="checkbox" v-model="usuario.notificacion" >
                          <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-12 text-center">
                    <button class="btn btn-primary" :disabled="send" @click="editar()">
                        Guardar cambios
                    </button>
                </div>
            </div>
            <hr>
            <div class="profile-edit-container" v-if="!usuario.provider_id">
                <div class="box-widget-item-header">
                    <h3> Cambiar contraseña</h3>
                </div>

                <div class="row">
                    <div class="form-group col-sm-12 col-lg-12">
                        <label>Contraseña Actual</label>
                        <div class="input-group mb-1">
                            <input :type="showPassword[0] ? 'text' : 'password'" class="form-control" v-model="pass.actual" placeholder="*********">
                            <div class="input-group-prepend">
                                <a href="javascript:void(0)" class="input-group-text">
                                    <i class="fa fa-eye" @click="changeTypeInput(0)"></i>
                                </a>
                            </div>
                        </div>
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
                        <template v-if="pass.nueva != pass.confirm">
                            <label class="text-danger">Las contraseñas no coinciden</label>
                        </template>
                    </div>

                    <div class="col-xs-12 col-lg-12 text-center">
                        <button class="btn btn-primary" :disabled="!pass.nueva || !pass.confirm || !pass.actual" @click="guardarContrasena()">
                            Guardar cambios
                            <i class="fa fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="profile-edit-container" v-if="!usuario.provider_id">
                <div class="box-widget-item-header">
                    <h3> Otros</h3>
                </div>

                <div class="row">

                    <div class="form-group col-xs-12 col-sm-4 col-md-12 col-lg-12  text-center">
                        <button class="btn btn-danger" @click.once="desactivar()">
                            Desactivar Cuenta
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
                notificacion : null,
            },
            showPassword: [false, false, false],
            file: null,
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
        start() {
            this.$root.cargando();
        },

        stop() {
            this.$root.stop();
        },

        validarFormato(file) {
            let rules = ['img', 'png', 'jpeg', 'jpg', 'gif'];

            return rules.includes(file.name.split('.').pop().toLowerCase());
        },

        validarSize(file) {
            //mega
            let size = 2.048;

            return ((file.size / 1024) / 1024) < size;
        },
        alerta(tipo, titulo, mensaje = null) {
            this.$root.alertas(tipo, titulo, mensaje);
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
                request.append("notificacion", (this.usuario.notificacion ? 1 : 0));
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
                    .post(this.url + '/actualizar', request)
                    .then(res => {
                        this.alerta("success", "Exito", "Tus datos fueron modificados!");
                        this.usuario = res.data.usuario;
                        document.querySelector("#imagen_header").src = this.urlImagen;
                        document.querySelector("#imagen_lateral").src = this.urlImagen;

                    })
                    .catch(err => {
                        this.stop();
                        this.alerta("error", "Lo sentimos!", err);
                    })
            }
        },
        desactivar(){
            this.$swal.fire({
                title  : 'Alerta',
                html: 'Esta seguro de desactivar su cuenta?',
                showConfirmButton : true
            })
            .then(res =>{
                if(res && res.value){
                    this.start();
                    axios.post(this.url + '/desactivar')
                    .then(res=>{

                    })
                    .catch((err)=>{
                        this.stop();
                        this.alerta("error", "Ups...!", err);
                    })
                }
            })
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
                    "Ha ocurrido un problema!",
                    e
                );
            }
        },
        changeTypeInput(key) {
            if (this.showPassword[key]) {
                Vue.set(this.showPassword, key, false);
            } else {
                Vue.set(this.showPassword, key, true);
            }
        }

    }
};
</script>
