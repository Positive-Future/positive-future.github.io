<template>
  <v-row justify="center">
    <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
      <v-overlay v-if="loading" :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <template v-else>
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
      </template>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async fetch() {
    console.log('this.$route.params.slug: ', this.$route.params.slug)
    this.post = await this.$content(
      this.$i18n.locale + '/news',
      this.$route.params.slug
    ).fetch()
    this.loading = false
  },
  data() {
    return {
      loading: true,
    }
  },
}
</script>
