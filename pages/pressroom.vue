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
    <section class="mt-12">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card
            color="#4FD4C7"
            class="px-6 pt-6"
            style="margin-bottom: -60px; max-width: 70%"
            flat
            nuxt
            :to="localePath('/about/us')"
            target="_blank"
          >
            <div class="subtitle">
              {{ $t('press-contact') }}
            </div>
            <div class="d-flex">
              <v-avatar size="100" class="">
                <OptimizedImage
                  alt="Avatar"
                  src="/jury/AntoineC.jpg"
                  :ratio="1"
                  contain
                />
              </v-avatar>
              <div cols="8">
                Solène Debonis<br />
                <a href="mailto:contact@positive-future.org" text-color="white">
                  contact@positive-future.org</a
                ><br />
                +33 6 12 34 56 78
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section style="background-color: #c9f8f3; padding-top: 50px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3 mt-8">
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <div class="my-6">
              {{ $t('misc.credits') }}
            </div>
            <div class="d-flex justify-end"></div>
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
