<script lang="ts" setup>
import { useHead } from '@unhead/vue'

useHead({ title: `Privacy Policy` })
</script>
<template>
  <div class="">
    <div
      class="h-screen bg-background-light dark:primary dark:bg-background-dark relative flex items-center"
    >
      <div
        class="h-full md:w-2/3 z-10 bg-gradient-to-r from-background-light dark:from-background-dark md:from-55% to-transparent flex flex-col justify-center items-start"
      >
        <div class="p-5 lg:px-16 2xl:px-20">
          <h1 class="text-8xl font-mono uppercase">Privacy Policy</h1>
        </div>
        <div class="p-5 lg:px-16 2xl:px-20">
          <a
            href="#content"
            class="w-20 h-20 md:w-32 md:h-32 flex justify-center items-center rounded-full border-[2px] border-[currentColor] dark:border-white-shade hover:opacity-75"
          >
            <p class="text-5xl md:text-7xl animate-bounce">&DownArrow;</p>
          </a>
        </div>
      </div>
      <img
        src="@/assets/imgs/archive.png"
        class="absolute top-0 right-0 w-full h-full object-cover md:object-scale-down md:object-right-top"
      />
    </div>
    <a name="content" />
    <div class="px-5 py-20 lg:px-16 2xl:px-20 text-xl lg:text-2xl lg:py-20 text-justify">
      Thank you for visiting [PaulBowles.org] ("Website"). At [PaulBowles.org], we are committed to
      protecting your privacy and ensuring that your personal information is kept secure. This
      Privacy Policy outlines our practices concerning the collection, use, and disclosure of your
      information when you visit our Website. Please read this Privacy Policy carefully to
      understand how we handle your information.
      <br /><br />
      <h2 class="font-bold font-heading">1. Information We Do Not Collect:</h2>
      We want to make it clear that [PaulBowles.org] does not collect any personally identifiable
      information (PII) or personal data from visitors, unless explicitly provided by you
      voluntarily through forms, email, or other direct contact.
      <br />
      We do not collect the following types of data:
      <ul class="mb-6">
        <br />
        <li class="mb-3">
          1.1. Personal Information: [PaulBowles.org] does not request or collect any personal
          information, such as your name, address, phone number, or social security number.
        </li>
        <li class="mb-3">
          1.2. Usage Data: We do not collect information about your usage of our Website, such as
          your IP address, browser type, device information, or browsing history.
        </li>
        <li class="mb-3">
          1.3. Cookies and Tracking Technologies: We do not use cookies or any other tracking
          technologies to monitor your online activities on our Website.
        </li>
        <li class="mb-3">
          1.4. Third-Party Data: We do not obtain or receive any information about you from
          third-party sources.
        </li>
      </ul>
      <h2 class="font-bold font-heading">2. Information You Provide Voluntarily:</h2>
      If you choose to contact us through the contact form or email, you may provide us with
      personal information such as your name and email address. We will only use this information to
      respond to your inquiries or requests. We do not share or sell this information to third
      parties.
      <br /><br />
      <h2 class="font-bold font-heading">3. Links to Third&mdash;Party Websites:</h2>
      Our Website may contain links to third-party websites for your convenience. We are not
      responsible for the privacy practices or content of these external websites. We encourage you
      to review the privacy policies of any third-party websites you visit.
      <br /><br />
      <h2 class="font-bold font-heading">4. Children's Privacy:</h2>

      Our Website is not directed towards children under the age of 13. We do not knowingly collect
      or maintain information from individuals under the age of 13.
      <br /><br />
      <h2 class="font-bold font-heading">5. Changes to this Privacy Policy:</h2>
      We may update this Privacy Policy from time to time to reflect changes in our practices or for
      other operational, legal, or regulatory reasons. We will indicate the "Effective Date" at the
      top of this Privacy Policy to inform you of any updates. We encourage you to review this
      Privacy Policy periodically.
    </div>
  </div>
</template>
