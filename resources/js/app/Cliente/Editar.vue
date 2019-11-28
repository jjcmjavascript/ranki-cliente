<template>
  <div class="col-xs-12 col-md-9">
    <div class="profile-edit-page-header">
      <h2>Editar Perfil</h2>
      <div class="breadcrumbs">
        <a href="#">Principal</a>
        <span>Editar perfil</span>
      </div>
    </div>
    <div class="col-xs-12 col-md-3 col-md-offset-5">
      <div class="edit-profile-photo fl-wrap">
        <img :src="urlImagen()" class="respimg" />
        <button class="button-send" @click="cambiarImagen">
          <i class="fa fa-picture-o"></i>
        </button>
      </div>
    </div>
    <!-- profile-edit-container-->
    <div class="profile-edit-container">
      <div class="profile-edit-header fl-wrap">
        <h4>My Account</h4>
      </div>
      <div class="custom-form">
        <div class="form-group col-xs-12 col-md-6">
          <label>
            Nombre
            <i class="fa fa-picture-o"></i>
          </label>
          <input type="text" placeholder="Nombre" v-model="usuario.nombre" />
        </div>
        <div class="form-group col-xs-12 col-md-6">
          <label>
            apellidos
            <i class="fa fa-picture-o"></i>
          </label>
          <input type="text" placeholder="Apellidos" v-model="usuario.apellidos" />
        </div>
        <div class="form-group col-xs-12 col-md-6">
          <label>
            Correo
            <i class="fa fa-envelope-o"></i>
          </label>
          <input type="text" placeholder="Correo" v-model="usuario.email" />
        </div>
        <div class="form-group col-xs-12 col-md-6">
          <label>
            Telefono Movil
            <i class="fa fa-phone"></i>
          </label>
          <input
            type="text"
            placeholder="+9(123)987654"
            class="numeros"
            v-model="usuario.telefono_movil"
          />
        </div>

        <div class="form-group col-xs-12 col-md-6">
          <label>
            Telefono Fijo
            <i class="fa fa-phone"></i>
          </label>
          <input
            type="text"
            placeholder="+9(123)987654"
            class="numeros"
            v-model="usuario.telefono_fijo"
          />
        </div>
        <div class="form-group col-xs-12 col-md-6">
          <label>
            Direccion
            <i class="fa fa-map-marker"></i>
          </label>
          <input type="text" placeholder="Santiago" v-model="usuario.direccion" />
        </div>
        <button class="btn big-btn color-bg flat-btn" :disabled="send" @click="registrar()">
          Guardar Cambios
          <i class="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="profile-edit-container">
      <div class="profile-edit-header fl-wrap" style="margin-top:30px">
        <h4>Cambiar contraseña</h4>
      </div>
      <div class="custom-form no-icons">
        <div class="pass-input-wrap fl-wrap">
          <label>Contraseña Actual</label>
          <input type="password" class="pass-input" v-model="pass.actual" />
          <span class="eye">
            <i class="fa fa-eye" aria-hidden="true"></i>
          </span>
        </div>

        <div class="pass-input-wrap fl-wrap">
          <label>Nueva Contraseña</label>
          <input type="password" class="pass-input" v-model="pass.nueva" />
          <span class="eye">
            <i class="fa fa-eye" aria-hidden="true"></i>
          </span>
        </div>
        <div class="pass-input-wrap fl-wrap">
          <label>Confirma</label>
          <input type="password" class="pass-input" v-model="pass.confirm" />
          <span class="eye">
            <i class="fa fa-eye" aria-hidden="true"></i>
          </span>
        </div>
        <div>
          <template v-if="pass.nueva != pass.confirm">
            <label class="danger">Las contraseñas no coinciden</label>
          </template>
        </div>

        <button
          class="btn big-btn color-bg flat-btn"
          :disabled="!pass.nueva || !pass.confirm || !pass.actual"
          @click="guardarContrasena()"
        >
          Guardar Cambios
          <i class="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$root.base_url + "dashboard",
      url_perfil: this.$root.base_url + "dashboard/perfil",
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
        _avatar : null,
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
    }
  },
  mounted() {
    this.iniciar();
  },
  methods: {
    urlImagen(){
      if(this.usuario && this.usuario._avatar.length > 0){
        return `/storage/${this.usuario._avatar[ this.usuario._avatar.length -1 ].ruta}`;
      }
      else if(this.usuario && this.usuario.avatar){
        return  this.usuario.avatar
      }
      else {
        return "https://pgimgmt.com/wp-content/uploads/2018/05/generic-user.jpg";
      }


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
          .post(this.url_perfil + "/clave", request)
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

    registrar() {
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

        axios
          .post(this.url_perfil, request)
          .then(res => {
            this.stop();
            this.alerta("success", "Exito", "Tus datos fueron modificados!");
            this.usuario = res.data.usuario;
          })
          .catch(err => {
            this.stop();
            this.alerta("error", "Ups...!", err);
          })
      }
    },

    cambiarImagen() {
      this.$swal
        .fire({
          title: "Seleccione su imagen",
          html: '<input type="file" id="envioAvatar" class="upload"> ',
          onOpen() {
            document
              .querySelector(".swal2-confirm")
              .setAttribute("disabled", "disabled");
            document
              .querySelector("#envioAvatar")
              .addEventListener("change", function(e) {
                if (e.target.files[0]) {
                  document
                    .querySelector(".swal2-confirm")
                    .removeAttribute("disabled");
                } else {
                  document
                    .querySelector(".swal2-confirm")
                    .setAttribute("disabled", "disabled");
                }
              });
          },
          preConfirm() {
            let file = document.querySelector("#envioAvatar");
            return file ? file : null;
          }
        })
        .then(res => {
          if (res.value) {
            if (res.value.files[0]) {
              this.start();
              const request = new FormData;
              request.append('id',this.usuario.id );
              request.append('imagen', res.value.files[0]);

              axios.post(`${this.url_perfil}/avatar`,request)
                .then((res)=>{
                  console.log(res)
                  this.stop();
                  this.usuario = res.data.usuario;
                })
                .catch(err=> {
                  this.stop()
                  this.alerta('error','Ups...!', err)
                })

            } else {
              this.alerta(
                "error",
                "Ups...!",
                "La imagen que ingreso no es valida."
              );
            }
          }
        });
    }
  }
};
</script>

<style scoped>
.danger {
  color: #ef5350;
}
@media (max-width: 576px) {


 }
@media (min-width: 768px) {
.button-send {
 position: absolute;
 top: 91%;
 width: 20%;
 left: 0%;
 border-radius: 0px;
 border: 1px solid silver;
 padding-top: 5px;
 background: #64b5f6;
 color: white;
 border-top-right-radius: 8px;
}

.button-send:hover {
  background : #2196f3;
}


}



.fa-picture-o {
  margin: 0px;
  padding: 0px;
}
</style>
