<template>
<div  class="three-canvas" ref="threeTarget">
</div>
</template>

<script>
import { ThreeEngine } from './js/TEngine'

export default {
  name: 'HelloWorld',
  data(){
    return{
        ThreeEngine: null,
    }
  },
  mounted() {
      this.ThreeEngine = new ThreeEngine(this.$refs.threeTarget)
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

