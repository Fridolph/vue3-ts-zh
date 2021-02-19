<template>
  <div class="async-show img-placeholder">
    <h3 v-if="status === 'loading'">Loading ...</h3>
    <img v-if="url" :src="url">
  </div>
</template>

<script lang="ts">
// import { toRefs, onMounted } from 'vue'
import useURLLoader from './hooks/useURLLoader'

export default {
  async setup() {
    const { url, status } = await useURLLoader('cat')

    return {
      url, status
    }
  }
}
</script>

<style lang="stylus" scoped>
.img-placeholder
  margin 10px
  position relative
  width 320px
  height 180px
  border 1px solid #dedede
  text-align center
  overflow hidden
  img
    position absolute;
    max-width 100%
    left 50%
    top 50%
    transform translate(-50%, -50%)
    // max-height 100%
</style>
