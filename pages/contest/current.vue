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
            {{ intro.theme }}
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
                class="pa-6 d-flex"
                :to="'/tips_' + $i18n.locale + '.pdf'"
                target="_blank"
              >
                <v-icon x-large class="mr-6">mdi-file-pdf</v-icon>
                {{ intro.tipDownload }}
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat>
            <h1 class="pt-0 mt-0 mb-4">
              {{ modalities.title }}
            </h1>
            <nuxt-content :document="modalities" class="py-6" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-card
            class="d-flex py-3"
            :to="'/rules_' + $i18n.locale + '.pdf'"
            target="_blank"
          >
            <v-icon x-large class="mx-6">mdi-file-pdf</v-icon>
            <nuxt-content id="rules" :document="rules" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat>
            <h1 class="pt-0 mt-0 mb-4">
              {{ dates.title }}
            </h1>
            <nuxt-content :document="dates" class="py-6" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <h1 class="pt-0 mt-0 mb-4 ml-6">{{ more.title }}:</h1>
          <v-row no-gutters>
            <v-col cols="12" md="6" class="pa-3 mb-6">
              <v-card
                class="pa-3"
                height="100%"
                nuxt
                :to="localePath('/resources')"
              >
                <v-icon color="black" x-large class="d-flex">mdi-video</v-icon>

                <v-card-text
                  class="subtitle-1 title font-weight-regular"
                  color="black"
                >
                  {{ more.webinars }}
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="pa-3 mb-6">
              <v-card
                class="pa-3"
                :flat="$vuetify.theme.isDark"
                height="100%"
                nuxt
                :to="localePath('/about/scientific_advisory_board')"
              >
                <v-icon color="black" x-large class="d-flex">
                  mdi-handshake</v-icon
                >

                <v-card-text
                  class="subtitle-1 title font-weight-regular"
                  color="black"
                >
                  {{ more.sab }}
                </v-card-text>
              </v-card>
            </v-col></v-row
          ></v-col
        >
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-card color="#4fd4c7" class="pa-6">
                <h1 class="mb-0">
                  {{ prize.title }}
                </h1>
                <nuxt-content :document="prize" />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section style="background-color: #c9f8f3">
      <v-row
        justify="center"
        no-gutters
        style="margin-top: -85px; padding-top: 85px"
      >
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat color="transparent">
            <h1 class="pt-0 mt-0 mb-4">
              {{ criterions.title }}
            </h1>
            <nuxt-content :document="criterions" class="py-6" />
            <h1 class="pt-0 mt-0 mb-4">
              {{ $t('jury-members') }}
            </h1>
          </v-card>
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
    const dates = await $content(app.i18n.locale + '/pages/next/dates').fetch()
    const prize = await $content(app.i18n.locale + '/pages/next/prize').fetch()
    const rules = await $content(app.i18n.locale + '/pages/next/rules').fetch()
    const more = await $content(app.i18n.locale + '/pages/next/more').fetch()
    const criterions = await $content(
      app.i18n.locale + '/pages/next/criterions'
    ).fetch()

    return {
      intro,
      criterions,
      modalities,
      dates,
      prize,
      rules,
      more,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
