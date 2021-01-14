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
    const alterlang = app.i18n.locale === 'en' ? 'fr' : 'en'
    const post = await $content(app.i18n.locale + '/news', params.slug).fetch()
    const newSlug = post[alterlang].split('/')[3].split('.')[0]
    console.log('newSlug: ', newSlug)
    const alterPost = await $content(alterlang + '/news', newSlug).fetch()
    console.log('alterPost: ', alterPost)
    const path = alterPost.path
    console.log('app.i18n.locams.slug: ', path)
    app.alter = path
    return { post }
  },
}
</script>
