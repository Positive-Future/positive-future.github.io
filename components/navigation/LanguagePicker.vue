<template>
  <div>
    <!--  <v-btn-toggle
      v-if="$route.params.slug"
      v-model="$i18n.locale"
      class="ml-6"
      tile
      dense
    >
      <v-btn
        outlined
        :color="$i18n.locale === 'en' ? 'primary' : 'grey darken-2'"
        nuxt
        :to="$i18n.locale === 'en' ? $route.path : alter"
        @click="$i18n.setLocale('en')"
      >
        EN
      </v-btn>
      <v-btn
        outlined
        :color="$i18n.locale === 'fr' ? 'primary' : 'grey darken-2'"
        nuxt
        :to="$i18n.locale === 'fr' ? alter : $route.path"
        @click="$i18n.setLocale('fr')"
      >
        FR
      </v-btn>
    </v-btn-toggle> -->
    <v-btn-toggle
      v-if="!$route.params.slug"
      v-model="$root.$i18n.locale"
      class="ml-6"
      tile
      dense
    >
      <v-btn
        outlined
        :color="$i18n.locale === 'en' ? 'primary' : 'grey darken-2'"
        @click="$i18n.setLocale('en')"
      >
        EN
      </v-btn>
      <v-btn
        outlined
        :color="$i18n.locale === 'fr' ? 'primary' : 'grey darken-2'"
        @click="$i18n.setLocale('fr')"
      >
        FR
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return {
        alter: undefined,
      }
    },
    languages() {
      return [
        {
          value: 'en',
          text: this.$t('misc.languages.en'),
          flagSrc: 'https://cdn.vuetifyjs.com/images/flags/us.png',
        },
        {
          value: 'fr',
          text: this.$t('misc.languages.fr'),
          flagSrc: 'https://cdn.vuetifyjs.com/images/flags/fr.png',
        },
      ]
    },
  },
  async updated() {
    /*   if (this.$route.params?.slug) {
      const alterlang = this.$i18n.locale === 'en' ? 'fr' : 'en'
      console.log('alterlang: ', alterlang)
      const post = await this.$content(
        this.$i18n.locale + '/news',
        this.$route.params.slug
      ).fetch()
      console.log('post: ', post)
      const newSlug = post[alterlang].split('/')[3].split('.')[0]
      console.log('newSlug: ', newSlug)
      const alterPost = await this.$content(alterlang + '/news')
        .where({ slug: newSlug })
        .fetch()
      console.log('alterPost: ', alterPost)
      const path = alterPost[0].path
      console.log('path: ', path)
      this.alter = path
    } */
  },
  methods: {
    async link() {},
  },
}
</script>

<style lang="scss" scoped></style>
