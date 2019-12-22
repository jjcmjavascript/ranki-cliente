<template>
<!--  -->
<section class="grey-blue-bg small-padding" id="sec1">
    <div class="container">
        <div class="row">
            <!--listing -->
            <div class="col-md-12">
                <div class="mobile-list-controls fl-wrap mar-bot-cont">
                    <div class="mlc show-list-wrap-search fl-wrap"><i class="fal fa-filter"></i> Filter</div>
                </div>

                <div class="col-list-wrap fw-col-list-wrap">
                    <!-- list-main-wrap-->
                    <div class="list-main-wrap fl-wrap card-listing">
                        <!-- list-main-wra
                            p-opt-->
                        <div class="list-main-wrap-opt fl-wrap">
                            <div class="list-main-wrap-title fl-wrap col-title">
                                <h2> Mis Publicaciones</h2>
                            </div>
                            <div class="row">
                                <div class="form-group col-xs-12 col-sm-6 col-lg-4">
                                    <label>Ordenar por</label>
                                    <v-select class="clear-none" :options="selects.orden" v-model="filters.orden" @input="filtrar()"></v-select>
                                </div>
                                <div class="form-group col-xs-12 col-sm-6 col-lg-4">
                                    <label>Consultar Por</label>
                                    <v-select class="clear-none" :options="selects.estados" v-model="filters.estado" @input="filtrar()"></v-select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pl-1 pr-1 mb-2" v-if="!filtrando && rows.data.length > 0" v-for="(val,i) in rows.data" >
                                    <div class="card">
                                        <img class="card-img-top" src="http://goplaceit.s3.amazonaws.com/propiedades/mexico/construerearmosproyectos/91839236050701756619557877236813463652389665941533814656466866664975708287859-64x64.jpg" alt=""></a>

                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {{val.titulo.toUpperCase()}}

                                            </h5>
                                            <p class="card-text text-align-lef">
                                                Tipo : {{ val._tipo_operacion.nombre }} <br>
                                                Moneda: {{val._tipo_valor ? val._tipo_valor.nombre : ''}}
                                                Monto : {{val.precio | currency}} <br>
                                                Estado : {{val.estado == 1 ? 'ACTIVA' : 'INACTIVA'}} <br>

                                            </p>
                                            <div class="geodir-category-footer fl-wrap">
                                                <br>
                                                <div class="geodir-opt-list">
                                                    <a target="_blank" :href="`${$root.base_url}propiedad/${val.id}/detalle`" class="geodir-js-booking"><i class="fal fa-eye"></i>
                                                        <span class="geodir-opt-tooltip">Detalle</span>
                                                    </a>
                                                    <a v-if="val.estado == 1" href="#" class="geodir-js-booking" @click="deshabilitar(i)"><i class="fal fa-trash"></i>
                                                        <span class="geodir-opt-tooltip">Deshabilitar</span>
                                                    </a>
                                                    <a v-else href="#" class="geodir-js-booking" @click="reactivar(i)"><i class="fal fa-check"></i>
                                                        <span class="geodir-opt-tooltip">Reactivar</span>
                                                    </a>
                                                    <a :href="$root.base_url+'propiedad/'+val.id+'/editar'" class="geodir-js-booking"><i class="fal fa-edit"></i>
                                                        <span class="geodir-opt-tooltip">Editar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="!filtrando">Sin información para mostrar</div>
                            </div>
                        </div>

                        <div class="pagination" v-if="rows.total > 15">
                            <a href="#" class="prevposts-link"><i class="fa fa-caret-left"></i></a>
                            <a href="#">1</a>
                            <a href="#" class="current-page">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#" class="nextposts-link"><i class="fa fa-caret-right"></i></a>
                        </div>
                        <!-- pagination end-->
                    </div>
                    <!-- list-main-wrap end-->
                </div>
                <!--col-list-wrap end -->
            </div>
            <!--listing  end-->
        </div>
        <!--row end-->
    </div>
</section>
<!--section end -->
</template>
<script>
export default {
    data() {
        return {
            url: this.$root.base_url + this.$route.path,
            usuario: {
                nombre: null,
            },
            filtrando: false,
            rows: {
                current_page: 0,
                data: [],
                first_page_url: null,
                from: null,
                last_page: null,
                last_page_url: null,
                next_page_url: null,
                path: null,
                per_page: null,
                prev_page_url: null,
                total: 0,
            },
            filters: {
                estado: {'label': 'Activo', value: 1},
                orden: {'label': 'Fecha de creación', value: 1},
            },
            selects: {
                estados: [
                    {'label': 'Activo', value: 1},
                    {'label': 'Inactivo', value: 0}
                ],
                orden: [
                    {'label': 'Fecha de favorito', value: 1},
                    {'label': 'Popularidad', value: 2},
                    {'label': 'Mayor Precio', value: 3},
                    {'label': 'Menor Precio', value: 4},

                ],
            }
        }
    },
    mounted() {
        //document.querySelector('html').style['overflow-y'] = 'auto';
        this.filtrar();
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

        filtrar() {
            this.start();
            this.filtrando = true;

            let request = new FormData;
            this.filters.estado && request.append('estado', this.filters.estado.value);
            this.filters.orden && request.append('orden', this.filters.orden.value);

            axios.post(this.url, request)
            .then((res) => {
                this.rows = res.data.rows;
            })
            .finally(() => {
                this.stop();
                this.filtrando = false;
            })
        },

        badgeColor(tipo_operacion) {
            switch (tipo_operacion.id) {
                case 11:
                    return 'sale-window big-sale-two '
                    break;
                case 12:
                    return 'sale-window big-sale'
                    break;
                case 13:
                    return
                    break;
            }
        },

        deshabilitar(index){
            this.start()
            axios.post( window.origin+'/propiedad/desactivar' ,{id : this.rows.data[index].id} )
            .then( (res ) =>{
                this.alerta('success', 'Exito','Propiedad desactivada.');
                this.rows.data[index] = res.data.propiedad;
                this.$forceUpdate();
            })
            .catch(err=>{
                this.stop();
                this.alerta('error', 'Un error ha ocurrido',err);
            })
        },

        reactivar(index){
            this.start()
            axios.post( window.origin+'/propiedad/reactivar' ,{id : this.rows.data[index].id} )
            .then( (res ) =>{
                this.alerta('success', 'Exito','Propiedad reactivada.');
                this.rows.data[index] = res.data.propiedad;
                this.$forceUpdate();

            })
            .catch(err=>{
                this.stop();
                this.alerta('error', 'Un error ha ocurrido', err );
            })
        },

    }
}
</script>

<style scoped>

</style>
