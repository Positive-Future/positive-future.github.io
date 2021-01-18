<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 80px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-6">
            {{ tips.title }}
          </h1>
          <p>
            {{ tips.subtitle }}
          </p>
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -60px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card
                color="#bfaa78"
                class="pa-3 ml-6"
                flat
                target="_blank"
                :to="'/tips_' + $i18n.locale + '.pdf'"
              >
                <v-row>
                  <v-col cols="3" align="right">
                    <v-icon x-large class="rotate-24 mr-3" color="black"
                      >mdi-file-pdf</v-icon
                    >
                  </v-col>
                  <v-col cols="9"> {{ $t('misc.ui.download_tips') }}</v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <nuxt-content :document="tips" class="pa-6" />
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
