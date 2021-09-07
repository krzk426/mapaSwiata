<template>
  <div id="point">
    <div :style="pointPosition">
      <div id="closeIcon" @click="resetCity">
        <span
          class="close  "
          
        >
          <span class="d-flex align-items-center justify-content-center">
            x
          </span>
        </span>
      </div>
      <div id="circle"></div>

      <div
        class="about"
        :class="{
          leftPoint:
            xPosition && xPosition.substr(0, xPosition.indexOf('px')) < 250,
        }"
      >
        <div>
          <div
            class="label"
            :class="{
              leftPoint:
                xPosition && xPosition.substr(0, xPosition.indexOf('px')) < 250,
            }"
          >
            {{ label }}
          </div>
          <div class="line"></div>
          <div
            class="city"
            :class="{
              leftPoint:
                xPosition && xPosition.substr(0, xPosition.indexOf('px')) < 250,
            }"
          >
            {{ city }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getString } from "../locale/string";
import Velocity from "velocity-animate";

export default {
  name: "Points",
  props: ["xPosition", "yPosition", "label", "city"],
  data() {
    return {};
  },
  methods: {
    getString,
    resetCity() {
      console.log("cos");
      this.$emit("resetCityMobile");
    },
    beforeEnter: (el) => {
      el.style.top = "-200px";
      el.style.opacity = 0;
    },
    enter: (el, done) => {
      let delay = parseInt(el.getAttribute("delay"));
      let left = parseInt(el.getAttribute("left"));

      Velocity(
        el,
        { opacity: 1, left },
        { delay, duration: 2000, complete: done }
      );
    },
  },
  computed: {
    pointPosition() {
      return {
        marginLeft: this.xPosition,
        marginTop: this.yPosition,
        color: "white",
      };
    },
  },
};
</script>

<style>
#point {
  position: relative;
  z-index: -3;
}
#closeIcon {
  position: absolute;
  margin-top: -40px;
  z-index: 1000
}
.a-move {
  transition: transform 1s;
}
#circle {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: white;
  width: 8px;
  height: 8px;
}
hr {
  color: white;
  background-color: white;
  border: 0 none;
}
.about {
  width: 430px;
  margin-left: -210px;
  margin-top: -33px;
}
.label {
  color: white;
  font-weight: 600;
}
.line {
  background-color: white;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 200px;
}
.city {
  color: white;
  font-weight: 300;
  font-size: 12px;
}
.leftPoint {
  display: flex;
}

.close {
  position: absolute;
  display: none;
  width: 30px;
  height: 30px;
  font-size: 18px;
  border:  white;
  border-width: thin;
  border-radius: 20px;
  background-color: #600509;
}
.close:hover {
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
}

@media only screen and (max-width: 1800px) {
  .leftPoint {
    justify-content: flex-end;
  }
}

@media only screen and (max-width: 768px) {
  .close {
    display: block;
  }
}
</style>
