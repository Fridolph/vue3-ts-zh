<template>
  <a-row>
    <a-col span="4">
      <img :src="column.avatar" width="100" height="100" />
    </a-col>
    <a-col span="20">
      <h1>{{ column.title }} - 专栏</h1>
      <!-- <h2>{{ route }}</h2> -->
      <p>{{ column.description }}</p>
    </a-col>
  </a-row>

  <div class="detail-row" v-for="item in post" :key="item.id">
    <a-card style="width: 100%;margin: 10px" hoverable>
      <div class="card-inner">
        <div class="content">
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </div>
        <template v-if="item.image">
          <img :src="item.image" width="180" height="100"/>
        </template>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalStoreProps } from '@/store/index'
import { columnList, postList } from '@/mocks/testData'
export default defineComponent({
  setup() {
    const route = useRoute()
    const currentId = Number(route.query.id)
    const column = columnList.find(v => v.id === currentId)
    const post = postList

    // const store = useStore<GlobalStoreProps>()

    // onMounted(() => {

    // })

    return {
      route,
      column,
      post,
    }
  }
})
</script>

<style lang="stylus" scoped>
.card-inner
  display flex
  .img
  .content
    flex 1
    margin-right 20px
    h2
      font-weight bold
</style>
