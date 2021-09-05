<template>
  <div id="Company">
    <div class="aboutPage">
      <div class="aboutTitle">
        {{ getString("aboutContent", "title") }}
      </div>
      <div class="aboutContent">
        {{ getString("aboutContent", "desc") }}
      </div>
    </div>
  </div>
</template>

<script>
import { getString } from "../locale/string";

export default {
  name: "AboutCompany",
  data() {
    return {};
  },
  components: {},
  methods: {
    getString,
  },
};
</script>

<style scoped>
.aboutPage {
  border: solid;
}
.aboutTitle {
  color: white;
  font-weight: 600;
  font-size: 18px;
  padding: 30px;

  /* margin-bottom: 20px; */
}
.aboutContent {
  color: white;
  padding-left: 30px;
  font-weight: 300;
  font-size: 16px;
  padding-right: 25px;
  hyphens: manual;
  line-height: 1.6;
  padding-bottom: 50px;
  /* word-break: break-all */
}
</style>
