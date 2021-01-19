<template>
  <div>
    <section
      style="background-color: #ffe2a0; padding-bottom: 80px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <p class="mt-12">
            {{ $t('misc.ui.theme') }}
          </p>
          <h1 class="">
            {{ index.theme }}
          </h1>
          <p>
            {{ contest.intro }}
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
                class="pa-3"
                flat
                target="_blank"
                :to="'/rules_' + $i18n.locale + '.pdf'"
              >
                <v-row>
                  <v-col cols="3" align="right">
                    <v-icon x-large class="rotate-24 mr-3" color="black"
                      >mdi-file-pdf</v-icon
                    >
                  </v-col>
                  <v-col cols="9"> {{ $t('misc.ui.download_rules') }}</v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <nuxt-content :document="contest" class="pa-6" />
          <v-row>
            <v-col cols="12" sm="9">
              <v-card
                color="#88cdea"
                class="pa-6"
                style="margin-bottom: -120px"
              >
                <h1>
                  {{ $t('misc.ui.award') }}
                </h1>
                {{ contest.award }}
              </v-card>
            </v-col></v-row
          >
        </v-col>
      </v-row>
    </section>
    <section style="background-color: #6cadc9; padding-top: 100px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <h1 class="mt-6">
            {{ contest.criterions.title }}
          </h1>
          {{ contest.criterions.text }}
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
