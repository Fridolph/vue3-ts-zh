<template>
  <div class="dropdown">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  // setup() {

  // }
}
</script>

<style lang="stylus" scoped>
.dropdown
  position absolute
  right 40px
  top 54px
  min-width 140px
  background-color #fff
  border 1px solid #dedede
</style>
