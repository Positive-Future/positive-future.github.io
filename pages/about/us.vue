<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 60px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 pb-4">
            {{ about.title }}
          </h1>
          <nuxt-content :document="about" />
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
      <v-row justify="center">
        <v-row justify="center" no-gutters>
          <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3 mt-9">
            <h1 class="ml-3 mb-3">
              {{ $t('our-tools') }}
            </h1>
            <v-row>
              <v-col cols="12" md="4" class="pa-3 mb-6">
                <v-card
                  class="pa-3"
                  height="100%"
                  nuxt
                  :to="localePath('/resources')"
                >
                  <v-icon color="black" x-large class="d-flex"
                    >mdi-file-document-multiple-outline</v-icon
                  >

                  <v-card-text
                    class="subtitle-1 title font-weight-regular"
                    color="black"
                  >
                    {{ $t('about.database') }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" class="pa-3 mb-6">
                <v-card
                  class="pa-3"
                  height="100%"
                  nuxt
                  :to="localePath('/webinars')"
                >
                  <v-icon color="black" x-large class="d-flex"
                    >mdi-video-vintage</v-icon
                  >

                  <v-card-text
                    class="subtitle-1 title font-weight-regular"
                    color="black"
                  >
                    {{ $t('about.webinars') }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4" class="pa-3 mb-6">
                <v-card
                  class="pa-3"
                  :flat="$vuetify.theme.isDark"
                  height="100%"
                  nuxt
                  :to="localePath('/about/scientific_advisory_board')"
                >
                  <v-icon color="black" x-large class="d-flex">
                    mdi-trophy</v-icon
                  >

                  <v-card-text
                    class="subtitle-1 title font-weight-regular"
                    color="black"
                  >
                    {{ $t('about.contest') }}
                  </v-card-text>
                </v-card>
              </v-col></v-row
            ></v-col
          >
        </v-row>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const about = await $content(app.i18n.locale + '/pages/about-us').fetch()

    return {
      about,
    }
  },
  data() {
    return {
      expanded: [0, 1, 2, 3, 4],
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style>
.name {
  background-color: black;
  color: white;
}
</style>
