<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script>
import { ThreeEngine } from './js/TEngine';
import { allBaseObject } from './js/TBaseObject';
import { allLights } from './js/TLights';
import { allHelper } from './js/THelper';

export default {
  name: 'HelloWorld',
  data() {
    return {
      ThreeEngine: null,
    };
  },
  mounted() {
    this.ThreeEngine = new ThreeEngine(this.$refs.threeTarget);
    this.ThreeEngine.addObject(...allBaseObject);
    this.ThreeEngine.addObject(...allLights); // 添加光线
    this.ThreeEngine.addObject(...allHelper); // 添加辅助线
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.three-canvas {
  width: 100%;
  height: 1080px;
  overflow: hidden;
  background-color: #d6eaff;
}
</style>
