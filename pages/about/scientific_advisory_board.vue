<template>
  <div>
    <section
      style="background-color: #fff1d0"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-12">
            {{ sab.title }}
          </h1>
          <nuxt-content :document="sab" />
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <template v-for="(item, index) in sabList">
            <div :key="index" class="my-6">
              <span class="name px-1">
                {{ item.firstname + ' ' + item.lastname }}
              </span>
              <nuxt-content :document="item" />
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
    const sab = await $content('/pages/' + app.i18n.locale + '/sab').fetch()
    const sabList = await $content('sab/' + app.i18n.locale).fetch()
    return {
      sab,
      sabList,
    }
  },
  data() {
    return {
      expanded: [0, 1, 2, 3, 4],
    }
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
