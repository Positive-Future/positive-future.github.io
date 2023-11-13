<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 100px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="text-h5 mt-12">{{ index.subtitle }}</div>
          <nuxt-content :document="index" class="mt-8" />
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -95px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <Carousel />
        </v-col>
      </v-row>
    </section>
    <section class="mt-6">
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title>
                  <div class="headline mb-6">
                    {{ dates.title }}
                  </div>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-btn icon class="ml-auto" v-bind="attrs" v-on="on">
                        <v-icon>mdi-calendar-plus</v-icon></v-btn
                      >
                      <!--  <add-to-calendar
                        title="VueConf"
                        location="WROCŁAW, POLAND"
                        :start="new Date()"
                        :end="
                          new Date(new Date().setDate(new Date().getDate() + 1))
                        "
                        details="The first Official Vue.js Conference in the world!"
                        inline-template
                      >
                        <div>
                          <google-calendar id="google-calendar">
                            <i class="fa fa-google"></i> Add to Google calendar
                          </google-calendar>

                          <microsoft-calendar id="microsoft-calendar">
                            <i class="fa fa-windows"></i> Add to Microsoft live
                            calendar
                          </microsoft-calendar>

                          <office365-calendar id="office365-calendar">
                            <i class="fa fa-windows"></i> Add to Office365
                            outlook calendar
                          </office365-calendar>
                        </div>
                      </add-to-calendar> -->
                    </template>
                    <span>{{ $t('add-the-key-dates-to-your-calendar') }}</span>
                  </v-tooltip>
                </v-card-title>
                <v-card-text>
                  <nuxt-content :document="dates" class="my-4" />
                </v-card-text>
                <v-card-actions
                  ><v-sheet
                    style="background-color: #ffe2a0"
                    class="ml-auto pa-6 mb-n6 mr-n6 text-h6 text-right"
                    rounded
                  >
                    Jusqu'à <b>16 000€</b> à gagner
                  </v-sheet></v-card-actions
                >
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-sheet
                class="primary d-flex justify-center align-center fill-height"
                >TEASER</v-sheet
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section class="mt-12">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card
            color="#4FD4C7"
            class="pa-6"
            :style="
              'margin-bottom: -60px; max-width: ' +
              ($vuetify.breakpoint.smAndUp ? '70%' : '100%')
            "
            flat
            nuxt
            :to="localePath('/about/us')"
            target="_blank"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large class="rotate-24 mr-6" color="black"
                >mdi-lightbulb-on</v-icon
              >
              <div class="subtitle">
                {{ $t('discover-more-about-the-positive-future-initiative') }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section style="background-color: #c9f8f3; padding-top: 50px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-row>
              <v-col md="4">
                <div class="logos">
                  <div class="line1"></div>
                  <div class="logo_container1 rounded-circle">
                    <v-img :src="ias.logo" class="logo"></v-img>
                  </div>
                  <div class="line2"></div>
                  <div class="logo_container2 rounded-circle">
                    <v-img :src="fundation.logo" class="logo"></v-img>
                  </div>
                </div>
              </v-col>
              <v-col md="8">
                <div class="my-6">
                  {{ $t('misc.credits') }}
                </div>
                <div class="d-flex justify-end">
                  <v-img
                    contain
                    :src="anact.logo"
                    class="mt-6"
                    max-width="150"
                    max-height="200px"
                  ></v-img>
                  <v-img
                    contain
                    :src="inrs.logo"
                    class="mt-6 ml-12"
                    max-width="150"
                    max-height="200px"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </template>
          <template v-else>
            <v-col cols="12" class="ma-3">
              <div class="mb-6">
                {{ $t('misc.credits') }}
              </div>
            </v-col>
          </template>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const index = await $content('pages/' + app.i18n.locale + '/index').fetch()
    const dates = await $content(
      'pages/' + app.i18n.locale + '/2024/dates'
    ).fetch()
    const organizers = await $content('organizers/' + app.i18n.locale).fetch()
    const ias = organizers.find((item) => item.slug === 'ias')
    const fundation = organizers.find((item) => item.slug === '2100')
    const inrs = organizers.find((item) => item.slug === 'inrs')
    const anact = organizers.find((item) => item.slug === 'anact')
    return {
      index,
      dates,
      organizers,
      ias,
      fundation,
      inrs,
      anact,
    }
  },
  data() {
    return {
      colors: ['indigo', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third'],
    }
  },
  computed: {},
  mounted() {},

  methods: {
    loaded() {},
  },
}
</script>
<style lang="scss">
.date_headline {
  background-color: black;
  color: white;
}

.logos {
  position: relative;
  height: 400px;
}
.logo_container1 {
  position: absolute;
  top: 60px;
  left: 0px;
  background-color: white;
  height: 160px;
  width: 160px;
  padding: 30px;
  align-items: center;
  .logo {
    height: 100px;
    width: 100px;
  }
}
.logo_container2 {
  position: absolute;
  top: 150px;
  left: 150px;
  background-color: white;
  height: 160px;
  width: 160px;
  padding: 30px;
  align-items: center;
  .logo {
    width: 80px;
    margin: 8px;
  }
}
.line1 {
  position: absolute;
  top: -20px;
  left: 80px;
  height: 160px;
  width: 4px;
  margin: 6px 0;
  background: white;
}
.line2 {
  position: absolute;
  top: -20px;
  left: 228px;
  height: 180px;
  width: 4px;
  margin: 6px 0;
  background: white;
}
</style>
