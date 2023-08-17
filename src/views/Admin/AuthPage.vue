<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FormInstance, FormRules } from 'element-plus'
import { useHead } from "@unhead/vue"

import type { auth as authRule } from '@/interfaces/user'
import { loginService } from '../../services/auth'
import { token } from '@/utils/constant'
import { useUserStore } from '../../stores/user';

const router = useRouter()
const userStore = useUserStore()

const auth = reactive<authRule>({
  username: '',
  password: ''
})
const submitting:boolean = ref(false)
const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules<authRule>>({
  username: [
    {
      required: true,
      message: 'Please username is required',
      trigger: 'blur'
    },
    {
      min: 5,
      message: 'Length should not be less than 5',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
      trigger: 'blur'
    },
    {
      min: 5,
      message: 'Length should be more than 5 characters',
      trigger: 'blur'
    }
  ]
})

useHead({
  title: "Login"
})

const logIn = async function (formEl: FormInstance | undefined) {
  submitting.value = true
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        const response = await loginService(auth)
        localStorage.setItem(token, response.data.token)
        userStore.setUser(auth.username)
        router.push("/admin")
        submitting.value = false
      } catch (error) {
        ElMessage.error(error.response.data.non_field_errors[0])
        submitting.value = false
      }
    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="h-screen bg-background-light flex justify-center items-center flip-container">
    <div class="border border-primary w-1/3">
      <div class="bg-primary p-5 text-white-shade">Welcome Admin, Please log in</div>
      <el-form
        :model="auth"
        ref="ruleFormRef"
        :rules="rules"
        class="p-10"
        label-position="top"
        :hide-required-asterisk="true"
      >
        <el-form-item label="Username" prop="username">
          <el-input
            v-model="auth.username"
            size="large"
            placeholder="Please Enter Your Username"
          />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="auth.password"
            type="password"
            size="large"
            placeholder="Please Enter Your Password"
            show-password
          />
        </el-form-item>
        <br />
        <el-button
          type="primary"
          @click="logIn(ruleFormRef)"
          class="w-full"
          size="large"
          :loading="submitting"
          :disabled="auth.username.length <= 5 || auth.password.length <= 5"
        >
          Login
        </el-button>
      </el-form>
    </div>
  </div>
</template>
