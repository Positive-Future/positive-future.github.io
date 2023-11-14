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
          <v-card class="mb-12" flat color="transparent">
            <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
            <a id="awards" class="anchor"></a>
            <div id="laureates" class="headline mb-4 mx-6">
              {{ $t('laureates_title') }}
            </div>
            <v-slide-group
              v-if="$vuetify.breakpoint.smAndUp"
              class="my-4"
              show-arrows
              center-active
            >
              <v-slide-item
                v-for="(laureate, index) in laureates"
                :key="index"
                v-slot="{ active }"
              >
                <LaureateItem
                  :item="laureate"
                  :active="active"
                  :index="index"
                  :total="laureates.length"
                />
              </v-slide-item>
            </v-slide-group>
            <LaureateList v-else></LaureateList
          ></v-card> </v-col
      ></v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 mb-12" flat color="transparent">
            <div id="jury" class="mb-4 headline">
              {{ $t('jury-members') }}
            </div>
            <v-row no-gutters>
              <people-block
                v-for="(people, index) in jury"
                :key="index"
                :item="people"
              />
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 mb-12" flat color="transparent">
            <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
            <a id="sab" class="anchor"></a>
            <div id="sab_list" class="mt-8 mb-0 headline">
              {{ $t('members-of-the-scientific-advisory-board') }}
            </div>
            <nuxt-link
              class="subtitle"
              :to="localePath('/about/scientific_advisory_board')"
              >{{
                $t('learn-more-about-the-role-of-the-scientific-advisory-board')
              }}</nuxt-link
            >
            <v-row v-if="sab && sab.length > 0" justify="center" no-gutters>
              <people-block
                v-for="(people, index) in sab"
                :key="index"
                :item="people"
                :sab="true"
            /></v-row>
            <i v-else>
              {{ $t('the-scientific-advisory-board-will-be-announced-soon') }}
            </i>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-card
            color="#4FD4C7"
            class="py-6 ml-n1"
            :style="
              'margin-bottom: -60px; max-width: ' +
              ($vuetify.breakpoint.smAndUp ? '66%' : '100%')
            "
            flat
            nuxt
            :to="localePath('/webinars/award-ceremony-2021')"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon
                v-if="$vuetify.breakpoint.smAndUp"
                x-large
                class="rotate-24 mx-6"
                color="black"
                >mdi-medal</v-icon
              >
              <div class="subtitle" :class="{ 'px-3': $vuetify.breakpoint.xs }">
                {{ $t('watch-the-award-ceremony') }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section
      style="background-color: #c9f8f3; padding-top: 60px; padding-bottom: 2rem"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <div
            class="headline my-6"
            :class="$vuetify.breakpoint.smAndUp ? ' ml-12' : 'mx-6'"
          >
            {{ $t('the-tools-of-the-contest') }}
          </div>
          <v-card
            :class="$vuetify.breakpoint.smAndUp ? ' mx-6' : 'mx-2'"
            flat
            nuxt
            :href="localePath('/webinars')"
            color="transparent"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large color="black" class="ma-6"
                >mdi-television-play</v-icon
              >
              {{
                $t(
                  'consult-the-webinars-produced-on-the-theme-of-the-city-in-2100'
                )
              }}
            </div>
          </v-card>
          <v-card
            flat
            nuxt
            :href="localePath('/resources')"
            color="transparent"
            :class="$vuetify.breakpoint.smAndUp ? 'mx-6' : 'mx-2 mt-6'"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large color="black" class="ma-6"
                >mdi-note-multiple</v-icon
              >
              {{
                $t(
                  'find-all-the-resources-on-the-theme-of-the-competition-proposed-by-the-scientific-committee'
                )
              }}
            </div>
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
    const intro = await $content(
      '/pages/' + app.i18n.locale + '/2021/intro2021'
    ).fetch()
    const jury = await $content('/jury/' + app.i18n.locale + '/2021').fetch()
    const laureates = await $content('/laureates/' + app.i18n.locale + '/2021')
      .sortBy('order', 'asc')
      .fetch()
    const sab = await $content('/sab/' + app.i18n.locale + '/2021').fetch()
    return {
      intro,
      jury,
      sab,
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
<style lang="scss">
.anchor {
  display: block;
  position: relative;
  top: -250px;
  visibility: hidden;
}
</style>
