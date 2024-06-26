<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 160px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <div class="mt-6 subtitle">
            {{ $t('2024-edition') }}
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
              yt="76KX3lBUZHo"
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
            <LaureateCarousel v-if="$vuetify.breakpoint.smAndUp" />
            <LaureateList v-else edition-filter="2024"></LaureateList
          ></v-card> </v-col
      ></v-row>
    </section>
    <!--  <section
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
      style="margin-top: -60px"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="mb-12">
          <v-card
            color="#FFE2A0"
            class="pa-6 d-inline-flex justify-center align-center"
            flat
            target="_blank"
            :style="
              'max-width: ' + ($vuetify.breakpoint.smAndUp ? '60%' : '100%')
            "
            href="https://drive.google.com/drive/folders/1lNHAdIi9zsg9u2lsxvmuLvJeW-Zj94lq?usp=sharing"
          >
            <v-icon x-large class="rotate-24 mr-6">mdi-folder-download</v-icon>
            <div class="nuxt-content">
              <p class="mb-0">
                {{
                  $t(
                    'telechargez-lappel-a-participation-et-le-reglement-du-concours-pour-avoir-toutes-les-cles-en-main'
                  )
                }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section> 
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="mb-6">
          <v-card class="px-6 pb-0 mb-0" flat color="transparent">
            <nuxt-content :document="contest" class="my-4" />
          </v-card>
        </v-col>
      </v-row>
    </section>-->
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="mb-12">
          <v-card class="px-6 pb-0 mb-0" flat color="transparent">
            <div id="jury" class="mb-4 headline">
              {{ $t('jury-members') }}
            </div>
            <v-row v-if="jury && jury.length > 0" no-gutters>
              <people-block
                v-for="(people, index) in jury"
                :key="index"
                :item="people"
            /></v-row>
            <template v-else>
              {{ $t('the-jury-will-be-announced-soon') }}
            </template>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="mb-12">
          <v-card class="px-6 mb-6" flat color="transparent">
            <div id="dates" class="mb-0 headline">
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

    <!--  <section>
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
    </section> -->

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
            :href="localePath('/webinars#2024')"
            color="transparent"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large color="black" class="ma-6"
                >mdi-television-play</v-icon
              >
              {{
                $t('consult-the-webinars-produced-on-the-theme-of-work-in-2050')
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
      '/pages/' + app.i18n.locale + '/2024/intro2024'
    ).fetch()

    const contest = await $content(
      '/pages/' + app.i18n.locale + '/contest'
    ).fetch()
    const faq = await $content(
      '/pages/' + app.i18n.locale + '/2024/faq'
    ).fetch()
    const jury = await $content('/jury/' + app.i18n.locale + '/2024').fetch()
    const sab = await $content('/sab/' + app.i18n.locale + '/2024').fetch()
    const prize = await $content(
      '/pages/' + app.i18n.locale + '/2024/prize'
    ).fetch()

    return {
      intro,
      faq,
      contest,
      prize,
      jury,
      sab,
    }
  },
  data() {
    return { openModal: false, selected: null, laureates: [] }
  },

  computed: {
    computedLaureates() {
      return this.laureates
    },
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
