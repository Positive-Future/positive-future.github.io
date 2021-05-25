<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 70px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="mt-6 subtitle">
            {{ $t('positive-future-next-edition') }}
          </div>
          <h1 class="pt-0 mt-0 mb-4">
            {{ next.theme }}
            <!--           <v-btn
              v-if="$vuetify.breakpoint.mdAndUp"
              color="primary"
              class="mx-1 float-right"
              nuxt
              :to="localePath('/apply')"
            >
              {{ $t('apply') }}
            </v-btn> -->
          </h1>
          <nuxt-content :document="next" class="py-6" />
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const next = await $content(app.i18n.locale + '/pages/next').fetch()

    return {
      next,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
