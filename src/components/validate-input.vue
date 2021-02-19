<template>
  <div class="validate-input-wrapper">
    <input v-bind="$attrs" :value="inputRef.text" @input="updateValue" @blur="validateInput" />
    <p class="err-tips" v-if="inputRef.hasError">{{ inputRef.message }}</p>
  </div>
</template>

<script lang="ts">
import { reactive, PropType, defineComponent, onMounted } from 'vue'
import { emitter } from '@/components/validate-form.vue'

const mailReg = /\w+@\w+\.\w+/
interface RuleProp {
  type: 'required' | 'email' | 'password';
  message: string;
}
export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'validate-input',
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      required: true
    },
    modelValue: String
  },
  setup(props, context) {
    const inputRef = reactive({
      text: props.modelValue || '',
      hasError: false,
      message: ''
    })

    const updateValue = (e: KeyboardEvent) => {
      const tValue = (e.target as HTMLInputElement).value
      inputRef.text = tValue
      context.emit('update:modelValue', tValue)
    }

    const validateInput = (e: any) => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          inputRef.message = rule.message
          let passed = true
          switch (rule.type) {
            case 'required':
              passed = inputRef.text.trim() !== ''
              break
            case 'email':
              passed = mailReg.test(inputRef.text.trim())
              break
            case 'password':
              passed = (inputRef.text.trim().length >= 6 && inputRef.text.trim().length <= 16)
              break
            default:
              break
          }
          return passed
        })
        inputRef.hasError = !allPassed
        return allPassed
      }
    }

    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })

    return {
      inputRef, updateValue, validateInput
    }
  }
})
</script>

<style lang="stylus" scoped>
.validate-input-wrapper
  position relative
  min-height 60px
  input
    height 30px
    line-height 30px
    padding 0 8px
  .err-tips
    position absolute
    left 0
    top 31px
    z-index 1
    line-height 30px
    height 30px
    margin 0
    color red
</style>
