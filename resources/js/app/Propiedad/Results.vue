<template >
<!--  wrapper  -->
<div id="wrapper">

    <div class="container-fluid">
        <div class="row mt-5">
            <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="mobile-list-controls fl-wrap mt-5">
                    <div class="container">
                        <div class="mlc show-hidden-column-map schm text-center"><i class="fal fa-map-marked-alt"></i> Show Map</div>
                        <div class="mlc show-list-wrap-search"><i class="fal fa-filter"></i> Filter</div>
                    </div>
                </div>
                <h4> <span style="color:#F9B90F;text-shadow:0px 0px 1px rgba(0,0,0,0.5)">Buscar</span> <span style="color:#3AACED; text-shadow:0px 0px 1px rgba(0,0,0,0.5);">Propiedad</span></h4>
                <hr>
                <!-- lista de selects  -->
                <div class="row">

                    <div class="col-xs-12 col-md-2 pr-0">
                        <v-select label="nombre" :options="selects.tipos_operaciones" v-model="filters.tipo_operacion" :clearable="false" />
                    </div>
                    <div class="col-xs-12 col-md-2 pl-1 pr-0">
                        <v-select label="nombre" :options="selects.subtipos_propiedades" v-model="filters.subtipo_propiedad" :clearable="false" />
                    </div>
                    <div class="col-xs-12 col-md-4 pl-1 pr-0">
                        <v-select label="nombre" :filterable="false" :clearable="false" v-model="filters.localidad" :options="selects.results" @search="onSearch" class="v-select-clearfix">
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
                    <div class="col-xs-12 col-lg-2 pl-1 pr-0">
                        <v-select label="nombre" :options="selects.tipos_propiedades" placeholder="Tipo propiedad" v-model="filters.tipos_propiedades" :clearable="false" />
                    </div>
                    <div class="col-xs-12 col-lg-2 pl-1 pr-4">
                        <v-select label="nombre" :options="selects.tipos_valores" placeholder="Moneda" v-model="filters.tipos_valores" :clearable="false" />
                    </div>
                </div>

                <div class="row justify-content-end">
                    <div class="mt-2 mr-2">
                        <div class="col-sm-12 col-lg-12">
                             <a class="btn btn-info" @click="showHide()" style="color:white; position:none !important; bottom:0px !important">
                                <i class="far fa-plus" style="color:white"></i> Filtros
                            </a>
                            <a href="#" class="btn btn-warning" style="color:white;" @click="limpiarFiltros()">
                                <i class="far fa-trash"></i> Limpiar
                            </a>
                            <a href="#" class="btn btn-success" @click="filtrar()">
                                <i class="far fa-search"></i> Buscar
                            </a>
                        </div>
                    </div>
                </div>

                <div class="hidden-listing-filter fl-wrap">
                    <div class="row">
                        <div class="form-group col-xs-12 col-md-3 mt-1">
                            <label> Rango de Precio: {{filters.costo[0]}} - {{filters.costo[1]}} {{filters.tipos_valores ? filters.tipos_valores.nombre : ''}} </label>
                            <vue-slider  v-model="filters.costo" :interval="50000" :min="0" :max="10000000"/>
                        </div>
                        <div class="form-group col-xs-12 col-md-2 mt-1">
                            <label> Baños</label>
                            <vue-slider  v-model="filters.banio"  :min="0" :max="9"/>
                        </div>
                        <div class="form-group col-xs-12 col-md-2 mt-1">
                            <label> Privado</label>
                            <vue-slider  v-model="filters.privado"  :min="0" :max="9"/>
                        </div>
                        <div class="form-group col-xs-12 col-md-2 mt-1">
                            <label> Bodegas</label>
                            <vue-slider  v-model="filters.bodegas"  :min="0" :max="9"/>
                        </div>
                        <div class="form-group col-xs-12 col-md-2 mt-1">
                            <label> Estacionamiento</label>
                            <vue-slider  v-model="filters.estacionamiento"  :min="0" :max="9"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="row" style="height:70vh;">
            <div class="col-xs-12 col-md-8 mt-4" style="height:100%">
                <!-- mapa componente -->
                <maps style="height:100%"
                    @buscarPropiedad="buscarPropiedad"
                    :type="this.maps.type" :center="this.maps.center"
                    :zoom="this.maps.zoom" :locations="this.maps.locations"
                    :lazy="maps.lazy"></maps>
            </div>
            <div class="col-md-4">
                <div class="listing-item-container init-grid-items fl-wrap mt-4" v-if="selected">
                    <div class="listing-item" style="width: 100%">
                        <article class="geodir-category-listing fl-wrap">
                            <div class="geodir-category-img">
                                <a href="listing-single.html"><img :src="$root.base_url + 'images/casa.jpg'" alt=""></a>
                                <div class="sale-window">{{selected && selected._tipo_operacion.nombre}}</div>
                            </div>
                            <div class="geodir-category-content fl-wrap">
                                <div class="geodir-category-content-title fl-wrap">
                                    <div class="geodir-category-content-title-item">
                                        <h3 class="title-sin_map">
                                            <a href="listing-single.html">
                                                {{selected && selected.titulo.toUpperCase()}}
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
                                    Tipo : {{ selected && selected._tipo_operacion.nombre }} <br>
                                    Moneda: {{selected && selected._tipo_valor ? selected._tipo_valor.nombre : ''}}
                                    Monto : {{selected && selected.precio | currency}} <br>
                                    Propiedad : {{selected && selected._subtipo_propiedad ? selected._subtipo_propiedad.nombre : ''}}<br>
                                    <a target="_blank" :href="$root.base_url+'propiedad/'+selected.id+'/detalle'" class="float-right" title="Ir a la propiedad"> <i class="fa fa-eye "></i> </a>
                                    <template v-if="selected && selected.favorito">
                                        <a href="#" @click.prevent="marcarFavorito(selected)" class="float-right" :class="{ 'text-danger' : (selected._favorito && selected._favorito.length > 0)}">
                                            <template v-if="selected._favorito && selected._favorito.length > 0">
                                                <i class="fa fa-heart " title="Eliminar Favorito"></i>
                                            </template>
                                            <template v-else>
                                                <i class="fal fa-heart " title="Agregar favorito"></i>
                                            </template>
                                        </a>
                                    </template>
                                    <template v-else>
                                        <a href="#" class="float-right">
                                            <i class="fal fa-heart" title="favorito"></i>
                                        </a>
                                    </template>
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- list-main-wrap-->
    <div class="list-main-wrap fl-wrap card-listing">
        <!-- <a class="custom-scroll-link back-to-filters" href="#lisfw"><i class="fas fa-angle-up"></i><span>Back to Filters</span></a> -->
        <div class="container">
            <!-- list-main-wrap-title-->
            <div class="list-main-wrap-title fl-wrap">
                <h2>Resultados para :
                    <span v-if="filters.resultFor">
                        {{filters.resultFor.nombre}}, {{filters.resultFor.lateral}}
                    </span>
                </h2>
            </div>
            <div class="listing-item-container init-grid-items fl-wrap">
                <!-- listing-item  -->
                <div class="col-xs-12 col-md-3" v-if="!filtrando && rows.data.length > 0" v-for="(val,i) in rows.data">
                    <div class="listing-item" style="width: 100%">
                        <article class="geodir-category-listing fl-wrap">
                            <div class="geodir-category-img">
                                <a href="listing-single.html"><img :src="$root.base_url + 'images/casa.jpg'" alt=""></a>
                                <div class="sale-window">{{val && val._tipo_operacion.nombre}}</div>

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
                                            <a href="#" class="map-item">
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
                                    <a target="_blank" :href="$root.base_url+'propiedad/'+val.id+'/detalle'" class="float-right" title="Ir a la propiedad">
                                        <i class="fal fa-eye  color-primary"></i>
                                    </a>
                                    <a target="_blank" @click="goto(val)" class="float-right mr-2" title="Ir a la propiedad">
                                        <i class="fal fa-map-marked-alt"></i>
                                    </a>
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
                <h5 v-if="rows.data.length < 1"> Sin resultados </h5>
            </div>
        </div>

    </div>
    <!-- list-main-wrap end-->
    <br />
    <br />
