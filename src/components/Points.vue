<template>
  <div id="point">
    <div :style="pointPosition">
      <div id="circle"></div>

      <div
        class="about"
        :class="{
          leftPoint:
            xPosition && xPosition.substr(0, xPosition.indexOf('px')) < 250,
        }"
      >
        
          <transition name="a" mode="out-in">

            <div>
              <div
                class="label"
                :class="{
                  leftPoint:
                    xPosition &&
                    xPosition.substr(0, xPosition.indexOf('px')) < 250,
                }"
              >
                {{ label }}
              </div>
              <div class="line"></div>
              <div
                class="city"
                :class="{
                  leftPoint:
                    xPosition &&
                    xPosition.substr(0, xPosition.indexOf('px')) < 250,
                }"
              >
                {{ city }}
              </div>
            </div>
            </transition>
      
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

@media only screen and (max-width: 1800px) {
  .leftPoint {
    justify-content: flex-end;
  }
}
</style>
