<template>
<div  class="three-canvas" ref="threeTarget">
</div>
</template>

<script>
import { ThreeEngine } from './js/TEngine'
import { allBaseObject } from './js/TBaseObject'

export default {
  name: 'HelloWorld',
  data(){
    return{
        ThreeEngine: null,
    }
  },
  mounted() {
      this.ThreeEngine = new ThreeEngine(this.$refs.threeTarget);
      console.log(allBaseObject,'allBaseObject')
      this.ThreeEngine.addObject(...allBaseObject);
    }
}
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

