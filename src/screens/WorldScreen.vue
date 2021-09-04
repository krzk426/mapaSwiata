<template>
  <div id="worldscreen">
    <div id="worldPoint">
      <div id="worldImg">
        <div class="center">
          <img id="world" src="../assets/world.png" />
          <div id="points">
            <Points
              v-show="show"
              :xPosition="xPosition"
              :yPosition="yPosition"
              :label="label"
              :city="city"
            />
          </div>
          <PlaceToChoose
          v-on:coordinates="changeCoordinates"
          v-on:show="setShow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceToChoose from '../components/PlaceToChoose.vue';
import Points from "../components/Points.vue";
import { getString } from "../locale/string";

export default {
  name: "App",
  data() {
    return {
      xPosition:0,
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
    changeCoordinates({xPosition,yPosition,label,city}){
      this.xPosition = xPosition;
      this.yPosition = yPosition;
      this.label = label;
      this.city = city;
      this.show = true;
    },
    setShow(){
      this.show = false;
    }
  },
};
</script>

<style scoped>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1556px;
  position: relative;
}

#points {
  position: absolute;
  top: 0px;
  left: 0px;
}

</style>
