<template>
  <div class="page-todolist">
    <Header />
    <h1>TodoList <small>{{msg}}</small></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    Header
  },
  props: {
    msg: {
      type: String,
      default: 'hello'
    }
  }
});
</script>
