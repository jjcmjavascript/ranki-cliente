<template >
<div id="wrapper">
    <!-- content-->
    <div class="content">
        <!--  section  -->
        <section class="grey-blue-bg small-padding scroll-nav-container">
            <div class="top-dec"></div>

            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="list-single-main-container ">
                            <!-- fixed-scroll-column  -->
                            <div class="fixed-scroll-column">
                                <div class="fixed-scroll-column-item fl-wrap">
                                    <div class="showshare sfcs fc-button">
                                        <i class="far fa-share-alt"></i><span>Compartir </span>
                                    </div>
                                    <div class="share-holder fixed-scroll-column-share-container">
                                        <div class="share-container  isShare"></div>
                                    </div>
                                    <a class="fc-button custom-scroll-link" href="#"><i class="far fa-heart"></i> <span>Favorito</span></a>
                                </div>
                            </div>
                            <!-- fixed-scroll-column end   -->
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
                                        <div class="score"><strong>Muy Bueno</strong>2 Reviews </div>
                                    </div>
                                </div>
                                <div class="review-score-detail">
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
                                <button :disabled="rows.cotizar" class="btn btn-warning btn-lg" style="width: 100%" @click="isLoged($event)">Cotizar <i class="far fa-bookmark"></i></button>
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
                                    <h3>Add Review</h3>
                                </div>
                                <!-- Add Review Box -->
                                <div id="add-review" class="add-review-box">
                                    <!-- Review Comment -->
                                    <form id="add-comment" class="add-comment  custom-form" name="rangeCalc">
                                        <fieldset>
                                            <div class="review-score-form fl-wrap">
                                                <div class="review-range-container">
                                                    <!-- review-range-item-->
                                                    <div class="review-range-item">
                                                        <div class="range-slider-title">Cleanliness</div>
                                                        <div class="range-slider-wrap ">
                                                            <input type="text" class="rate-range" data-min="0" data-max="5" name="rgcl" data-step="1" value="4">
                                                        </div>
                                                    </div>
                                                    <!-- review-range-item end -->
                                                    <!-- review-range-item-->
                                                    <div class="review-range-item">
                                                        <div class="range-slider-title">Comfort</div>
                                                        <div class="range-slider-wrap ">
                                                            <input type="text" class="rate-range" data-min="0" data-max="5" name="rgcl" data-step="1" value="1">
                                                        </div>
                                                    </div>
                                                    <!-- review-range-item end -->
                                                    <!-- review-range-item-->
                                                    <div class="review-range-item">
                                                        <div class="range-slider-title">Staf</div>
                                                        <div class="range-slider-wrap ">
                                                            <input type="text" class="rate-range" data-min="0" data-max="5" name="rgcl" data-step="1" value="5">
                                                        </div>
                                                    </div>
                                                    <!-- review-range-item end -->
                                                    <!-- review-range-item-->
                                                    <div class="review-range-item">
                                                        <div class="range-slider-title">Facilities</div>
                                                        <div class="range-slider-wrap">
                                                            <input type="text" class="rate-range" data-min="0" data-max="5" name="rgcl" data-step="1" value="3">
                                                        </div>
                                                    </div>
                                                    <!-- review-range-item end -->
                                                </div>
                                                <div class="review-total">
                                                    <span><input type="text" name="rg_total" value="" data-form="AVG({rgcl})" value="0"></span>
                                                    <strong>Your Score</strong>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label><i class="fal fa-user"></i></label>
                                                    <input type="text" placeholder="Your Name *" value="" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label><i class="fal fa-envelope"></i> </label>
                                                    <input type="text" placeholder="Email Address*" value="" />
                                                </div>
                                            </div>
                                            <textarea cols="40" rows="3" placeholder="Your Review:"></textarea>
                                        </fieldset>
                                        <button class="btn  big-btn flat-btn float-btn color2-bg" style="margin-top:30px">Submit Review <i class="fal fa-paper-plane"></i></button>
                                    </form>
                                </div>
                                <!-- Add Review Box / End -->
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

export default {
    components: {
        login: Login,
        Maps
    },
    data() {
        return {
            url: {
                current: this.$root.base_url + this.$route.path,
                permisos: {},
            },
            rows: {},
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
                    if(this.rows.latitud && this.rows.longitud) {
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
                    if(res.data.isLoged){
                        this.openContizar();
                    }else{
                        this.$root.openLogin();
                    }
                })
                .catch(err => {
                    this.alerta('error','Un error ha ocurrido', 'Lo sentimos su correo no pudo ser enviado.');
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

                    if ( value.value && value.value.trim().length > 20 ) {
                        this.start();

                        axios.post(this.url.current + '/cotizar' , {'comentario' : value.value, id : this.rows.id } )
                            .then(res => {
                                this.alerta('success', 'Exito!', 'Su cotizacion fue enviada.');
                            })
                            .catch(err => {
                                this.stop();
                                this.alerta('error','Un error ha ocurrido', err);
                            })

                    }else if (value.value){
                        this.alerta('error','Un error ha ocurrido', 'Porfavor ingrese su mensaje (mayor a 20 caracteres).');
                    }
                });
        },




    },

}
</script>
