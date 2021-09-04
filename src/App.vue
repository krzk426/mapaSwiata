<template>
  <div id="app">
    <navbar/>
    <world-screen />
  </div>
</template>

<script>
import WorldScreen from "./screens/WorldScreen.vue";
import Navbar from "./components/navbar_footer/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar,
    WorldScreen,
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
</style>
