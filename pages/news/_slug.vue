<template>
  <v-row justify="center">
    <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
      <v-breadcrumbs
        nuxt
        class="ml-4"
        :items="[
          {
            text: $t('navigation.news'),
            disabled: false,
            href: localePath('/news'),
          },
          {
            text: post.title,
            disabled: true,
            href: 'breadcrumbs_link_1',
          },
        ]"
      >
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-card class="pa-6">
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
    /*   const alterlang = app.i18n.locale === 'en' ? 'fr' : 'en' */
    const post = await $content(app.i18n.locale + '/news', params.slug).fetch()
    /*  const newSlug = post[alterlang].split('/')[3].split('.')[0]
    
    const alterPost = await $content(alterlang + '/news', newSlug).fetch()
    
    const path = alterPost.path
    
    app.alter = path */
    return { post }
  },
  data() {
    return {}
  },
  created() {},
}
</script>
