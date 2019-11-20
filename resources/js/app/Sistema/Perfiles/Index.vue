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
						<label class="font-weight-bold">Estado</label>
						<v-select :options="selects.estados" v-model="filters.estado"></v-select>
               		</div>
           		</div>
            </template>
        </panel>

        <panel type="crud" :footer-class="rows.last_page == 1 ? 'd-none' : ''">
			<template slot="header">
				Perfiles ({{ rows.total }} registrados)
			</template>

			<template slot="buttons">
				<button class="btn btn-success btn-sm" data-toggle="modal" data-target="#modalCrearPerfil">Crear nuevo</button>
			</template>

            <template slot="main">
            	<div class="table-responsive">
	               <table class="table table-bordered">
	               		<thead>
	               			<tr>
	               				<th>ID</th>
	               				<th>Nombre</th>
	               				<th>Estado</th>
	               				<th>Fecha creación</th>
	               				<th v-if="table.showActions">Acciones</th>
	               			</tr>
	               		</thead>
	               		<tbody>
	               			<template v-if="table.filtrando">
	               				<tr>
	               					<td :colspan="table.showActions ? 8 : 7">
	               						Buscando datos
	               					</td>
	               				</tr>
	               			</template>

	               			<template v-else-if="!table.filtrando && Object.keys(rows.data).length>0">
		               			<tr v-for="(value, index) in rows.data">
		               				<td>{{ value.id }}</td>
		               				<td>{{ value.nombre }}</td>
		               				<td>
		               					<span v-html="verificarEstatus(value.activo)"></span>
		               				</td>
		               				<td>{{ value.created_at | dateTime }}</td>
		               				<td>
		               					<button class="btn btn-info btn-sm" @click="editar(index)" :title="'Editar perfil #' + value.id">
		               						<i class="fa fa-edit fa-fw"></i>
		               					</button>
		               					<button class="btn btn-danger btn-sm" v-if="value.activo" @click="desactivar(index)" :title="'Desactivar perfil #' + value.id">
		               						<i class="fa fa-ban fa-fw"></i>
		               					</button>
		               					<button class="btn btn-success btn-sm" v-if="!value.activo" @click="reactivar(index)" :title="'Reactivar perfil #' + value.id">
		               						<i class="fa fa-check fa-fw"></i>
		               					</button>
		               				</td>
		               			</tr>
	               			</template>

	               			<template v-else>
		               			<tr>
		               				<td :colspan="table.showActions ? 8 : 7">
		               					Busqueda finalizada. No se han encontrado datos
		               				</td>
		               			</tr>
		               		</template>
	               		</tbody>
	               </table>
	            </div>
	            <pagination :data="rows" align="right" @pagination-change-page="filtrar"></pagination>
            </template>
        </panel>

        <modal id="modalCrearPerfil">
        	<template slot="header">
        		Nuevo perfil
        	</template>
        	<template slot="main">
        		<div class="row">
        			<div class="form-group col-xs-12 col-lg-12">
        				<label>Nombre</label>
        				<input type="text" class="form-control" v-model="perfil.nombre" />
        			</div>
        		</div>
        	</template>
        	<template slot="footer">
        		<button class="btn btn-success" @click="crear()">Guardar</button>
        	</template>
        </modal>

        <modal id="modalEditarPerfil">
        	<template slot="header">
        		Editar perfil #<span v-if="perfil.key != null">{{ rows.data[perfil.key].id }}</span>
        	</template>
        	<template slot="main">
        		<div class="row">
        			<div class="form-group col-xs-12 col-lg-12">
        				<label>Nombre</label>
        				<input type="text" class="form-control" v-model="perfil.nombre" />
        			</div>
        		</div>
        	</template>
        	<template slot="footer">
        		<button class="btn btn-success" @click="actualizar()">Guardar</button>
        	</template>
        </modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				error: [],
				success: [],
				url: {
                    current: this.$root.base_url + '/sistema/perfiles',
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
					estado: null,
				},
				perfil: {
					key: null,
					nombre: null
				},
				table: {
					filtrando: false,
					showActions: true
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
			limpiar() {
				this.filters = {
					id: null,
					nombre: null,
					estado: null,
				};
				this.filtrar(1);
			},
			limpiarPerfil() {
				this.perfil = {
					key: null,
					nombre: null
				};
			},
			filtrar(page = 1) {
				this.limpiarMensajes();
				this.table.filtrando = true;
				let load = loading(this);

				let request = new FormData;
				request.append('page', page);

				this.filters.id && request.append('id', this.filters.id);
				this.filters.nombre && request.append('nombre', this.filters.nombre);
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
					this.table.filtrando = false;
				})
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
			crear() {
				this.limpiarMensajes();
				let load = loading(this);

				let request = new FormData;
				this.perfil.nombre && request.append('nombre', this.perfil.nombre);

				axios.post(this.url.current + '/guardar', request)
				.then(response => {
					this.success = response.data.mensaje;
					this.rows.data.unshift(response.data.perfil);
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
				})
				.finally(() => {
					load.hide();
					this.limpiarPerfil();
					$('#modalCrearPerfil').modal('hide');
				})
			},
			editar(key) {
				this.perfil.key = key;
				this.perfil.nombre = this.rows.data[key].nombre;
				$('#modalEditarPerfil').modal();

				$('#modalEditarPerfil').on('hide.bs.modal', () => {
					this.limpiarPerfil();
				});
			},
			actualizar() {
				this.limpiarMensajes();
				let load = loading(this);

				let key = this.perfil.key;
				let request = new FormData;
				request.append('id', this.rows.data[key].id);
				this.perfil.nombre && request.append('nombre', this.perfil.nombre);

				axios.post(this.url.current + '/guardar', request)
				.then(response => {
					this.success = response.data.mensaje;
					this.rows.data[key] = response.data.perfil;
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
				})
				.finally(() => {
					load.hide();
					$('#modalEditarPerfil').modal('hide');
				})
			},
			desactivar(key) {
				this.limpiarMensajes();

				let id = this.rows.data[key].id;
				swal.fire({
					text: '¿Esta seguro que desea deshabilitar el Perfil #' + id + '?',
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
			reactivar(key) {
				this.limpiarMensajes();
				
				let id = this.rows.data[key].id;
				swal.fire({
					text: '¿Esta seguro que desea reactivar el Perfil #' + id + '?',
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