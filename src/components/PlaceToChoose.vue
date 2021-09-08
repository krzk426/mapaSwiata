<template>
  <div
    id="placesToChoose"
    class="d-flex justify-content-center justify-self-center justify-items-center"
  >
    <div id="test" class="test" :class="{ 'd-none d-md-block': active }">
      <div class="container">
        <div class="row d-none d-md-block">
          <div class="col-lg"></div>
        </div>
        <div class="row">
          <div class="col-sm worldAhead" id="worldAhead">
            <span v-if="!active">{{
              getString("foreground", "worldAhead")
            }}</span>
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
          <div id="aboutCompany" class=" col-md-6 " style="padding: 0px">
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

export default {
  name: "PlaceToChoose",
  data() {
    return {
      xPosition: "737px",
      yPosition: "97px",
      choosen: 0,
      active: false,
      places: [
        {
          xPosition: "730px",
          yPosition: "188px",
          label: getString("ebace", "label"),
          city: getString("ebace", "city"),
        },
        {
          xPosition: "83px",
          yPosition: "200px",
          label: getString("nbaa", "label"),
          city: getString("nbaa", "city"),
        },
        {
          xPosition: "730px",
          yPosition: "165px",
          label: getString("medica", "label"),
          city: getString("medica", "city"),
        },
        {
          xPosition: "730px",
          yPosition: "176px",
          label: getString("orgatec", "label"),
          city: getString("orgatec", "city"),
        },

        {
          xPosition: "47px",
          yPosition: "95px",
          label: getString("ids", "label"),
          city: getString("ids", "city"),
        },
        {
          xPosition: "754px",
          yPosition: "152px",
          label: getString("domotex", "label"),
          city: getString("domotex", "city"),
        },
        {
          xPosition: "849px",
          yPosition: "565px",
          label: getString("victoriaFalls", "label"),
          city: getString("victoriaFalls", "city"),
        },
        {
          xPosition: "789px",
          yPosition: "660px",
          label: getString("tableMountain", "label"),
          city: getString("tableMountain", "city"),
        },
        {
          xPosition: "1285px",
          yPosition: "223px",
          label: getString("yunganGrottoes", "label"),
          city: getString("yunganGrottoes", "city"),
        },
        {
          xPosition: "1391px",
          yPosition: "612px",
          label: getString("uluru", "label"),
          city: getString("uluru", "city"),
        },
        {
          xPosition: "340px",
          yPosition: "660px",
          label: getString("lasLajasShrine", "label"),
          city: getString("lasLajasShrine", "city"),
        },
        {
          xPosition: "1261px",
          yPosition: "377px",
          label: getString("angkorWat", "label"),
          city: getString("angkorWat", "city"),
        },
        {
          xPosition: "1130px",
          yPosition: "413px",
          label: getString("sigiriya", "label"),
          city: getString("sigiriya", "city"),
        },
        {
          xPosition: "930px",
          yPosition: "564px",
          label: getString("avenueOfTheBaobabs", "label"),
          city: getString("avenueOfTheBaobabs", "city"),
        },
        {
          xPosition: "860px",
          yPosition: "140px",
          label: getString("mosbuild", "label"),
          city: getString("mosbuild", "city"),
        },
        {
          xPosition: "836px",
          yPosition: "211px",
          label: getString("bau", "label"),
          city: getString("bau", "city"),
        },
        {
          xPosition: "707px",
          yPosition: "188px",
          label: getString("parisAirShow", "label"),
          city: getString("parisAirShow", "city"),
        },
        {
          xPosition: "755px",
          yPosition: "200px",
          label: getString("cersaie", "label"),
          city: getString("cersaie", "city"),
        },
        {
          xPosition: "1107px",
          yPosition: "282px",
          label: getString("ish", "label"),
          city: getString("ish", "city"),
        },
      ],
      showAbout: true,
      showPlaces: true,
    };
  },
  components: { AboutCompany },
  methods: {
    getString,
    resetCity() {
      var element = document.getElementById("aboutCompany");
      var places = document.getElementById("showPlaces");
      var allPage = document.getElementById("app");
      if (!this.showAbout) {
        if (allPage.offsetWidth > 768) this.changeAboutPositionDown(element);
        else if(this.element != null) this.element.top = 0;
      }
      if (!this.showPlaces && allPage.offsetWidth > 768) {
        if (allPage.offsetWidth > 768) this.changeAboutPositionDown(places);
        else if(this.places != null) this.places.top = 0;
      }

      this.active = false;
      this.showAbout = true;
      this.showPlaces = true;
      var center = document.getElementById("center");
      var placesToChoose = document.getElementById("test");

      center.animate(
        [
          { backgroundColor: "rgba(255,2555,255,0)" },
          { left: "0px", right: "0px" },
        ],
        {
          fill: "forwards",
          duration: 1000,
        }
      );

      placesToChoose.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        duration: 1000,
      });
      this.$emit("show");
    },
    sendCoordinates(x, y, city, label, index) {
      var allPage = document.getElementById("app");
      var element = document.getElementById("aboutCompany");
      var places = document.getElementById("showPlaces");
      var center = document.getElementById("center");
    
      if (
        !(this.choosen == index && this.active) &&
        allPage.offsetWidth < 1556
      ) {
        var leftMove =
          -x.substr(0, x.indexOf("px")) + (allPage.offsetWidth * 3) / 4;
        var rightMove = -x.substr(0, x.indexOf("px"));
        var placesToChoose = document.getElementById("test");
        if (leftMove > 0) leftMove = 0;
        if (allPage.offsetWidth <= 768) {
          placesToChoose.animate([{ opacity: 1 }, { opacity: 0 }], {
            fill: "forwards",
            duration: 1000,
          });
        }      

        center.animate(
          [
            { left: center.offsetLeft + "px" },
            { left: leftMove + "px", right: rightMove + "px" },
          ],
          {
            fill: "forwards",
            duration: 1000,
          }
        );
      }
      if (this.choosen == index && this.active) {
        this.active = false;
        if (x.substr(0, x.indexOf("px")) > (allPage.offsetWidth * 3) / 4) {
          center.animate([{}, { left: 0, right: 0 }], {
            fill: "forwards",
            duration: 1000,
          });
        }
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
          x.substr(0, x.indexOf("px")) > places.offsetLeft - 10 &&
          x.substr(0, x.indexOf("px")) <
            places.offsetLeft + places.offsetWidth + 10 &&
          y.substr(0, y.indexOf("px")) > places.offsetTop - 10 &&
          y.substr(0, y.indexOf("px")) <
            places.offsetTop + places.offsetHeight + 10
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
          x.substr(0, x.indexOf("px")) >= element.offsetLeft - 10 &&
          y.substr(0, y.indexOf("px")) >= element.offsetTop + 10
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
        [{ transform: "translateY(0)" }, { transform: "translateY(-300px)" }],
        {
          fill: "forwards",
          duration: 1000,
        }
      );
    },
    changeAboutPositionDown(element) {
      element.animate(
        [{ transform: "translateY(-300px)" }, { transform: "translateY(0px)" }],
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
.options {
  margin-left: 4px;
  margin-right: 4px;
}
.cityList {
  height: 250px !important;
  margin-left: auto;
  margin-right: auto;
}

.break {
  height: 140px !important;
}
[class*="col"] {
  padding: 1rem;
  color: white;
  height: 165px;
}
.test {
  position: absolute;
  top: 90px;
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

@media only screen and (max-width: 990px) {
  .place {
    font-size: 16px !important;
  }
}

@media only screen and (max-width: 768px) {
  #aboutCompany {
    margin-top: 40px !important;
  }
  .worldAhead {
    font-size: 75px !important;
    margin-top: 50px !important;
  }
  .test {
    top: 0px;
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
    height: 350px !important;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  [class*="col"] {
    height: auto;
  }
  .break {
    height: 0px !important;
  }
}

@media only screen and (max-width: 580px) {
  .worldAhead {
    font-size: 60px !important;
    margin-top: 50px !important;
  }

  .place {
    font-size: 18px !important;
  }

  .cityList {
    height: 250px !important;
  }
}

@media only screen and (max-width: 500px) {
  .worldAhead {
    font-size: 50px !important;
  }
}

@media only screen and (max-width: 390px) {
  .worldAhead {
    font-size: 40px !important;
  }
  .place {
    font-size: 16px !important;
  }
}
</style>
