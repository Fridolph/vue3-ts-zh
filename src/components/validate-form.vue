<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <a-button ref="btnRef" type="primary">提交</a-button>
        <a-button ref="btnRef" style="margin-left:20px">清空</a-button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

type ValidateFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  emits: ['form-submit'],
  setup(props, context) {
    let funcArr: ValidateFunc[] = []
    const btnRef = ref('')

    const submitForm = (e: MouseEvent) => {
      if (e.target.innerText.includes('提')) {
        const result = funcArr.map(func => func()).every(result => result)
        context.emit('form-submit', result)
      } else if (e.target.innerText.includes('清')) {
        // const result = funcArr.map(func => func()).every(result => result)
        // context.emit('form-submit', result)
      }
    }

    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })

    return {
      btnRef, submitForm,
      callback
    }
  }
})
</script>

<style lang="stylus" scoped>
.submit-area
  display block
  width auto
</style>
