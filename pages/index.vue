<template>
  <div>
    <section style="background-color: #fff1d0; padding-bottom: 80px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="ml-6 mt-6">
            {{ index.title }}
          </h1>
          <nuxt-content :document="index" />
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -110px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card max-width="80%" color="#ffe2a0" class="pa-6" flat>
                {{ $t('misc.ui.theme') }}
                <h1>
                  {{ index.theme }}
                </h1>
              </v-card>
              <v-card flat class="pa-6">
                <h1>{{ dates.title }}</h1>
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
                height="320"
                src="https://www.youtube.com/embed/Y2VFEW5GruM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section style="background-color: #b0e0f5">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <h1 class="mb-3 ml-6">{{ $t('navigation.news') }}</h1>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ app, $content }) {
    const index = await $content(app.i18n.locale + '/pages/index').fetch()
    const dates = await $content(app.i18n.locale + '/pages/dates').fetch()
    return {
      index,
      dates,
    }
  },
  data() {
    return {
      colors: ['indigo', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third'],
    }
  },
}
</script>
<style>
.date_headline {
  background-color: black;
  color: white;
}
</style>
