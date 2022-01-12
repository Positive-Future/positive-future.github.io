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
          <div class="headline mb-6">{{ $t('the-contest') }}</div>
          <div class="text-body-1 mb-12">
            {{
              $t(
                'many-of-you-participated-in-the-2021-edition-thank-you-very-much'
              )
            }}
            <br />
            {{
              $t(
                'more-information-about-the-next-edition-is-coming-soon-stay-tuned'
              )
            }}
          </div>

          <v-row>
            <v-col cols="12" sm="6">
              <v-card
                color="#FFE2A0"
                class="px-6 pt-6 pb-8"
                flat
                :to="localePath('/contest/laureates')"
                nuxt
              >
                <div class="d-inline-flex justify-center align-center">
                  <v-icon x-large class="rotate-24 mr-6" color="black"
                    >mdi-seal-variant</v-icon
                  >
                  <div class="subtitle">
                    {{
                      $t(
                        'discover-the-laureates-of-the-2021-edition-on-the-city-in-2021'
                      )
                    }}
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card
                color="#FFE2A0"
                class="px-6 pt-6 pb-8"
                flat
                nuxt
                :to="localePath('/resources')"
              >
                <div class="d-inline-flex justify-center align-center">
                  <v-icon x-large class="rotate-24 mr-6" color="black"
                    >mdi-file-cog</v-icon
                  >
                  <div class="subtitle">
                    {{ $t('find-resources-to-prepare-for-the-contest') }}
                  </div>
                </div>
              </v-card>
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
                {{ $t('misc.ui.subscribe3') }}
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
                <v-img
                  contain
                  :src="organizers.iff.logo"
                  class="float-right mt-6"
                  max-width="255"
                  max-height="200px"
                ></v-img>
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
    const index = await $content(app.i18n.locale + '/pages/index').fetch()
    const dates = await $content(app.i18n.locale + '/pages/dates').fetch()
    const organizers = await $content(
      app.i18n.locale + '/pages/organizers'
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
