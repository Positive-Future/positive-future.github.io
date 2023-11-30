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
          <div v-if="sabList.length === 0" class="headline mt-12">
            {{
              $t(
                'we-will-soon-release-the-full-list-of-positive-future-scientific-advisory-board-members'
              )
            }}
          </div>
          <div class="headline mt-12">
            {{ $t('2024-edition') }}
          </div>
          <template v-for="(item, index) in sabList">
            <people-block :key="index" :item="item" :sab="true" />
          </template>
          <div class="headline mt-12 mb-2">
            {{ $t('2021-edition') }}
          </div>
          <nuxt-link nuxt :to="localePath('/contest/2021_edition#sab')">{{
            $t('check-positive-future-2021-scientific-advisory-board-members')
          }}</nuxt-link>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const sab = await $content('/pages/' + app.i18n.locale + '/sab').fetch()
    const sabList = await $content('sab/' + app.i18n.locale + '/2024').fetch()
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
