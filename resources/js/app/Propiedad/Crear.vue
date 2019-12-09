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
                                    <h3>Crear nueva propiedad</h3>
                                </div>
                                <h5 class="text-info">
                            		<span class="fa-stack">
                					  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                					  <span class="fa-stack-1x text-black">1</span>
                					</span>
                					UBICAR PROPIEDAD
                				</h5>
                               	<hr class="mt-0">
                               	<div class="row">
                               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                						<label>Tipo de propiedad <span class="text-red">*</span></label>
                						<v-select label="nombre" :options="selects.tipos_propiedades" v-model="data.tipo_propiedad"></v-select>
                               		</div>
                               	</div>
                               	<div class="row">
                               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                						<label>Región <span class="text-red">*</span></label>
                						<v-select label="nombre" :options="selects.regiones" v-model="data.region" @input="actualizarComuna()"></v-select>
                               		</div>
                               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                						<label>Comuna <span class="text-red">*</span></label>
                						<v-select label="nombre" :options="selects.comunas" v-model="data.comuna" :disabled="selects.comunas.length == 0"></v-select>
                               		</div>
                               	</div>
                               	<div class="row">
                               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                						<label>Calle</label>
                						<input type="text" class="form-control" v-model="data.calle" />
                               		</div>
                               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                						<label>Número</label>
                						<input type="text" class="form-control" v-model="data.numero_calle" />
                               		</div>
                               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                						<label>#Depto/Casa</label>
                						<input type="text" class="form-control" v-model="data.numero_departamento" />
                               		</div>
                               	</div>

                            	<h5 class="mt-2 text-info">
                            		<span class="fa-stack">
                					 	<i class="fa fa-circle fa-stack-2x icon-background"></i>
                					 	<span class="fa-stack-1x text-black">2</span>
                					</span>
                					INFORMACION DE LA PROPIEDAD
                				</h5>
                               	<hr class="mt-0">
                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <label>Titulo <span class="text-red">*</span></label>
                                        <input type="text" class="form-control" v-model="data.titulo" />
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-12 col-lg-12">
                                        <label>Agregar fotos de la propiedad <span class="text-red">*</span></label>
                                        <div>
                                            <label class="btn btn-outline-primary text-uppercase c-pointer">
                                                <input type="file" @change="cargarImagen($event)"/>
                                                Agregar imagen
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="alert alert-warning">
                                            Debes cargar al menos tres fotos. Se recomienda subir fotos apaisadas. De no ser asi, puedes rotarlas en la edicion.
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-4 col-md-12 col-lg-12">
                                        <div class="containerImage" id="loadImages">
                                            <div class="imageLoad" v-for="(imagen, index) in data.imagenes">
                                                <span class="imagePrincipal" v-if="data.imagen_principal == index">Principal</span>
                                                <img :src="imagen" height="100" width="100">
                                                <div class="actions">
                                                    <button @click="removerImagen(index)" class="btn btn-link pr-0" title="Eliminar imagen">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                    <button @click="marcarPrincipalImagen(index)" class="btn btn-link pl-1 pr-1" title="Seleccionar como imagen de portada">
                                                        <i class="fa fa-star"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Subtipo de propiedad <span class="text-red">*</span></label>
                                        <v-select label="nombre" :options="selects.subtipos_propiedades" v-model="data.tipo_propiedad"></v-select>
                                    </div>

                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Superficie útil (m<sup>2</sup>)</label>
                                        <input type="text" class="form-control" v-model="data.superficie_util" />
                                    </div>

                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Superficie terraza (m<sup>2</sup>)</label>
                                        <input type="text" class="form-control" v-model="data.superficie_terraza" />
                                    </div>

                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Baños <span class="text-red">*</span></label>
                                        <v-select :options="selects.conteo_generico" v-model="data.baño" placeholder="Seleccione"></v-select>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Tipo de piso</label>
                                        <v-select label="nombre" :options="selects.tipos_pisos" v-model="data.tipo_piso" multiple></v-select>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <div class="checkbox checkbox-css mt-4">
                                            <input type="checkbox" id="cssCheckbox1" v-model="data.amoblada">
                                            <label for="cssCheckbox1">Esta propiedad esta amoblada</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <label>Descripción <span class="text-red">*</span></label>
                                        <textarea type="text" class="form-control" rows=5 v-model="data.descripcion" />
                                    </div>
                                </div>

                                <h5 class="c-pointer text-info" @click="mostrarMasInformación()">
                                    <i id="infoIcon" class="fa fa-plus-circle"></i> Agregar más información
                                </h5 >

                                <div id="adicionalInfo" class="row d-none mt-3">
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Año</label>
                                        <input type="text" class="form-control" v-model="data.anio_construccion" />
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Privados</label>
                                        <v-select :options="selects.conteo_generico" v-model="data.privados"></v-select>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Piso de ubicación</label>
                                        <input type="text" class="form-control" v-model="data.piso" />
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Bodega</label>
                                        <v-select :options="selects.conteo_generico" v-model="data.privados"></v-select>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Estacionamiento</label>
                                        <v-select :options="selects.conteo_generico" v-model="data.estacionamiento"></v-select>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Orientación <span class="text-red">*</span></label>
                                        <v-select label="nombre" :options="selects.orientaciones" v-model="data.orientacion"></v-select>
                                    </div>
                                    <hr>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <label>Selecciona los atributos de la propiedad</label>
                                        <div class="row">
                                            <div class="form-group col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <label>Distribución</label>
                                                <span v-for="(distribucion, key) in selects.distribucion">
                                                    <div class="checkbox checkbox-css">
                                                        <input type="checkbox" :id="'cssCheckbox1'+key" @click="colocarAtributo(distribucion.id)">
                                                        <label class="no_bold" :for="'cssCheckbox1'+key">
                                                            {{ distribucion.nombre }}
                                                        </label>
                                                    </div>
                                                </span>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <label>Servicios</label>
                                                <span v-for="(servicio, key) in selects.servicios">
                                                    <div class="checkbox checkbox-css">
                                                        <input type="checkbox" :id="'cssCheckbox2'+key" @click="colocarAtributo(servicio.id)">
                                                        <label class="no_bold" :for="'cssCheckbox2'+key">
                                                            {{ servicio.nombre }}
                                                        </label>
                                                    </div>
                                                </span>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <label>Cocina</label>
                                                <span v-for="(cocina, key) in selects.cocina">
                                                    <div class="checkbox checkbox-css" >
                                                        <input type="checkbox" :id="'cssCheckbox3'+key" @click="colocarAtributo(cocina.id)">
                                                        <label class="no_bold" :for="'cssCheckbox3'+key">
                                                            {{ cocina.nombre }}
                                                        </label>
                                                    </div>
                                                </span>
                                            </div>
                                            <div class="form-group col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <label>Otros</label>
                                                <span v-for="(otro, key) in selects.otros">
                                                    <div class="checkbox checkbox-css">
                                                        <input type="checkbox" :id="'cssCheckbox4'+key" @click="colocarAtributo(otro.id)">
                                                        <label class="no_bold" :for="'cssCheckbox4'+key">
                                                            {{ otro.nombre }}
                                                        </label>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-0 mb-5">

                                <h5 class="mt-2 text-info">
                                    <span class="fa-stack">
                                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                                        <span class="fa-stack-1x text-black">3</span>
                                    </span>
                                    INFORMACION DE CONTACTO
                                </h5>
                                <hr class="mt-0">

                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-4 col-md-8 col-lg-8">
                                        <label>Usuario responsable <span class="text-red">*</span></label>

                                         <v-select :options="selects.usuarios" label="nombre" placeholder="Indique el usuario responsable de la publicación">
                                            <template slot="option" slot-scope="option">
                                                <div class="d-center">
                                                    {{ option.nombre_completo }} ({{option.rut | rut}})
                                                </div>
                                            </template>
                                            <template slot="selected-option" slot-scope="option">
                                                <div class="selected d-center">
                                                    {{ option.nombre_completo }} ({{option.rut | rut}})
                                                </div>
                                            </template>
                                        </v-select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Teléfono de contacto <span class="text-red">*</span></label>
                                        <div class="input-group clear-none">
                                            <div class="input-group-prepend">
                                                <span id="inputGroup-sizing-lg">
                                                    <v-select label="label" :options="selects.tipos_telefonos" v-model="data.codigo_telefono"></v-select>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" v-model="data.telefono" placeholder="Ingresa un teléfono" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Teléfono de contacto 2<span class="text-red">*</span></label>
                                        <div class="input-group clear-none mb-3">
                                            <div class="input-group-prepend">
                                                <span id="inputGroup-sizing-lg">
                                                    <v-select label="label" :options="selects.tipos_telefonos" v-model="data.codigo_telefono2"></v-select>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" v-model="data.telefono2" placeholder="Ingresa un teléfono" />
                                        </div>
                                    </div>
                                </div>

                                <h5 class="mt-2 text-info">
                                    <span class="fa-stack">
                                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                                        <span class="fa-stack-1x text-black">4</span>
                                    </span>
                                    CARACTERISTICAS DE LA PROPIEDAD
                                </h5>
                                <hr class="mt-0">
                                <div class="row">
                                    <div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                        <label>Periodicidad de arriendo <span class="text-red">*</span></label>
                                        <v-select label="nombre" :options="selects.periodicidades" v-model="data.periodicidad"></v-select>
                                    </div>
                                    <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <label>Precio de publicación <span class="text-red">*</span></label>
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <v-select label="nombre" :options="selects.tipos_valores" v-model="data.tipo_valor" placeholder="Tipo de valor"></v-select>
                                            </div>
                                            <div class="col-lg-5">
                                                <input type="text" class="form-control" v-model="data.precio" placeholder="Indique el valor de la propiedad">
                                            </div>
                                            <div class="col-lg-5">
                                                <v-select label="nombre" :options="selects.tipos_operaciones" v-model="data.tipo_operacion" placeholder="Indique el tipo de arriendo"></v-select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-decor"></div>
            </section>
            <!-- section end -->
        </div>
        <!-- content end-->
    </div>
