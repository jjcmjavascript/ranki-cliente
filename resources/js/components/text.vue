
    <div class="content">
        <!-- Map -->

        <!-- <div class="map-container column-map right-pos-map fix-map hid-mob-map">
            <div id="map-main"></div>
            <ul class="mapnavigation">
                <li><a href="#" class="prevmap-nav"><i class="fas fa-caret-left"></i> Prev</a></li>
                <li><a href="#" class="nextmap-nav">Next <i class="fas fa-caret-right"></i></a></li>
            </ul>
            <div class="map-close"><i class="fas fa-times"></i></div>
            <input id="pac-input" name="pacint" class="controls fl-wrap controls-mapwn" type="text" placeholder="What Nearby?">
        </div> -->

        <!-- Map end -->
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-6 pr-0" >
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 pl-0">
                <div class="listing-item-container init-grid-items fl-wrap" v-if="selected">
                    <!-- listing-item  -->
                    <div class="listing-item" style="width: 100%">
                        <article class="geodir-category-listing fl-wrap">
                            <div class="geodir-category-img">
                                <a href="listing-single.html"><img :src="$root.base_url + 'images/casa.jpg'" alt=""></a>
                                <!-- <div class="listing-avatar">
                                  <a href="author-single.html"><img src="images/avatar/1.jpg" alt="">
                                  </a>
                                     <span class="avatar-tooltip">Added By  <strong>Alisa Noory</strong></span>
                                </div> -->
                                <div class="sale-window">Sale 20%</div>
                                <div class="geodir-category-opt">
                                    <div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                    <div class="rate-class-name">
                                        <div class="score"><strong>Very Good</strong>27 Reviews </div>
                                        <span>5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="geodir-category-content fl-wrap">
                                <div class="geodir-category-content-title fl-wrap">
                                    <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map">
                                            <a href="listing-single.html">
                                                {{selected.titulo.toUpperCase()}}
                                            </a>
                                        </h3>
                                        <div class="geodir-category-location fl-wrap">
                                            <a href="#" class="map-item"><i class="fas fa-map-marker-alt"></i>
                                                {{selected && selected.numero_calle ? selected.numero_calle : ''}}
                                                {{selected && selected.calle ? selected.calle : ''}}
                                                /
                                                {{selected && selected._comuna ? selected._comuna.nombre+',' : ''}}
                                                {{selected && selected._region ? selected._region.nombre : ''}}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Tipo : {{ selected._tipo_operacion.nombre }} <br>
                                    Moneda: {{selected._tipo_valor ? selected._tipo_valor.nombre : ''}}
                                    Monto : {{selected.precio | currency}} <br>
                                    <!-- Estado : {{selected.estado == 1 ? 'ACTIVA' : 'INACTIVA'}} <br> -->
                                    Propiedad : {{selected._subtipo_propiedad ? selected._subtipo_propiedad.nombre : ''}}
                                    <table class="table table-responsive">
                                        <tr>
                                            <td>
                                                <i style="color:#3AACED;" class="fal fa-bath" title="Baños"></i> {{selected.banio ? selected.banio : 0}}
                                            </td>
                                            <td>
                                                <i style="color:#3AACED;" class="fal fa-car" title="Estacionamiento"></i> {{selected.estacionamiento ? selected.estacionamiento : 0}}
                                            </td>
                                            <td>
                                                <i style="color:#3AACED;" class="fal fa-home" title="Bodega"></i> {{selected.bodega ? selected.bodega : 0}}
                                            </td>
                                            <td>
                                                <i style="color:#3AACED;" class="fal fa-lock" title="Privado"></i> {{selected.privado ? selected.privado : 0}}
                                            </td>
                                        </tr>
                                    </table>
                                </p>


                                <!-- <ul class="facilities-list fl-wrap">
                                      <li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>
                                      <li><i class="fal fa-parking"></i><span>Parking</span></li>
                                      <li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                                      <li><i class="fal fa-utensils"></i><span> Restaurant</span></li>
                                  </ul> -->
                                <div class="geodir-category-footer fl-wrap">
                                    <div class="geodir-category-price">
                                        Precio
                                        <br>
                                        <template v-if="selected && selected.precio">
                                            <span>{{selected._tipo_valor.nombre}}</span>
                                            <span>{{selected.precio | currency}}</span>
                                        </template>
                                    </div>
                                    <div class="geodir-opt-list">
                                        <a target="_blank" :href="`${$root.base_url}propiedad/${selected.id}/detalle`" class="geodir-js-booking"><i class="fal fa-eye"></i>
                                            <span class="geodir-opt-tooltip">Detalle</span>
                                        </a>
                                        <a href="#" class="geodir-js-favorite"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save</span></a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <!--col-list-wrap -->
        <div class="col-list-wrap left-list">
            <div class="mobile-list-controls fl-wrap mt-5">
                <div class="container">
                    <div class="mlc show-hidden-column-map schm text-center"><i class="fal fa-map-marked-alt"></i> Show Map</div>
                    <div class="mlc show-list-wrap-search"><i class="fal fa-filter"></i> Filter</div>
                </div>
            </div>
            <!--list-wrap-search   -->
            <div class="list-wrap-search fl-wrap lws_mobile" id="lisfw">
                <div class="container">
                    <div class="row mt-5">
                        <v-select class="mt-1 col-xs-12 col-md-3" label="nombre" :options="selects.tipos_operaciones" v-model="filters.tipo_operacion" :clearable="false"/>
                        <v-select class="ml-1 mt-1 col-xs-12 col-md-3" label="nombre" :options="selects.subtipos_propiedades" v-model="filters.subtipo_propiedad" :clearable="false"/>
                        <v-select label="nombre" :filterable="false" :clearable="false" v-model="filters.localidad" :options="selects.results" @search="onSearch" class="ml-1 mt-1 col-md-5 v-select-clearfix">
                            <template slot="no-options">
                                Busque su propiedad
                            </template>
                            <template slot="option" slot-scope="option">
                                <div class="selected d-center">
                                    {{ option.nombre }}, {{option.lateral}} <small class="float-right">{{option.tipo}}</small>
                                </div>
                            </template>
                            <template slot="selected-option" slot-scope="option" class="clearfix">
                                <div class="selected d-center">
                                    {{ option.nombre }}, {{option.lateral}} <small class="float-right">{{option.tipo}}</small>
                                </div>
                            </template>
                        </v-select>

                    </div>
                    <div class="search-opt-wrap fl-wrap">
                        <div class="search-opt-wrap-container">
                            <!-- col-list-search-input-item -->
                            <div class="search-input-item midd-input">
                                <div class="col-list-search-input-item fl-wrap">
                                    <div class="quantity-item">
                                        <label>Baños</label>
                                        <div class="quantity">
                                            <input type="number" step="1" maxlength="2" v-model="filters.banio">
                                        </div>
                                    </div>
                                    <div class="quantity-item">
                                        <label>Privado</label>
                                        <div class="quantity">
                                            <input type="number" step="1" maxlength="2" v-model="filters.privado">
                                        </div>
                                    </div>
                                    <div class="quantity-item">
                                        <label>Bodegas</label>
                                        <div class="quantity">
                                            <input type="number" min="0" maxlength="2" step="1" v-model="filters.bodegas">
                                        </div>
                                    </div>
                                    <div class="quantity-item">
                                        <label>Estacionamiento</label>
                                        <div class="quantity">
                                            <input type="number" min="0" maxlength="2" step="1" v-model="filters.estacionamiento">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="search-input-item small-input ">
                                <div class="col-list-search-input-item fl-wrap">
                                    <button class="header-search-button" @click="filtrar()">Buscar
                                        <i class="far fa-search"></i>
                                    </button>
                                </div>
                                <br>
                            </div>
                            <!-- col-list-search-input-item end -->
                            <!-- hidden-listing-filter -->
                            <div class="hidden-listing-filter fl-wrap">
                                <div class="row">
                                    <div class="col-md-4">
                                        <!--col-list-search-input-item -->
                                        <div class="col-list-search-input-item fl-wrap">
                                            <h4>otros</h4>
                                            <div class="search-opt-container fl-wrap">
                                                <ul class="fl-wrap filter-tags">
                                                    <li class="five-star-rating">
                                                        <input id="check-aa2" type="checkbox" name="check" checked>
                                                        <label for="check-aa2"><span class="listing-rating card-popup-rainingvis" data-starrating2="5"><span>Por Definir</span></span></label>
                                                    </li>
                                                    <!-- <li class="four-star-rating">
                                                        <input id="check-aa3" type="checkbox" name="check">
                                                        <label for="check-aa3"><span class="listing-rating card-popup-rainingvis" data-starrating2="5"><span>4 Star</span></span></label>
                                                    </li>
                                                    <li class="three-star-rating">
                                                        <input id="check-aa4" type="checkbox" name="check">
                                                        <label for="check-aa4"><span class="listing-rating card-popup-rainingvis" data-starrating2="5"><span>3 Star</span></span></label>
                                                    </li> -->
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <!--col-list-search-input-item -->
                                        <div class="col-list-search-input-item fl-wrap">
                                            <h4>Otros dos</h4>
                                            <div class="search-opt-container fl-wrap">
                                                <!-- Checkboxes -->
                                                <ul class="fl-wrap filter-tags half-tags">
                                                    <li>
                                                        <input id="check-aaa5" type="checkbox" name="check" checked>
                                                        <label for="check-aaa5">Por definir</label>
                                                    </li>
                                                    <!-- <li>
                                                        <input id="check-bb5" type="checkbox" name="check" checked>
                                                        <label for="check-bb5">Parking</label>
                                                    </li>
                                                    <li>
                                                        <input id="check-dd5" type="checkbox" name="check">
                                                        <label for="check-dd5">Fitness Center</label>
                                                    </li> -->
                                                </ul>
                                                <!-- Checkboxes end -->
                                                <!-- Checkboxes -->
                                                <!-- <ul class="fl-wrap filter-tags half-tags">
                                                    <li>
                                                        <input id="check-cc5" type="checkbox" name="check">
                                                        <label for="check-cc5">Non-smoking Rooms</label>
                                                    </li>
                                                    <li>
                                                        <input id="check-ff5" type="checkbox" name="check" checked>
                                                        <label for="check-ff5">Airport Shuttle</label>
                                                    </li>
                                                    <li>
                                                        <input id="check-c4" type="checkbox" name="check">
                                                        <label for="check-c4">Air Conditioning</label>
                                                    </li>
                                                </ul>
                                                <!-- Checkboxes end -->
                                            </div>
                                        </div>
                                        <!--col-list-search-input-item end-->
                                    </div>
                                </div>
                            </div>
                            <!-- hidden-listing-filter end -->
                        </div>
                        <div class="show-more-filters act-hiddenpanel color3-bg"><i class="fal fa-plus"></i><span>More options</span></div>
                    </div>
                </div>
            </div>
            <!--list-wrap-search end -->
            <!-- list-main-wrap-->
            <div class="list-main-wrap fl-wrap card-listing">
                <a class="custom-scroll-link back-to-filters" href="#lisfw"><i class="fas fa-angle-up"></i><span>Back to Filters</span></a>
                <div class="container">
                    <!-- list-main-wrap-title-->
                    <div class="list-main-wrap-title fl-wrap">
                        <h2>Resutaldos para :
                            <span v-if="filters.resultFor">
                                {{filters.resultFor.nombre}}, {{filters.resultFor.lateral}}
                            </span>
                        </h2>
                    </div>
                    <!-- list-main-wrap-title end-->
                    <!-- list-main-wrap-opt-->
                    <div class="list-main-wrap-opt fl-wrap">
                        <!-- price-opt-->
                        <!-- <div class="row">
                            <div class="form-group col-xs-12 col-sm-6 col-lg-4">
                                <label>Ordenar por</label>
                                <v-select class="clear-none" :options="selects.orden" v-model="filters.orden" @input="filtrar()"></v-select>
                            </div>
                            <div class="form-group col-xs-12 col-sm-6 col-lg-4">
                                <label>Consultar Por</label>
                                <v-select class="clear-none" :options="selects.estados" v-model="filters.estado" @input="filtrar()"></v-select>
                            </div>
                        </div> -->
                        <!-- price-opt end-->
                        <!-- price-opt-->

                    </div>
                    <!-- list-main-wrap-opt end-->
                    <!-- listing-item-container -->
                    <div class="listing-item-container init-grid-items fl-wrap">
                        <!-- listing-item  -->
                        <div class="listing-item" v-if="!filtrando && rows.data.length > 0" v-for="(val,i) in rows.data">
                            <article class="geodir-category-listing fl-wrap">
                                <div class="geodir-category-img">
                                    <a href="listing-single.html"><img :src="$root.base_url + 'images/casa.jpg'" alt=""></a>
                                    <!-- <div class="listing-avatar">
                                      <a href="author-single.html"><img src="images/avatar/1.jpg" alt="">
                                      </a>
                                         <span class="avatar-tooltip">Added By  <strong>Alisa Noory</strong></span>
                                    </div> -->
                                    <div class="sale-window">Sale 20%</div>
                                    <div class="geodir-category-opt">
                                        <div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                        <div class="rate-class-name">
                                            <div class="score"><strong>Very Good</strong>27 Reviews </div>
                                            <span>5.0</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="geodir-category-content fl-wrap">
                                    <div class="geodir-category-content-title fl-wrap">
                                        <div class="geodir-category-content-title-item">
                                            <h3 class="title-sin_map">
                                                <a href="listing-single.html">
                                                    {{val.titulo.toUpperCase()}}
                                                </a>
                                            </h3>
                                            <div class="geodir-category-location fl-wrap">
                                                <a href="#" class="map-item"><i class="fas fa-map-marker-alt"></i>
                                                    {{val && val.numero_calle ? val.numero_calle : ''}}
                                                    {{val && val.calle ? val.calle : ''}}
                                                    /
                                                    {{val && val._comuna ? val._comuna.nombre+',' : ''}}
                                                    {{val && val._region ? val._region.nombre : ''}}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Tipo : {{ val._tipo_operacion.nombre }} <br>
                                        Moneda: {{val._tipo_valor ? val._tipo_valor.nombre : ''}}
                                        Monto : {{val.precio | currency}} <br>
                                        <!-- Estado : {{val.estado == 1 ? 'ACTIVA' : 'INACTIVA'}} <br> -->
                                        Propiedad : {{val._subtipo_propiedad ? val._subtipo_propiedad.nombre : ''}}
                                        <table class="table table-responsive">
                                            <tr>
                                                <td>
                                                    <i style="color:#3AACED;" class="fal fa-bath" title="Baños"></i> {{val.banio ? val.banio : 0}}
                                                </td>
                                                <td>
                                                    <i style="color:#3AACED;" class="fal fa-car" title="Estacionamiento"></i> {{val.estacionamiento ? val.estacionamiento : 0}}
                                                </td>
                                                <td>
                                                    <i style="color:#3AACED;" class="fal fa-home" title="Bodega"></i> {{val.bodega ? val.bodega : 0}}
                                                </td>
                                                <td>
                                                    <i style="color:#3AACED;" class="fal fa-lock" title="Privado"></i> {{val.privado ? val.privado : 0}}
                                                </td>
                                            </tr>
                                        </table>
                                    </p>


                                    <!-- <ul class="facilities-list fl-wrap">
                                          <li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>
                                          <li><i class="fal fa-parking"></i><span>Parking</span></li>
                                          <li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                                          <li><i class="fal fa-utensils"></i><span> Restaurant</span></li>
                                      </ul> -->
                                    <div class="geodir-category-footer fl-wrap">
                                        <div class="geodir-category-price">
                                            Precio
                                            <br>
                                            <template v-if="val && val.precio">
                                                <span>{{val._tipo_valor.nombre}}</span>
                                                <span>{{val.precio | currency}}</span>
                                            </template>
                                        </div>
                                        <div class="geodir-opt-list">
                                            <a target="_blank" :href="`${$root.base_url}propiedad/${val.id}/detalle`" class="geodir-js-booking"><i class="fal fa-eye"></i>
                                                <span class="geodir-opt-tooltip">Detalle</span>
                                            </a>
                                            <a href="#" class="geodir-js-favorite"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save</span></a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <h5 v-if="rows.data.length < 1"> Sin resultados </h5>
                    </div>
                    <!-- listing-item-container end-->
                    <!-- pagination-->
                    <!-- <div class="pagination">
                        <a href="#" class="prevposts-link"><i class="fa fa-caret-left"></i></a>
                        <a href="#">1</a>
                        <a href="#" class="current-page">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#" class="nextposts-link"><i class="fa fa-caret-right"></i></a>
                    </div> -->
                    <!-- pagination end-->
                </div>
            </div>
            <!-- list-main-wrap end-->
        </div>
        <!--col-list-wrap end -->
        <div class="limit-box fl-wrap"></div>
    </div>
    <!-- content end-->
</div>
<!--wrapper end -->
