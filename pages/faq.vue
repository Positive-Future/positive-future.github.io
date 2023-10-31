<template>
  <div>
    <section
      style="background-color: #fff1d0"
      :class="({ 'px-3': $vuetify.breakpoint.smAndDown }, 'mb-12 pb-12')"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 mb-4">
            {{ faq.title }}
          </h1>
          <nuxt-content :document="faq" />
        </v-col>
      </v-row>
    </section>
    <v-row justify="center">
      <v-col xs="12" sm="11" md="8" lg="7" xl="6">
        <v-expansion-panels popout class="white--text mb-6">
          <v-expansion-panel v-for="(question, index) in faqItems" :key="index">
            <v-expansion-panel-header class="pa-6 nuxt-content">
              <p class="black--text">
                {{ question.title }}
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
            >
              <nuxt-content :document="question" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content, i18n }) {
    const faq = await $content('pages/' + app.i18n.locale + '/2024/faq').fetch()
    const faqItems = await $content('faq/' + (i18n.locale || 'en'))
      .sortBy('date', 'desc')
      .fetch() /* .sort((a, b) => a.title && b.title && a.title.localeCompare(b.title)) */

    return {
      faq,
      faqItems,
    }
  },
  data() {
    return {}
  },
  watch: {
    '$i18n.locale'(newVal, oldVal) {
      this.$nuxt.refresh()
    },
  },
  methods: {},
}
</script>
