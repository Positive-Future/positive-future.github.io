<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 70px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 mb-4">
            {{ tips.title }}
          </h1>
          <p>
            {{ tips.subtitle }}
          </p>
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -75px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card
                color="#FFE2A0"
                class="pa-6"
                flat
                target="_blank"
                :to="'/tips_' + $i18n.locale + '.pdf'"
                :class="{ 'ml-n6': $vuetify.breakpoint.mdAndUp }"
              >
                <div class="d-inline-flex justify-center align-center">
                  <v-icon x-large class="rotate-24 mr-6" color="black"
                    >mdi-file-pdf</v-icon
                  >
                  <div class="subtitle">
                    {{ $t('misc.ui.download_tips') }}
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <nuxt-content :document="tips" class="py-6" />
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const tips = await $content(app.i18n.locale + '/pages/tips').fetch()
    const index = await $content(app.i18n.locale + '/pages/index').fetch()

    return {
      tips,
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
