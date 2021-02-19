<template>
  <div class="dropdown-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.dropdown-item
  line-height 30px
  height 34px
  margin 4px 0
  color #333
  padding 2px 10px
  border-bottom 1px solid #efefef
  &:last-child
    border-bottom none
  &:hover
    background-color #efefef
</style>
