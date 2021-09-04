<template>
  <div id="nav" class="d-none d-sm-block">
    <div class="row  ">
      <div class="col-md-2 ">
        <div class="row">
          <div class="col-md-3">
            <img id="logo" src="../../assets/logo.png" alt="logo" />
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-6" id="aboutCompany">
            <div class="text companyName">
              {{ getString("navbar", "companyName1").toUpperCase() }}
              <span id="companyNameBold">{{
                getString("navbar", "companyName2").toUpperCase()
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-4 " >
        <div class="row" >
          <div class="col-md-4 text textCenter">
            {{ getString("navbar", "ourWork").toUpperCase() }}
          </div>
          <div class="col-md-7 col-xl-8 col-xxl-7 text">
            {{ getString("navbar", "technologyProcess").toUpperCase() }}
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-4">
        <div class="row">
          <div class=" col-md-4 text textRight">
            {{ getString("navbar", "aboutUs").toUpperCase() }}
          </div>
          <div class="col-md-3 text textCenter">
            {{ getString("navbar", "contact").toUpperCase() }}
          </div>
          <div class="col-md-1" />
          <div class="col-md-3 text">
            <div class="row">
              <div class=" col-md-3 ">
                <span class="material-icons">expand_more</span>
              </div>
              <div class=" col-md-7 ">
                {{ getString("navbar", "pl").toUpperCase() }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getString } from "../../locale/string";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    getString,
  },
};
</script>

<style scoped>

[class*="col-xxl"]{
  text-align: left !important ;
}

.logo {
  width: 50px;
  height: 50px;
}
#nav {
  margin: 40px;
}
.text {
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 12px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 600;
}
#companyNameBold {
  font-weight: 800 !important;
}
.companyName {
  font-weight: 400 !important;
}
.row {
  display: flex;
  align-items: center;
}
.textCenter {
  text-align: center;
}
.textRight {
  text-align: right;
}
.material-icons{
  font-size: 18px;
  padding-top: 5px;
}



@media only screen and (max-width: 1600px){
  [class*="col-xxl"]{
  text-align: left !important ;
}

}

@media only screen and (max-width: 1200px){
  [class*="col-xxl"]{
  text-align: center !important ;
}

}


@media only screen and (max-width: 1020px){
  .textRight
    {
    text-align: center !important;
  }

}

@media only screen and (max-width: 768px){
.text
  {
    text-align: center !important;
  }
  [class*="col-xxl"]{
  text-align: center ;
}
}


</style>
