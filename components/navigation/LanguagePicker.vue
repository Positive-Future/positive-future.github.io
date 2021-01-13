<template>
  <div>
    <v-btn-toggle v-model="$i18n.locale" class="ml-6" tile dense>
      <v-btn
        outlined
        :color="$i18n.locale === 'en' ? 'primary' : 'grey darken-2'"
        @click="switchLang('en')"
      >
        EN
      </v-btn>
      <v-btn
        outlined
        :color="$i18n.locale === 'fr' ? 'primary' : 'grey darken-2'"
        @click="switchLang('fr')"
      >
        FR
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  computed: {
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
  methods: {
    async switchLang(lang) {
      try {
        if (lang !== this.$i18n.locale) {
          console.log('this.$route: ', this.$route)
          console.log('this.$route.param?.slug: ', this.$route.params?.slug)
          if (this.$route.params?.slug) {
            const post = await this.$content(
              this.$i18n.locale + '/news',
              this.$route.params.slug
            ).fetch()
            console.log('post: ', post)

            this.$router.push({
              params: { slug: post[lang] },
            })
          }
          this.$i18n.setLocale(lang)
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
