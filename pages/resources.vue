<template>
  <div>
    <h2 class="text-h2 pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ resources.title }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <nuxt-content :document="resources" class="pa-3" />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const resources = await $content(
      app.i18n.locale + '/pages/resources'
    ).fetch()

    return {
      resources,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
