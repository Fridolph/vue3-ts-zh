import { shallowMount } from '@vue/test-utils'
import Header from '@/views/TodoList/Header.vue'

describe('@/Views/TodoList/Header.vue', () => {
  it('1. 组件包含 input 框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBe(true)
  })

  it('2. input 初始值为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.inputValue
    // console.log('inputValue -> ', inputValue)
    expect(inputValue).toBe('')
  })

  it('3. input 双向绑定 数据跟着变', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('hello world')
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('hello world')
  })

  it('4. 无输入内容时，focus时按enter无反应', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test=input]')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
})
