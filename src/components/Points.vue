<template>
  <div id="point">
    <div :style="pointPosition">
      <div id="circle"></div>

    <div class="about">
      <div class="label">{{ label }}</div>
      <div class="line"></div>
      <div class="city">{{ city }}</div>
    </div>
        </div>
  </div>
</template>

<script>
import { getString } from "../locale/string";

export default {
  name: "Points",
  props: ["xPosition", "yPosition", "label", "city"],
  data() {
    return {};
  },
  methods: {
    getString,
  },
  computed: {
    pointPosition() {
      return {
        // backgroundColor: "white",
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
  /* border: 1px solid white; */
  color: white;
  background-color: white;
  border: 0 none;
}
.about {
  width: 200px;
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
}
.city{
  color: white;
  font-weight: 300;
  font-size: 12px;
  /* letter-spacing: 1px; */
}
</style>
