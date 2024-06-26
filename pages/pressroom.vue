<template>
  <div>
    <section
      style="background-color: #fff1d0"
      :class="
        $vuetify.breakpoint.smAndDown ? 'px-6 mb-12 pb-12' : 'mb-12 pb-12'
      "
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
      :class="{ 'mx-6': $vuetify.breakpoint.smAndDown }"
      style="margin-top: -90px"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-card
            color="#FFE2A0"
            class="px-6 pt-6 pb-8"
            flat
            target="_blank"
            :style="
              'max-width: ' + ($vuetify.breakpoint.smAndUp ? '66%' : '100%')
            "
            href="https://drive.google.com/drive/folders/1vBndip8uwCcpDq0OdOV10UKC025uOBOL?usp=sharing"
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
          <div
            class="headline mt-9 mb-6"
            :class="{ 'mx-6': $vuetify.breakpoint.smAndDown }"
          >
            {{ $t('the-media-are-talking-about-it') }}
          </div>
          <v-slide-group
            v-if="$vuetify.breakpoint.mdAndUp"
            class="mt-4"
            show-arrows
            center-active
          >
            <v-slide-item
              v-for="(review, index) in content.reviews"
              :key="index"
            >
              <v-card
                max-width="300px"
                class="d-flex justify-space-between flex-column ma-3"
                target="_blank"
                :href="review.review.link"
                elevated
              >
                <div class="ma-2">{{ review.review.subtitle }}</div>
                <v-card-subtitle
                  ><b>{{ review.review.from }}</b> -
                  {{
                    new Date(review.review.date).toLocaleDateString(
                      $i18n.locale,
                      {
                        timezone: 'UTC',
                      }
                    )
                  }}</v-card-subtitle
                >
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <v-list v-else lines="two" class="ml-3">
            <v-list-item
              v-for="(review, index) in content.reviews"
              :key="index"
              target="_blank"
              :href="review.review.link"
            >
              <v-list-item-content>
                <v-list-item-title class="font-weight-black">{{
                  review.review.subtitle
                }}</v-list-item-title>
                <v-list-item-sub-title
                  >{{ review.review.from }} -
                  {{
                    new Date(review.review.date).toLocaleDateString(
                      $i18n.locale,
                      {
                        timezone: 'UTC',
                      }
                    )
                  }}</v-list-item-sub-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col></v-row
      >
    </section>
    <section class="mt-12">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card
            color="#4FD4C7"
            class="px-6 pt-6"
            :style="
              'margin-bottom: -60px; max-width: ' +
              ($vuetify.breakpoint.smAndUp ? '66%' : '100%')
            "
            flat
            nuxt
            :to="localePath('/about/us')"
            target="_blank"
          >
            <div class="d-flex flex-column pb-6">
              <div class=""><b> Press contact</b></div>
              <div>{{ content.contact.name }}</div>
              <div>
                <a :href="'mailto:' + content.contact.name" class="white--text">
                  {{ content.contact.email }}</a
                >
              </div>
              <div>
                {{ content.contact.phone }}
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
            <v-col cols="12">
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
    const content = await $content('pressroom').fetch()
    return {
      pressroom,
      content,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
