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
                                    <h3>Editar propiedad</h3>
                                </div>
                                <h5 class="text-info mb-2">
				            		<span class="fa-stack">
									  <i class="fa fa-circle fa-stack-2x icon-background"></i>
									  <span class="fa-stack-1x text-black">1</span>
									</span>
									UBICAR PROPIEDAD
								</h5>
				               	<hr class="mt-0">
				               	<div class="row">
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Tipo de propiedad</label>
										<br>
										<span class="font-weight-bold">
											<template v-if="data._tipo_propiedad">
												{{ data._tipo_propiedad.nombre }}
											</template>
											<template v-else>-</template>
										</span>


										<!--v-select label="nombre" :options="selects.tipos_propiedades" v-model="data._tipo_propiedad"></v-select-->
				               		</div>
				               	</div>
				               	<div class="row">
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Región</label>
										<br>
										<span class="font-weight-bold">
											<template v-if="data._region">
												{{ data._region.nombre }}
											</template>
											<template v-else>-</template>
										</span>

										<!--v-select label="nombre" :options="selects.regiones" v-model="data._region" @input="actualizarComuna()"></v-select-->
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Comuna</label>
										<br>
										<span class="font-weight-bold">
											<template v-if="data._comuna">
												{{ data._comuna.nombre }}
											</template>
											<template v-else>-</template>
										</span>

										<!--v-select label="nombre" :options="selects.comunas" v-model="data._comuna" :disabled="selects.comunas.length == 0"></v-select-->
				               		</div>
				               	</div>
				               	<div class="row">
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Calle</label>
										<br>
										<span class="font-weight-bold">
											{{ data.calle ? data.calle : '-' }}
										</span>
										<!--input type="text" class="form-control" v-model="data.calle" /-->
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Número</label>
										<br>
										<span class="font-weight-bold">
											{{ data.numero_calle ? data.numero_calle : '-' }}
										</span>
										<!--input type="text" class="form-control" v-model="data.numero_calle" /-->
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>#Depto/Casa</label>
										<br>
										<span class="font-weight-bold">
											{{ data.numero_domicilio ? data.numero_domicilio:'-' }}
										</span>
										<!--input type="text" class="form-control" v-model="data.numero_domicilio" /-->
				               		</div>
				               	</div>

				            	<h5 class="mt-2 text-info mb-2">
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
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<div class="containerImage" id="loadImages">
											<div class="imageLoad" v-for="(imagen, index) in data._imagenes">
												<span class="imagePrincipal" v-if="portada_imagen.key == index && portada_imagen.type == 'old'">Principal</span>
						            			<img :src="`/storage/${imagen.ruta}`" height="100" width="100">
						            			<div class="actions">
						            				<button @click="removerImagen(index, 'old')" class="btn btn-link pr-0" title="Eliminar imagen">
						            					<i class="fa fa-trash"></i>
						            				</button>
						            				<button @click="marcarPrincipalImagen(index, 'old')" class="btn btn-link pl-1 pr-1" title="Seleccionar como imagen de portada">
						            					<i class="fa fa-star"></i>
						            				</button>
						            			</div>
						            		</div>
						            		<div class="imageLoad" v-for="(imagen, index) in data.imagenes">
					            				<span class="imagePrincipal" v-if="portada_imagen.key == index && portada_imagen.type == 'new'">Principal</span>
						            			<img :src="imagen.contenido" height="100" width="100">
						            			<div class="actions">
						            				<button @click="removerImagen(index, 'new')" class="btn btn-link pr-0" title="Eliminar imagen">
						            					<i class="fa fa-trash"></i>
						            				</button>
						            				<button @click="marcarPrincipalImagen(index, 'new')" class="btn btn-link pl-1 pr-1" title="Seleccionar como imagen de portada">
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
										<v-select label="nombre" :options="selects.subtipos_propiedades" v-model="data._subtipo_propiedad"></v-select>
				               		</div>

				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Superficie útil (m<sup>2</sup>) <span class="text-red">*</span></label>
										<input type="text" class="form-control" v-model="data.superficie_util" />
				               		</div>

				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Superficie terraza (m<sup>2</sup>)</label>
										<input type="text" class="form-control" v-model="data.superficie_terraza" />
				               		</div>

				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
				               			<label>Baños</label>
										<v-select :options="selects.conteo_generico" v-model="data.banio" placeholder="Seleccione"></v-select>
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Tipo de piso</label>
										<v-select label="nombre" :options="selects.tipos_pisos" v-model="data._tipos_pisos" multiple></v-select>
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
				               			<label style="color:transparent;"> &nbsp; &nbsp;</label>
                                        <label class="checktainer">
                                            Esta propiedad esta amoblada
                                          <input type="checkbox" v-model="data.amoblada" :true-value="1" :false-value="0">
                                          <span class="checkmark"></span>
                                        </label>
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
										<label>Privado</label>
										<v-select :options="selects.conteo_generico" v-model="data.privado"></v-select>
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Piso de ubicación</label>
										<input type="text" class="form-control" v-model="data.numero_piso" />
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Bodega</label>
										<v-select :options="selects.conteo_generico" v-model="data.bodega"></v-select>
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Estacionamiento</label>
										<v-select :options="selects.conteo_generico" v-model="data.estacionamiento"></v-select>
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Orientación</label>
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
														<input type="checkbox" :id="'cssCheckbox0'+key" @click="colocarAtributo(distribucion.id)">
														<label class="no_bold" :for="'cssCheckbox0'+key">
															{{ distribucion.nombre }}
														</label>
													</div>
						               			</span>
						               		</div>
						               		<div class="form-group col-xs-12 col-sm-6 col-md-3 col-lg-3">
						               			<label>Servicios</label>
						               			<span v-for="(servicio, key) in selects.servicios">
							               			<div class="checkbox checkbox-css">
														<input type="checkbox" :id="'cssCheckbox1'+key" @click="colocarAtributo(servicio.id)">
														<label class="no_bold" :for="'cssCheckbox1'+key">
															{{ servicio.nombre }}
														</label>
													</div>
						               			</span>
						               		</div>
						               		<div class="form-group col-xs-12 col-sm-6 col-md-3 col-lg-3">
						               			<label>Cocina</label>
						               			<span v-for="(cocina, key) in selects.cocina">
							               			<div class="checkbox checkbox-css" >
														<input type="checkbox" :id="'cssCheckbox2'+key" @click="colocarAtributo(cocina.id)">
														<label class="no_bold" :for="'cssCheckbox2'+key">
															{{ cocina.nombre }}
														</label>
													</div>
						               			</span>
						               		</div>
						               		<div class="form-group col-xs-12 col-sm-6 col-md-3 col-lg-3">
						               			<label>Otros</label>
						               			<span v-for="(otro, key) in selects.otros">
							               			<div class="checkbox checkbox-css">
														<input type="checkbox" :id="'cssCheckbox3'+key" @click="colocarAtributo(otro.id)">
														<label class="no_bold" :for="'cssCheckbox3'+key">
															{{ otro.nombre }}
														</label>
													</div>
						               			</span>
						               		</div>
						               	</div>
						            </div>
				           		</div>
				           		<hr class="mt-0 mb-5">

				           		<h5 class="mt-2 text-info mb-2">
				           			<span class="fa-stack">
									 	<i class="fa fa-circle fa-stack-2x icon-background"></i>
									 	<span class="fa-stack-1x text-black">3</span>
									</span>
									INFORMACION DE CONTACTO
								</h5>
				               	<hr class="mt-0">

				               	<div class="row">
				               		<!--div class="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8">
										<label>Dueño de propiedad <span class="text-red">*</span></label>

										 <v-select :options="selects.usuarios" label="nombre" placeholder="Indique el usuario responsable de la publicación" v-model="data._usuario">
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
				               		</div-->
				               	</div>

				               	<div class="row">
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Teléfono de contacto</label>
										<div class="input-group clear-none">
											<div class="input-group-prepend">
												<span id="inputGroup-sizing-lg">
											    	<v-select label="label" :options="selects.tipos_telefonos" v-model="data.codigo_telefono"></v-select>
											    </span>
											</div>
											<input type="text" class="form-control" @keypress="$root.isNumberKey($event)" maxlength="8" v-model="data.telefono" placeholder="Ingresa un teléfono" />
										</div>
				               		</div>
				               	</div>
				               	<div class="row">
				               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
										<label>Teléfono de contacto 2</label>
										<div class="input-group clear-none mb-3">
											<div class="input-group-prepend">
												<span id="inputGroup-sizing-lg">
											    	<v-select label="label" :options="selects.tipos_telefonos" v-model="data.codigo_telefono2"></v-select>
											    </span>
											</div>
											<input type="text" class="form-control" @keypress="$root.isNumberKey($event)" maxlength="8" v-model="data.telefono2" placeholder="Ingresa un teléfono" />
										</div>
				               		</div>
				               	</div>

				               	<h5 class="mt-2 text-info mb-2">
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
										<v-select label="nombre" :options="selects.periodicidades" v-model="data._periodicidad_arriendo"></v-select>
				               		</div>
				               		<div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<label>Precio de publicación <span class="text-red">*</span></label>
										<div class="row">
											<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
												<v-select label="nombre" :options="selects.tipos_valores" v-model="data._tipo_valor" placeholder="Tipo de valor"></v-select>
											</div>
											<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
												<input type="text" class="form-control" v-model="data.precio" placeholder="Indique el valor de la propiedad">
											</div>
											<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
												<v-select label="nombre" :options="selects.tipos_operaciones" v-model="data._tipo_operacion" placeholder="Indique el tipo de arriendo"></v-select>
											</div>
										</div>
				               		</div>
				               	</div>
                                <div class="row">
                                    <div class="col-lg-12 col-sm-12">
                                        <maps  markers="simple" :type="this.maps.type" :locations="locations" ></maps>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="float-right">
                                <button class="btn btn-success btn-lg"  :disable="enviando" @click="guardar">Publicar propiedad</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- section end -->
        </div>
        <!-- content end-->
    </div>
