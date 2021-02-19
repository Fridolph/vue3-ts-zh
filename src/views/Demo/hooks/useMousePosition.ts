import { reactive, onMounted, onUnmounted } from 'vue'

export default function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  const updateMouse = (e: MouseEvent) => {
    pos.x = e.pageX
    pos.y = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })

  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })

  return pos
}
