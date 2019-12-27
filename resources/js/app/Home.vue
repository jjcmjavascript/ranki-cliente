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
                            <!-- <div class="main-search-input fl-wrap">
                                <div class="main-search-input-item location" id="autocomplete-container">
                                    <span class="inpt_dec"><i class="fal fa-map-marker"></i></span>
                                    <input type="text" placeholder="Hotel , City..." class="autocomplete-input" id="autocompleteid2" value="" />
                                    <a href="#"><i class="fal fa-dot-circle"></i></a>
                                </div>
                                <div class="main-search-input-item main-date-parent main-search-input-item_small">
                                    <span class="inpt_dec"><i class="fal fa-calendar-check"></i></span> <input type="text" placeholder="When" name="main-input-search" value="" />
                                </div>
                                <div class="main-search-input-item">
                                    <div class="qty-dropdown fl-wrap">
                                        <div class="qty-dropdown-header fl-wrap"><i class="fal fa-users"></i> Persons</div>
                                        <div class="qty-dropdown-content fl-wrap">

                                                <div class="quantity-item"  v-for="subtipo in selects.subtipo_propiedad">
                                                    <label><i class="fas fa-male"></i> {{subtipo.nombre}}</label>
                                                    <div class="quantity">
                                                        <input type="text"  :value="subtipo.nombre">
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                </div>
                                <button class="main-search-button color2-bg" onclick="window.location.href='listing.html'">Search <i class="fal fa-search"></i></button>
                            </div> -->
                            <div class="row">
                                <div class="input-group">
                                    <div class="col-xs-12 col-md-12">
                                        <v-select class="bg-light mt-1 col-xs-12 col-md-3" :clearable="false" label="nombre" :options="selects.subtipo_propiedad" v-model="filters.subtipo_propiedad" />
                                        <v-select class="bg-light mt-1 ml-1 col-xs-12 col-md-3" :clearable="false" label="nombre" :options="selects.tipos_operaciones" v-model="filters.tipos_operaciones" />
                                        <v-select class="bg-light mt-1 col-xs-12 ml-1 col-md-4" label="nombre" :filterable="false"  v-model="filters.localidad" :options="selects.results" @search="onSearch" >
                                            <template slot="no-options">
                                                Busque su propiedad
                                            </template>
                                            <template slot="option" slot-scope="option">
                                                <div class="selected d-center">
                                                    {{ option.nombre }},{{option.lateral}} <small class="ml-2">{{option.tipo}}</small>
                                                </div>
                                            </template>
                                            <template slot="selected-option" slot-scope="option">
                                                <div class="selected d-center">
                                                    {{ option.nombre }},{{option.lateral}} <small class="ml-2">{{option.tipo}}</small>
                                                </div>
                                            </template>
                                        </v-select>
                                        <a class="btn btn-warning col-md-1 mt-1 mt-1" type="button" :href="query">Ir</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <!-- section end -->
            <!-- section-->
            <section class="grey-blue-bg">

                <!-- container-->
                <div class="container">
                    <div class="section-title">
                        <div class="section-title-separator"><span></span></div>
                        <h2>Recently Added Hotels</h2>
                        <span class="section-separator"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
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
                                            <div class="geodir-category-price">
                                                Precio
                                                <br>
                                                <template v-if="rows[i-1] && rows[i-1].precio">
                                                    <span>{{rows[i-1]._tipo_valor.nombre}}</span>
                                                    <span>{{rows[i-1].precio | currency}}</span>
                                                </template>
                                            </div>
                                            <div class="geodir-opt-list">
                                                <a href="#" class="single-map-item" data-newlatitude="40.72956781" data-newlongitude="-73.99726866"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">Ubicar en el mapa</span></a>
                                                <a href="#" class="geodir-js-favorite"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Marcar favorito</span></a>
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
// api/publicaciones/recientes
export default {
    components: {
        login: Login,
    },
    data() {
        return {
            app_url: this.$root.base_url,
            rows: [],
            selects: {
                subtipo_propiedad: [],
                tipos_operaciones: [],
                results: []
            },
            filters: {
                subtipo_propiedad: null,
                tipos_operaciones: null,
                localidad:null,
            }
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
                localidad
            } = this.filters;

            let query =
                `${this.app_url}propiedad/results?operacion=${operacion ? operacion.id: ''}&propiedad=${propiedad ? propiedad.id : ''}&localidad=${localidad && localidad.id ? localidad.id : ''}&tipo=${localidad && localidad.tipo ? localidad.tipo : ''}`;

            return query;
        }
    },
    methods: {
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
            axios.post(this.app_url + 'ultimas_propieades')
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

    }
}
</script>
