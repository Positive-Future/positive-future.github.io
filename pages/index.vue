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
              <v-card class="pa-3 mr-6">
                <v-card-title class="pr-0">
                  <div class="headline">
                    {{ dates.title }}
                  </div>
                </v-card-title>
                <v-card-text>
                  <nuxt-content :document="dates" class="my-4" />
                </v-card-text>
                <v-card-actions
                  ><v-btn
                    style="background-color: #00c2cb; text-transform: none"
                    class="ml-auto pa-9 mb-n12 mr-n9 text-h6 text-right white--text"
                    :to="localePath('/apply')"
                    x-large
                  >
                    {{ $t('apply_alt') }}
                  </v-btn></v-card-actions
                >
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="Positive Future_affiche.jpg"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <YoutubeEmbedded yt="sXRblqHbVQI" class="my-9" /></v-col
      ></v-row>
    </section>
    <section class="mt-12">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card
            color="#00c2cb"
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
              <v-icon x-large class="rotate-24 mr-6" color="white"
                >mdi-lightbulb-on</v-icon
              >
              <div class="subtitle white--text">
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
                    :max-width="$vuetify.breakpoint.md ? '150px' : '200px'"
                    max-height="200px"
                  ></v-img>
                  <v-img
                    contain
                    :src="inrs.logo"
                    class="mt-6 ml-12"
                    :max-width="$vuetify.breakpoint.md ? '150px' : '200px'"
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
import YoutubeEmbedded from '../components/misc/YoutubeEmbedded.vue'

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
      modal: false,
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
