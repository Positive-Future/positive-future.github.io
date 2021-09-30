<template>
  <section
    style="background-color: #fff1d0"
    :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
  >
    <v-row justify="center">
      <v-col xs="12" sm="11" md="8" lg="7" xl="6">
        <h1 class="mt-8 mb-4">
          {{ privacy.title }}
        </h1>
        <nuxt-content :document="privacy" />
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const privacy = await $content('/en/pages/privacy').fetch()
    return {
      privacy,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
