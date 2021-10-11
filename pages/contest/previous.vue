<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 160px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="mt-6 subtitle">
            {{ $t('2021-edition') }}
          </div>
          <h1 class="pt-0 mt-0 mb-4">
            {{ intro.theme }}
          </h1>
          <nuxt-content :document="intro" />
        </v-col>
      </v-row>
    </section>
    <v-row justify="center" no-gutters>
      <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
        <v-row no-gutters>
          <v-col cols="12" sm="8">
            <YoutubeEmbedded
              style="margin-top: -160px"
              :yt="$i18n.locale === 'en' ? '1efqN3kp1NE' : '-7Fd0Vk8jHM'"
              class="mb-9"
            ></YoutubeEmbedded>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat color="transparent">
            <h1 class="mb-4">
              {{ $t('jury-members') }}
            </h1>
            <people-block
              v-for="(people, index) in jury"
              :key="index"
              :item="people"
            />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="mt-6">
          <h1 id="laureate" class="mb-4">
            {{ $t('laureates_title') }}
          </h1>
          <LaureateBlock
            v-for="(laureate, index) in laureates"
            :key="index"
            :highlight="laureate.category === 'winner'"
            :item="laureate"
            @open="
              selected = index
              openModal = true
            "
            @close="openModal = false"
          /> </v-col
      ></v-row>
    </section>

    <section style="background-color: #c9f8f3" class="mt-12">
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat color="transparent">
            <nuxt-content :document="intro" class="pt-6" />
            <div id="awards" class="my-6">
              {{ $t('watch-the-award-ceremony') }}
            </div>
            <YoutubeEmbedded
              yt="OKMuRJFlfU0"
              class="mb-9 ml-2"
            ></YoutubeEmbedded>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  props: {},
  async asyncData({ app, $content }) {
    const intro = await $content(app.i18n.locale + '/pages/2021/intro').fetch()

    const dates = await $content(app.i18n.locale + '/pages/2021/dates').fetch()
    const rules = await $content(app.i18n.locale + '/pages/2021/rules').fetch()
    const jury = await $content(app.i18n.locale + '/jury/2021').fetch()
    const laureates = await $content(app.i18n.locale + '/laureates/2021')
      .sortBy('order', 'asc')
      .fetch()

    return {
      intro,
      dates,
      rules,
      jury,
      laureates: [
        ...laureates.filter((item) => item.category === 'winner'),
        ...laureates.filter((item) => item.category === 'crush'),
        ...laureates.filter(
          (item) => !['winner', 'crush'].includes(item.category)
        ),
      ],
    }
  },
  data() {
    return { openModal: false, selected: null }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
