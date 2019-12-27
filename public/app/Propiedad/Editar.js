(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/Propiedad/Editar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Editar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        current: this.$root.base_url + '/propiedad',
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
        numero_domicilio: null,
        numero_piso: null,
        superficie_util: null,
        superficie_terraza: null,
        banio: null,
        tipo_piso: null,
        descripcion: null,
        anio_construccion: null,
        privado: null,
        bodega: null,
        estacionamiento: null,
        orientacion: null,
        imagenes: [],
        codigo_telefono: null,
        telefono: null,
        codigo_telefono2: null,
        telefono2: null,
        tipo_operacion: null,
        tipo_valor: null,
        precio: null,
        periodicidad_arriendo: null,
        amoblada: 0,
        usuario: null,
        latitud: null,
        longitud: null,
        atributos: []
      },
      portada_imagen: {
        key: null,
        type: 'old'
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
        tipos_telefonos: [9, 2],
        conteo_generico: [],
        distribucion: [],
        servicios: [],
        cocina: [],
        otros: []
      },
      enviando: false
    };
  },
  created: function created() {
    this.iniciar();
    this.iniciarCampoConteoGenerico();
  },
  computed: {
    inhabilitarGuardar: function inhabilitarGuardar() {
      return false;
    }
  },
  methods: _defineProperty({
    start: function start() {
      this.$root.cargando();
    },
    stop: function stop() {
      this.$root.stop();
    },
    alerta: function alerta(tipo, titulo) {
      var mensaje = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.$root.alertas(tipo, titulo, mensaje);
    },
    obtenerAtributos: function obtenerAtributos() {
      var _this = this;

      var atributos = ['distribucion', 'servicios', 'cocina', 'otros'];
      atributos.forEach(function (atributo, key) {
        _this.selects[atributo].forEach(function (select, key2) {
          _this.data.atributos.forEach(function (attr) {
            if (attr == select.id) {
              $('#cssCheckbox' + key + key2).prop('checked', true);
            }
          });
        });
      });
    },
    colocarAtributo: function colocarAtributo(id) {
      var _this2 = this;

      var encontrado = false;
      this.data.atributos.map(function (atributo, index) {
        if (atributo == id) {
          _this2.data.atributos.splice(index, 1);

          encontrado = true;
          return;
        }
      });

      if (!encontrado) {
        this.data.atributos.push(id);
      }
    },
    iniciar: function iniciar() {
      var _this3 = this;

      this.start();
      axios.post(this.url.current + '/editar', {
        id: this.$route.params.id
      }).then(function (response) {
        _this3.data = response.data.propiedad;
        _this3.selects.regiones = response.data.regiones;
        _this3.selects.tipos_propiedades = response.data.tipos_propiedades;
        _this3.selects.subtipos_propiedades = response.data.subtipos_propiedades;
        _this3.selects.tipos_pisos = response.data.tipos_pisos;
        _this3.selects.tipos_operaciones = response.data.tipos_operaciones;
        _this3.selects.tipos_valores = response.data.tipos_valores;
        _this3.selects.orientaciones = response.data.orientaciones;
        _this3.selects.periodicidades = response.data.periodicidades;
        _this3.selects.usuarios = response.data.usuarios;
        _this3.data.tipo_valor = _this3.selects.tipos_valores.find(function (e) {
          return e.nombre.toUpperCase() == 'CLP';
        });

        _this3.reordenarRegion(); // ATRIBUTOS


        _this3.selects.distribucion = response.data.distribucion;
        _this3.selects.servicios = response.data.servicios;
        _this3.selects.cocina = response.data.cocina;
        _this3.selects.otros = response.data.otros; // INICIALIZAR IMAGENES

        Vue.set(_this3.data, 'imagenes', []);

        _this3.data._imagenes.forEach(function (imagen, key) {
          if (imagen.id == _this3.data.portada_imagen_id) {
            _this3.portada_imagen.key = key;
          }
        });
      })["catch"](function (error) {
        _this3.error = _this3.$root.arrayResponse(error);
      })["finally"](function () {
        _this3.stop();

        _this3.obtenerAtributos();
      });
    },
    reordenarRegion: function reordenarRegion() {
      if (this.selects.regiones.length > 0) {
        // COLOCANDO REGIÓN METROPOLITANA AL INICIO DE SELECT
        var region = this.selects.regiones.splice(this.selects.regiones.map(function (e) {
          return e.id;
        }).indexOf(13), 1);
        this.selects.regiones.unshift(region[0]);
      }
    },
    guardar: function guardar() {
      var _this4 = this;

      this.enviando = true;
      this.start();
      var telefono, telefono2;
      var request = new FormData();
      request.append('id', this.$route.params.id);
      request.append('amoblada', this.data.amoblada);
      request.append('anio_construccion', this.data.anio_construccion);
      request.append('numero_piso', this.data.numero_piso);
      request.append('superficie_terraza', this.data.superficie_terraza);
      this.data.banio && request.append('banio', this.data.banio);
      this.data.privado && request.append('privado', this.data.privado);
      this.data.bodega && request.append('bodega', this.data.bodega);
      this.data.estacionamiento && request.append('estacionamiento', this.data.estacionamiento);
      this.data.calle && request.append('calle', this.data.calle);
      this.data.numero_calle && request.append('numero_calle', this.data.numero_calle);
      this.data.numero_domicilio && request.append('numero_domicilio', this.data.numero_domicilio);
      this.data.titulo && request.append('titulo', this.data.titulo);
      this.data._tipo_propiedad && request.append('id_tipo_propiedad', this.data._tipo_propiedad.id);
      this.data._subtipo_propiedad && request.append('id_subtipo_propiedad', this.data._subtipo_propiedad.id);
      this.data._region && request.append('region_id', this.data._region.id);
      this.data._comuna && request.append('comuna_id', this.data._comuna.id);
      this.data.superficie_util && request.append('superficie_util', this.data.superficie_util);
      this.data.descripcion && request.append('descripcion', this.data.descripcion);
      this.data._orientacion && request.append('id_orientacion', this.data._orientacion.id);
      this.data._tipo_operacion && request.append('id_tipo_operacion', this.data._tipo_operacion.id);
      this.data._tipo_valor && request.append('id_tipo_valor', this.data._tipo_valor.id);
      this.data.precio && request.append('precio', this.data.precio);
      this.data._periodicidad_arriendo && request.append('id_periodicidad_arriendo', this.data._periodicidad_arriendo.id); //this.data._usuario && request.append('usuario_id', this.data._usuario.id);

      this.data.latitud && request.append('latitud', this.data.latitud);
      this.data.longitud && request.append('longitud', this.data.longitud);

      if (this.data.codigo_telefono && this.data.telefono) {
        request.append('codigo_telefono', this.data.codigo_telefono);
        request.append('telefono', this.data.telefono);
      }

      if (this.data.codigo_telefono2 && this.data.telefono2) {
        request.append('codigo_telefono2', this.data.codigo_telefono2);
        request.append('telefono2', this.data.codigo_telefono2);
      }

      if (this.data.tipo_piso) {
        this.data.tipo_piso.forEach(function (tipo_piso) {
          request.append('tipo_piso[]', tipo_piso);
        });
      }

      if (this.data.atributos.length > 0) {
        this.data.atributos.forEach(function (atributo) {
          request.append('atributos[]', atributo);
        });
      }

      if (this.data._imagenes.length > 0) {
        this.data._imagenes.forEach(function (imagen) {
          request.append('imagenes[]', imagen.id);
        });
      }

      if (this.data.imagenes.length > 0) {
        this.data.imagenes.forEach(function (e) {
          var arr = e.contenido.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          var file = new File([u8arr], e.nombre, {
            type: mime
          });
          request.append('imagenes_new[]', file);
        });
      }

      if (this.portada_imagen.key != null && this.portada_imagen.type != null) {
        request.append('portada_imagen_key', this.portada_imagen.key);
        request.append('portada_imagen_type', this.portada_imagen.type);
      }

      axios.post(this.url.current + '/actualizar', request).then(function (response) {
        _this4.alerta("success", "Exito", response.data.success); //window.location = response.data.url;

      })["catch"](function (error) {
        _this4.error = _this4.$root.arrayResponse(error);

        _this4.stop();

        _this4.alerta('error', 'Lo sentimos un error ha ocurrido.', error);
      })["finally"](function () {
        _this4.enviando = false;
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
        conteo.push(i);
      }

      this.selects.conteo_generico = conteo;
    },
    cargarImagen: function cargarImagen(e) {
      var _this5 = this;

      if (e && e.target.files) {
        var reader = new FileReader();

        if (this.data.imagenes.length == 0 && this.data._imagenes.length == 0) {
          this.portada_imagen = {
            key: 0,
            type: 'new'
          };
        }

        reader.onload = function (e, nombre) {
          _this5.data.imagenes.push({
            nombre: e.target.filename,
            contenido: e.target.result
          });
        };

        reader.filename = e.target.files[0].name;
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    removerImagen: function removerImagen(key, type) {
      if (type == 'old') {
        this.data._imagenes.splice(key, 1);
      } else {
        this.data.imagenes.splice(key, 1);
      }

      if (this.portada_imagen.key == key) {
        this.portada_imagen.key = key > 0 ? key - 1 : null;
        this.portada_imagen.type = type;
      }
    },
    marcarPrincipalImagen: function marcarPrincipalImagen(key, type) {
      this.portada_imagen = {
        key: key,
        type: type
      };
    }
  }, "colocarAtributo", function colocarAtributo(id) {
    var _this6 = this;

    var encontrado = false;
    this.data.atributos.map(function (atributo, index) {
      if (atributo == id) {
        _this6.data.atributos.splice(index, 1);

        encontrado = true;
        return;
      }
    });

    if (!encontrado) {
      this.data.atributos.push(id);
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"file\"][data-v-0af2e02e] {\r\n    display: none;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=template&id=0af2e02e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app/Propiedad/Editar.vue?vue&type=template&id=0af2e02e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                        _c("label", [_vm._v("Tipo de propiedad")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "font-weight-bold" },
                          [
                            _vm.data._tipo_propiedad
                              ? [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.data._tipo_propiedad.nombre) +
                                      "\n\t\t\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              : [_vm._v("-")]
                          ],
                          2
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
                        _c("label", [_vm._v("Región")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "font-weight-bold" },
                          [
                            _vm.data._region
                              ? [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.data._region.nombre) +
                                      "\n\t\t\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              : [_vm._v("-")]
                          ],
                          2
                        )
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
                        _c("label", [_vm._v("Comuna")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "font-weight-bold" },
                          [
                            _vm.data._comuna
                              ? [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.data._comuna.nombre) +
                                      "\n\t\t\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              : [_vm._v("-")]
                          ],
                          2
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
                        _c("label", [_vm._v("Calle")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(_vm.data.calle ? _vm.data.calle : "-") +
                              "\n\t\t\t\t\t\t\t\t\t\t"
                          )
                        ])
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
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.data.numero_calle
                                  ? _vm.data.numero_calle
                                  : "-"
                              ) +
                              "\n\t\t\t\t\t\t\t\t\t\t"
                          )
                        ])
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
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(
                                _vm.data.numero_domicilio
                                  ? _vm.data.numero_domicilio
                                  : "-"
                              ) +
                              "\n\t\t\t\t\t\t\t\t\t\t"
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
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
                        _vm._m(3),
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
                        _vm._m(4),
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
                                "\n\t\t\t\t\t\t\t\t\t\t\t   \tAgregar imagen\n\t\t\t\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "containerImage",
                            attrs: { id: "loadImages" }
                          },
                          [
                            _vm._l(_vm.data._imagenes, function(imagen, index) {
                              return _c("div", { staticClass: "imageLoad" }, [
                                _vm.portada_imagen.key == index &&
                                _vm.portada_imagen.type == "old"
                                  ? _c(
                                      "span",
                                      { staticClass: "imagePrincipal" },
                                      [_vm._v("Principal")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("img", {
                                  attrs: {
                                    src: "/storage/" + imagen.ruta,
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
                                          return _vm.removerImagen(index, "old")
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
                                          return _vm.marcarPrincipalImagen(
                                            index,
                                            "old"
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-star" })]
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.data.imagenes, function(imagen, index) {
                              return _c("div", { staticClass: "imageLoad" }, [
                                _vm.portada_imagen.key == index &&
                                _vm.portada_imagen.type == "new"
                                  ? _c(
                                      "span",
                                      { staticClass: "imagePrincipal" },
                                      [_vm._v("Principal")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("img", {
                                  attrs: {
                                    src: imagen.contenido,
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
                                          return _vm.removerImagen(index, "new")
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
                                          return _vm.marcarPrincipalImagen(
                                            index,
                                            "new"
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-star" })]
                                  )
                                ])
                              ])
                            })
                          ],
                          2
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
                        _vm._m(6),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.subtipos_propiedades
                          },
                          model: {
                            value: _vm.data._subtipo_propiedad,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "_subtipo_propiedad", $$v)
                            },
                            expression: "data._subtipo_propiedad"
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
                        _vm._m(7),
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
                        _vm._m(8),
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
                        _c("label", [_vm._v("Baños")]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            options: _vm.selects.conteo_generico,
                            placeholder: "Seleccione"
                          },
                          model: {
                            value: _vm.data.banio,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "banio", $$v)
                            },
                            expression: "data.banio"
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
                            value: _vm.data._tipos_pisos,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "_tipos_pisos", $$v)
                            },
                            expression: "data._tipos_pisos"
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
                        _c("label", { staticStyle: { color: "transparent" } }, [
                          _vm._v("    ")
                        ]),
                        _vm._v(" "),
                        _c("label", { staticClass: "checktainer" }, [
                          _vm._v(
                            "\n                                            Esta propiedad esta amoblada\n                                          "
                          ),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.amoblada,
                                expression: "data.amoblada"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              "true-value": 1,
                              "false-value": 0
                            },
                            domProps: {
                              checked: Array.isArray(_vm.data.amoblada)
                                ? _vm._i(_vm.data.amoblada, null) > -1
                                : _vm._q(_vm.data.amoblada, 1)
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.data.amoblada,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? 1 : 0
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
                          _c("span", { staticClass: "checkmark" })
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
                          "form-group col-xs-12 col-sm-12 col-md-12 col-lg-12"
                      },
                      [
                        _vm._m(9),
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
                        " Agregar más información\n\t\t\t\t               \t"
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
                          _c("label", [_vm._v("Privado")]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: { options: _vm.selects.conteo_generico },
                            model: {
                              value: _vm.data.privado,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "privado", $$v)
                              },
                              expression: "data.privado"
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
                                value: _vm.data.numero_piso,
                                expression: "data.numero_piso"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.data.numero_piso },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.data,
                                  "numero_piso",
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
                          _c("label", [_vm._v("Bodega")]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: { options: _vm.selects.conteo_generico },
                            model: {
                              value: _vm.data.bodega,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "bodega", $$v)
                              },
                              expression: "data.bodega"
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
                          _c("label", [_vm._v("Orientación")]),
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
                                      { staticClass: "checkbox checkbox-css" },
                                      [
                                        _c("input", {
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox0" + key
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
                                            staticClass: "no_bold",
                                            attrs: { for: "cssCheckbox0" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(distribucion.nombre) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
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
                                      { staticClass: "checkbox checkbox-css" },
                                      [
                                        _c("input", {
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox1" + key
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
                                            staticClass: "no_bold",
                                            attrs: { for: "cssCheckbox1" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(servicio.nombre) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
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
                                      { staticClass: "checkbox checkbox-css" },
                                      [
                                        _c("input", {
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox2" + key
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
                                            staticClass: "no_bold",
                                            attrs: { for: "cssCheckbox2" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(cocina.nombre) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
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
                                      { staticClass: "checkbox checkbox-css" },
                                      [
                                        _c("input", {
                                          attrs: {
                                            type: "checkbox",
                                            id: "cssCheckbox3" + key
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
                                            staticClass: "no_bold",
                                            attrs: { for: "cssCheckbox3" + key }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(otro.nombre) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
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
                  _vm._m(10),
                  _vm._v(" "),
                  _c("hr", { staticClass: "mt-0" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-xs-12 col-sm-4 col-md-4 col-lg-4"
                      },
                      [
                        _c("label", [_vm._v("Teléfono de contacto")]),
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
                              maxlength: "8",
                              placeholder: "Ingresa un teléfono"
                            },
                            domProps: { value: _vm.data.telefono },
                            on: {
                              keypress: function($event) {
                                return _vm.$root.isNumberKey($event)
                              },
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
                        _c("label", [_vm._v("Teléfono de contacto 2")]),
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
                                maxlength: "8",
                                placeholder: "Ingresa un teléfono"
                              },
                              domProps: { value: _vm.data.telefono2 },
                              on: {
                                keypress: function($event) {
                                  return _vm.$root.isNumberKey($event)
                                },
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
                  _vm._m(11),
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
                        _vm._m(12),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "nombre",
                            options: _vm.selects.periodicidades
                          },
                          model: {
                            value: _vm.data._periodicidad_arriendo,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "_periodicidad_arriendo", $$v)
                            },
                            expression: "data._periodicidad_arriendo"
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
                        _vm._m(13),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-xs-12 col-sm-3 col-md-3 col-lg-2"
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "nombre",
                                  options: _vm.selects.tipos_valores,
                                  placeholder: "Tipo de valor"
                                },
                                model: {
                                  value: _vm.data._tipo_valor,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "_tipo_valor", $$v)
                                  },
                                  expression: "data._tipo_valor"
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
                                "col-xs-12 col-sm-5 col-md-5 col-lg-5"
                            },
                            [
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
                                  placeholder:
                                    "Indique el valor de la propiedad"
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
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-xs-12 col-sm-5 col-md-5 col-lg-5"
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "nombre",
                                  options: _vm.selects.tipos_operaciones,
                                  placeholder: "Indique el tipo de arriendo"
                                },
                                model: {
                                  value: _vm.data._tipo_operacion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "_tipo_operacion", $$v)
                                  },
                                  expression: "data._tipo_operacion"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "float-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-lg",
                      attrs: { disable: _vm.enviando },
                      on: { click: _vm.guardar }
                    },
                    [_vm._v("Publicar propiedad")]
                  )
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
      _c("h3", [_vm._v("Editar propiedad")])
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
      _vm._v("\n\t\t\t\t\t\t\t\t\tUBICAR PROPIEDAD\n\t\t\t\t\t\t\t\t")
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
        "\n\t\t\t\t\t\t\t\t\tINFORMACION DE LA PROPIEDAD\n\t\t\t\t\t\t\t\t"
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
            "\n\t\t\t\t\t\t\t\t\t\t\tDebes cargar al menos tres fotos. Se recomienda subir fotos apaisadas. De no ser asi, puedes rotarlas en la edicion.\n\t\t\t\t\t\t\t\t\t\t"
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
      _vm._v(") "),
      _c("span", { staticClass: "text-red" }, [_vm._v("*")])
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
      _vm._v("Descripción "),
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
      _vm._v("\n\t\t\t\t\t\t\t\t\tINFORMACION DE CONTACTO\n\t\t\t\t\t\t\t\t")
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
        "\n\t\t\t\t\t\t\t\t\tCARACTERISTICAS DE LA PROPIEDAD\n\t\t\t\t\t\t\t\t"
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

/***/ "./resources/js/app/Propiedad/Editar.vue":
/*!***********************************************!*\
  !*** ./resources/js/app/Propiedad/Editar.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editar_vue_vue_type_template_id_0af2e02e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editar.vue?vue&type=template&id=0af2e02e&scoped=true& */ "./resources/js/app/Propiedad/Editar.vue?vue&type=template&id=0af2e02e&scoped=true&");
/* harmony import */ var _Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editar.vue?vue&type=script&lang=js& */ "./resources/js/app/Propiedad/Editar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Editar_vue_vue_type_style_index_0_id_0af2e02e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css& */ "./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editar_vue_vue_type_template_id_0af2e02e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editar_vue_vue_type_template_id_0af2e02e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0af2e02e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/Propiedad/Editar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app/Propiedad/Editar.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/app/Propiedad/Editar.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_id_0af2e02e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=style&index=0&id=0af2e02e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_id_0af2e02e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_id_0af2e02e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_id_0af2e02e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_id_0af2e02e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_style_index_0_id_0af2e02e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/app/Propiedad/Editar.vue?vue&type=template&id=0af2e02e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/app/Propiedad/Editar.vue?vue&type=template&id=0af2e02e&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_0af2e02e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editar.vue?vue&type=template&id=0af2e02e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app/Propiedad/Editar.vue?vue&type=template&id=0af2e02e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_0af2e02e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editar_vue_vue_type_template_id_0af2e02e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);