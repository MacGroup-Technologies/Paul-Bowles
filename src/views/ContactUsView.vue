<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
import { useHead } from "@unhead/vue"

const wylie = reactive({
  name: "",
  email: "",
  message: "",
})

const peter_wright = reactive({
  name: "",
  email: "",
  message: "",
})

const wylie_loading = ref(false)

const wylie_mail = ref<FormInstance>()
const peter_wright_loading = ref(false)
const peter_wright_mail = ref<FormInstance>()



const sendMessage = async function (formEl: FormInstance | undefined, form: String) {
  if (!formEl) return;

  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
        console.log(form)
      } catch (error) {
        console.log(error)
      }
    } else {
      return false
    }
  })
}

const verifyEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error("Email cannot be empty"))
  } else {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (regex.test(value)) {
      callback()
    } else {
      callback(new Error("Email is not valid"))
    }
  }
}

const rules = reactive({
  name: [
    {
      required: true,
      message: "Uhhh, we need your name",
      trgigger: "blur"
    },
  ],
  email: [
    {
      required: true,
      message: "Email is required to send a message",
      trigger: "blur",
    },
    {
      validator: verifyEmail, trigger: "blur",
    }
  ],
  message: [
    {
      required: true,
      message: "Message cannot be empty",
      trigger: "blur",
    }
  ]
})

useHead({
  title: "Contact"
})
</script>
<template>
  <div class="">
    <div
      class="mt-16 min-h-[400px] md:h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center">
      <img src="@/assets/imgs/contact.png" class="absolute top-0 right-0 w-full h-full object-cover" />
      <div class="cover__overlay" />
      <div class="h-full md:w-2/3 flex flex-col justify-center items-start relative">
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-title font-mono uppercase">Contact</h1>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20 max-md:hidden">
          <a href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75">
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
    </div>
    <a name="content" />
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 text-center">
      <h2 class="font-semibold">For enquiries about the writings of Paul Bowles please contact:</h2>
      <p class="my-5">
        The Wylie Agency<br />
        250 West 57th Street, Suite 2114, New York, NY 10107<br />
        tel +1 212 246 0069<br />
        To send a message please complete the contact form below:
      </p>
      <el-form :model="wylie" :rules="rules" ref="wylie_mail" class="md:w-1/2 my-10 mx-auto" label-position="top">
        <el-form-item label="Name" prop="name">
          <el-input v-model="wylie.name" size="large" placeholder="Your name" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="wylie.email" size="large" placeholder="example@example.com" />
        </el-form-item>
        <el-form-item label="Message" prop="message">
          <el-input type="textarea" v-model="wylie.message" size="large" placeholder="Your message"
            :autosize="{ minRows: 10, maxRows: 20 }" />
        </el-form-item>
        <el-button type="primary" size="large" class="w-1/2" :loading="wylie_loading"
          @click="sendMessage(wylie_mail, 'wylie')"
          :disabled="wylie.name.length === 0 || wylie.email.length === 0 || wylie.message.length === 0">
          Send Message
        </el-button>
      </el-form>
    </div>
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 text-center">
      <h2 class="font-semibold">
        For enquiries about the music of Paul Bowles please contact:
      </h2>
      <p class="my-5">
        Peter Wright<br />
        Songs of Virtual<br />
        Virtual Label, 487 MacDonough Street, Brooklyn, NY 11233, USA<br />
        To send a message please complete the contact form below:
      </p>
      <el-form :model="peter_wright" :rules="rules" ref="peter_wright_mail" class="md:w-1/2 my-10 mx-auto"
        label-position="top">
        <el-form-item label="Name" prop="name">
          <el-input v-model="peter_wright.name" size="large" placeholder="Your name" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="peter_wright.email" size="large" placeholder="example@example.com" />
        </el-form-item>
        <el-form-item label="Message" prop="message">
          <el-input type="textarea" v-model="peter_wright.message" size="large" placeholder="Your message"
            :autosize="{ minRows: 10, maxRows: 20 }" />
        </el-form-item>
        <el-button type="primary" size="large" class="w-1/2" :loading="peter_wright_loading"
          @click="sendMessage(peter_wright_mail, 'wylie')"
          :disabled="peter_wright.name.length === 0 || peter_wright.email.length === 0 || peter_wright.message.length === 0">
          Send Message
        </el-button>
      </el-form>
    </div>

    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20">
      <h2 class="uppercase font-heading text-title font-bold">Credits</h2>
      <div class="flex gap-10 flex-col md:flex-row">
        <div class="md:w-1/2 md:py-5">
          <div class="mb-5">
            <h3 class="font-bold">Bibliographical Support</h3>
            Paula Arroyo<br />
            Camila González Adel<br />
            Israel Jorquera Vidal<br />
            Melina Luceri
          </div>
          <div class="mb-5">
            <h3 class="font-bold">Design & Web Developement</h3>
            MacGroup Technologies
          </div>
          <div class="mb-5">
            <h3 class="font-bold"> Photography </h3>
            Émil Hernon<br />
            Floriana Lazzaneo
          </div>
          <div class="mb-5">
            <h3 class="font-bold">Programming</h3>
            Felipe Duarte<br />
            Israel Jorquera Vidal
          </div>
          <div class="mb-5">
            <h3 class="font-bold">Proofreading</h3>
            Sara Gregg<br />
            Antiochus Ommisi<br />
            Arianna Sullivan
          </div>
        </div>
        <div class="md:w-1/2 md:py-5">
          <div class="mb-5">
            <h3 class="font-bold">Research</h3>
            Delfina Cabrera<br />
            Rodrigo Rey Rosa
          </div>
          <div class="mb-5">
            <h3 class="font-bold"> Transcriptions</h3>
            Abdelaziz Jadir<br />
            Antiochus Ommisi
          </div>
          <div class="mb-5">
            <h3 class="font-bold">Translations</h3>
            Arthur Malcolm Dixon<br />
            Daniel Fitzgerald<br />
            Abdelaziz Jadir<br />
            William Morningstar
          </div>
        </div>
      </div>
      <h2 class="uppercase font-heading text-title font-bold">ACKNOWLEDGEMENTS</h2>
      <div class="flex gap-10 flex-col md:flex-row mt-5">
        <div class="md:w-1/2">
          Miquel Barceló<br />
          Ambrogio Borsani<br />
          <br />

          Gary Conklin<br />
          <br />

          Jean Philippe Fournier<br />
          <br />

          Xenia Geroulanos<br />
          <br />

          Peter Hale<br />
          Émil Hernon<br />
          Irene Herrmann<br />
          <br />

          Abdelaziz Jadir<br />
          <br />

          Kenneth Lisenbee<br />
          <br />


          Jeffrey Miller<br />
          Timothy Murray<br />
          <br />

          Cherie Nutting<br />
          <br />

          Simon Pettet<br />
          Francis Poole<br />
          Jeffrey Posternak<br />
          <br />

          Philip Ramey<br />
          Pía Rey Rosa<br />
          Katharina Rippstein<br />
          <br />

          Claude Natalie Thomas<br />
        </div>
        <div class="md:w-1/2">
          Leonard Bernstein Office<br />
          Fotostiftung Schweiz<br />
          The Allen Ginsberg Project<br />
          The Harry Ransom Center at The University of Texas at Austin<br />
          The University of Delaware Library<br />
          The Wylie Agency<br />
        </div>
      </div>
    </div>
  </div>
</template>
