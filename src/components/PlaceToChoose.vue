<template>
  <div id="worldscreen">
    <div class="test">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm"></div>
        </div>
      </div>
      <div class="container-fluid">
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
          <div class="col-4 place" v-bind:style="{ notChoosen: active }">
            Mosbuild
          </div>
          <div class="col-4 place">
            <span>{{ getString("foreground", "worldAhead") }}</span>
          </div>
          <div class="col-4 ">
            <div
              v-for="(place, index) in thirdColPlaces"
              v-bind:style="{ notChoosen: active }"
              :key="index"
              class="place"
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
              <span
              
                :class="{ notChoosen: index != choosen && active }"
                
                >{{ place.label }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getString } from "../locale/string";

export default {
  name: "PlaceToChoose",
  data() {
    return {
      xPosition: "733px",
      yPosition: "97px",
      choosen: 0,
      active: false,
      thirdColPlaces: [
        {
          xPosition: "860px",
          yPosition: "140px",
          label: this.getString("mosbuild", "label"),
          city: this.getString("mosbuild", "city"),
        },
        {
          xPosition: "836px",
          yPosition: "211px",
          label: this.getString("bau", "label"),
          city: this.getString("bau", "city"),
        },
        {
          xPosition: "707px",
          yPosition: "188px",
          label: this.getString("parisAirShow", "label"),
          city: this.getString("parisAirShow", "city"),
        },
        {
          xPosition: "755px",
          yPosition: "200px",
          label: this.getString("cersaie", "label"),
          city: this.getString("cersaie", "city"),
        },
        {
          xPosition: "1107px",
          yPosition: "282px",
          label: this.getString("ish", "label"),
          city: this.getString("ish", "city"),
        },
        
      ],
    };
  },
  components: {},
  methods: {
    getString,
    sendCoordinates(x, y, city, label, index) {
      if (this.choosen == index && this.active) {
        this.active = false;
        this.$emit("show");
      } else {
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
  },
};
</script>

<style scoped>
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
}

.worldAhead {
  font-size: 90px;
  font-weight: 500;
}
.place {
  font-weight: 500;
  font-size: 18px;
  /* padding-bottom: 10px; */
  margin-top: 5px;
  cursor: pointer;
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
.options {
  width: 600px;
}
</style>
