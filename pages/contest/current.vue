<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 70px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="mt-6 subtitle">
            {{ $t('positive-future-intro-edition') }}
          </div>
          <h1 class="pt-0 mt-0 mb-4">
            {{ intro.theme }}
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
          <nuxt-content :document="intro" class="py-6" />
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -85px">
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-card
                color="#FFE2A0"
                class="pa-6 mb-6 d-flex"
                flat
                :to="'/resources_' + $i18n.locale + '.pdf'"
                target="_blank"
              >
                <v-icon x-large class="mr-6">mdi-file-pdf</v-icon>
                {{ intro.tipDownload }}
                <!--       <v-btn
                  color="primary"
                  class="mx-1 float-right"
                  nuxt
                  :to="localePath('/apply')"
                >
                  {{ $t('apply') }}
                </v-btn> -->
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const intro = await $content(app.i18n.locale + '/pages/next/intro').fetch()
    const modalities = await $content(
      app.i18n.locale + '/pages/next/modalities'
    ).fetch()
    const dates = await $content(app.i18n.locale + '/pages/next/intro').fetch()
    const prize = await $content(app.i18n.locale + '/pages/next/intro').fetch()
    const criterions = await $content(
      app.i18n.locale + '/pages/next/intro'
    ).fetch()

    return {
      intro,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
