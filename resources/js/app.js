// CONFIGURACIÓN BÁSICA DE VUE
require('./bootstrap');

window.Vue = require('vue');
//import "@babel/polyfill";

//============================================================
//=============CONFIGURACIÓN PERSONALIZADA DE VUE=============
//============================================================

// DETERMINANDO MODO PRODUCCION
let basePath = '/';

if (process.env.NODE_ENV == 'production') {
    basePath = '/portal';   
}

// IMPORTANDO DEPENDENCIAS
import Loading from 'vue-loading-overlay';
import LoadScript from 'vue-plugin-load-script';
import VueRouter from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
//import "font-awesome/scss/font-awesome.scss";

// IMPORTANDO ESTILOS
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-select/dist/vue-select.css';

require('./config/components');
require('./config/filters');
require('./config/sweetalert2');

// SET DEPENDENCIAS
Vue.use(Loading);
Vue.use(LoadScript);
Vue.use(VueRouter);
Vue.use(VueSweetalert2);

// SET ROUTER
import routes from './config/routes';
const router = new VueRouter({
    base: basePath,
    mode: 'history',
    routes, // short for routes: routes
})


// CONFIGURACIÓN VUE
const app = new Vue({
    el: '#custom-app',
    router,
    data() {
        return {

            base_url: process.env.MIX_URL,
            menu: [],
            user: {},
        }
    },
    methods: {
        /**
         * Obtiene los permisos de la ruta indicada
         * @param  {String} ruta Ruta del menú en la base de datos
         * @return {object}      Acciones permitidas
         */
        permissions: async function(ruta) {
            let acciones = {},
                request = new FormData;
            request.append('ruta', ruta);

            await axios.post(this.base_url + '/permissions', request)
            .then((response) => {
                acciones = response.data;
            });

            return acciones;
        },
        /**
         * Genera objeto query para router-link
         * @param  {Object} filters Filtros
         * @return {Object}         Query
         */
        query: async function(filters) {
            let query = {};

            for (var key in filters) {
                if (['array', 'object'].indexOf(typeof filters[key]) > -1) {
                    if (this.isset(filters[key], 'id')) {
                        query[key] = filters[key].id;
                    }
                    else if (this.isset(filters[key], 'value')) {
                        query[key] = filters[key].value;
                    }
                }
                else if (['string', 'number'].indexOf(typeof filters[key]) > -1 && filters[key]) {
                    query[key] = filters[key];
                }
            }

            return query;
        },
        /**
         * Genera un string de la query de la ruta
         * @param  {Object}  query       [filters || $route.query]
         * @param  {Boolean} fromFilters Indica si la query viene de filtros o de la ruta
         * @param  {Boolean} withPage    Indica si se debe quitar la consulta por página o no
         * @return {String}
         */
        queryString: async function(query, fromFilters = false, withPage = true) {
            let array = [];

            // convertir el objeto filtro en un objeto de query
            if (fromFilters) {
                query = await this.query(query);
            }

            // quitar parámetro de página
            if (!withPage && typeof query.page !== 'undefined') {
                delete query.page;
            }

            for (var key in query) {
                array.push(key + '=' + query[key]);
            }

            return array.length > 0 ? '?' + array.join('&') : '';
        },
        /**
         * Retorna el objeto filtros con los parámetros seteados a corde a la query de la url
         * @param  {Object} filters       Objeto "filtros" de la vista
         * @param  {Array}  selects       Arreglo "selectores" de la vista con objetos
         * @param  {Object} query         $route.query
         * @param  {Array}  selects_keys  Arreglo con las llaves de filtros que son selectores
         * @param  {Array}  selects_names Arreglo con los nombres de los selectores acorde al filtro
         * @return {Object}               Filtros
         */
        filters: async function(filters, selects, query, selects_keys, selects_names) {
            // set inputs
            for (var key in query) {
                if (typeof filters[key] !== 'undefined') {
                    filters[key] = query[key];
                }
            }
            // set selects
            for (var key in selects_keys) {
                if (this.isset(query, selects_keys[key])) {
                    for(var i in selects[selects_names[key]]) {
                        if (selects[selects_names[key]][i].value == query[selects_keys[key]]) {
                            filters[selects_keys[key]] = selects[selects_names[key]][i];
                        }
                    }
                }
            }

            return filters;
        },
        /**
         * Genera URL de descarga de archivo
         * @param  {[type]} file_route ruta del archivo dentro de public
         * @param  {Number} [type=1]   indica si se imprime (I) o descarga
         * @param  {String} [name='']  nombre del archivo a descargar
         * @return {String} URL
         */
        downloadRoute: function(file_route, type = 'I', name = null) {
            return this.base_url + '/download/public/' + btoa(file_route) + '/' + type + (name ? '/' + name : '');
        },
        /**
         * Valida si variables existen dentro del objeto
         * @param  {Object} object (value)
         * @param  {String} string Variable(s) a buscar (deben venir en formato "ruta" o "ruta.recepcion.hola")
         * @return {Boolean}
         */
        isset: function(object, string) {
            var array = string.split('.'),
            exists = true,
            exit = false;

            do {
                // VALIDAR QUE objeto NO SEA NULO NI VACÍO NI INDEFINIDO
                if (object !== null && object !== '' && typeof object !== 'undefined'
                    && array[0] !== null && array[0] !== '' && typeof array[0] !== 'undefined'
                ) {
                    // VERIFICAR SI POSICIÓN EXISTE EN OBJETO
                    if (array[0] in object) {
                        // VALIDAR QUE objeto NO SEA NULO NI VACÍO NI INDEFINIDO
                        if (object[array[0]] !== null && object[array[0]] !== '' && typeof object[array[0]] !== 'undefined') {
                            var object = object[array[0]];
                            if (array.length > 1) {
                                array.shift();
                            }
                            else {
                                exit = true;
                            }
                        }
                        else {
                            exit = true;
                            exists = false;
                        }
                    }
                    else {
                        exit = true;
                        exists = false;
                    }
                }
                else {
                    exit = true;
                    exists = false;
                }
            } while(exists && !exit);

            return exists;
        },
        /**
         * Retorna un string para mostrar alerta en modal SweetAlert
         * @param  {String|Array|Object} response
         * @return {String}
         */
        swalResponse: function(response) {
            let array = this.arrayResponse(response);
            return array.join('<br />');
        },
        cargando(title = 'Cargando, por favor espere...'){
            this.$swal.fire({
                title : title ,
                timerProgressBar: true,
                allowOutsideClick : false,
                allowEscapeKey : false,
                onBeforeOpen: () => {
                    this.$swal.showLoading()
                }
              })
        },
        stop(){
            if(document.querySelector('.swal2-container')){
                document.querySelector('.swal2-container').remove();
            }
        },
        alertas(tipo, titulo, mensaje= null, button = true){
            if(mensaje){
                let temp = '<ul>';
                mensaje = this.arrayResponse(mensaje);
                mensaje.forEach(e=>{
                    temp+=`<li>${e}</li>`;
                })
                mensaje = temp+'</ul>';
            }
            mensaje = !mensaje || mensaje.indexOf('undefine') > 0 ? '' : mensaje;
            this.$swal.fire({
                showCloseButton: button ? true : false ,
                title : titulo,
                html : mensaje,
                type: tipo,
            })

        },
        /**
         * Devuelve un array con todas las respuestas obtenidas
         * @param  {String|Array|Object}
         * @return {Array}
         */
        arrayResponse: function(response) {
            let respuestas =  [];
            let esErrorValidacion, data;

            if (typeof response === 'string') {
                respuestas = [response];
            }
            else if (Array.isArray(response)) {
                respuestas = response;
            }
            else if (typeof response === 'object') {
                if(response.hasOwnProperty('data')){
                    let propiedades = Object.getOwnPropertyNames(response.data);
                    propiedades.forEach((elemento) => {
                        respuestas.push(Object.getOwnPropertyDescriptor(response.data, elemento).value);
                    });
                }
                else if(response.hasOwnProperty('response') && response.response.hasOwnProperty('data') ){
                    data = response.response.data;

                    if (typeof data === 'string') {
                        respuestas = [data];
                    }
                    else if (Array.isArray(data)) {
                        respuestas  = data;
                    }
                    else if (typeof data === 'object') {
                        if ('errors' in data) {
                            if (typeof data.errors === 'string') {
                                respuestas = [data.errors];
                            }
                            else {
                                Object.keys(data.errors).forEach((key) => {
                                    respuestas.push(data.errors[key][0]);
                                });
                            }
                        }
                        else if ('error' in data) {
                            if (typeof data.error === 'string') {
                                respuestas = [data.error];
                            }
                            else {
                                Object.keys(data.error).forEach((key) => {
                                    respuestas.push(data.error[key][0]);
                                });
                            }
                        }
                        else if ('message' in data) {
                            if (data.message) {
                                respuestas.push(data.message);
                            }
                            else {
                                respuestas.push(data.exception.split("\\").pop());
                            }
                        }
                        else {
                            for (let error in data) {
                                if (data[error]) {
                                    if (typeof data[error] == 'string') {
                                        if (!data[error].match(/Illuminate|\/vendor\//)) {
                                            respuestas.push(data[error]);
                                        }
                                    }
                                    else if (Array.isArray(data[error])) {
                                        for (let key in data[error]) {
                                            respuestas.push(data[error][key]);
                                        }
                                    }
                                    else if (typeof data[error] === 'object') {
                                        Object.keys(data[error]).forEach((key) => {
                                            var elemento = data[error][key];

                                            if (elemento.file && !elemento.file.match(/\/vendor\/|\/Middleware\/|index.php/)) {
                                                if (elemento.function && elemento.function == '__callStatic' && elemento.line) {
                                                    let archivo = elemento.file.split('/').pop();
                                                    respuestas.push(archivo + ': ' + elemento.line);
                                                }
                                                else if (typeof elemento !== 'object') {
                                                    respuestas.push(elemento);
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        };
                    }
                    else {
                        respuestas = ['Se ha generado un error inesperado. Por favor contacte a soporte.'];
                    }
                }
                else if (response.hasOwnProperty('mensaje') || 'message' in response) {
                    respuestas = [response.message];
                }
            }

            if (respuestas[0] == 'HttpException') {
                window.location.href = '/login';
            }
            else {
                return respuestas;
            }
        },
        /**
         * Valida que el string no contenca links o scripts
         * @param  {String} string Cadena de caracteres a validar
         * @return {Boolean}        Retorna TRUE cuando el string está ok para utilizarce
         */
        noScript: function(string) {
            if (string) {
                let regexp = /<script|<\/script|<a|<\/a|src=|<link|<meta/g;
                return !regexp.test(string.toString());
            }

            return true;
        },
        /**
         * Filtra letras y caracteres de la entrada de un input
         * @param  {String} Tecla presionada
         * @return Retorna TRUE si la tecla presionada es un número
         */
        isNumberKey: function (evt)
        {
           var charCode = (evt.which) ? evt.which : evt.keyCode;
           if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault();
           }

           return true;
        },
        /**
         * Indica si el correo electrónico ingresado es válido o no
         * @param  {String} email Correo electrónico
         * @return {Boolean}      Indica validez del correo
         */
        validEmail: function(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        },
        /**
         * Función para ejecutar validación por Módulo 11 (para rut y placa patente)
         * @param  {String}  value        Rut o PPU a gestionar
         * @param  {Boolean} validate     Indica si se debe realizar validación del valor ingresado
         * @param  {Integer} type         Indica el id del tipo de vehículo a validar (acorde a utl_tipo_vehiculo)
         * @return {Object}               Retorna un objeto con {valid: true/false} y {digit: dv}
         */
        modulo11: function(value, validate = true, type = null) {
            if (!value) {
                return {
                    valid: false,
                    digit: null
                };
            }

            // se quitan los puntos del valor entregado en caso de que vengan en rut
            value = value.replace(/\./g, '').toString().toUpperCase();
            // se separa en texto y dígito
            let tmp = value.indexOf('-') > -1 ? value.split('-') : [];
            if (tmp.length != 2) {
                tmp[0] = validate ? value.substr(0, value.length - 1) : value;
                tmp[1] = validate ? value.substr(value.length - 1, value.length) : null;
            }
            let numero = parseInt(tmp[0]),
            dv = tmp[1];

            // validar
		    let total = 0,
            por = 2,
            x = 0;
		    for(let i = numero.toString().length - 1; i >= 0; i--) {
		        if(por > 7) { por = 2; }
		        total += parseInt(numero.toString().substr(i, 1)) * por;
		        por++;
		    }

		    let resto = total % 11,
            ref = 11 - resto,
            dv_r = '';

		    if(resto === 1) { dv_r = 'K'; }
		    else if(resto === 0) { dv_r = 0; }
		    else { dv_r = ref; }

            return {
                valid: dv_r == dv,
                digit: dv_r
            };
        },

        isLoged: async function (){
            axios.post(this.base_url + 'isLoged')
            .then( res => {
                return true;
            })
            .catch(err => {
                return false;
            });
        },
        closeLogin(){
            $('.modal , .reg-overlay').fadeOut(200);
            $("html, body").removeClass("hid-body");
        },
        openLogin(){
            $('.modal , .reg-overlay').fadeIn(200);
            $("html, body").addClass("hid-body");
        }

    },
});

$('.close-reg').on("click", function () {
    modal.hide();
});
