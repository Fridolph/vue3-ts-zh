import { shallowMount } from '@vue/test-utils'
import TodoList from '@/views/TodoList/index.vue'

describe('@/Views/TodoList/TodoList.vue', () => {
  it('组件正常渲染', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TodoList, {
      props: { msg }

    })
    expect(wrapper.text()).toMatch(msg)
  })
})
