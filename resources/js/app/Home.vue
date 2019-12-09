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
                        <div class="slick-slide-item" v-for="i in 10">
                            <!-- listing-item  -->
                            <div class="listing-item">
                                <article class="geodir-category-listing fl-wrap">
                                    <div class="geodir-category-img">
                                        <a href="listing-single.html"><img :src="app_url+'images/portada.jpg'" alt=""></a>

                                        <div class="sale-window">Sale 20%</div>
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
                                                <h3 class="title-sin_map"><a href="listing-single.html">Premium Plaza Hotel</a></h3>
                                                <div class="geodir-category-location fl-wrap"><a href="#" class="map-item"><i class="fas fa-map-marker-alt"></i> 27th Brooklyn New York, USA</a></div>
                                            </div>
                                        </div>
                                        <p>Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                                        <ul class="facilities-list fl-wrap">
                                            <li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>
                                            <li><i class="fal fa-parking"></i><span>Parking</span></li>
                                            <li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                                            <li><i class="fal fa-utensils"></i><span> Restaurant</span></li>
                                        </ul>
                                        <div class="geodir-category-footer fl-wrap">
                                            <div class="geodir-category-price">Awg/Night <span>$ 320</span></div>
                                            <div class="geodir-opt-list">
                                                <a href="#" class="single-map-item" data-newlatitude="40.72956781" data-newlongitude="-73.99726866"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map</span></a>
                                                <a href="#" class="geodir-js-favorite"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save</span></a>
                                                <a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>
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
        }
    },

}
</script>
