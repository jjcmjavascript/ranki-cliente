<template>
	<div>
		<alertas :success="success" :error="error"></alertas>
		<panel type="filtro">
			<template slot="header">
				Filtros
			</template>

			<template slot="buttons">
				<button class="btn btn-warning btn-sm" @click="limpiar">Limpiar</button>
				<button class="btn btn-success btn-sm" @click="filtrar">Filtrar</button>
			</template>

            <template slot="main">
               <div class="row">
           			<div class="form-group col-xs-12 col-sm-2 col-ms-1 col-lg-1">
						<label class="font-weight-bold">ID</label>
						<input type="text" class="form-control" v-model="filters.id" />
           			</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-3">
						<label class="font-weight-bold">Nombre</label>
						<input type="text" class="form-control" v-model="filters.nombre" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-3">
						<label class="font-weight-bold">Email</label>
						<input type="text" class="form-control" v-model="filters.email" />
               		</div>
               		<div class="form-group col-xs-12 col-sm-4 col-ms-3 col-lg-3">
						<label class="font-weight-bold">Estado</label>
						<v-select :options="selects.estados" v-model="filters.estado"></v-select>
               		</div>
           		</div>
            </template>
        </panel>

        <panel type="crud" :footer-class="rows.last_page == 1 ? 'd-none' : ''">
			<template slot="header">
				Usuarios ({{ rows.total }} registrados)
			</template>

			<template slot="buttons">
				<a :href="url.current + '/crear'" class="btn btn-success btn-sm">Crear nuevo</a>
			</template>

            <template slot="main">
            	<div class="table-responsive">
	               <table class="table table-bordered">
	               		<thead>
	               			<tr>
	               				<th>ID</th>
	               				<th>Nombre</th>
	               				<th>Email</th>
	               				<th>Teléfono Móvil</th>
	               				<th>Teléfono Fijo</th>
	               				<th>Estado</th>
	               				<th>Fecha creación</th>
	               				<th>Acciones</th>
	               			</tr>
	               		</thead>
	               		<tbody>
	               			<tr v-for="(value, index) in rows.data">
	               				<td>{{ value.id }}</td>
	               				<td>{{ value.nombre }}</td>
	               				<td>{{ value.email }}</td>
	               				<td>{{ value.telefono_fijo }}</td>
	               				<td>{{ value.telefono_movil }}</td>
	               				<td>
	               					<span v-html="verificarEstatus(value.activo)"></span>
	               				</td>
	               				<td>{{ value.created_at | dateTime }}</td>
	               				<td>
	               					<button class="btn btn-info btn-sm" @click="editarUsuario(value.id)" :title="'Editar usuario #' + value.id">
	               						<i class="fa fa-edit fa-fw"></i>
	               					</button>
	               					<button class="btn btn-danger btn-sm" v-if="value.activo" @click="desactivarUsuario(index)" :title="'Desactivar usuario #' + value.id">
	               						<i class="fa fa-ban fa-fw"></i>
	               					</button>
	               					<button class="btn btn-success btn-sm" v-if="!value.activo" @click="reactivarUsuario(index)" :title="'Reactivar usuario #' + value.id">
	               						<i class="fa fa-check fa-fw"></i>
	               					</button>
	               				</td>
	               			</tr>
	               		</tbody>
	               </table>
	               
	            </div>
	           
            </template>
            <template slot="footer">
            	<pagination :data="rows" align="right" @pagination-change-page="filtrar"></pagination>
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
				rows: {
					data: {},
					total: 0,
					last_page: 1
				},
				selects: {
					estados: [
						{label: 'Activo', value: 1},
						{label: 'Inactivo', value: 0}
					]
				},
				filters: {
					id: null,
					nombre: null,
					email: null,
					estado: null,
				}
			}
		},
		created: async function() {
            this.filtrar();
            //this.permisos = await this.$root.permissions('/');
        },
		methods: {
			limpiarMensajes() {
				this.success = [];
				this.error = [];
			},
			filtrar(page = 1) {
				this.limpiarMensajes();
				let load = loading(this);

				let request = new FormData;
				request.append('page', page);

				this.filters.id && request.append('id', this.filters.id);
				this.filters.nombre && request.append('nombre', this.filters.nombre);
				this.filters.email && request.append('email', this.filters.email);
				this.filters.estado && request.append('estado', this.filters.estado.value);

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
			limpiar() {
				this.filters = {
					id: null,
					nombre: null,
					email: null,
					estado: null,
				};
				this.filtrar(1);
			},
			verificarEstatus(estado) {
				let activo;
				if(estado == 1) {
					activo = '<span class="badge badge-success">Activo</span>';
				}
				else {
					activo = '<span class="badge badge-danger">Inactivo</span>';
				}
				return activo;
			},
			editarUsuario(id) {
				window.location = this.url.current + '/' + id + '/editar';
			},
			desactivarUsuario(key) {
				this.limpiarMensajes();

				let id = this.rows.data[key].id;
				swal.fire({
					text: '¿Esta seguro que desea deshabilitar el usuario #' + id + '?',
					icon: 'warning',
					showConfirmButton: true,
					showCancelButton: false,
				}).then(response => {
					if(response.value) {
						let load = loading(this);

						axios.post(this.url.current + '/desactivar', {'id': id})
						.then(response => {
							this.success = response.data;
							this.rows.data[key].activo = 0;
						})
						.catch(error => {
							this.error = this.$root.arrayResponse(error);
						})
						.finally(() => {
							 load.hide();
						})
					}
				});
			},
			reactivarUsuario(key) {
				this.limpiarMensajes();
				
				let id = this.rows.data[key].id;
				swal.fire({
					text: '¿Esta seguro que desea reactivar el usuario #' + id + '?',
					icon: 'warning',
					showConfirmButton: true,
					showCancelButton: false,
				}).then(response => {
					if(response.value) {
						let load = loading(this);

						axios.post(this.url.current + '/reactivar', {'id': id})
						.then(response => {
							this.success = response.data;
							this.rows.data[key].activo = 1;
						})
						.catch(error => {
							this.error = this.$root.arrayResponse(error);
						})
						.finally(() => {
							 load.hide();
						})
					}
				});
			}
		}
	}
</script>