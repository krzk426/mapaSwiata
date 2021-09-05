<template>
  <div id="worldscreen">
    <div class="test">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm"></div>
        </div>
        <!-- </div>
      <div class="container-fluid" style="border:solid"> -->
        <div class="row">
          <div class="col-sm worldAhead">
            <span v-show="!active">{{
              getString("foreground", "worldAhead")
            }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm break"></div>
        </div>
        <div class="row options">
          <!-- <div
            class="col-5 d-flex flex-column flex-wrap p-0 mt-2 cityList"
            :class="{ placesUp: !showPlaces }"
          > -->
          <div
            class="col-5 d-flex flex-column flex-wrap p-0 mt-2 cityList"
            id="showPlaces"
          >
            <div
              v-for="(place, index) in places"
              v-bind:style="{ notChoosen: active }"
              :key="index"
              class="list-group-item list-group-item-action place p-1 m-0"
              @click="
                sendCoordinates(
                  place.xPosition,
                  place.yPosition,
                  place.city,
                  place.label,
                  index
                )
              "
            >
              <span :class="{ notChoosen: index != choosen && active }">{{
                place.label
              }}</span>
            </div>
          </div>
          <div class="col-1"></div>
          <div
            id="aboutCompany"
            class="col-5 d-flex flex-column"
            :class="{ placesUp: !showAbout }"
          >
            <about-company />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getString } from "../locale/string";
import AboutCompany from "./AboutCompany.vue";
import { places } from "../data/places.js";
// import Velocity from 'velocity-animate'

export default {
  
  name: "PlaceToChoose",
  data() {
    return {
      xPosition: "737px",
      yPosition: "97px",
      choosen: 0,
      active: false,
      places: places,
      showAbout: true,
      showPlaces: true,
      
    };
  },
  components: { AboutCompany },
  methods: {
    getString,
    sendCoordinates(x, y, city, label, index) {
      var element = document.getElementById("aboutCompany");
       var places = document.getElementById("showPlaces");
      if (this.choosen == index && this.active) {
        this.active = false;
        if (!this.showAbout) {
          this.changeAboutPositionDown(element);
        }
        if (!this.showPlaces) {
          this.changeAboutPositionDown(places);
        }
        this.showAbout = true;
        this.showPlaces = true;

        this.$emit("show");
      } else {
        if (
          x.substr(0, x.indexOf("px")) > 100 &&
          x.substr(0, x.indexOf("px")) < 700 &&
          y.substr(0, y.indexOf("px")) > 500 &&
          y.substr(0, y.indexOf("px")) < 900
        ) {
          if (this.showPlaces) {
          this.changeAboutPositionUp(places);
        }
          this.showPlaces = false;
        } else {
          if (!this.showPlaces) {
          this.changeAboutPositionDown(places);
        }
          this.showPlaces = true;
        }

        if (
          x.substr(0, x.indexOf("px")) > 750 &&
          y.substr(0, y.indexOf("px")) > 500
        ) {
          if (this.showAbout) {
           this.changeAboutPositionUp(element);
          }
          this.showAbout = false;
          
        } else {
          if (!this.showAbout) {
            this.changeAboutPositionDown(element);
          }
          this.showAbout = true;
        }

        this.active = true;
        this.choosen = index;
        this.$emit("coordinates", {
          xPosition: x,
          yPosition: y,
          city: city,
          label: label,
        });
      }
    },
    changeAboutPositionUp(element) {
      element.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-200px)" }],
        {
          fill: "forwards",
          duration: 1000,
        }
      );
    },
    changeAboutPositionDown(element) {
      element.animate(
        [{ transform: "translateY(-200px)" }, { transform: "translateY(0px)" }],
        {
          fill: "forwards",
          duration: 1000,
        }
      );
    },
  },
};
</script>

<style scoped>
.aboutPage {
  border: solid;

  margin-top: 7px;
}
.cityList {
  height: 250px !important;
}

.break {
  height: 120px !important;
}
[class*="col"] {
  padding: 1rem;
  color: white;
  height: 180px;
}
.test {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.worldAhead {
  font-size: 90px;
  font-weight: 500;
}
.place {
  font-weight: 500;
  font-size: 18px !important;
  color: white;
  background: none !important;
  border: none;
  cursor: pointer;
  width: 33%;
}
.place:hover {
  color: #f37379;
}
.notChoosen {
  color: #600509;
}
.notChoosen:hover {
  color: white;
}
/* .placesUp {
  margin-top: -200px !important;
} */
</style>
