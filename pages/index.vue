<template>
  <v-card-text class="pa-sm-12">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="text-h2 my-3">
          {{ index.title }}
        </div>
        <div class="text-h5 my-3">
          {{ index.subtitle }}
        </div>
      </v-col>
    </v-row>
    <nuxt-content :document="index" />
  </v-card-text>
</template>

<script>
export default {
  components: {},
  async asyncData({ app, $content }) {
    const index = await $content(app.i18n.locale + '/pages/index').fetch()

    return {
      index,
    }
  },
}
</script>