</div>
</template>

<script>
import Maps from '../../components/Maps';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {

    data() {
        return {

            url: this.$root.base_url + this.$route.path,
            usuario: {
                nombre: null,
            },
            numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            filtrando: false,
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
            },
            filters: {
                costo : [0,0],
                estado: {
                    label: 'Activo',
                    value: 1
                },
                orden: {
                    label: 'Fecha de creación',
                    value: 1
                },
                subtipo_propiedad: null,
                tipo_operacion: null,
                resultFor: null,
                banio: null,
                privado: null,
                bodegas: null,
                estacionamiento: null,
                localidad: null,
                first: true,
                tipos_propiedades: null,
                tipos_valores: null,
            },
            selects: {
                results: [],
                estados: [{
                        label: 'Activo',
                        value: 1
                    },
                    {
                        label: 'Inactivo',
                        value: 0
                    }
                ],
                orden: [{
                        label: 'Fecha de favorito',
                        value: 1
                    },
                    {
                        label: 'Popularidad',
                        value: 2
                    },
                    {
                        label: 'Mayor Precio',
                        value: 3
                    },
                    {
                        label: 'Menor Precio',
                        value: 4
                    },
                ],
                subtipos_propiedades: [],
                tipos_operaciones: [],
                tipos_propiedades: [],
                tipos_valores: [],
            },
            maps: {
                type: '',
                center: [-33.4569397, -70.6482697],
                zoom: 13,
                locations: [],
                lazy : [-33.4569397, -70.6482697],
            },
            selected: null,
        }
    },
    components: {
        Maps,
        VueSlider
    },
    mounted() {
        this.filtrar();
        this.getFiltros();
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

        showHide() {
            $(this).toggleClass("active-hidden-opt-btn").find("span").text($(this).find("span").text() === 'Close options' ? 'More options' : 'Close options');
            $(".hidden-listing-filter").slideToggle(400);
        },

        filtrar(page = 1) {
            this.start();

            let params = '?';
            let request = new FormData;
            request.append('withLocation', 1);

            if (!this.filters.first) {
                this.filtrando = true;

                this.filters.page = page;
                request.append('page', this.filters.page);


                if (this.filters.estado) {
                    request.append('estado', this.filters.estado.value);
                }

                if (this.filters.subtipo_propiedad) {
                    params += 'propiedad=' + this.filters.subtipo_propiedad.id + '&';
                    request.append('id_subtipo_propiedad', this.filters.subtipo_propiedad.id);
                }

                if (this.filters.tipo_operacion) {
                    params += 'operacion=' + this.filters.tipo_operacion.id + '&';
                    request.append('id_tipo_operacion', this.filters.tipo_operacion.id);
                }

                if (this.filters.banio) {
                    params += 'banio=' + this.filters.banio + '&';
                    request.append('banio', this.filters.banio);
                }

                if (this.filters.privado) {
                    params += 'privado=' + this.filters.privado + '&';
                    request.append('privado', this.filters.privado);
                }

                if (this.filters.bodegas) {
                    params += 'bodegas=' + this.filters.bodegas + '&';
                    request.append('bodegas', this.filters.bodegas);
                }

                if (this.filters.estacionamiento) {
                    params += 'estacionamiento=' + this.filters.estacionamiento + '&';
                    request.append('estacionamiento', this.filters.estacionamiento);
                }
                if (this.filters.tipos_propiedades) {
                    params += 'id_tipo_propiedad=' + this.filters.tipos_propiedades.id + '&';
                    request.append('id_tipo_propiedad', this.filters.tipos_propiedades.id);
                }
                if (this.filters.tipos_valores) {
                    params += 'id_tipo_valor=' + this.filters.tipos_valores.id + '&';
                    request.append('id_tipo_valor', this.filters.tipos_valores.id);
                }
                // si el segundo valor tiene algo diferente de 0
                if (this.filters.costo[1]) {
                    params += 'costo_desde=' + this.filters.costo[0] + '&';
                    params += 'costo_hasta=' + this.filters.costo[1] + '&';
                    request.append('costo_desde',this.filters.costo[0]);
                    request.append('costo_hasta',this.filters.costo[1]);
                }

                if (this.filters.localidad && this.filters.localidad.tipo) {
                    switch (this.filters.localidad.tipo) {
                        case 'Comuna':
                            request.append('comuna_id', this.filters.localidad.id)
                            break;
                        case 'Region':
                            request.append('region_id', this.filters.localidad.id)
                            break;
                    }
                    params += 'localidad=' + this.filters.localidad.id + '&';
                    params += 'tipo=' + this.filters.localidad.tipo + '&';
                };
            } else {
                let url = window.location.search
                    .replace('propiedad', 'id_subtipo_propiedad')
                    .replace('operacion', 'id_tipo_operacion');

                url = url.slice(1).split('&');

                url.forEach(elemento => {
                    let values = elemento.split('=');
                    if (values[0] && values[1]) {
                        request.append(values[0], values[1]);
                    }
                });

                if (request.get('localidad') && request.get('tipo')) {
                    switch (request.get('tipo')) {
                        case 'Comuna':
                            request.append('comuna_id', request.get('localidad'))
                            break;
                        case 'Region':
                            request.append('region_id', request.get('localidad'))
                            break;
                    }
                    request.delete('localidad');
                    request.delete('tipo');
                }

                params = window.location.search;
            }

            axios.post(this.url, request)
                .then(res => {
                    let search = {
                        type: '',
                        params: ''
                    };

                    this.rows = res.data.propiedades;
                    this.filters.localidad = this.filters.resultFor = res.data.localidad;
                    this.selected = this.rows.data[0];
                    this.maps.locations = [];

                    this.rows.data.forEach((row, key) => {
                        // Verificando si publicación tiene coordenadas
                        if (row.latitud && row.longitud) {
                            this.maps.locations.push({
                                id: row.id,
                                latlng: L.latLng(row.latitud, row.longitud),
                                text: row.titulo,
                                marker: {
                                    background: '#6880FF'
                                }
                            });
                        }
                    });

                    if (this.filters.localidad) {

                        let localidad = this.filters.localidad;
                        search.params = localidad.nombre + '%2C%20' + localidad.lateral;


                        if (request.get('region_id')) {
                            search.type = 'region';
                        } else {
                            search.type = 'place'
                        }

                    } else {
                        search.params = 'santiago%2C%20metropolitana';
                        search.type = 'region'
                    }

                    search.params += '%2C%20Chile';

                    return {
                        'params': search.params,
                        'type': search.type
                    }

                })
                .then(search => {
                    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search['params']}.json?types=${search['type']}&access_token=pk.eyJ1IjoiYW5nZWxzZWx5ZXIiLCJhIjoiY2s0cTdjZWJzMGxoYjNrbGF0MGQwNTZrZiJ9.TuvQmfea2eqCX1XXqIaxnw`)
                        .then(response => {
                            if (response.data && response.data.features && response.data.features[0]) {
                                let center = response.data.features[0].center;
                                // ir A la primera Ubicacion lazy
                                setTimeout(()=>{
                                    if(this.rows.data[0]){
                                        this.maps.center = [this.rows.data[0].latitud, this.rows.data[0].longitud];
                                    }
                                },0)
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .finally(() => {
                            this.stop();
                        })
                })
                .finally(() => {
                    this.maps.type = 'streets-v8';
                    this.filters.first = false;
                    this.filtrando = false;
                    window.history.pushState('', '', params);
                });
        },

        getFiltros() {
            // BUSCANDO LOCALIDAD EN URL
            let request = new FormData;
            let url = window.location.search
                .replace('propiedad', 'id_subtipo_propiedad')
                .replace('operacion', 'id_tipo_operacion');

            url = url.slice(1).split('&');

            url.forEach(elemento => {
                let values = elemento.split('=');
                if (values[0] == 'tipo' || values[0] == 'localidad') {
                    request.append(values[0], values[1]);
                }
            });

            if (request.get('localidad') && request.get('tipo')) {
                switch (request.get('tipo')) {
                    case 'Comuna':
                        request.append('comuna_id', request.get('localidad'))
                        break;
                    case 'Region':
                        request.append('region_id', request.get('localidad'))
                        break;
                }
                request.delete('localidad');
                request.delete('tipo');
            }

            axios.post(this.$root.base_url + 'filtros', request)
                .then(res => {
                    let url = window.location.search.slice(1).split('&');

                    this.selects.subtipos_propiedades = res.data.subtipo_propiedad;
                    this.selects.tipos_operaciones = res.data.tipos_operaciones;
                    this.selects.tipos_propiedades = res.data.tipos_propiedades;
                    this.selects.tipos_valores = res.data.tipos_valores;

                    // CARGANDO VALORES INICIALES DE FILTROS
                    url.forEach(elemento => {
                        let values = elemento.split('=');
                        switch (values[0]) {
                            case 'propiedad':
                                this.filters.subtipo_propiedad =
                                    this.selects.subtipos_propiedades.find(subtipo_propiedad => {
                                        return subtipo_propiedad.id == values[1];
                                    });
                                break;

                            case 'operacion':
                                this.filters.tipo_operacion =
                                    this.selects.tipos_operaciones.find(tipo_operacion => {
                                        return tipo_operacion.id == values[1];
                                    });
                                break;
                        }
                    });
                })
        },

        onSearch(search, loading) {
            loading(true);
            this.buscar(loading, search, this);
        },

        buscar(loading, search, self) {
            if (search.length > 2) {
                axios.post(this.$root.base_url + 'obtener_comuna', {
                        nombre: search
                    })
                    .then(res => {
                        this.selects.results = res.data;
                    })
            }
            loading(false);
        },

        buscarPropiedad(key) {
            let location = this.maps.locations[key];

            this.maps.center = [location.latlng.lat, location.latlng.lng];
            this.maps.zoom = 15;

            let url = this.$root.base_url + '/propiedad/' + location.id + '/detalle';
            axios.post(url)
                .then(response => {
                    this.selected = response.data;
                })
                .catch(error => {
                    this.alerta('error', 'Lo sentimos un error ha ocurrido.', error);
                })
                .finally({

                });
        },

        goto(val) {
            window.scrollTo(0, 100);
            this.maps.center = [val.latitud, val.longitud];
            this.maps.zoom = 15;
            // console.log([val.latitud, val.longitud]);
            // this.goto(val);
            return true;
        },

        limpiarFiltros() {
            this.filters.tipos_propiedades = null;
            this.filters.tipos_valores = null;
            this.filters.banio = null;
            this.filters.privado = null;
            this.filters.bodegas = null;
            this.filters.estacionamiento = null;
            this.filters.costo = [0,0];

        },

        marcarFavorito(posicion) {
            let index ;

            if(typeof posicion == 'object'){
                index = posicion.id;

            }else {
                index = this.rows[posicion].id;
            }
            this.start();

            axios.post(this.$root.base_url + 'propiedad/marcar', {
                'id': index
            })
            .then(res => {
                if(typeof posicion == 'object'){
                    this.selected = res.data.propiedad;
                }else {
                    this.rows.data[posicion] = res.data.propiedad;
                }
                this.stop();
            })
            .catch(err => {
                this.stop();
                this.alerta('error', 'Un error ha ocurrido.', err);
            })
        },
    },

}
</script>

<style >
#wrapper {
    background:
        white !important;
}

#map {
    height: 68vh !important;
}

.fal.fa-eye,
.fal.fa-heart,
.fal.fa-map-marked-alt {
    color: #3AACED;
}
.fal.fa-eye{
    margin-left: 3px;
}
.show-more-filters.act-hiddenpanel.btn.btn-info.col-xs-12.col-md-2.mt-1.ml-1 {
    position: relative !important;
}

.show-more-filters.active-hidden-opt-btn {
    background-color: #6cb2eb !important;
    border-color: #6cb2eb !important;
}
.slider {
  /* overwrite slider styles */
  width: 200px;
}
</style>
