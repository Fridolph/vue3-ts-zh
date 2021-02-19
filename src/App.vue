<template>
  <div class="page-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="stylus">
*
  padding: 0;
  margin: 0;
  box-sizing: border-box;
ol, ul, li
  list-style: none;
a:focus, a:active
  outline: none;
a, a:focus, a:hover
  cursor: pointer;
  color: inherit;
  text-decoration: none;
.clearfix::after
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;

html, body
  min-height 100vh
  overflow hidden
  overflow-y auto

.page-wrapper
  min-height 100vh

</style>
