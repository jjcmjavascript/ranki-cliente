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
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pl-1 pr-1" v-if="rows.data.length > 0" v-for="val in rows.data" >
                                    <div class="card">
                                        <img class="card-img-top" src="http://goplaceit.s3.amazonaws.com/propiedades/mexico/construerearmosproyectos/91839236050701756619557877236813463652389665941533814656466866664975708287859-64x64.jpg" alt=""></a>

                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {{val._propiedades.titulo}}

                                            </h5>
                                            <p class="card-text text-align-lef">
                                                Tipo : {{ val._propiedades._tipo_operacion.nombre }} <br>
                                                Moneda: {{val._propiedades._tipo_valor ? val._propiedades._tipo_valor.nombre : ''}}
                                                Monto : ${{val._propiedades.precio}}
                                            </p>
                                            <div class="geodir-category-footer fl-wrap">
                                                <br>
                                                <div class="geodir-opt-list">
                                                    <a href="#" class="geodir-js-booking"><i class="fal fa-trash"></i>
                                                        <span class="geodir-opt-tooltip">Borrar</span>
                                                    </a>
                                                    <a href="#" class="geodir-js-booking"><i class="fal fa-edit"></i>
                                                        <span class="geodir-opt-tooltip">Editar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
            activo: 1,
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
            }
        }
    },
    mounted() {
        this.iniciar();
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

        iniciar() {
            axios.post(this.url, {
                    estado: this.activo
                })
                .then((res) => {
                    this.rows = res.data.rows;
                })
                .finally(() => {

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
    }
}
</script>

<style scoped>

</style>
