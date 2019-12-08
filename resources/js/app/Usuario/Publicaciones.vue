<template>

    <!--   list-single-main-item -->
    <div class="list-single-main-item fl-wrap" id="sec4">
        <div class="list-single-main-item-title fl-wrap">
            <h3>Available Rooms</h3>
        </div>
        <!--   rooms-container -->
        <div class="rooms-container fl-wrap">
            <!--  rooms-item -->
            <div class="rooms-item fl-wrap">
                <div class="rooms-media">
                    <img src="images/gal/1.jpg" alt="">
                    <div class="dynamic-gal more-photos-button" data-dynamicPath="[{'src': 'images/gal/slider/1.jpg'}, {'src': 'images/gal/slider/1.jpg'},{'src': 'images/gal/slider/1.jpg'}]">  View Gallery <span>3 photos</span> <i class="far fa-long-arrow-right"></i></div>
                </div>
                <div class="rooms-details">
                    <div class="rooms-details-header fl-wrap">
                        <span class="rooms-price">$81 <strong> / person</strong></span>
                        <h3>Standard Family Room</h3>
                        <h5>Max Guests: <span>3 persons</span></h5>
                    </div>
                    <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="facilities-list fl-wrap">
                        <ul>
                            <li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>
                            <li><i class="fal fa-bath"></i><span>1 Bathroom</span></li>
                            <li><i class="fal fa-snowflake"></i><span>Air conditioner</span></li>
                            <li><i class="fal fa-tv"></i><span> Tv Inside</span></li>
                            <li><i class="fas fa-concierge-bell"></i><span>Breakfast</span></li>
                        </ul>
                        <a href="rooms/room1.html" class="btn color-bg ajax-link">Details<i class="fas fa-caret-right"></i></a>
                    </div>
                </div>
            </div>
            <!--  rooms-item end -->
            <!--  rooms-item -->
            <div class="rooms-item fl-wrap">
                <div class="rooms-media">
                    <img src="images/gal/1.jpg" alt="">
                    <div class="dynamic-gal more-photos-button" data-dynamicPath="[{'src': 'images/gal/slider/1.jpg'}, {'src': 'images/gal/slider/1.jpg'}, {'src': 'images/gal/slider/1.jpg'} ]">View Gallery <span>3 photos</span> <i class="far fa-long-arrow-right"></i></div>
                </div>
                <div class="rooms-details">
                    <div class="rooms-details-header fl-wrap">
                        <span class="rooms-price">$122 <strong> / person</strong></span>
                        <h3>Superior Double Room</h3>
                        <h5>Max Guests: <span>4 persons</span></h5>
                    </div>
                    <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="facilities-list fl-wrap">
                        <ul>
                            <li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>
                            <li><i class="fal fa-parking"></i><span>Parking</span></li>
                            <li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                            <li><i class="fal fa-utensils"></i><span> Restaurant</span></li>
                        </ul>
                        <a href="rooms/room2.html" class="btn color-bg ajax-link">Details<i class="fas fa-caret-right"></i></a>
                    </div>
                </div>
            </div>
            <!--  rooms-item end -->
            <!--  rooms-item -->
            <div class="rooms-item fl-wrap">
                <div class="rooms-media">
                    <img src="images/gal/1.jpg" alt="">
                    <div class="dynamic-gal more-photos-button" data-dynamicPath="[{'src': 'images/gal/slider/1.jpg'},{'src': 'images/gal/slider/1.jpg'}, {'src': 'images/gal/slider/1.jpg'},{'src': 'images/gal/slider/1.jpg'}]"> View Gallery <span>4 photos</span> <i class="far fa-long-arrow-right"></i> </div>
                </div>
                <div class="rooms-details">
                    <div class="rooms-details-header fl-wrap">
                        <span class="rooms-price">$310 <strong> / person</strong></span>
                        <h3>Deluxe Single Room</h3>
                        <h5>Max Guests: <span>2 persons</span></h5>
                    </div>
                    <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="facilities-list fl-wrap">
                        <ul>
                            <li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>
                            <li><i class="fal fa-parking"></i><span>Parking</span></li>
                            <li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                            <li><i class="fal fa-utensils"></i><span> Restaurant</span></li>
                        </ul>
                        <a href="rooms/room3.html" class="btn color-bg ajax-link">Details<i class="fas fa-caret-right"></i></a>
                    </div>
                </div>
            </div>
            <!--  rooms-item end -->
        </div>
        <!--   rooms-container end -->
    </div>
    <!-- list-single-main-item end --
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
