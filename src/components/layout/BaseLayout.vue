<template>
  <a-layout class="sticky-footer-wrapper">
    <Header />
    <a-layout-content class="sticky-content">
      <router-view></router-view>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script lang="ts">
import Header from './BaseHeader.vue'
import Footer from './Footer.vue'
export default {
  name: 'LayoutHMF',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
.sticky-footer-wrapper
  display flex
  min-height calc(100vh)
  flex-direction column
  .sticky-content
    flex 1
    padding 64px 0 0 0
  .sticky-footer
    width 100%
</style>
