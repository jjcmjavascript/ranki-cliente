<template>
<div>
    <!--  wrapper  -->
    <div id="wrapper" style="padding-top: 80px;">
        <!-- content-->
        <div class="content">
            <!--section -->
            <section class="hero-section" data-scrollax-parent="true" id="sec1">
                <div class="hero-parallax">
                    <div class="bg" data-bg="images/portada.jpg" data-scrollax="properties: { translateY: '200px' }"></div>
                    <div class="overlay op7"></div>
                </div>
                <div class="hero-section-wrap fl-wrap">
                    <div class="container">
                        <div class="home-intro">
                            <div class="section-title-separator"><span></span></div>
                            <h2>JM INMOBILIARIA</h2>
                            <span class="section-separator"></span>
                            <h3>¡Consigue el domilicio que buscas aqui!</h3>
                        </div>
                        <div class="main-search-input-wrap">
                            <div class="row">
                                <div class="col-xs-12 col-md-12">
                                    <v-select class="bg-light mt-1 col-xs-12 col-md-2" :clearable="false" label="nombre" :options="selects.subtipo_propiedad" v-model="filters.subtipo_propiedad" />
                                    <v-select class="bg-light mt-1 ml-1 col-xs-12 col-md-3" :clearable="false" label="nombre" :options="selects.tipos_operaciones" v-model="filters.tipos_operaciones" />
                                    <v-select class="bg-light mt-1 col-xs-12 ml-1 col-md-4 v-select-clearfix" label="nombre" :filterable="false" :clearable="false" v-model="filters.localidad" :options="selects.results" @search="onSearch">
                                        <template slot="no-options">
                                            Busque su propiedad
                                        </template>
                                        <template slot="option" slot-scope="option">
                                            <div class="selected d-center">
                                                {{ option.nombre }}, {{option.lateral}} <small class="float-right">{{option.tipo}}</small>
                                            </div>
                                        </template>
                                        <template slot="selected-option" slot-scope="option">
                                            <div class="selected d-center">
                                                {{ option.nombre }}, {{option.lateral}} <small class="float-right">{{option.tipo}}</small>
                                            </div>
                                        </template>
                                    </v-select>
                                    <a class="btn btn-warning col-md-1 mt-1 mt-1" type="button" :href="query">Ir</a>
                                    <button href="" class="btn btn-warning col-md-1 mt-1 mt-1  ml-1" @click="showHide()">
                                        <i class="fa fa-tasks" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="hidden-listing-filter fl-wrap">
                                <div class="row list-background text-center">
                                    <div class="form-group col-xs-12 col-md-3 mt-1">
                                        <label> Rango de Precio: {{filters.costo[0]}} - {{filters.costo[1]}} {{filters.tipos_valores ? filters.tipos_valores.nombre : ''}} </label>
                                        <vue-slider v-model="filters.costo" :interval="50000" :min="0" :max="10000000" />
                                    </div>
                                    <div class="form-group col-xs-12 col-md-2 mt-1">
                                        <label> Baños</label>
                                        <vue-slider v-model="filters.banio" :min="0" :max="9" />
                                    </div>
                                    <div class="form-group col-xs-12 col-md-2 mt-1">
                                        <label> Privado</label>
                                        <vue-slider v-model="filters.privado" :min="0" :max="9" />
                                    </div>
                                    <div class="form-group col-xs-12 col-md-2 mt-1">
                                        <label> Bodegas</label>
                                        <vue-slider v-model="filters.bodegas" :min="0" :max="9" />
                                    </div>
                                    <div class="form-group col-xs-12 col-md-2 mt-1">
                                        <label> Estacionamiento</label>
                                        <vue-slider v-model="filters.estacionamiento" :min="0" :max="9" />
                                    </div>
                                    <div class="form-group col-xs-12 col-lg-4 pl-1 pr-4">
                                        <label> Tipo de moneda</label>
                                        <v-select class="bg-light" label="nombre" :options="selects.tipos_valores" placeholder="Moneda" v-model="filters.tipos_valores" :clearable="false" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <!-- section end -->
            <!--section -->
            <section id="sec2">
                <div class="container">
                    <div class="section-title">
                        <div class="section-title-separator"><span></span></div>
                        <h2>Propiedades populares</h2>
                        <span class="section-separator"></span>
                        <p>Explora algunos de los sectores recomendados para conseguir la propiedad que buscas</p>
                    </div>
                </div>
                <!-- portfolio start -->
                <div class="gallery-items fl-wrap mr-bot spad home-grid">
                    <!-- gallery-item-->
                    <div class="gallery-item">
                        <div class="grid-item-holder">
                            <div class="listing-item-grid">
                                <div class="listing-counter"><span>79 </span> Propiedades</div>
                                <img :src="app_url+'images/portada.jpg'" alt="">
                                <div class="listing-item-cat">
                                    <h3><a href="listing.html">San Joaquín</a></h3>
                                    <div class="weather-grid" data-grcity="Rome"></div>
                                    <div class="clearfix"></div>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- gallery-item end-->
                    <!-- gallery-item-->
                    <div class="gallery-item gallery-item-second">
                        <div class="grid-item-holder">
                            <div class="listing-item-grid">
                                <img :src="app_url+'images/portada2.jpg'" alt="">
                                <div class="listing-counter"><span>43 </span> Propiedades</div>
                                <div class="listing-item-cat">
                                    <h3><a href="listing.html">La Florida</a></h3>
                                    <div class="weather-grid" data-grcity="La florida"></div>
                                    <div class="clearfix"></div>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- gallery-item end-->
                    <!-- gallery-item-->
                    <div class="gallery-item">
                        <div class="grid-item-holder">
                            <div class="listing-item-grid">
                                <div class="listing-counter"><span>23 </span> Propiedades</div>
                                <img :src="app_url+'images/portada.jpg'" alt="">
                                <div class="listing-item-cat">
                                    <h3><a href="listing.html">Macul</a></h3>
                                    <div class="weather-grid" data-grcity="Macul"></div>
                                    <div class="clearfix"></div>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- gallery-item end-->
                    <!-- gallery-item-->
                    <div class="gallery-item">
                        <div class="grid-item-holder">
                            <div class="listing-item-grid">
                                <div class="listing-counter"><span>57</span> Propiedades</div>
                                <img :src="app_url+'images/portada.jpg'" alt="">
                                <div class="listing-item-cat">
                                    <h3><a href="listing.html">Las condes</a></h3>
                                    <div class="weather-grid" data-grcity="Las condes"></div>
                                    <div class="clearfix"></div>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- gallery-item end-->
                    <!-- gallery-item-->
                    <div class="gallery-item">
                        <div class="grid-item-holder">
                            <div class="listing-item-grid">
                                <div class="listing-counter"><span>122</span> Propiedades</div>
                                <img :src="app_url+'images/portada.jpg'" alt="">
                                <div class="listing-item-cat">
                                    <h3><a href="listing.html">Ñuñoa</a></h3>
                                    <div class="weather-grid" data-grcity="Ñuñoa"></div>
                                    <div class="clearfix"></div>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- gallery-item end-->
                </div>
            </section>
            <!-- section end -->
            <!-- section-->
            <section class="grey-blue-bg">

                <!-- container-->
                <div class="container">
                    <div class="section-title">
                        <div class="section-title-separator"><span></span></div>
                        <h2>Propiedades recientes</h2>
                        <span class="section-separator"></span>
                        <p>Mira las últimas propiedades que han sido cargadas</p>
                    </div>
                </div>
                <!-- container end-->
                <!-- carousel -->
                <div class="list-carousel fl-wrap card-listing ">
                    <!--listing-carousel-->
                    <div class="listing-carousel  fl-wrap ">
                        <!--slick-slide-item-->
                        <div class="slick-slide-item" v-for="i in 8">
                            <!-- listing-item  -->
                            <div class="listing-item">
                                <article class="geodir-category-listing fl-wrap">
                                    <div class="geodir-category-img">
                                        <a href="listing-single.html"><img :src="app_url+'images/portada.jpg'" alt=""></a>
                                        <template v-if="rows[i-1] && rows[i-1]._tipo_operacion">
                                            <div :class="badgeColor( rows[i-1]._tipo_operacion)">
                                                {{ rows[i-1]._tipo_operacion.nombre }}
                                            </div>
                                        </template>
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
                                                        {{rows[i-1] && rows[i-1].titulo ? rows[i-1].titulo : ''}}
                                                    </a>
                                                </h3>
                                                <div class="geodir-category-location fl-wrap">
                                                    <a href="#" class="map-item"><i class="fas fa-map-marker-alt"></i>
                                                        {{rows[i-1] && rows[i-1].numero_calle ? rows[i-1].numero_calle : ''}}
                                                        {{rows[i-1] && rows[i-1].calle ? rows[i-1].calle : ''}}
                                                        /
                                                        {{rows[i-1] && rows[i-1]._comuna ? rows[i-1]._comuna.nombre+',' : ''}}
                                                        {{rows[i-1] && rows[i-1]._region ? rows[i-1]._region.nombre : ''}}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <template v-if="rows[i-1] && rows[i-1].descripcion">
                                            <p v-html="$options.filters.nl2br(rows[i-1].descripcion)"></p>
                                        </template>

                                        <div class="geodir-category-footer fl-wrap">
                                            <!--div class="btn btn-primary btn-lg btn-block">Precio
                                                <template v-if="rows[i-1] && rows[i-1].precio">
                                                    <span>{{rows[i-1]._tipo_valor.nombre}} :</span>
                                                    <span>{{rows[i-1].precio}}</span>
                                                </template>
                                            </div-->
                                            <div class="geodir-category-price ">
                                                Precio
                                                <br>
                                                <template v-if="rows[i-1] && rows[i-1].precio">
                                                    <span>{{rows[i-1]._tipo_valor.nombre}}</span>
                                                    <span>{{rows[i-1].precio | currency}}</span>
                                                </template>
                                            </div>
                                            <div class="geodir-opt-list">
                                                <a href="#" class="single-map-item" data-newlatitude="40.72956781" data-newlongitude="-73.99726866"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">Ubicar en el mapa</span></a>
                                                <template v-if="rows[i-1]">
                                                    <a target="_blank" :href="$root.base_url+'propiedad/'+rows[i-1].id+'/detalle'" class="single-map-item">
                                                        <i class="fal fa-eye "></i>
                                                        <span class="geodir-opt-tooltip">
                                                            Ver detalle
                                                        </span>
                                                    </a>
                                                </template>
                                                <template v-else>
                                                    <a href="#" class="single-map-item" title="Ir a la propiedad">
                                                        <i class="fal fa-eye "></i> </a>
                                                    <span class="geodir-opt-tooltip">
                                                        Ver detalle
                                                    </span>
                                                </template>
                                                <template v-if="rows[i-1] && rows[i-1].favorito">
                                                    <a href="#" class="geodir-js-favorite" @click.prevent="marcarFavorito(i-1)" :class="{ 'text-danger' : (rows[i-1]._favorito && rows[i-1]._favorito.length > 0)}">
                                                        <template v-if="rows[i-1]._favorito && rows[i-1]._favorito.length > 0">
                                                            <i class="fa fa-heart"></i>
                                                            <span class="geodir-opt-tooltip">
                                                                Eliminar favorito
                                                            </span>
                                                        </template>
                                                        <template v-else>
                                                            <i class="fal fa-heart"></i>
                                                            <span class="geodir-opt-tooltip">
                                                                Marcar favorito
                                                            </span>
                                                        </template>
                                                    </a>
                                                </template>
                                                <template v-else>
                                                    <a href="#" class="geodir-js-favorite">
                                                        <i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Marcar favorito</span>
                                                    </a>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <!-- listing-item end -->
                        </div>
                    </div>
                    <!--listing-carousel end-->
                    <div class="swiper-button-prev sw-btn"><i class="fa fa-long-arrow-left"></i></div>
                    <div class="swiper-button-next sw-btn"><i class="fa fa-long-arrow-right"></i></div>
                </div>
                <!--  carousel end-->
            </section>
            <!-- section end -->
        </div>
        <!-- content end-->
    </div>
    <!--wrapper end -->
    <!--footer -->
    <login />

    <!--register form end -->
    <a class="to-top"><i class="fa fa-angle-up"></i></a>
