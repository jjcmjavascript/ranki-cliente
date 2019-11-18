<template>
	<div>
		<alertas :success="success" :error="error"></alertas>
		<panel type="filtro">
			<template slot="header">
				Crear nuevo usuario
			</template>

            <template slot="main">
               <div class="row">
               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<label class="font-weight-bold">RUT</label>
						<input type="text" class="form-control" @blur="validarRut()" :class="valid.rut" v-model="data.rut" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<label class="font-weight-bold">Nombre</label>
						<input type="text" class="form-control" v-model="data.nombre" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<label class="font-weight-bold">Apellidos</label>
						<input type="text" class="form-control" v-model="data.apellidos" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<label class="font-weight-bold">
							Email
						</label>
						<input type="text" class="form-control" @blur="validarEmail()" :class="valid.email" v-model="data.email" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<label class="font-weight-bold">Teléfono Móvil</label>
						<input type="text" class="form-control" v-model="data.telefono_movil" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<label class="font-weight-bold">Teléfono fijo</label>
						<input type="text" class="form-control" v-model="data.telefono_fijo" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<label class="font-weight-bold">Dirección</label>
						<input type="text" class="form-control" v-model="data.direccion" />
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
                    current: this.$root.base_url + '/sistema/usuarios',
                    permisos: {},
                },
				data: {
					rut: null,
					nombre: null,
					apellidos: null,
					email: null,
					telefono_movil: null,
					telefono_fijo: null,
					direccion: null,
				},
				valid: {
					rut: '',
					email: '',
				},
				selects: {

				}
			}
		},
        computed: {
        	inhabilitarGuardar: function() {
        		return !(
        			this.data.nombre &&
        			this.valid.rut == 'is-valid' &&
        			this.valid.email == 'is-valid'
        		);
        	},
        },
        created() {
        	this.iniciar();
        },
		methods: {
			limpiarMensajes() {
				this.success = [];
				this.error = [];
			},
			iniciar() {
				this.limpiarMensajes();
				let load = loading(this);

				let request = new FormData;
				request.append('id', this.$route.params.id);

				axios.post(this.url.current + '/editar', request)
				.then(response => {
					this.data = response.data;
					this.validarRut();
					this.validarEmail();
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
				})
				.finally(() => {
					 load.hide();
				})
			},
			guardar(page = 1) {
				this.limpiarMensajes();
				let load = loading(this);

				let request = new FormData;
				request.append('id', this.$route.params.id);
				this.data.rut && request.append('rut', this.data.rut);
				this.data.nombre && request.append('nombre', this.data.nombre);
				this.data.apellidos && request.append('apellidos', this.data.apellidos);
				this.data.email && request.append('email', this.data.email);
				this.data.telefono_fijo && request.append('telefono_fijo', this.data.telefono_fijo);
				this.data.telefono_movil && request.append('telefono_movil', this.data.telefono_movil);
				this.data.direccion && request.append('direccion', this.data.direccion);

				axios.post(this.url.current + '/guardar', request)
				.then(response => {
					this.success = response.data;
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
				})
				.finally(() => {
					 load.hide();
				})
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
			limpiar() {
				data = {
					rut: null,
					nombre: null,
					apellidos: null,
					email: null,
					telefono_movil: null,
					telefono_fijo: null,
					password: null,
					confirmPassword: null,
				};
				valid = {
					rut: '',
					email: '',
					password: '',
					confirmPassword: ''
				};
			}
		}
	}
</script>