<template>
  <div>
    <section
      style="background-color: #fff1d0; padding: 70px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="text-h3">
            {{ $t('coming-soon') }}
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const contest = await $content(app.i18n.locale + '/pages/contest').fetch()
    const index = await $content(app.i18n.locale + '/pages/index').fetch()

    return {
      contest,
      index,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