</template>

<script>
	export default {
		data() {
			return {
				error: [],
				success: [],
				section: {
					name: '',
				},
				url: {
                    current: this.$root.base_url + this.$route.path,
                    permisos: {},
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
					codigo_telefono: {label: '9', value: 9},
					telefono: null,
					codigo_telefono2: {label: '9', value: 9},
					telefono2: null,
					tipo_operacion: null,
					tipo_valor: null,
					precio: null,
					periodicidad_arriendo: null,
					amoblada: false,
					usuario: null,
					latitud: null,
					longitud: null,
					atributos: [],
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
					tipos_telefonos: [
						{label: '2', value: 2},
						{label: '9', value: 9}
					],
					conteo_generico: [],
					distribucion: [],
					servicios: [],
					cocina: [],
					otros: [],
				}
			}
		},
		created() {
        	this.iniciar();
        	// this.iniciarCampoConteoGenerico();
        },
        computed: {
        	// inhabilitarGuardar: function() {
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

			iniciar() {

				axios.post(this.url.current)
				.then(response => {
					this.selects.regiones = response.data.regiones;
					this.selects.tipos_propiedades = response.data.tipos_propiedades;
					this.selects.subtipos_propiedades = response.data.subtipos_propiedades;
					this.selects.tipos_pisos = response.data.tipos_pisos;
					this.selects.tipos_operaciones = response.data.tipos_operaciones;
					this.selects.tipos_valores = response.data.tipos_valores;
					this.selects.orientaciones = response.data.orientaciones;
					this.selects.periodicidades = response.data.periodicidades;
					this.selects.usuarios = response.data.usuarios;

					// ATRIBUTOS
					this.selects.distribucion = response.data.distribucion;
					this.selects.servicios = response.data.servicios;
					this.selects.cocina = response.data.cocina;
					this.selects.otros = response.data.otros;
				})
				.catch(error => {

				})
				.finally(() => {

				})
			},
			guardar() {

				let telefono, telefono2;

				let request = new FormData;
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
				this.data.atributos && request.append('atributos', JSON.stringify(this.data.atributos))


				if(this.data.codigo_telefono && this.data.telefono) {
					request('telefono', this.data.codigo_telefono.value + this.data.telefono);
				}

				if(this.data.codigo_telefono2 && this.data.telefono2) {
					request('telefono', this.data.codigo_telefono2.value + this.data.telefono2);
				}

				axios.post(this.url.current + '/guardar', request)
				.then(response => {
					this.success = response.data;
					this.limpiar();
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
				})
				.finally(() => {
					 load.hide();
				})
			},
			mostrarMasInformación() {
				$('#adicionalInfo').toggleClass("d-none");

				if($('#infoIcon').hasClass('fa-plus-circle')) {
					$('#infoIcon').removeClass('fa-plus-circle');
					$('#infoIcon').addClass('fa-minus-circle');
				}
				else {
					$('#infoIcon').removeClass('fa-minus-circle');
					$('#infoIcon').addClass('fa-plus-circle');
				}
			},
			iniciarCampoConteoGenerico() {
				let conteo = [];

				for(let i=0; i<11; i++) {
					conteo.push({
						label: i,
						value: i,
					});
				}

				this.selects.conteo_generico = conteo;
			},
			cargarImagen(e) {
				if (e && e.target.files) {
					let reader = new FileReader();

					if(this.data.imagenes.length == 0) {
						this.data.imagen_principal = 0;
					}

		            reader.onload = (e) => {
		            	this.data.imagenes.push(e.target.result);
		            };

		            reader.readAsDataURL(e.target.files[0]);
		        }
			},
			removerImagen(key) {
				this.data.imagenes.splice(key, 1);
				this.data.imagen_principal = key > 0 ? key-1 : null;
			},
			marcarPrincipalImagen(key) {
				this.data.imagen_principal = key;
			},
			actualizarComuna() {
				this.data.comuna = null;
				this.selects.comunas = [];

				if(this.data.region) {
					let request = new FormData;
					request.append('id_region', this.data.region.id);
					axios.post(this.$root.base_url + '/mantenedor/combo_box/comunas', request)
					.then(response => {
						this.selects.comunas = response.data;
					})
					.catch(error => {
						this.error = this.$root.arrayResponse(error);
					})
				}
			},
			colocarAtributo(id) {
				let encontrado = false;

				this.data.atributos.map((atributo, index) => {
					if(atributo == id) {
						this.data.atributos.splice(index, 1);
						encontrado = true;
						return;
					}
				});

				if(!encontrado){
					this.data.atributos.push(id);
				}
			},
			validarRut() {
				if(this.data.rut) {
					this.data.rut = this.data.rut.replace(/\./g, '');
					if(this.$root.modulo11(this.data.rut).valid) {
						this.valid.rut = 'is-valid';
					}
					else {
						this.valid.rut = 'is-invalid';
					}
				}
			},
			validarEmail() {
				if(this.data.email) {
			    	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			      	if(re.test(this.data.email)) {
			      		this.valid.email = 'is-valid';
			      	}
			      	else {
			      		this.valid.email = 'is-invalid';
			      	};
			    }
		    },
		    validarPassword() {
		    	if(this.data.password) {
		    		if(this.data.password.toString().length > 7) {
		    			this.valid.password = 'is-valid';
		    		}
		    		else {
		    			this.valid.password = 'is-invalid';
		    		}
		    	}
		    },
		    validarConfirmPassword() {
		    	if(this.data.confirmPassword) {
		    		if(this.data.confirmPassword.toString().length > 7 &&
		    		   this.data.password == this.data.confirmPassword
		    		) {
		    			this.valid.confirmPassword = 'is-valid';
		    		}
		    		else {
		    			this.valid.confirmPassword = 'is-invalid';
		    		}
		    	}
		    },
			limpiar() {
				this.data = {
					rut: null,
					nombre: null,
					apellidos: null,
					email: null,
					telefono_movil: null,
					telefono_fijo: null,
					boletines: {label: 'No', value: 0},
					password: null,
					confirmPassword: null,
					avatar: {
						image: null,
						file: null,
					},
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
	}
</script>

<style scoped>
input[type="file"] {
    display: none;
}

</style>
