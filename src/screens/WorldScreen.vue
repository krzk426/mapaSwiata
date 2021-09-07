<template>
  <div class="container-fluid">
    <div id="worldscreen">
      <div id="worldPoint">
        <div id="worldImg">
          <div class="center" id="center">
            <div>
              <img id="world" src="../assets/world.png" />
            </div>
            
            <div id="points">
              <Points
                id="placePoint"
                v-show="show"
                :xPosition="xPosition"
                :yPosition="yPosition"
                :label="label"
                :city="city"
                v-on:resetCityMobile="resetCityMobile"
              />
            </div>
            <PlaceToChoose
              ref="allPlaces"
              :xPosition="xPosition"
              id="placeToChoose"
              v-on:coordinates="changeCoordinates"
              v-on:show="setShow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceToChoose from "../components/PlaceToChoose.vue";
import Points from "../components/Points.vue";
import { getString } from "../locale/string";

export default {
  name: "App",
  data() {
    return {
      xPosition: 0,
      yPosition: 0,
      label: "",
      city: "",
      show: false,
    };
  },
  components: {
    Points,
    PlaceToChoose,
  },
  methods: {
    getString,
    changeCoordinates({ xPosition, yPosition, label, city }) {
      var element = document.getElementById("placePoint");
      this.xPosition = xPosition;
      this.yPosition = yPosition;
      this.label = label;
      this.city = city;
      this.pointAnimation(element);
      this.show = true;
      this.reset = false;
    },
    setShow() {
      this.show = false;
    },
    resetCity() {
      this.reset = !this.reset;
    },
    pointAnimation(element) {
      element.animate([{ opacity: "0" }, { opacity: "1" }], {
        fill: "forwards",
        duration: 1500,
      });
    },
    resetCityMobile() {
      this.$refs.allPlaces.resetCity();
    },
  },
  computed: {
    mobileMap() {
      return {
        objectPosition: this.xPosition,
      };
    },
  },
};
</script>

<style scoped>
.center {
  width: 1556px;

  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#points {
  position: absolute;
  top: 0px;
  left: 0px;
}

@media only screen and (max-width: 768px) {
  .center {
    width: 100%;
  }

  #world {
    object-fit: cover;
    height: 800px;
  }
}
</style>
