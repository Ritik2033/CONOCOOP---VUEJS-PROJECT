<template>
<v-main style="height: 100vh;">
    <div style="height: 100%;position: relative;">
        <div class="controls-container">
            <input type="text" placeholder="Search Location" v-model="searchQuery" @input="onSearchInput" v-if="!searchResult" />

            <i class="fa fa-search search-icon" @click="onSearchInput"></i>
            <button class="omma" @click="reloadMap"><i class="fas fa-redo-alt"></i></button>

        </div>

    <l-map ref="myMap" :zoom="zoom" :center="center" style="height: 100%; width: 100%;">
                <l-tile-layer :url="url" :attribution="attribution" :errorTileUrl="errorTileUrl"></l-tile-layer>
            <l-marker v-for="(location, index) in locations" :key="index" :lat-lng="location" @click="showFarmerInfo(index)" ref="markers">
                <l-icon :icon-url="iconUrl" :icon-size="iconSize"></l-icon>
                <l-popup>
                    <div style="background-color: rgb(255, 255, 255); padding: 15px; border-radius: 8px; box-shadow:rgb(0 0 0 / 15%) 0px 0px 15px;">
                        <h3 style="margin-top: 0; color: #2C3E50;">{{ $t('farmer.title') }} {{ index + 1 }}</h3>
                        <hr style="border: none; height: 1px; background: #EAEAEA; margin: 10px 0;">

                        <div style="color: #7F8C8D;">
                            {{ $t('farmer.description', { index: index + 1 }) }}
                        </div>

                        <div style="margin-top: 10px; color: #7F8C8D;">
                            {{ $t('farmer.location', { lat: location.lat, lng: location.lng }) }}
                        </div>

                        <div style="margin-top: 10px; color: #7F8C8D;">
                            {{ $t('farmer.specialty') }}
                        </div>

                        <div style="margin-top: 10px; color: #7F8C8D;">
                            {{ $t('farmer.experience', { years: 5 + index }) }}
                        </div>

                        <button @click="navigateToScreen4" style="margin-top: 15px; padding: 8px 15px; border: none; border-radius: 5px; background-color: #3498DB; color: white; cursor: pointer; transition: background 0.3s;">
                            {{ $t('farmer.viewProfile') }}
                        </button>
                    </div>
                </l-popup>

            </l-marker>
            <div class="box">
                  <h3>CONACOOP</h3>
                  <p>C. Socorro Sánchez 62, Santo Domingo</p>
                  <p>Area 2.5 Hectares</p>
                </div>  
        </l-map>

    </div>

</v-main>
</template>

<script>
import {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
} from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
    name: "Maap",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup

    },
    data() {
        return {
            initialCenter: [18.7357, -69.2385],
            initialZoom: 12,
            center: [18.7357, -69.2385],
            zoom: 12,
            selectedFarmer: null,
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            errorTileUrl: "../assets/png.png",
            center: [18.7357, -69.2385],

            zoom: 12,
            iconUrl: require('@/assets/farm22.png'),
            locations: [{
                    lat: 18.7900,
                    lng: -69.3000
                }, // Towards the North-East
                {
                    lat: 18.7100,
                    lng: -69.1900
                }, // Towards the South-East
                {
                    lat: 18.7600,
                    lng: -69.1800
                }, // North-East
                {
                    lat: 18.7000,
                    lng: -69.2900
                }, // South-West
                {
                    lat: 18.7700,
                    lng: -69.2300
                }, // North-Central
                {
                    lat: 18.7200,
                    lng: -69.2100
                }, // South-Central
                {
                    lat: 18.7850,
                    lng: -69.2750
                }, // Far North-East
                {
                    lat: 18.7050,
                    lng: -69.2050
                }, // Far South-East
                {
                    lat: 18.7500,
                    lng: -69.2800
                }, // Central
                {
                    lat: 18.7350,
                    lng: -69.1950
                }, // Central-East
                {
                    lat: 18.7750,
                    lng: -69.2500
                }, // North-West
                {
                    lat: 18.7150,
                    lng: -69.2250
                }, // South-East
                {
                    lat: 18.7800,
                    lng: -69.2200
                }, // Far North
                {
                    lat: 18.7100,
                    lng: -69.2700
                }, // Far South
            ]

        };
    },
    methods: {
        navigateToScreen4() {
            this.$router.push({
                name: 'Totaldetails'
            }); 
        },
        openPopup(event) {
            event.target.getPopup().openOn(event.target._map);
        },
        onSearchInput() {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length) {
                       
                        const firstResult = data[0];
                        this.center = [firstResult.lat, firstResult.lon];

                    }
                })
                .catch(error => {
                    console.error("There was an error with the geocoding request:", error);
                });
        },
        reloadMap() {
           
            this.$refs.myMap.mapObject.invalidateSize(true);
        },
        showFarmerInfo(index) {
            this.$refs.markers[index].openPopup();
        },
         reloadMap() {
           
            this.$refs.myMap.mapObject.invalidateSize(true);

           
            this.$refs.myMap.mapObject.setView(this.initialCenter, this.initialZoom);
        },

    }
};
</script>

<style scoped>
.l-map {
    height: 100%;
}

.controls-container {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);    
    display: flex;
    align-items: center;
    z-index: 500;
    /* To ensure it's above the map components */
    background-color: #ffffffe7;
    /* Adding white background */
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.controls-container input {
    padding: 8px 12px;
    font-size: 1rem;
    border: none;

    outline: none;
    flex-grow: 1;
    /* Allows it to take up space */
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.controls-container button {
    padding: 8px 12px;
    background-color: #ffffff;
    border: none;

    /* Makes the button circular */
    cursor: pointer;
    margin-left: 10px;
    outline: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.controls-container button:hover {
    background-color: #f0f0f0;
    /* Slight grey on hover */
}

.controls-container button svg {
    fill: #333;
    /* Color for the SVG icon inside the button, adjust if using an icon */
}

.search-icon {
    cursor: pointer;
    margin-left: 10px;
    color: #555;
    /* You can adjust the color as needed */
    font-size: 1.2rem;
    /* Adjust the size of the icon */
}

.controls-container button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #333;
    /* Adjust as needed */
    outline: none;
    transition: color 0.3s;
}

.controls-container button:hover {
    color: #555;
    /* Slight color change on hover */
}

.leaflet-popup-content-wrapper {
    background: #f9f9f9;
    border-radius: 6px;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
    color: #333;
    font-size: 14px;
    padding: 8px 12px;
}
.box {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 20%;
    padding: 1rem;
    background: rgba(255, 253, 253, 0.388);
    border-radius: 10px;
  }
  .omma{
    background: transparent;
  }
</style>
