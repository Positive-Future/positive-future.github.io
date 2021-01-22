<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 100px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 mb-4">
            {{ index.title }}
          </h1>
          <nuxt-content :document="index" />
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -95px">
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-card max-width="80%" color="#FFE2A0" class="pa-6" flat>
                {{ $t('misc.ui.theme') }}
                <h1>
                  {{ index.theme }}
                </h1>
              </v-card>
              <v-card flat class="py-6 px-1">
                <h1 class="mt-2 mb-4">{{ dates.title }}</h1>
                <b class="date_headline">{{ dates.schedule.opening.date }}</b>
                <p>{{ dates.schedule.opening.content }}</p>
                <b class="date_headline">{{ dates.schedule.deadline.date }}</b>
                <p>{{ dates.schedule.deadline.content }}</p>
                <b class="date_headline">{{ dates.schedule.awards.date }}</b>
                <p>{{ dates.schedule.awards.content }}</p>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c1x1LN8XelU?autoplay=1&mute=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section style="background-color: #c9f8f3">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <h1 class="mb-3">{{ $t('navigation.news') }}</h1>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(item, i) in featured" :key="i">
              <v-card
                nuxt
                :to="localePath('/news/' + item.slug)"
                color="#FFF1D0"
                height="400"
                light
              >
                <v-img
                  contain
                  :src="$router.options.base + item.image"
                  height="300"
                ></v-img>
                <v-card-title> {{ item.title }} </v-card-title>
                <v-card-subtitle> {{ dateAgo }}</v-card-subtitle>
                <v-card-text>
                  {{ item.subtitle }}
                </v-card-text>
              </v-card>
            </v-carousel-item>
          </v-carousel>
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
    const featured = await $content(app.i18n.locale + '/news')
      .where({ featured: true })
      .where({ draft: false })
      .sortBy('createdAt')
      .limit(3)
      .fetch()
    console.log('featured: ', featured)
    return {
      index,
      dates,
      featured,
    }
  },
  data() {
    return {
      colors: ['indigo', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third'],
    }
  },
  mounted() {
    console.log(this.$route)
    console.log(this.$router)
  },
}
</script>
<style>
.date_headline {
  background-color: black;
  color: white;
}
</style>
