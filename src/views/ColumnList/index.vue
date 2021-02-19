<template>
  <ColumnList :list="list">
  </ColumnList>
</template>

<script lang="ts">
// import { reactive, computed, toRefs } from 'vue'
import ColumnList from './ColumnList.vue'

export default {
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    const list = [
      {
        id: 0,
        title: '标题1标题1标题1标题1',
        avatar: '/img/logo.png',
        description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      },
      {
        id: 2,
        title: '标题2标题2标题2标题2',
        avatar: '/img/logo.png',
        description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      },
      {
        id: 3,
        title: '标题3标题3标题3标题3',
        avatar: '/img/logo.png',
        description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      },
      {
        id: 4,
        title: '标题4标题4标题4标题4',
        // avatar: '/img/logo.png',
        description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      },
      {
        id: 5,
        title: '标题5标题5标题5标题5',
        avatar: '/img/logo.png',
        description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      },
      {
        id: 6,
        title: '标题6标题6标题6标题6',
        avatar: '/img/logo.png',
        description: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
      },
    ]
    return {
      list
    }
  }
}
</script>
