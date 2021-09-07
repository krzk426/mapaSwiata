<template>
  <div id="app" :key="changeLanguageVar">
    <navbar v-on:pl="chooseLanguage" />
    <world-screen />
  </div>
</template>

<script>
import WorldScreen from "./screens/WorldScreen.vue";
import Navbar from "./components/navbar_footer/Navbar.vue"
import { changeLanguage } from "./locale/string";

export default {
  name: "App",
  components: {
    Navbar,
    WorldScreen,
  },
  data() {
    return {
      changeLanguageVar: false,
    };
  },
  methods: {
    changeLanguage,
    chooseLanguage() {
      var element = document.getElementById("app");
      this.changeLanguageVar = !this.changeLanguageVar;
      if (this.changeLanguageVar) {
        this.changeLanguage("pl");
      } else {
        this.changeLanguage("eng");
      }
      this.languageAnimationUp(element);
      this.$forceUpdate();
    },
    languageAnimationUp(element) {
      element.animate(
        [
          {
            backgroundColor: "none",
            zIndex: "9999",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
          },
          {
            backgroundColor: "rgba(255,255,255,0.2)",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
          },
          {
            backgroundColor: "none",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
          },
        ],
        {
          duration: 1000,
        }
      );
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300&display=swap');

body{
  /* background-image: url("./assets/background.png"); */
  background-color: #A00c0c;
   font-family: "Montserrat", sans-serif;
  
}
@media only screen and (max-width: 768px) {
  body{
        touch-action: pan-y;
        box-sizing: border-box;
         overflow-x: hidden;
    }
}

</style>
