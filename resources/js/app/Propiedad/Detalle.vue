<template >
<div id="wrapper">
<modal id="miModal">
    <template slot="header"> asd|</template>
    <template slot="main"> asdasd</template>
    <template slot="footer"> asd</template>

</modal>

    <!-- content-->
    <div class="content">
        <!--  section  -->
        <section class="grey-blue-bg small-padding scroll-nav-container">
            <div class="top-dec"></div>

            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="list-single-main-container ">

                            <div class="list-single-main-media fl-wrap" id="sec1">
                                <div class="single-slider-wrapper fl-wrap">
                                    <div class="slider-for fl-wrap">
                                        <div class="slick-slide-item image-popup"><img src="https://s1.latercera.com/wp-content/uploads/2019/06/portada-1.jpg" alt=""></div>
                                        <div class="slick-slide-item"><img src="https://www.welivesecurity.com/wp-content/uploads/2019/04/ciberataques-edificios-inteligentes.jpg" alt=""></div>
                                        <div class="slick-slide-item"><img src="https://www.solerpalau.com/es-es/blog/wp-content/uploads/2018/01/shutterstock_359459864-1.jpg" alt=""></div>

                                    </div>
                                    <div class="swiper-button-prev sw-btn"><i class="fal fa-long-arrow-left"></i></div>
                                    <div class="swiper-button-next sw-btn"><i class="fal fa-long-arrow-right"></i></div>
                                </div>
                                <div class="single-slider-wrapper fl-wrap">
                                    <div class="slider-nav fl-wrap">
                                        <div class="slick-slide-item"><img src="https://s1.latercera.com/wp-content/uploads/2019/06/portada-1.jpg" alt=""></div>
                                        <div class="slick-slide-item"><img src="https://www.welivesecurity.com/wp-content/uploads/2019/04/ciberataques-edificios-inteligentes.jpg" alt=""></div>
                                        <div class="slick-slide-item"><img src="https://www.solerpalau.com/es-es/blog/wp-content/uploads/2018/01/shutterstock_359459864-1.jpg" alt=""></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <!--  flat-hero-container -->
                        <div class="flat-hero-container fl-wrap">
                            <div class="box-widget-item-header fl-wrap ">
                                <h3>{{rows.titulo ? rows.titulo  : ''}}</h3>
                                <div class="listing-rating-wrap">
                                    <div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                </div>
                            </div>
                            <div class="list-single-hero-price fl-wrap">Precio<span>
                                    {{rows._tipo_valor ? rows._tipo_valor.nombre : ''}} {{rows.precio | currency}}</span></div>
                            <!--reviews-score-wrap-->
                            <div class="reviews-score-wrap fl-wrap">
                                <div class="rate-class-name-wrap fl-wrap">
                                    <div class="rate-class-name">
                                        <span>4.5</span>
                                        <div class="score"><strong>Muy Bueno</strong> {{ rows && rows._likes_count }} Me gusta </div>
                                    </div>
                                </div>

                                <div class="review-score-detail">
                                    <div class="col-xs-2">
                                        <template v-if="rows && rows.favorito">
                                            <a href="#" @click.prevent="marcarFavorito()" :class="{ 'text-danger' : (rows._favorito && rows._favorito.length > 0)}">
                                                <template v-if="rows._favorito && rows._favorito.length > 0">
                                                    <i class="fa fa-heart fa-2x" title="Eliminar Favorito"></i>
                                                </template>
                                                <template v-else>
                                                    <i class="fal fa-heart fa-2x" title="Agregar favorito"></i>
                                                </template>
                                            </a>
                                        </template>
                                        <template v-else>
                                            <a href="#">
                                                <i class="fal fa-heart fa-2x" title="Favorito"></i>
                                            </a>
                                        </template>
                                    </div>
                                    <div class="col-xs-2">
                                        <template v-if="rows && rows.likeable">
                                            <a href="#" @click.prevent="marcarLike()" class="text-info">
                                                <template v-if="rows._likes && rows._likes.length > 0">
                                                    <i class="fa fa-thumbs-up fa-2x" title="No me gusta"></i>
                                                </template>
                                                <template v-else>
                                                    <i class="fa fa-thumbs-o-up fa-2x" title="Me gusta"></i>
                                                </template>
                                            </a>
                                        </template>
                                        <template v-else>
                                            <a href="#" class="text-primary">
                                                <i class="fa fa-thumbs-o-up fa-2x" title="Me gusta"></i>
                                            </a>
                                        </template>
                                    </div>
                                    <div class="col-xs-2 col-md-2">
                                        <template >
                                            <a href="#" @click.prevent="openPuntuar()" class="text-warning">
                                                <template v-if="rows._puntuaciones && rows._puntuaciones.length > 0">
                                                    <i class="fa fa-star fa-2x" aria-hidden="true"></i>
                                                </template>
                                                <template v-else>
                                                    <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
                                                </template>
                                            </a>
                                        </template>
                                        <template >
                                            <a href="#" class="text-warning">
                                                <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </template>
                                    </div>
                                </div>
                                <div class="review-score-detail mt-2">
                                    <!-- review-score-detail-list-->
                                    <div class="review-score-detail-list">
                                        <div class="col-xs-12 mb-2">
                                            <label>Propiedad: </label>
                                            <small>
                                                {{rows._subtipo_propiedad ? rows._subtipo_propiedad.nombre : ''}}
                                            </small>
                                        </div>
                                        <div class="col-xs-12 mb-2">
                                            <label>Estado: </label>
                                            <small>
                                                {{rows._tipo_propiedad ? rows._tipo_propiedad.nombre : ''}}
                                            </small>
                                        </div>
                                        <div class="col-xs-12 mb-2">
                                            <label>Tipo: </label>
                                            <small>
                                                {{rows._tipo_operacion ? rows._tipo_operacion.nombre : ''}}
                                            </small>
                                        </div>
                                        <div class="col-xs-12 mb-2">
                                            <label>Periodicidad: </label>
                                            <small>
                                                {{rows._periodicidad_arriendo ? rows._periodicidad_arriendo.nombre : ''}}
                                            </small>
                                        </div>

                                    </div>
                                    <!-- review-score-detail-list end-->
                                </div>
                            </div>
                            <!-- reviews-score-wrap end -->
                            <div>
                                <button :disabled="!rows.cotizar" class="btn btn-warning btn-lg" style="width: 100%" @click="isLoged($event)">Cotizar <i class="far fa-bookmark"></i></button>
                            </div>
                        </div>
                        <!--   flat-hero-container end -->
                    </div>
                </div>
                <!--   row  -->
                <div class="row">
                    <!--   datails -->
                    <div class="col-md-8">
                        <div class="list-single-main-container ">
                            <!-- list-single-header end -->

                            <div class="list-single-main-item fl-wrap">
                                <div class="list-single-main-item-title fl-wrap">
                                    <h3>Descripción </h3>
                                </div>
                                <template v-if="rows.descripcion">
                                    <p v-html="$options.filters.nl2br(rows.descripcion)"> </p>
                                </template>
                                <!-- <a href="https://vimeo.com/166396229" class="btn flat-btn color-bg big-btn float-btn image-popup">
                                        Video Presentation <i class="fal fa-play"></i>
                                    </a> -->
                            </div>
                            <!--   list-single-main-item end -->
                            <!--   list-single-main-item -->
                            <div class="list-single-main-item fl-wrap" id="sec3">
                                <div class="list-single-main-item-title fl-wrap">
                                    <h3> Detalles de la Propiedad</h3>
                                </div>
                                <div class="listing-features fl-wrap">
                                    <ul>
                                        <li><i class="fal fa-bath" title="Baños"></i> Baños {{rows.banio ? rows.banio : 0}}</li>
                                        <li><i class="fal fa-car" title="Estacionamiento"></i> Estacionamiento {{rows.estacionamiento ? rows.estacionamiento : 0}}</li>
                                        <li><i class="fal fa-home" title="Bodega"></i> Bodega {{rows.bodega ? rows.bodega : 0}}</li>
                                        <li><i class="fal fa-lock" title="Privado"></i> Privado {{rows.privado ? rows.privado : 0}}</li>

                                    </ul>
                                </div>
                                <span class="fw-separator"></span>
                            </div>

                            <div class="list-single-main-item fl-wrap" id="sec6">
                                <div class="list-single-main-item-title fl-wrap">
                                    <h3>Puntuar Vivienda</h3>
                                </div>
                                <div class="form-group col-xs-12 col-md-6">
                                    <label>Comodidad</label>
                                    <StarRating v-model="rows.avg_comodidad" :show-rating="false" :read-only="true" />
                                </div>
                                <div class="form-group col-xs-12 col-md-6">
                                    <label>Estado</label>
                                    <StarRating v-model="rows.avg_estado" :show-rating="false" :read-only="true" />
                                </div>
                                <div class="form-group col-xs-12 col-md-6">
                                    <label>Servicios</label>
                                    <StarRating v-model="rows.avg_servicio" :show-rating="false" :read-only="true" />
                                </div>
                                <div class="form-group col-xs-12 col-md-6">
                                    <label>Facilidad</label>
                                    <StarRating v-model="rows.avg_facilidad" :show-rating="false" :read-only="true" />
                                </div>
                            </div>
                            <!-- list-single-main-item end -->
                        </div>
                    </div>
                    <!--   datails end  -->
                    <!--   sidebar  -->
                    <div class="col-md-4">
                        <!--box-widget-wrap -->
                        <div class="box-widget-wrap">

                            <div class="box-widget-item fl-wrap">
                                <div class="box-widget">
                                    <div class="box-widget-content">
                                        <div class="box-widget-item-header">
                                            <h3> Información de Contacto</h3>
                                        </div>
                                        <div class="box-widget-list">
                                            <ul>
                                                <li><span><i class="fal fa-envelope"></i> Correo :</span>
                                                    <span>
                                                        {{rows._usuario ? rows._usuario.email : 'Sin correo'}}
                                                    </span>
                                                </li>
                                                <template v-if="rows.codigo_telefono">
                                                    <li>
                                                        <span> <i class="fal fa-phone"></i> Numero :</span>
                                                        <span>({{rows.codigo_telefono ? rows.codigo_telefono : ''}})
                                                            {{rows.telefono ? rows.telefono : ''}}
                                                        </span>
                                                    </li>
                                                </template>
                                                <template v-if="rows.codigo_telefono2">
                                                    <li>
                                                        <span> <i class="fal fa-browser"></i> Otros Numero :</span>
                                                        <span>
                                                            ({{rows.codigo_telefono2 ? rows.codigo_telefono2 : ''}})
                                                            ({{rows.telefono2 ? rows.telefono2 : ''}})
                                                        </span>


                                                    </li>
                                                </template>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-sm-12">
                                <maps markers="simple" :zoom="maps.zoom" :locations="maps.locations" :center="maps.center" :type="this.maps.type"></maps>
                            </div>
                        </div>
                        <!--box-widget-wrap end -->
                    </div>
                    <!--   sidebar end  -->
                </div>
                <!--   row end  -->


            </div>
            <!--   container  end  -->
        </section>
        <!--  section  end-->
    </div>
    <!-- content end-->
    <login />
    <div class="limit-box fl-wrap"></div>


