<template>
  <div>
    <h2 class="text-h2 pt-6 text-uppercase text-center">
      {{ contest.title }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <v-sheet color="#E0E0E0" class="my-1 mx-5 pa-6">
      <h3 class="font-weight-regular headline">
        {{ contest.theme.title }}
      </h3>
      <p>{{ contest.theme.text }}</p>
    </v-sheet>
    <nuxt-content :document="contest" class="pa-6" />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const contest = await $content(app.i18n.locale + '/pages/contest').fetch()

    return {
      contest,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
