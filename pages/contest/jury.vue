<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 80px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="my-6">
            {{ jury.title }}
          </h1>
          <p>
            {{ jury.subtitle }}
          </p>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const jury = await $content(app.i18n.locale + '/pages/jury').fetch()

    return {
      jury,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
