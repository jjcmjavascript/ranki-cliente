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
                                <h2> Mis favoritos</h2>
                            </div>
                            <!-- price-opt-->
                            <!--div class="price-opt">
                                <span class="price-opt-title">Ordenar Por:</span>
                                <div class="listsearch-input-item">
                                    <select data-placeholder="Popularity" class="chosen-select no-search-select" @change="console.log($event)">
                                        <option>Popularidad</option>
                                        <option>Mayor Precio</option>
                                        <option>Menor Precio</option>
                                    </select>
                                </div>
                                <span class="price-opt-title"> &nbsp;&nbsp;Consultar Por:</span>
                                <div class="listsearch-input-item">

                                    <select data-placeholder="Popularity" class="chosen-select no-search-select" id="estavaina" @change="console.log($event)" @input="alert($event)">
                                        <option value="1">Activas</option>
                                        <option value="0">Inactivas</option>
                                    </select>
                                </div>
                            </div-->

                            <div class="row">
                                <div class="form-group col-xs-12 col-sm-6 col-lg-4">
                                    <label>Ordenar por</label>
                                    <select class="form-control">
                                        <option>Popularidad</option>
                                        <option>Mayor Precio</option>
                                        <option>Menor Precio</option>
                                    </select>
                                </div>
                                <div class="form-group col-xs-12 col-sm-6 col-lg-4">
                                    <label>Consultar Por</label>
                                    <select class="form-control">
                                        <option value="1">Activas</option>
                                        <option value="0">Inactivas</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- list-main-wrap-opt end-->
                        <!-- listing-item-container -->
                        <div class="listing-item-container init-grid-items fl-wrap three-columns-grid">
                            <!-- listing-item  -->
                            <div class="listing-item" v-if="rows.data.length > 0" v-for="val in rows.data">
                                <article class="geodir-category-listing fl-wrap">
                                    <div class="geodir-category-img">
                                        <a href="listing-single.html">
                                            <img src="http://goplaceit.s3.amazonaws.com/propiedades/mexico/construerearmosproyectos/91839236050701756619557877236813463652389665941533814656466866664975708287859-64x64.jpg" alt=""></a>

                                        <div :class="badgeColor(val._tipo_operacion)">
                                            {{ val._tipo_operacion.nombre }}
                                        </div>

                                        <div class="geodir-category-opt">
                                            <div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                            <div class="rate-class-name">
                                                <div class="score"><strong>Very Good</strong>27 Reviews </div>
                                                <span>5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="geodir-category-content fl-wrap title-sin_item">
                                        <div class="geodir-category-content-title fl-wrap">
                                            <div class="geodir-category-content-title-item">
                                                <h3 class="title-sin_map">
                                                    <a href="listing-single.html">
                                                        {{val.titulo}}
                                                    </a>
                                                </h3>
                                                <div class="geodir-category-location fl-wrap">
                                                    <a href="#" class="map-item"><i class="fas fa-map-marker-alt"></i>
                                                        {{val.numero_calle ? val.numero_calle : ''}}
                                                        {{val.calle ? val.calle : ''}}
                                                        /
                                                        {{val._comuna ? 'Comuna: '+val._comuna.nombre+',' : ''}}
                                                        {{val._region ? 'Region: '+val._region.nombre : ''}}

                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <p v-if="val.descripcion">
                                            <span v-html="$options.filters.nl2br(val.descripcion)">

                                            </span>
                                        </p>
                                        <!-- <ul class="facilities-list fl-wrap">
                                            <li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>
                                            <li><i class="fal fa-parking"></i><span>Parking</span></li>
                                            <li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                                            <li><i class="fal fa-utensils"></i><span> Restaurant</span></li>
                                        </ul> -->
                                        <div class="geodir-category-footer fl-wrap">
                                            <div class="geodir-category-price">
                                                {{val._tipo_valor ? val._tipo_valor.nombre : ''}}
                                                 <span>${{val.precio}}</span></div>
                                            <div class="geodir-opt-list">
                                                <a href="#" class="geodir-js-booking"><i class="fal fa-trash"></i>
                                                    <span class="geodir-opt-tooltip">Borrar</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>

                        </div>
                        <!-- listing-item-container end-->
                        <!-- pagination-->
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
            activo :1 ,
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
                total : 0,
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
            axios.post(this.url, {estado : this.activo})
                .then((res) => {
                    this.rows = res.data.rows;
                })
                .finally(()=>{

                })
        },
        badgeColor( tipo_operacion ){
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
