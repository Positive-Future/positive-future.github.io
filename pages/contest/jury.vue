<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 40px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-6 mb-4">
            {{ jury.title }}
          </h1>
          <p>
            {{ jury.subtitle }}
          </p>
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <template v-for="(item, index) in list">
            <div :key="index" class="my-6">
              <span class="name px-1">
                {{ item.name }}
              </span>
              <p><nuxt-content :document="item" /></p>
            </div>
          </template>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const list = await $content(app.i18n.locale + '/jury').fetch()
    const jury = await $content(app.i18n.locale + '/pages/jury').fetch()

    return {
      jury,
      list: list.sort(function (a, b) {
        const textA = a.slug.toUpperCase()
        const textB = b.slug.toUpperCase()
        return textA < textB ? -1 : textA > textB ? 1 : 0
      }),
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
<style>
.name {
  background-color: black;
  color: white;
}
</style>