</div>
</template>

<script>
import Login from '../Login.vue';
import Maps from '../../components/Maps';
import modal from '../../components/Modal';
import StarRating from 'vue-star-rating'

export default {
    components: {
        login: Login,
        Maps,
        StarRating,
        modal
    },
    data() {
        return {
            url: {
                current: this.$root.base_url + this.$route.path,
                permisos: {},
            },
            puntuaciones: {
                comodidad: 0,
                estado: 0,
                servicio: 0,
                facilidad: 0,
            },
            rows: {
                avg_comodidad: 0,
                avg_estado: 0,
                avg_servicio: 0,
                avg_facilidad: 0,
            },
            maps: {
                type: '',
                center: [-33.4569397, -70.6482697],
                zoom: 17,
                locations: [-33.4569397, -70.6482697],
            },
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
            this.start();

            axios.post(this.url.current)
                .then(response => {
                    this.rows = response.data;
                    if (this.rows.latitud && this.rows.longitud) {
                        this.maps.center = this.maps.locations = [this.rows.latitud, this.rows.longitud];
                    }
                })
                .catch(error => {
                    this.alerta('error', 'Lo sentimos un error ha ocurrido.', error);
                })
                .finally(() => {
                    this.stop();
                    this.maps.type = 'streets-v8';
                })
        },
        isLoged() {
            axios.post(this.$root.base_url + 'isLoged')
                .then(res => {
                    if (res.data.isLoged) {
                        this.openContizar();
                    } else {
                        this.$root.openLogin();
                    }
                })
                .catch(err => {
                    this.alerta('error', 'Un error ha ocurrido', 'Lo sentimos su correo no pudo ser enviado.');
                });
        },
        openContizar() {
            this.$swal({
                    title: 'Cotizar esta propiedad',
                    html: "<textarea class='form-control' rows='2' id='miTextarea' > </textarea>",
                    showConfirmButton: true,
                    preConfirm() {
                        return miTextarea.value;
                    }
                })
                .then(value => {

                    if (value.value && value.value.trim().length > 20) {
                        this.start();

                        axios.post(this.url.current + '/cotizar', {
                                'comentario': value.value,
                                id: this.rows.id
                            })
                            .then(res => {
                                this.alerta('success', 'Exito!', 'Su cotizacion fue enviada.');
                            })
                            .catch(err => {
                                this.stop();
                                this.alerta('error', 'Un error ha ocurrido', err);
                            })

                    } else if (value.value) {
                        this.alerta('error', 'Un error ha ocurrido', 'Porfavor ingrese su mensaje (mayor a 20 caracteres).');
                    }
                });
        },
        marcarFavorito() {
            let index = this.rows;
            this.start();

            axios.post(this.$root.base_url + 'propiedad/marcar', {
                    'id': index.id
                })
                .then(res => {
                    this.rows = res.data.propiedad;
                    this.stop();
                })
                .catch(err => {
                    this.stop();
                    this.alerta('error', 'Un error ha ocurrido.', err);
                })
        },
        marcarLike() {
            let index = this.rows;
            this.start();

            axios.post(this.$root.base_url + 'propiedad/like', {
                    'id': index.id
                })
                .then(res => {
                    this.stop();
                    this.rows._likes = res.data.propiedad._likes;
                    this.rows._likes_count = res.data.propiedad._likes_count;
                })
                .catch(err => {
                    this.stop();
                    this.alerta('error', 'Un error ha ocurrido.', err);
                })
        },
        openPuntuar() {
            this.$swal({
                title : 'Agregar Puntuacion',
                showConfirmButton: true
                // html : `<StarRating v-model="rows.avg_comodidad" :show-rating="false" :read-only="true" /></StarRating>`
            })
        },


    },

}
</script>
