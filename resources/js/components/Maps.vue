<template>
    <div>
        <div class="card">
            <v-map ref="map" id='map' :zoom="zoom" :maxZoom="maxZoom" :center="center">

                <v-tilelayer ref="tile" :url="tileProvider.url" :attribution="tileProvider.attribution"></v-tilelayer>

                <template v-if="markers == 'simple'">
                    <v-marker ref="item" :lat-lng="locations" :icon="iconMarker([])" :draggable="draggable">
                    </v-marker>
                </template>

                <template v-else>
                     <v-marker-cluster ref="markerCluster" :options="clusterOptions">
                        <v-marker ref="item" v-for="(l, key) in locations" :key="l.id" 
                        :lat-lng="l.latlng" @click="seleccionarElemento(key)" 
                        :icon="iconMarker(l)">
                            <v-tooltip ref="tooltip" :content="l.text"></v-tooltip>
                            <!--v-popup :content="l.text"
                            :options="{ autoClose: false, closeOnClick: false }"></v-popup-->
                        </v-marker>
                    </v-marker-cluster>
                </template>

            </v-map>
        </div>
    </div>
</template>

<script>

import Fuse from 'fuse.js';
import {LMap, LTileLayer, LMarker, LCircle, LPopup, LTooltip} from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

export default {
    props: {
        draggable: {
            type: Boolean,
            default: false
        },
        markers: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
        },
        center: {
            type: Array,
            default: () => [-33.4569397, -70.6482697] // Region 13 - Santiago de Chile
        },
        zoom: {
            type: Number,
            default: 13
        },
        locations: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            map: null,
            marker: null,
            clusterOptions: {},
            maxZoom: 18,
            tileProvider: {
                name: 'Maps',
                url: '',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            },
        }
    },
    watch: {
        type() {
            this.tileProvider.url = `https://api.mapbox.com/styles/v1/mapbox/${this.type}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5nZWxzZWx5ZXIiLCJhIjoiY2s0cTdjZWJzMGxoYjNrbGF0MGQwNTZrZiJ9.TuvQmfea2eqCX1XXqIaxnw`
        }
    },
    components: {
        'v-map': LMap,
        'v-tilelayer': LTileLayer,
        'v-marker': LMarker,
        'v-circle': LCircle,
        'v-popup': LPopup,
        'v-tooltip': LTooltip,
        'v-marker-cluster': Vue2LeafletMarkerCluster,
    },
    mounted(){
        this.map = this.$refs.map.mapObject;

        this.map.on('popupopen', function (e) {
            //console.log(e);
        });

        this.map.on('tooltipopen', function (e) {
            //console.log(e);
        });

        this.map.on('dragend', function (e) {
            //console.log(e);
        });

        this.$nextTick(function () {
            this.clusterOptions = {
                disableClusteringAtZoom: 11,
                /*iconCreateFunction: function(cluster) {
                    return L.divIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
                }*/
            };

            if(this.markers == 'simple') {
                this.$refs.item.mapObject.on('dragend', (e) => {
                    if(e.target && e.target._latlng) {
                        this.$emit('sendLatlng', e.target._latlng);
                    }
                });
            }
        });

        this.$loadScript('https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js')
        .then(() => {
            let geocoder = new L.Control.Geocoder();
                geocoder.addTo(this.map);
        })
        .catch(error => {
            this.$parent.alerta('error', 'Ha ocurrido un problema', error);
        });
    },
    methods: {
        iconMarker(item){
            if (_.isEmpty(item.image)) {
                if(item.marker && item.marker.background) {
                    return L.divIcon({
                        html: `<span style="width: 100%;" style="background: ${item.marker.background}">`,
                        className: 'dot',
                        iconSize: [12, 12]
                    });
                }
                else {
                    return new L.Icon.Default({
                        shadowSize: [0,0],
                        iconSize:    [20, 36],
                       /* iconSize: [25, 35]*/
                    });
                }
            } 
            else {
                return L.divIcon({
                    html: `<img style="width: 100%;" src="/images/${item.image}.jpg"/>`,
                    className: 'image-icon',
                    iconSize: [12, 12]
                })
            }
        },
        seleccionarElemento(key) {
            this.$emit('buscarPropiedad', key);
        },
    },
}

</script>

<style>
    #map {
        height: 50vh;
        ---width: 900px;
        margin: 0;
    }
    #card-card-image-size {
        height: 300px;
        ---width: 700px;
        margin: 0;
    }
    .image-icon img {
        height: 38px !important;
        width: 38px !important;
        border-radius: 50%;
        border: solid;
        border-color: #32CD32;
    }
    .dot {
        height: 25px;
        width: 25px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        background: #6880FF;
    }
</style>