</div>
</template>
<script>
import Login from './Login.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    components: {
        login: Login,
        VueSlider,
    },
    data() {
        return {
            app_url: this.$root.base_url,
            rows: [],
            selects: {
                subtipo_propiedad: [],
                tipos_operaciones: [],
                results: [],
                tipos_valores : [],
            },
            numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

            filters: {
                subtipo_propiedad: null,
                tipos_operaciones: null,
                localidad: null,
                costo: [0, 0],
                subtipo_propiedad: null,
                tipo_operacion: null,
                banio: null,
                privado: null,
                bodegas: null,
                estacionamiento: null,
                localidad: null,
                tipos_propiedades: null,
                tipos_valores: null,
            },
        }
    },
    mounted() {
        this.iniciar();
    },
    computed: {

        query() {
            let {
                subtipo_propiedad: propiedad,
                tipos_operaciones: operacion,
                localidad,
                costo,
                banio,
                privado,
                bodegas,
                estacionamiento
            } = this.filters;

            // let query =
            //     `${this.app_url}propiedad/results?operacion=${operacion ? operacion.id: ''}&propiedad=${propiedad ? propiedad.id : ''}&localidad=${localidad && localidad.id ? localidad.id : ''}&tipo=${localidad && localidad.tipo ? localidad.tipo : ''}`;
            let query = this.app_url + 'propiedad/results?';

            for (let [key, val] of  Object.entries(this.filters) ){
                if(Array.isArray(val)){

                    if(val[1]){
                        query += '&costo_desde=' + val[0];
                        query += '&costo_hasta=' + val[1];
                    }

                }else if ( val ){
                    switch (key) {
                        case 'subtipo_propiedad':
                            query += '&propiedad=' + val.id;
                        break;
                        case 'tipos_operaciones':
                            query += '&operacion=' + val.id;
                        break;
                        case 'localidad':
                            query += '&localidad=' + val.id;
                            query += '&tipo=' + val.tipo;
                        break;
                        case 'tipos_valores':
                            query += '&id_tipo_valor=' + val.id;
                        break;
                        default:
                            if(val.id){
                                query += `&${key}=${val.id}`;
                            }else{
                                query += `&${key}=${val}`;
                            }
                        break;
                    }
                }
            }
            return query;
        }
    },
    methods: {
        showHide(){
            $(".hidden-listing-filter").slideToggle(400);
        },
        searchQuery() {
            window.location.href = this.query;
        },
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
            this.getPropiedades();
            this.getFiltros();
        },
        getPropiedades() {
            axios.post(this.app_url + 'ultimas_propiedades')
                .then(res => {
                    this.rows = res.data.propiedades;
                })
                .catch(err => {

                })
        },
        getFiltros() {
            axios.post(this.app_url + 'filtros')
                .then(res => {
                    this.selects.subtipo_propiedad = res.data.subtipo_propiedad;
                    this.selects.tipos_operaciones = res.data.tipos_operaciones;
                    this.filters.subtipo_propiedad = this.selects.subtipo_propiedad[0];
                    this.filters.tipos_operaciones = this.selects.tipos_operaciones[0];
                    this.selects.tipos_valores = res.data.tipos_valores;

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
        onSearch(search, loading) {
            loading(true);
            this.buscar(loading, search, this);
        },
        buscar(loading, search, self) {
            if (search.length > 2) {
                axios.post(this.app_url + 'obtener_comuna', {
                        nombre: search
                    })
                    .then(res => {
                        this.selects.results = res.data;
                    })
            }
            loading(false);
        },
        marcarFavorito(i) {
            let index = this.rows[i];
            this.start();

            axios.post(this.$root.base_url + 'propiedad/marcar', {
                    'id': index.id
                })
                .then(res => {
                    this.iniciar()
                    this.stop();
                })
                .catch(err => {
                    this.stop();
                    this.alerta('error', 'Un error ha ocurrido.', err);
                })
        }

    }
}
</script>

<style scoped>

    .list-background {
        background: rgba(2555,255,255,0.5) !important;
        border-radius: 0.25em !important;
    }

</style>
