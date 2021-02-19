<template>
  <a-layout-header class="base-layout-header">
    <div class="logo">LOGO</div>
    <div v-if="!user.isLogin">
      <a-button type="primary" @click="to('login')">登录</a-button>
      <a-button type="primary" style="margin-left:10px" @click="to('register')">注册</a-button>
    </div>
    <a-dropdown-button style="margin-top: 14px" v-else>
      你好，{{ user.name }}
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <PlusSquareFilled />
            新增文章
          </a-menu-item>
          <a-menu-item key="2">
            <ToolFilled />
            编辑资料
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/login">
              <ApiFilled />
              退出登录
            </router-link>
          </a-menu-item>
        </a-menu>
      </template>
      <template #icon><UserOutlined /></template>
    </a-dropdown-button>
  </a-layout-header>
</template>

<script lang="ts">
import { PropType, computed } from 'vue'
import {
  UserOutlined, PlusSquareFilled, ToolFilled, ApiFilled
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { UserProps, GlobalStoreProps } from '@/store/index'

export default {
  name: 'BaseHeader',
  components: {
    UserOutlined, PlusSquareFilled, ToolFilled, ApiFilled
  },
  setup() {
    const store = useStore<GlobalStoreProps>()
    const user = computed(() => store.state.user)
    const router = useRouter()
    const to = (routeName: string) => {
      router.push({ path: `/${routeName}` })
    }

    return {
      to,
      user
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-layout-header
  display flex
  justify-content space-between
  position fixed
  z-index: 1
  width 100%
  background-color #222
.logo
  // width: 120px;
  height: 31px;
  // background: rgba(255, 255, 255, 0.2);
  margin: 16px 48px 16px 0;
  // float: left;
  line-height 31px
  font-size 24px
  font-weight bold
  text-align center
  color #fff

.user-wrap
  color #fff
</style>
