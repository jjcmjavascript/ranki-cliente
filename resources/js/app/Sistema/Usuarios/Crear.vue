<template>
	<div class="col-lg-12">
		<panel type="filtro">
			<template slot="header">
				Crear nuevo usuario
			</template>

            <template slot="main">
               <div class="row">
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-4">
						<label class="font-weight-bold">RUT</label>
						<input type="text" class="form-control" @blur="validarRut()" :class="valid.rut" v-model="data.rut" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-4">
						<label class="font-weight-bold">Nombre</label>
						<input type="text" class="form-control" v-model="data.nombre" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-4">
						<label class="font-weight-bold">Nombre</label>
						<input type="text" class="form-control" v-model="data.nombre" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-4">
						<label class="font-weight-bold">Apellidos</label>
						<input type="text" class="form-control" v-model="data.apellidos" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-4">
						<label class="font-weight-bold">
							Email
						</label>
						<input type="text" class="form-control" @blur="validarEmail()" :class="valid.email" v-model="data.email" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-3">
						<label class="font-weight-bold">
							Clave
							<i class="fa fa-info-circle" 
							title="La clave debe contener al menos 8 caracteres"></i>
						</label>
						<input type="text" class="form-control" @blur="validarPassword()" :class="valid.password" v-model="data.password" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-3">
						<label class="font-weight-bold">Confirmar clave</label>
						<input type="text" class="form-control" @blur="validarConfirmPassword()" :class="valid.confirmPassword" v-model="data.confirmPassword" />
               		</div>
           		</div>
            </template>

            <template slot="footer">
            	<button class="btn btn-success btn-sm" :disabled="inhabilitarGuardar()" @click="guardar">
            		Guardar
            	</button>
				<a :href="url.current" class="btn btn-default btn-sm">Volver</a>
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
					password: null,
					confirmPassword: null,
				},
				valid: {
					rut: '',
					email: '',
					password: '',
					confirmPassword: ''
				},
				selects: {

				}
			}
		},
        computed: {
        	
        },
		methods: {
			inhabilitarGuardar: function() {
        		return !this.$root.modulo11(this.data.rut).valid;
        	},
			guardar(page = 1) {
				let load = loading(this);

				let request = new FormData;
				this.data.id && request.append('id', this.data.id);
				this.data.nombre && request.append('nombre', this.data.nombre);
				this.data.email && request.append('email', this.data.email);
				this.data.password && request.append('password', this.data.password);
				this.data.confirmPassword && request.append('confirmPassword', this.data.confirmPassword);

				axios.post(this.url.current, request)
				.then(response => {
					this.rows = response.data;
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
				//
			}
		}
	}
</script>