</template>

<script>
	import Maps from '../../components/Maps';

	export default {
		data() {
			return {
                locations : [-33.4569397, -70.6482697],
				error: [],
				success: [],
				section: {
					name: '',
				},
				url: {
                    current: this.$root.base_url + '/propiedad',
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
					atributos: [],
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
					otros: [],
				},
				enviando : false,
				maps: {
                    type: 'streets-v8',
                    center: [-33.4569397, -70.6482697],
                    zoom: 13,
                },
			}
		},
		created() {
        	this.iniciar();
        	this.iniciarCampoConteoGenerico();
        },
        components: {
            Maps
        },
        computed: {
        	inhabilitarGuardar: function() {
        		return false;
        	},
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
			obtenerAtributos() {
				let atributos = ['distribucion', 'servicios', 'cocina', 'otros'];

				atributos.forEach((atributo, key) => {
					this.selects[atributo].forEach((select, key2) => {
						this.data.atributos.forEach(attr => {
							if(attr == select.id) {
								$('#cssCheckbox'+key+key2).prop('checked',true);
							}
						});
					});
				});
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
			iniciar() {
				this.start();

				axios.post(this.url.current + '/editar', {id: this.$route.params.id})
				.then(response => {
					this.data = response.data.propiedad;
					this.selects.regiones = response.data.regiones;
					this.selects.tipos_propiedades = response.data.tipos_propiedades;
					this.selects.subtipos_propiedades = response.data.subtipos_propiedades;
					this.selects.tipos_pisos = response.data.tipos_pisos;
					this.selects.tipos_operaciones = response.data.tipos_operaciones;
					this.selects.tipos_valores = response.data.tipos_valores;
					this.selects.orientaciones = response.data.orientaciones;
					this.selects.periodicidades = response.data.periodicidades;
					this.selects.usuarios = response.data.usuarios;

					this.data.tipo_valor = this.selects.tipos_valores.find(e =>{
                        return e.nombre.toUpperCase() == 'CLP';
                    });
                    this.reordenarRegion();
					// ATRIBUTOS
					this.selects.distribucion = response.data.distribucion;
					this.selects.servicios = response.data.servicios;
					this.selects.cocina = response.data.cocina;
					this.selects.otros = response.data.otros;

                    if(this.data.latitud && this.data.longitud ){
                        this.locations = [this.data.latitud, this.data.longitud];
                        this.maps.center = [this.data.latitud, this.data.longitud];
                    }

					// INICIALIZAR IMAGENES
					Vue.set(this.data, 'imagenes', []);
					this.data._imagenes.forEach((imagen, key) => {
						if(imagen.id == this.data.portada_imagen_id) {
							this.portada_imagen.key = key;
						}
					});
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
				})
				.finally(() => {
                    this.maps.type = 'streets-v8';
					this.stop();
					this.obtenerAtributos();
				})
			},
			reordenarRegion() {
                if(this.selects.regiones.length > 0){
                    // COLOCANDO REGIÓN METROPOLITANA AL INICIO DE SELECT
                    let region = this.selects.regiones.splice(this.selects.regiones.map(e => e.id).indexOf(13),1);
                    this.selects.regiones.unshift(region[0]);
                }
            },
			guardar() {
				this.enviando = true;
				this.start();

				let telefono, telefono2;

				let request = new FormData;
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
				this.data._periodicidad_arriendo && request.append('id_periodicidad_arriendo', this.data._periodicidad_arriendo.id);
				//this.data._usuario && request.append('usuario_id', this.data._usuario.id);
				this.data.latitud && request.append('latitud', this.data.latitud);
				this.data.longitud && request.append('longitud', this.data.longitud);

				if(this.data.codigo_telefono && this.data.telefono) {
					request.append('codigo_telefono', this.data.codigo_telefono);
					request.append('telefono', this.data.telefono);
				}

				if(this.data.codigo_telefono2 && this.data.telefono2) {
					request.append('codigo_telefono2', this.data.codigo_telefono2);
					request.append('telefono2', this.data.codigo_telefono2);
				}

				if(this.data.tipo_piso) {
					this.data.tipo_piso.forEach(tipo_piso => {
						request.append('tipo_piso[]', tipo_piso);
					});
				}

				if(this.data.atributos.length > 0) {
					this.data.atributos.forEach(atributo => {
						request.append('atributos[]', atributo);
					});
				}

				if(this.data._imagenes.length > 0) {
					this.data._imagenes.forEach(imagen => {
						request.append('imagenes[]', imagen.id);
					});
				}

				if(this.data.imagenes.length > 0) {
                    this.data.imagenes.forEach( e =>{
                        let arr = e.contenido.split(','),
                        mime = arr[0].match(/:(.*?);/)[1],
                        bstr = atob(arr[1]),
                        n = bstr.length,
                        u8arr = new Uint8Array(n);
                        while(n--){
                            u8arr[n] = bstr.charCodeAt(n);
                        }
                        let file = new File([u8arr], e.nombre, {type:mime})
                        request.append('imagenes_new[]', file);
                    })
                }

                if(this.portada_imagen.key != null && this.portada_imagen.type != null){
					request.append('portada_imagen_key', this.portada_imagen.key);
					request.append('portada_imagen_type', this.portada_imagen.type);
				}

				axios.post(this.url.current + '/actualizar', request)
				.then(response => {
					this.alerta("success", "Exito", response.data.success);
                    //window.location = response.data.url;
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
					this.stop();
					this.alerta('error','Lo sentimos un error ha ocurrido.',error);
				})
				.finally(() => {
					this.enviando = false;
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
					conteo.push(i);
				}

				this.selects.conteo_generico = conteo;
			},
			cargarImagen(e) {
				if (e && e.target.files) {
					let reader = new FileReader();

					if(this.data.imagenes.length == 0 && this.data._imagenes.length == 0) {
						this.portada_imagen = {
							key: 0,
							type: 'new'
						}
					}

		            reader.onload = (e, nombre) => {
		            	this.data.imagenes.push({
		            		nombre: e.target.filename,
		            		contenido: e.target.result
		            	});
		            }

		            reader.filename = e.target.files[0].name;
		            reader.readAsDataURL(e.target.files[0]);
		        }
			},
			removerImagen(key, type) {
				if(type == 'old') {
					this.data._imagenes.splice(key, 1);
				}
				else {
					this.data.imagenes.splice(key, 1);
				}

				if(this.portada_imagen.key == key) {
					this.portada_imagen.key = key > 0 ? key-1 : null;
					this.portada_imagen.type = type;
				}
			},
			marcarPrincipalImagen(key, type) {
				this.portada_imagen = {
					key: key,
					type: type
				};
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
		}
	}
</script>

<style scoped>
input[type="file"] {
    display: none;
}

</style>
