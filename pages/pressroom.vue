<template>
  <div>
    <section
      style="background-color: #fff1d0"
      :class="({ 'px-3': $vuetify.breakpoint.smAndDown }, 'mb-12 pb-12')"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 mb-4">
            {{ pressroom.title }}
          </h1>
          <nuxt-content :document="pressroom" />
        </v-col>
      </v-row>
    </section>
    <section
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
      style="margin-top: -90px"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-card
            color="#FFE2A0"
            class="px-6 pt-6 pb-8"
            flat
            target="_blank"
            style="max-width: 66%"
            href="/mediakit.zip"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon
                v-if="$vuetify.breakpoint.mdAndUp"
                x-large
                class="rotate-24 mr-6"
                color="black"
                >mdi-folder</v-icon
              >
              <div class="subtitle">
                {{
                  $t(
                    'download-the-positive-future-competition-media-kit-2024-edition-work-in-2050'
                  )
                }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="headline mt-6">
            {{ $t('the-media-are-talking-about-it') }}
          </div>
        </v-col></v-row
      >
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const pressroom = await $content(
      'pages/' + app.i18n.locale + '/pressroom'
    ).fetch()
    return {
      pressroom,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
