(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/Propiedad/Crear"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Crear.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      error: [],
      success: [],
      section: {
        name: ''
      },
      url: {
        current: this.$root.base_url + this.$route.path,
        permisos: {}
      },
      data: {
        titulo: null,
        tipo_propiedad: null,
        subtipo_propiedad: null,
        region: null,
        comuna: null,
        calle: null,
        numero_calle: null,
        numero_departamento: null,
        piso: null,
        superficie_util: null,
        superficie_terraza: null,
        baños: null,
        tipo_piso: null,
        descripcion: null,
        anio_construccion: null,
        privados: null,
        bodega: null,
        estacionamiento: null,
        orientacion: null,
        imagenes: [],
        imagen_principal: null,
        codigo_telefono: {
          label: '9',
          value: 9
        },
        telefono: null,
        codigo_telefono2: {
          label: '9',
          value: 9
        },
        telefono2: null,
        tipo_operacion: null,
        tipo_valor: null,
        precio: null,
        periodicidad_arriendo: null,
        amoblada: false,
        usuario: null,
        latitud: null,
        longitud: null,
        atributos: []
      },
      valid: {
        rut: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      selects: {
        regiones: [],
        comunas: [],
        tipos_propiedades: [],
        subtipos_propiedades: [],
        tipos_pisos: [],
        tipos_operaciones: [],
        tipos_valores: [],
        orientaciones: [],
        periodicidades: [],
        usuarios: [],
        tipos_telefonos: [{
          label: '2',
          value: 2
        }, {
          label: '9',
          value: 9
        }],
        conteo_generico: [],
        distribucion: [],
        servicios: [],
        cocina: [],
        otros: []
      }
    };
  },
  created: function created() {
    this.iniciar(); // this.iniciarCampoConteoGenerico();
  },
  computed: {// inhabilitarGuardar: function() {
    // 	return !(
    // 		this.data.nombre &&
    // 		this.data.apellidos &&
    // 		this.data.boletines &&
    // 		this.valid.rut == 'is-valid' &&
    // 		this.valid.email == 'is-valid' &&
    // 		this.valid.password == 'is-valid' &&
    // 		this.valid.confirmPassword == 'is-valid'
    // 	);
    // },
  },
  methods: {
    iniciar: function iniciar() {
      var _this = this;

      axios.post(this.url.current).then(function (response) {
        _this.selects.regiones = response.data.regiones;
        _this.selects.tipos_propiedades = response.data.tipos_propiedades;
        _this.selects.subtipos_propiedades = response.data.subtipos_propiedades;
        _this.selects.tipos_pisos = response.data.tipos_pisos;
        _this.selects.tipos_operaciones = response.data.tipos_operaciones;
        _this.selects.tipos_valores = response.data.tipos_valores;
        _this.selects.orientaciones = response.data.orientaciones;
        _this.selects.periodicidades = response.data.periodicidades;
        _this.selects.usuarios = response.data.usuarios; // ATRIBUTOS

        _this.selects.distribucion = response.data.distribucion;
        _this.selects.servicios = response.data.servicios;
        _this.selects.cocina = response.data.cocina;
        _this.selects.otros = response.data.otros;
      })["catch"](function (error) {})["finally"](function () {});
    },
    guardar: function guardar() {
      var _this2 = this;

      var telefono, telefono2;
      var request = new FormData();
      request.append('amoblada', this.data.amoblada);
      this.data.titulo && request.append('titulo', this.data.titulo);
      this.data.tipo_propiedad && request.append('tipo_propiedad', this.data.tipo_propiedad.id);
      this.data.subtipo_propiedad && request.append('subtipo_propiedad', this.data.subtipo_propiedad.id);
      this.data.region && request.append('region_id', this.data.region.id);
      this.data.comuna && request.append('comuna_id', this.data.comuna.id);
      this.data.calle && request.append('calle', this.data.calle);
      this.data.numero_calle && request.append('numero_calle', this.data.numero_calle);
      this.data.numero_departamento && request.append('numero_departamento', this.data.numero_departamento);
      this.data.piso && request.append('piso', this.data.piso);
      this.data.superficie_util && request.append('superficie_util', this.data.superficie_util);
      this.data.superficie_terraza && request.append('superficie_terraza', this.data.superficie_terraza);
      this.data.baños && request.append('baños', this.data.baños.value);
      this.data.tipo_piso && request.append('tipo_piso', JSON.stringify(this.data.tipo_piso));
      this.data.descripcion && request.append('descripcion', this.data.descripcion);
      this.data.anio_construccion && request.append('anio_construccion', this.data.anio_construccion);
      this.data.privados && request.append('privados', this.data.privados.value);
      this.data.bodega && request.append('bodega', this.data.bodega.value);
      this.data.estacionamiento && request.append('estacionamiento', this.data.estacionamiento.value);
      this.data.orientacion && request.append('orientacion', this.data.orientacion.id);
      this.data.tipo_operacion && request.append('tipo_operacion', this.tipo_operacion.id);
      this.data.tipo_valor && request.append('tipo_valor', this.data.tipo_valor.id);
      this.data.precio && request.append('precio', this.data.precio);
      this.data.periodicidad_arriendo && request.append('periodicidad_arriendo', this.data.periodicidad_arriendo.id);
      this.data.usuario && request.append('usuario_id', this.data.usuario.id);
      this.data.latitud && request.append('latitud', this.data.latitud);
      this.data.longitud && request.append('longitud', this.data.longitud);
      this.data.imagen_principal && request.append('imagen_principal', this.data.imagen_principal);
      this.data.imagenes && request.append('imagenes', JSON.stringify(this.data.imagenes));
      this.data.atributos && request.append('atributos', JSON.stringify(this.data.atributos));

      if (this.data.codigo_telefono && this.data.telefono) {
        request('telefono', this.data.codigo_telefono.value + this.data.telefono);
      }

      if (this.data.codigo_telefono2 && this.data.telefono2) {
        request('telefono', this.data.codigo_telefono2.value + this.data.telefono2);
      }

      axios.post(this.url.current + '/guardar', request).then(function (response) {
        _this2.success = response.data;

        _this2.limpiar();
      })["catch"](function (error) {
        _this2.error = _this2.$root.arrayResponse(error);
      })["finally"](function () {
        load.hide();
      });
    },
    mostrarMasInformación: function mostrarMasInformaciN() {
      $('#adicionalInfo').toggleClass("d-none");

      if ($('#infoIcon').hasClass('fa-plus-circle')) {
        $('#infoIcon').removeClass('fa-plus-circle');
        $('#infoIcon').addClass('fa-minus-circle');
      } else {
        $('#infoIcon').removeClass('fa-minus-circle');
        $('#infoIcon').addClass('fa-plus-circle');
      }
    },
    iniciarCampoConteoGenerico: function iniciarCampoConteoGenerico() {
      var conteo = [];

      for (var i = 0; i < 11; i++) {
        conteo.push({
          label: i,
          value: i
        });
      }

      this.selects.conteo_generico = conteo;
    },
    cargarImagen: function cargarImagen(e) {
      var _this3 = this;

      if (e && e.target.files) {
        var reader = new FileReader();

        if (this.data.imagenes.length == 0) {
          this.data.imagen_principal = 0;
        }

        reader.onload = function (e) {
          _this3.data.imagenes.push(e.target.result);
        };

        reader.readAsDataURL(e.target.files[0]);
      }
    },
    removerImagen: function removerImagen(key) {
      this.data.imagenes.splice(key, 1);
      this.data.imagen_principal = key > 0 ? key - 1 : null;
    },
    marcarPrincipalImagen: function marcarPrincipalImagen(key) {
      this.data.imagen_principal = key;
    },
    actualizarComuna: function actualizarComuna() {
      var _this4 = this;

      this.data.comuna = null;
      this.selects.comunas = [];

      if (this.data.region) {
        var request = new FormData();
        request.append('id_region', this.data.region.id);
        axios.post(this.$root.base_url + 'comun/combo_box/comunas', request).then(function (response) {
          _this4.selects.comunas = response.data;
        })["catch"](function (error) {
          _this4.error = _this4.$root.arrayResponse(error);
        });
      }
    },
    colocarAtributo: function colocarAtributo(id) {
      var _this5 = this;

      var encontrado = false;
      this.data.atributos.map(function (atributo, index) {
        if (atributo == id) {
          _this5.data.atributos.splice(index, 1);

          encontrado = true;
          return;
        }
      });

      if (!encontrado) {
        this.data.atributos.push(id);
      }
    },
    validarRut: function validarRut() {
      if (this.data.rut) {
        this.data.rut = this.data.rut.replace(/\./g, '');

        if (this.$root.modulo11(this.data.rut).valid) {
          this.valid.rut = 'is-valid';
        } else {
          this.valid.rut = 'is-invalid';
        }
      }
    },
    validarEmail: function validarEmail() {
      if (this.data.email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(this.data.email)) {
          this.valid.email = 'is-valid';
        } else {
          this.valid.email = 'is-invalid';
        }

        ;
      }
    },
    validarPassword: function validarPassword() {
      if (this.data.password) {
        if (this.data.password.toString().length > 7) {
          this.valid.password = 'is-valid';
        } else {
          this.valid.password = 'is-invalid';
        }
      }
    },
    validarConfirmPassword: function validarConfirmPassword() {
      if (this.data.confirmPassword) {
        if (this.data.confirmPassword.toString().length > 7 && this.data.password == this.data.confirmPassword) {
          this.valid.confirmPassword = 'is-valid';
        } else {
          this.valid.confirmPassword = 'is-invalid';
        }
      }
    },
    limpiar: function limpiar() {
      this.data = {
        rut: null,
        nombre: null,
        apellidos: null,
        email: null,
        telefono_movil: null,
        telefono_fijo: null,
        boletines: {
          label: 'No',
          value: 0
        },
        password: null,
        confirmPassword: null,
        avatar: {
          image: null,
          file: null
        }
      };
      this.valid = {
        rut: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
      $('#avatarFile').val('');
      this.cargarAvatar();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"file\"][data-v-1f51cce4] {\n    display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=template&id=1f51cce4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Crear.vue?vue&type=template&id=1f51cce4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "wrapper" } }, [
    _c("div", { staticClass: "content" }, [
      _c(
        "section",
        { staticClass: "grey-b lue-bg middle-padding", attrs: { id: "sec1" } },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 mt-4" }, [
                _c("div", { staticClass: "list-single-main-item fl-wrap" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("hr", { staticClass: "mt-0" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.tipos_propiedades
                          },
                          model: {
                            value: _vm.data.tipo_propiedad,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "tipo_propiedad", $$v)
                            },
                            expression: "data.tipo_propiedad"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.regiones
                          },
                          on: {
                            input: function($event) {
                              return _vm.actualizarComuna()
                            }
                          },
                          model: {
                            value: _vm.data.region,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "region", $$v)
                            },
                            expression: "data.region"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.comunas,
                            disabled: _vm.selects.comunas.length == 0
                          },
                          model: {
                            value: _vm.data.comuna,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "comuna", $$v)
                            },
                            expression: "data.comuna"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _c("label", [_vm._v("Calle")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.calle,
                              expression: "data.calle"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.data.calle },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.data, "calle", $event.target.value)
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _c("label", [_vm._v("Número")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.numero_calle,
                              expression: "data.numero_calle"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.data.numero_calle },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "numero_calle",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _c("label", [_vm._v("#Depto/Casa")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.numero_departamento,
                              expression: "data.numero_departamento"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.data.numero_departamento },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "numero_departamento",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("hr", { staticClass: "mt-0" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-12 col-md-12 col-lg-12"
                      },
                      [
                        _vm._m(6),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.titulo,
                              expression: "data.titulo"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.data.titulo },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.data, "titulo", $event.target.value)
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-12 col-lg-12"
                      },
                      [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "label",
                            {
                              staticClass:
                                "btn btn-outline-primary text-uppercase c-pointer"
                            },
                            [
                              _c("input", {
                                attrs: { type: "file" },
                                on: {
                                  change: function($event) {
                                    return _vm.cargarImagen($event)
                                  }
                                }
                              }),
                              _vm._v(
                                "\n                                            Agregar imagen\n                                        "
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-xs-12 col-sm-4 col-md-12 col-lg-12" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "containerImage",
                            attrs: { id: "loadImages" }
                          },
                          _vm._l(_vm.data.imagenes, function(imagen, index) {
                            return _c("div", { staticClass: "imageLoad" }, [
                              _vm.data.imagen_principal == index
                                ? _c(
                                    "span",
                                    { staticClass: "imagePrincipal" },
                                    [_vm._v("Principal")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("img", {
                                attrs: {
                                  src: imagen,
                                  height: "100",
                                  width: "100"
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "actions" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-link pr-0",
                                    attrs: { title: "Eliminar imagen" },
                                    on: {
                                      click: function($event) {
                                        return _vm.removerImagen(index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-link pl-1 pr-1",
                                    attrs: {
                                      title:
                                        "Seleccionar como imagen de portada"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.marcarPrincipalImagen(index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-star" })]
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(9),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.subtipos_propiedades
                          },
                          model: {
                            value: _vm.data.tipo_propiedad,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "tipo_propiedad", $$v)
                            },
                            expression: "data.tipo_propiedad"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(10),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.superficie_util,
                              expression: "data.superficie_util"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.data.superficie_util },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "superficie_util",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(11),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.superficie_terraza,
                              expression: "data.superficie_terraza"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text" },
                          domProps: { value: _vm.data.superficie_terraza },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "superficie_terraza",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(12),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.selects.conteo_generico,
                            placeholder: "Seleccione"
                          },
                          model: {
                            value: _vm.data.baño,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "baño", $$v)
                            },
                            expression: "data.baño"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _c("label", [_vm._v("Tipo de piso")]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.tipos_pisos,
                            multiple: ""
                          },
                          model: {
                            value: _vm.data.tipo_piso,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "tipo_piso", $$v)
                            },
                            expression: "data.tipo_piso"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "custom-control custom-checkbox mt-4 pt-2"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.data.amoblada,
                                  expression: "data.amoblada"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: { type: "checkbox", id: "cssCheckbox1" },
                              domProps: {
                                checked: Array.isArray(_vm.data.amoblada)
                                  ? _vm._i(_vm.data.amoblada, null) > -1
                                  : _vm.data.amoblada
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.data.amoblada,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.data,
                                          "amoblada",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.data,
                                          "amoblada",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.data, "amoblada", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-control-label",
                                attrs: { for: "cssCheckbox1" }
                              },
                              [_vm._v("Esta propiedad esta amoblada")]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-12 col-md-12 col-lg-12"
                      },
                      [
                        _vm._m(13),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.descripcion,
                              expression: "data.descripcion"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", rows: "5" },
                          domProps: { value: _vm.data.descripcion },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.data,
                                "descripcion",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "h5",
                    {
                      staticClass: "c-pointer text-info",
                      on: {
                        click: function($event) {
                          _vm.mostrarMasInformación()
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-plus-circle",
                        attrs: { id: "infoIcon" }
                      }),
                      _vm._v(
                        " Agregar más información\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "row d-none mt-3",
                      attrs: { id: "adicionalInfo" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                        },
                        [
                          _c("label", [_vm._v("Año")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.anio_construccion,
                                expression: "data.anio_construccion"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.data.anio_construccion },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.data,
                                  "anio_construccion",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                        },
                        [
                          _c("label", [_vm._v("Privados")]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: { options: _vm.selects.conteo_generico },
                            model: {
                              value: _vm.data.privados,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "privados", $$v)
                              },
                              expression: "data.privados"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                        },
                        [
                          _c("label", [_vm._v("Piso de ubicación")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.piso,
                                expression: "data.piso"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.data.piso },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.data, "piso", $event.target.value)
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                        },
                        [
                          _c("label", [_vm._v("Bodega")]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: { options: _vm.selects.conteo_generico },
                            model: {
                              value: _vm.data.privados,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "privados", $$v)
                              },
                              expression: "data.privados"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                        },
                        [
                          _c("label", [_vm._v("Estacionamiento")]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: { options: _vm.selects.conteo_generico },
                            model: {
                              value: _vm.data.estacionamiento,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "estacionamiento", $$v)
                              },
                              expression: "data.estacionamiento"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                        },
                        [
                          _vm._m(14),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "nombre",
                              options: _vm.selects.orientaciones
                            },
                            model: {
                              value: _vm.data.orientacion,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "orientacion", $$v)
                              },
                              expression: "data.orientacion"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-xs-12 col-sm-12 col-md-12 col-lg-12"
                        },
                        [
                          _c("label", [
                            _vm._v("Selecciona los atributos de la propiedad")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group col-xs-12 col-sm-6 col-md-3 col-lg-3"
                              },
                              [
                                _c("label", [_vm._v("Distribución")]),
                                _vm._v(" "),
                                _vm._l(_vm.selects.distribucion, function(
                                  distribucion,
                                  key
                                ) {
                                  return _c("span", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox1" + key
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.colocarAtributo(
                                                distribucion.id
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: "cssCheckbox1" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                        " +
                                                _vm._s(distribucion.nombre) +
                                                "\n                                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group col-xs-12 col-sm-6 col-md-3 col-lg-3"
                              },
                              [
                                _c("label", [_vm._v("Servicios")]),
                                _vm._v(" "),
                                _vm._l(_vm.selects.servicios, function(
                                  servicio,
                                  key
                                ) {
                                  return _c("span", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox2" + key
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.colocarAtributo(
                                                servicio.id
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: "cssCheckbox2" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                        " +
                                                _vm._s(servicio.nombre) +
                                                "\n                                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group col-xs-12 col-sm-6 col-md-3 col-lg-3"
                              },
                              [
                                _c("label", [_vm._v("Cocina")]),
                                _vm._v(" "),
                                _vm._l(_vm.selects.cocina, function(
                                  cocina,
                                  key
                                ) {
                                  return _c("span", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox3" + key
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.colocarAtributo(
                                                cocina.id
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: "cssCheckbox3" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                        " +
                                                _vm._s(cocina.nombre) +
                                                "\n                                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group col-xs-12 col-sm-6 col-md-3 col-lg-3"
                              },
                              [
                                _c("label", [_vm._v("Otros")]),
                                _vm._v(" "),
                                _vm._l(_vm.selects.otros, function(otro, key) {
                                  return _c("span", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox4" + key
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.colocarAtributo(
                                                otro.id
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: "cssCheckbox4" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                        " +
                                                _vm._s(otro.nombre) +
                                                "\n                                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "mt-0 mb-5" }),
                  _vm._v(" "),
                  _vm._m(15),
                  _vm._v(" "),
                  _c("hr", { staticClass: "mt-0" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-8 col-lg-8"
                      },
                      [
                        _vm._m(16),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.selects.usuarios,
                            label: "nombre",
                            placeholder:
                              "Indique el usuario responsable de la publicación"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _c("div", { staticClass: "d-center" }, [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(option.nombre_completo) +
                                        " (" +
                                        _vm._s(_vm._f("rut")(option.rut)) +
                                        ")\n                                            "
                                    )
                                  ])
                                ]
                              }
                            },
                            {
                              key: "selected-option",
                              fn: function(option) {
                                return [
                                  _c(
                                    "div",
                                    { staticClass: "selected d-center" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(option.nombre_completo) +
                                          " (" +
                                          _vm._s(_vm._f("rut")(option.rut)) +
                                          ")\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(17),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group clear-none" }, [
                          _c("div", { staticClass: "input-group-prepend" }, [
                            _c(
                              "span",
                              { attrs: { id: "inputGroup-sizing-lg" } },
                              [
                                _c("v-select", {
                                  attrs: {
                                    label: "label",
                                    options: _vm.selects.tipos_telefonos
                                  },
                                  model: {
                                    value: _vm.data.codigo_telefono,
                                    callback: function($$v) {
                                      _vm.$set(_vm.data, "codigo_telefono", $$v)
                                    },
                                    expression: "data.codigo_telefono"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.telefono,
                                expression: "data.telefono"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Ingresa un teléfono"
                            },
                            domProps: { value: _vm.data.telefono },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.data,
                                  "telefono",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(18),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "input-group clear-none mb-3" },
                          [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c(
                                "span",
                                { attrs: { id: "inputGroup-sizing-lg" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      label: "label",
                                      options: _vm.selects.tipos_telefonos
                                    },
                                    model: {
                                      value: _vm.data.codigo_telefono2,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.data,
                                          "codigo_telefono2",
                                          $$v
                                        )
                                      },
                                      expression: "data.codigo_telefono2"
                                    }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.data.telefono2,
                                  expression: "data.telefono2"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Ingresa un teléfono"
                              },
                              domProps: { value: _vm.data.telefono2 },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.data,
                                    "telefono2",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(19),
                  _vm._v(" "),
                  _c("hr", { staticClass: "mt-0" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _vm._m(20),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.periodicidades
                          },
                          model: {
                            value: _vm.data.periodicidad,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "periodicidad", $$v)
                            },
                            expression: "data.periodicidad"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-12 col-md-12 col-lg-12"
                      },
                      [
                        _vm._m(21),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-2" },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "nombre",
                                  options: _vm.selects.tipos_valores,
                                  placeholder: "Tipo de valor"
                                },
                                model: {
                                  value: _vm.data.tipo_valor,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "tipo_valor", $$v)
                                  },
                                  expression: "data.tipo_valor"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-5" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.data.precio,
                                  expression: "data.precio"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Indique el valor de la propiedad"
                              },
                              domProps: { value: _vm.data.precio },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.data,
                                    "precio",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-5" },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "nombre",
                                  options: _vm.selects.tipos_operaciones,
                                  placeholder: "Indique el tipo de arriendo"
                                },
                                model: {
                                  value: _vm.data.tipo_operacion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "tipo_operacion", $$v)
                                  },
                                  expression: "data.tipo_operacion"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm._m(22)
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "list-single-main-item-title fl-wrap" }, [
      _c("h3", [_vm._v("Crear nueva propiedad")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "text-info mb-2" }, [
      _c("span", { staticClass: "fa-stack" }, [
        _c("i", { staticClass: "fa fa-circle fa-stack-2x icon-background" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa-stack-1x text-black" }, [_vm._v("1")])
      ]),
      _vm._v("\n            \t\t\t\t\tUBICAR PROPIEDAD\n            \t\t\t\t")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Tipo de propiedad "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Región "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Comuna "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mt-2 text-info mb-2" }, [
      _c("span", { staticClass: "fa-stack" }, [
        _c("i", { staticClass: "fa fa-circle fa-stack-2x icon-background" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa-stack-1x text-black" }, [_vm._v("2")])
      ]),
      _vm._v(
        "\n            \t\t\t\t\tINFORMACION DE LA PROPIEDAD\n            \t\t\t\t"
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Titulo "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Agregar fotos de la propiedad "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12" },
      [
        _c("div", { staticClass: "alert alert-warning" }, [
          _vm._v(
            "\n                                        Debes cargar al menos tres fotos. Se recomienda subir fotos apaisadas. De no ser asi, puedes rotarlas en la edicion.\n                                    "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Subtipo de propiedad "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Superficie útil (m"),
      _c("sup", [_vm._v("2")]),
      _vm._v(")")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Superficie terraza (m"),
      _c("sup", [_vm._v("2")]),
      _vm._v(")")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Baños "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Descripción "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Orientación "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mt-2 text-info mb-2" }, [
      _c("span", { staticClass: "fa-stack" }, [
        _c("i", { staticClass: "fa fa-circle fa-stack-2x icon-background" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa-stack-1x text-black" }, [_vm._v("3")])
      ]),
      _vm._v(
        "\n                                INFORMACION DE CONTACTO\n                            "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Usuario responsable "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Teléfono de contacto "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Teléfono de contacto 2"),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "mt-2 text-info mb-2" }, [
      _c("span", { staticClass: "fa-stack" }, [
        _c("i", { staticClass: "fa fa-circle fa-stack-2x icon-background" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa-stack-1x text-black" }, [_vm._v("4")])
      ]),
      _vm._v(
        "\n                                CARACTERISTICAS DE LA PROPIEDAD\n                            "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Periodicidad de arriendo "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Precio de publicación "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-right" }, [
      _c("button", { staticClass: "btn btn-success btn-lg" }, [
        _vm._v("Publicar propiedad")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/app/Propiedad/Crear.vue":
/*!**********************************************!*\
  !*** ./resources/js/app/Propiedad/Crear.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Crear_vue_vue_type_template_id_1f51cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Crear.vue?vue&type=template&id=1f51cce4&scoped=true& */ "./resources/js/app/Propiedad/Crear.vue?vue&type=template&id=1f51cce4&scoped=true&");
/* harmony import */ var _Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Crear.vue?vue&type=script&lang=js& */ "./resources/js/app/Propiedad/Crear.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Crear_vue_vue_type_style_index_0_id_1f51cce4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css& */ "./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Crear_vue_vue_type_template_id_1f51cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Crear_vue_vue_type_template_id_1f51cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f51cce4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/Propiedad/Crear.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app/Propiedad/Crear.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/app/Propiedad/Crear.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Crear.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_style_index_0_id_1f51cce4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=style&index=0&id=1f51cce4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_style_index_0_id_1f51cce4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_style_index_0_id_1f51cce4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_style_index_0_id_1f51cce4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_style_index_0_id_1f51cce4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_style_index_0_id_1f51cce4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/app/Propiedad/Crear.vue?vue&type=template&id=1f51cce4&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/app/Propiedad/Crear.vue?vue&type=template&id=1f51cce4&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_template_id_1f51cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Crear.vue?vue&type=template&id=1f51cce4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Crear.vue?vue&type=template&id=1f51cce4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_template_id_1f51cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_template_id_1f51cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);