<template>
  <div id="worldscreen">
    <div class="test">
      <div class="container-fluid">
        <div class="row d-none d-md-block">
          <div class="col-lg"></div>
        </div>
        <div class="row">
          <div class="col-sm worldAhead">
            <span v-if="!active">{{
              getString("foreground", "worldAhead")
            }}</span>

            <span v-else class="close" @click="resetCity">
              <span class=" d-flex align-items-center justify-content-center">
                x
              </span>
            </span>
          </div>
        </div>
        <div class="row ">
          <div class="col-sm break"></div>
        </div>

        <div class="row options">
          <div
            class="col-md-5 d-flex flex-column flex-wrap p-0 mt-2 cityList"
            id="showPlaces"
          >
            <div
              :class="{ 'd-none d-md-block': active }"
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
          <div class="d-none d-md-block col-md-1"></div>
          <div
            id="aboutCompany"
            class=" col-md-5 "
            :class="{ placesUp: !showAbout }"
          >
            <about-company :class="{ 'd-none d-md-block': active }" />
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
    resetCity() {
      console.log("proba");
      this.active = false;
      this.showAbout = true;
      this.showPlaces = true;
      this.$emit("show");
    },
    sendCoordinates(x, y, city, label, index) {
      var allPage = document.getElementById("app");
      console.log(allPage.offsetWidth);
      var element = document.getElementById("aboutCompany");
      var places = document.getElementById("showPlaces");
      if (this.choosen == index && this.active) {
        this.active = false;
        if (!this.showAbout && allPage.offsetWidth > 768) {
          this.changeAboutPositionDown(element);
        }
        if (!this.showPlaces && allPage.offsetWidth > 768) {
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
          if (this.showPlaces && allPage.offsetWidth > 768) {
            this.changeAboutPositionUp(places);
          }
          this.showPlaces = false;
        } else {
          if (!this.showPlaces && allPage.offsetWidth > 768) {
            this.changeAboutPositionDown(places);
          }
          this.showPlaces = true;
        }

        if (
          x.substr(0, x.indexOf("px")) > 750 &&
          y.substr(0, y.indexOf("px")) > 500
        ) {
          if (this.showAbout && allPage.offsetWidth > 768) {
            this.changeAboutPositionUp(element);
          }
          this.showAbout = false;
        } else {
          if (!this.showAbout && allPage.offsetWidth > 768) {
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
  right: 0px;
  /* width: 100%; */
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

.close {
  display: none;
  width: 30px;
  height: 30px;
  font-size: 18px;
  border: solid white;
  border-radius: 15px;
  background-color: #600509;
}
.close:hover {
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
}

@media only screen and (max-width: 768px) {
  .close {
    display: block;
  }
  .worldAhead {
    font-size: 80px !important;
    /* margin-left: 50px !important; */
    margin-top: 50px !important;
  }
  .place {
    font-size: 26px !important;
  }
  .goBack {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    color: #a00c0c;
    background-color: rgba(160, 12, 12, 0.4);
  }
  .cityList {
    /* width: 400px; */
    height: 450px !important;
  }
  #aboutCompany {
    /* position: absolute; */
    top: 550px;
    /* width: 90%; */
  }
  .row {
    display: flex;
    justify-content: center;
  }

  [class*="col"] {
    height: auto;
  }
  .break {
    height: 50px !important;
  }
}

@media only screen and (max-width: 600px) {
  .worldAhead {
    font-size: 40px !important;
    /* margin-left: 50px !important; */
    margin-top: 50px !important;
  }

  .place {
    font-size: 20px !important;
  }
}
</style>
