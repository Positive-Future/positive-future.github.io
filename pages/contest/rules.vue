<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 70px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="mt-6 subtitle">
            {{ $t('misc.ui.theme') }}
          </div>
          <h1 class="pt-0 mt-0 mb-4">
            {{ index.theme }}
          </h1>
          <p>
            {{ contest.intro }}
          </p>
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -90px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card
                color="#FFE2A0"
                class="pa-3"
                flat
                target="_blank"
                :to="'/rules_' + $i18n.locale + '.pdf'"
                :class="{ 'ml-n8': $vuetify.breakpoint.mdAndUp }"
              >
                <v-row>
                  <v-col cols="2" align="right">
                    <v-icon x-large class="rotate-24 mr-3" color="black"
                      >mdi-file-pdf</v-icon
                    >
                  </v-col>
                  <v-col cols="9" class="align-center d-flex">
                    {{ $t('misc.ui.download_rules') }}</v-col
                  >
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <nuxt-content :document="contest" class="py-6" />
          <v-row>
            <v-col cols="12" sm="9">
              <v-card
                color="#4FD4C7"
                class="px-6 pt-6 pb-8"
                style="margin-bottom: -120px"
              >
                <h1 class="mb-4">
                  {{ $t('misc.ui.award') }}
                </h1>
                {{ contest.award }}
              </v-card>
            </v-col></v-row
          >
        </v-col>
      </v-row>
    </section>
    <section style="background-color: #c9f8f3; padding-top: 110px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3 pb-8">
          <h1 class="mt-8 mb-4">
            {{ contest.criterions.title }}
          </h1>
          <p>
            {{ contest.criterions.text }}
          </p>
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
