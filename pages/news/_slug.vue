<template>
  <v-row justify="center">
    <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
      <v-card>
        <v-card-title
          ><h1>
            {{ post.title }}
          </h1>
        </v-card-title>
        <v-card-subtitle>
          {{ post.subtitle }}
        </v-card-subtitle>
        <v-card-text>
          <nuxt-content :document="post" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async asyncData({ app, $content, params }) {
    const post = await $content(app.i18n.locale + '/news', params.slug).fetch()
    console.log(
      'app.i18n.locams.slug: ',
      app.i18n.locale + '/news',
      params.slug
    )
    return { post }
  },
}
</script>
