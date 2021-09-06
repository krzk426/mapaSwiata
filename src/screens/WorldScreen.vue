<template>
<div class="container-fluid">
  <div id="worldscreen">
    <div id="worldPoint">
      <div id="worldImg">
        <div class="center">
          <div >
            <img  id="world"  src="../assets/world.png" />
          </div>
          
          <div id="points">
            <Points
              id="placePoint"
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
      var element = document.getElementById("placePoint");
      // var element2 = document.getElementById("world");
      this.xPosition = xPosition;
      this.yPosition = yPosition;
      this.label = label;
      this.city = city; 
      this.pointAnimation(element)
      this.show = true;
    },
    setShow(){
      this.show = false;
    },
    pointAnimation(element) {
      element.animate(
        [{ opacity: "0" }, { opacity: "1" }],
        {
          fill: "forwards",
          duration: 1500,
        }
      );
    },
  },
  computed:{
    mobileMap(){
      return{
        objectPosition: this.xPosition,
      }
    }
    
  }
};
</script>

<style scoped>

.center {
  
  width: 1556px;
  
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* width: 80%; */
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
#world{
 
  object-fit:cover;
  height: 800px;
  /* object-position: -500px 30px; */
  
}
#placePoint{
object-position: -500px 30px;
}

.mobileMapStartPoint{
  object-position: 200px;
}
}


</style>
