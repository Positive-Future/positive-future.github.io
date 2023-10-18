<template>
  <div>
    <section
      style="background-color: #fff1d0"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-12">{{ laureateText.title }}</h1>
          <nuxt-content :document="laureateText" class="mt-6" />
        </v-col>
      </v-row>
    </section>
    <LaureateList class="mt-6" />
  </div>
</template>
<script>
export default {
  props: {},
  async asyncData({ app, $content }) {
    const laureateText = await $content(
      '/pages/' + app.i18n.locale + '/laureates'
    ).fetch()
    const laureates = await $content('laureates/' + app.i18n.locale).fetch()
    return {
      laureateText,
      laureates,
    }
  },
  data() {
    return {
      model: null,
    }
  },
  computed: {},
  created() {
    if (this.$vuetify.breakpoint.smAndDown && process.env.BROWSER)
      this.$vuetify.goTo(0)
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
