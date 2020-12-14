<template>
  <div>
    <h2 class="text-h2 pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ who.title }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <v-expansion-panels v-model="expanded" multiple accordion>
      <v-expansion-panel v-for="(item, index) in who.partners" :key="index">
        <v-expansion-panel-header class="pa-1">
          <v-item v-slot:default="{}">
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              :title="item.title"
              style="background-color: white; flex: 0 1 auto"
              class="pa-2 ma-1"
              width="100"
            >
              <v-img
                :src="item.logo"
                contain
                :width="$vuetify.breakpoint.mdAndUp ? '100' : '75'"
                height="60"
                class="text-right pa-2"
              />
            </a>
          </v-item>
          <div class="title pa-3">
            {{ item.title }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ item.text }}
          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="item.title"
            >{{ $t('common.more') }}</a
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const who = await $content(app.i18n.locale + '/who').fetch()

    return {
      who,
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
