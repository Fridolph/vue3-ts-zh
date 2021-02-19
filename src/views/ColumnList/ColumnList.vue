<template>
  <h1>专栏列表</h1>
  <a-row :gutter="[10,10]" class="column-list-wrapper">
    <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" :xxl="6" v-for="column in colummList" :key="column.id">
      <a-card hoverable>
        <div class="img-wrapper">
          <img :src="column.avatar" :alt="column.title">
        </div>
        <div class="content-wrapper">
          <h3>{{ column.title }}</h3>
          <p>{{ column.description }}</p>
          <!-- <a-button type="primary" @click="toColumn(column.id)">进入专栏</a-button> -->
          <router-link :to="`/columnDetail?id=${column.id}`" class="ant-btn ant-btn-primary">进入专栏</router-link>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const colummList = computed(() => {
      return props.list.map((item: ColumnProps) => {
        if (!item.avatar) {
          item.avatar = require('@/assets/nodata.svg')
        }
        return item
      })
    })
    const toColumn = () => ({})

    return {
      colummList
    }
  }
})
</script>

<style lang="stylus" scoped>
.column-list-wrapper
  padding 20px
  display flex
  flex-wrap wrap

  .img-wrapper
    overflow hidden
    width 180px
    height 100px
    img
      max-width 100%
      max-height 100%

  .content-wrapper
    overflow hidden
    h3
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    p
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
