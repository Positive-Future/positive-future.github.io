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
    <section style="margin-top: 5vh">
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row>
            <v-col cols="6">
              <div class="headline mb-6">
                {{ dates.title }}
              </div>
              <v-card>
                <v-card-title
                  >{{ $t('key-dates') }}
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-btn icon class="ml-auto" v-bind="attrs" v-on="on">
                        <v-icon>mdi-calendar-plus</v-icon></v-btn
                      >
                    </template>
                    <span>{{ $t('add-the-key-dates-to-your-calendar') }}</span>
                  </v-tooltip>
                </v-card-title>
                <v-card-text>
                  <nuxt-content :document="dates" class="my-4" />
                </v-card-text>
                <v-card-actions
                  ><p
                    style="background-color: #ffe2a0"
                    class="ml-auto pa-6 mb-n6 mr-n6"
                  >
                    Jusqu'à <b>16 000€</b> à gagner
                  </p></v-card-actions
                >
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-sheet
                class="primary d-flex justify-center align-center fill-height"
                >TEASER</v-sheet
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section>
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card
            color="#4FD4C7"
            class="px-6 pt-6 pb-8"
            style="margin-bottom: -60px; max-width: 70%"
            flat
            href="http://eepurl.com/hgbB6f"
            target="_blank"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large class="rotate-24 mr-6" color="black"
                >mdi-email</v-icon
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
                    <v-img :src="organizers.ias.logo" class="logo"></v-img>
                  </div>
                  <div class="line2"></div>
                  <div class="logo_container2 rounded-circle">
                    <v-img
                      :src="organizers.fundation.logo"
                      class="logo"
                    ></v-img>
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
                    :src="organizers.anact.logo"
                    class="mt-6"
                    max-width="150"
                    max-height="200px"
                  ></v-img>
                  <v-img
                    contain
                    :src="organizers.inrs.logo"
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
    const organizers = await $content(
      '/pages/' + app.i18n.locale + '/organizers'
    ).fetch()
    const organizerCollection = await $content(
      'organizers/' + app.i18n.locale
    ).fetch()
    return {
      index,
      dates,
      organizers,
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
