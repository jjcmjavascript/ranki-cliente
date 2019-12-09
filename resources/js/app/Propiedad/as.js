

	<div>
		<alertas :success="success" :error="error"></alertas>
		<panel class="col-xs-12">
			<template slot="header">
				Crear nueva propiedad
			</template>

            <template slot="main">
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
            </template>

            <template slot="footer">
            	<button class="btn btn-success btn-sm" :disabled="inhabilitarGuardar" @click="guardar()">
            		Guardar
            	</button>
				<a :href="url.current" class="btn btn-secondary btn-sm">Volver</a>
            </template>
        </panel>
	</div>
