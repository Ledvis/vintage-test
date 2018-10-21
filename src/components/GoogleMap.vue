<template>
  <div>
    <gmap-map :center="currentCoordinates" :zoom="12" :options="{styles: styles}" style="width:100%;  height: 100%;">
      <gmap-marker :position="currentCoordinates" :icon="icon"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import googleMapStyle from "@/googleMapStyle";

export default {
  name: "GoogleMap",
  data() {
    return {
      styles: googleMapStyle,
      icon: "https://vintage-test.netlify.com/img/marker.b217466a.svg"
    };
  },

  computed: {
    currentCoordinates() {
      return this.$store.getters.currentCoordinates;
    },
    cityCoordinates() {
      return this.$store.getters.cityCoordinates;
    }
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    geolocate: function() {
      return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(position => {
          resolve(position);
        });
      })
        .then(position => {
          const currentCoordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.$store.dispatch("changeCurrentCoordinates", currentCoordinates);

          if (!currentCoordinates) {
            throw new Error("Enable your location");
          }
        })
        .catch(err => alert(err));
    }
  }
};
</script>
