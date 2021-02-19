<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <div class="logo">LOGO</div>
    <a-menu
      @click="click"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="home">Home</a-menu-item>
      <a-menu-item key="demo">Demo</a-menu-item>
      <a-menu-item key="article">Article</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const click = (item: any) => {
      router.push({
        path: `/${item.key}`
      })
    }
    return {
      click
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  // width: 120px;
  height: 31px;
  // background: rgba(255, 255, 255, 0.2);
  margin: 16px 48px 16px 0;
  float: left;
  line-height 31px
  font-size 24px
  font-weight bold
  text-align center
  color #fff
</style>
