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
                            <h2>EasyBook Hotel Booking System</h2>
                            <span class="section-separator"></span>
                            <h3>Let's start exploring the world together with EasyBook</h3>
                        </div>
                        <div class="main-search-input-wrap">
                            <div class="main-search-input fl-wrap">
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
                                            <div class="quantity-item">
                                                <label><i class="fas fa-male"></i> Adults</label>
                                                <div class="quantity">
                                                    <input type="number" min="1" max="3" step="1" value="1">
                                                </div>
                                            </div>
                                            <div class="quantity-item">
                                                <label><i class="fas fa-child"></i> Children</label>
                                                <div class="quantity">
                                                    <input type="number" min="0" max="3" step="1" value="0">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="main-search-button color2-bg" onclick="window.location.href='listing.html'">Search <i class="fal fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <!-- section end -->
            <!-- section-->
                <div class="container-fluid">
                    <h1 class="text-center mb-3">Bootstrap Multi-Card Carousel</h1>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner row w-100 mx-auto">
                            <div class="carousel-item col-md-4 active">
                                <div class="card">
                                    <img class="card-img-top img-fluid" src="http://placehold.it/800x600/f44242/fff" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="card-title">Card 1</h4>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid" src="http://placehold.it/800x600/418cf4/fff" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="card-title">Card 2</h4>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid" src="http://placehold.it/800x600/3ed846/fff" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="card-title">Card 3</h4>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid" src="http://placehold.it/800x600/42ebf4/fff" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="card-title">Card 4</h4>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid" src="http://placehold.it/800x600/f49b41/fff" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="card-title">Card 5</h4>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid" src="http://placehold.it/800x600/f4f141/fff" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="card-title">Card 6</h4>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item col-md-4">
                                <div class="card">
                                    <img class="card-img-top img-fluid" src="http://placehold.it/800x600/8e41f4/fff" alt="Card image cap">
                                    <div class="card-body">
                                        <h4 class="card-title">Card 7</h4>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
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
            axios.post(this.app_url + 'ultimas_propieades')
                .then(res => {
                    this.rows = res.data.propiedades;
                    this.list();
                })
                .catch(err => {

                })
        },


    }
}
$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

</script>
