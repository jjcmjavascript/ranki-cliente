<template>
	<div class="col-lg-12">
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
           		</div>
            </template>
        </panel>

        <panel type="crud" footer-class="hidden">
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
	               			</tr>
	               		</thead>
	               		<tbody>
	               			<tr v-for="(value, index) in rows.data">
	               				<td>{{ value.id }}</td>
	               				<td>{{ value.nombre }}</td>
	               				<td>{{ value.email }}</td>
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
				filters: {
					id: null,
					nombre: null,
					email: null
				}
			}
		},
		created: async function() {
            this.filtrar();
            //this.permisos = await this.$root.permissions('/');
        },
		methods: {
			filtrar(page = 1) {
				let load = loading(this);

				let request = new FormData;
				request.append('page', page);

				this.filters.id && request.append('id', this.filters.id);
				this.filters.nombre && request.append('nombre', this.filters.nombre);
				this.filters.email && request.append('email', this.filters.email);

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
					email: null
				};
			}
		}
	}
</script>