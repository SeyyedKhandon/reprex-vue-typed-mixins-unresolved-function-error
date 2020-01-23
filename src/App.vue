<template>
  <div id="app" @click="show1()">
    <img alt="Vue logo" src="./assets/logo.png" @click="show2()">
    <HelloWorld msg=" reproducible example for unresolved function error on using vue-typed-mixins"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import mixins from "vue-typed-mixins";
  import HelloWorld from './components/HelloWorld.vue';
  import {test} from "./mixin";

  export default mixins(test).extend({
    name: 'app',
    data() {
      return {
        testData: this.resetData()
      }
    },
    components: {
      HelloWorld
    },
    methods: {
      show2() {
        alert("show2")
      },
      show3(){
        alert("show3");
        this.testData = this.resetData();
        this.show2();
      }
    }
  });
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
