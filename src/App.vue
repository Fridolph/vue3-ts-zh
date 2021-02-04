<template>
  <div id="app" class="page-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  color #2c3e50
  margin-bottom 20px
</style>
