<template>
  <div class="todolist-header">
    <div class="logo">
      <h1>LOGO</h1>
    </div>
    <input
      type="text"
      data-test="input"
      v-model="inputValue"
      @keyup.enter="handleAdd"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup(props, context) {
    const inputValue = ref('')
    const handleAdd = () => {
      context.emit('on-add', inputValue.value)
    }
    return {
      inputValue,
      handleAdd
    }
  }
})
</script>

<style lang="stylus" scoped>
.todolist-header
  position absolute
  left 0
  top 0
  width 100%
  height 50px
  background-color #222

</style>
