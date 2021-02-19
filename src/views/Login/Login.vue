<template>
  <div class="page-wrapper login-page">
    <a-card title="登录" style="width: 600px;margin:0 auto">
      <validate-form class="form-wrapper" @form-submit="onFormSubmit">
        <div class="form-item">
          <span class="label">用户名/邮箱</span>
          <validate-input type="text" ref="mailRef" v-model="mailVal" :rules="mailRules" placeholder="请输入用户名/邮箱"></validate-input>
        </div>
        <div class="form-item">
          <span class="label">密码</span>
          <validate-input type="password" ref="pwdRef" v-model="pwdVal" :rules="pwdRules" placeholder="请输入密码"></validate-input>
        </div>
      </validate-form>
    </a-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidateForm from '@/components/validate-form.vue'
import ValidateInput from '@/components/validate-input.vue'
export default {
  name: 'Login',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const store = useStore()
    const mailRef = ref(null)
    const mailVal = ref('123@test.com')
    const pwdRef = ref(null)
    const pwdVal = ref('123456')
    const router = useRouter()

    const mailRules = [
      { type: 'required', message: '请输入该项' },
      { type: 'email', message: '请输入正确的邮箱格式' }
    ]
    const pwdRules = [
      { type: 'required', message: '请输入该项' },
      { type: 'password', message: '请输入6-16位密码' }
    ]

    const handleSubmit = () => {
      alert(`提交表单 帐号：${mailVal.value} 密码：${pwdVal.value}`)
    }


    const onFormSubmit = (result) => {
      // mailRef.value.validateInput()
      // pwdRef.value.validateInput()
      if (result) {
        console.log('onFormSubmit: ', '提交表单成功')
        store.commit('login')
        router.push({ path: '/columnList'})
      }
    }

    return {
      mailVal, mailRules, mailRef,
      pwdVal, pwdRules, pwdRef,
      handleSubmit, onFormSubmit
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-page
  background-color #efefef
  padding-top 100px
  .ant-card-hoverable
    cursor normal !important

.form-wrapper
  .form-item
    display flex
    margin-bottom 10px
    position relative
    .label
      width 90px
      margin-right 10px
    .validate-input-wrapper
      width calc(100% - 100px)
</style>
