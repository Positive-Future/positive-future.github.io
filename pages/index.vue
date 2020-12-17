<template>
  <v-card-text class="pa-sm-12">
    <v-row>
      <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2" class="pl-7">
        <v-img :src="$router.options.base + '/logo.svg'" contain></v-img>
      </v-col>
      <v-col cols="12" md="10" class="pl-6">
        <div class="text-h2 my-3">
          {{ index.title }}
        </div>
        <div class="text-h5 my-3">
          {{ index.subtitle }}
        </div>
      </v-col>
    </v-row>
    <nuxt-content :document="index" class="pl-2" />
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
