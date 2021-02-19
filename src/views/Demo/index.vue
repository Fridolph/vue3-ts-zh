<template>
  <h1>Demo Page</h1>
  <p>{{ error }}</p>
  <h2>1. useMousePosition - pageX: {{x}}  -  pageY: {{y}}</h2>

  <h2>2. useURLLoader</h2>
  <a-button :disabled="imgStatus === 'loading'" @click="refreshImg('cat')">🐱猫猫🐱</a-button>
  <a-button :disabled="imgStatus === 'loading'" @click="refreshImg('dog')">🐕狗狗🐕</a-button>
  <div class="img-placeholder">
    <h3 v-if="imgStatus === 'loading'"> Loading ... </h3>
    <img v-if="imgStatus === 'loaded'" :src="imgUrl" />
  </div>

  <h2>3. Suspense Vue3新推出的异步组件</h2>
  <Suspense>
    <template #fallback>
      <h3>正在读取图片哦 ... </h3>
    </template>
    <template #default>
      <div style="display: flex; flex-wrap: nowrap">
        <CatShow />
        <CatShow />
        <CatShow />
        <DogShow />
        <DogShow />
        <DogShow />
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { ref, toRefs, onMounted, onErrorCaptured } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
import DogShow from './DogShow.vue'
import CatShow from './CatShow.vue'

export default {
  components: {
    DogShow,
    CatShow
  },
  setup() {
    const pos = useMousePosition()
    const { x, y } = toRefs(pos)

    const imgUrl = ref('')
    const imgStatus = ref('')
    // const imgError = ref('')
    const refreshImg = async (type: string) => {
      imgStatus.value = 'loading'
      const { url, status } = await useURLLoader(type)
      imgUrl.value = url
      imgStatus.value = status
    }

    onMounted(() => {
      refreshImg('dog')
    })

    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
      console.log('onErrorCaptured: ', e)
      return true
    })

    return {
      error,
      // useMousePosition
      x, y,
      // useURLLoader
      imgUrl, imgStatus, refreshImg,
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
