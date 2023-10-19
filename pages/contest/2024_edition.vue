<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 60px"
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
    <section
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
      style="margin-top: -60px"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-card
            color="#FFE2A0"
            class="px-6 pt-6 pb-8"
            flat
            target="_blank"
            style="max-width: 400px"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large class="rotate-24 mr-6" color="black"
                >mdi-folder</v-icon
              >
              <div class="subtitle">
                {{
                  $t(
                    'telechargez-lappel-a-participation-et-le-reglement-du-concours-pour-avoir-toutes-les-cles-en-main'
                  )
                }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat color="transparent">
            <div id="dates" class="mb-4 headline">
              {{ $t('key-dates') }}
            </div>
            <nuxt-content :document="dates" class="my-4" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat color="transparent">
            <div id="prizes" class="mb-4 headline">
              {{ $t('prizes-to-be-awarded') }}
            </div>
            <nuxt-content :document="prize" class="my-4" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat color="transparent">
            <div id="jury" class="mb-4 headline">
              {{ $t('jury-members') }}
            </div>
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
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card class="px-6 pt-6 pb-0 mb-0" flat color="transparent">
            <div id="dates" class="mb-4 headline">
              {{ $t('members-of-the-scientific-advisory-board') }}
            </div>
            <people-block
              v-for="(people, index) in jury"
              :key="index"
              :item="people"
            />
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

    <section style="background-color: #c9f8f3" class="mt-12">
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="">
          <v-card
            color="#4FD4C7"
            class="px-6 pt-6 pb-8 mt-n6"
            style="margin-bottom: -60px; max-width: 70%"
            flat
            nuxt
            :to="localePath('/resources')"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large class="rotate-24 mr-6" color="black"
                >mdi-text-box-multiple</v-icon
              >
              <div class="subtitle">
                {{
                  $t(
                    'take-a-look-at-the-resources-put-together-by-the-scientific-committee-to-give-you-food-for-thought'
                  )
                }}
              </div>
            </div>
          </v-card>
          <div class="d-inline-flex justify-center align-center mt-12">
            <v-icon x-large color="black">mdi-forum-plus</v-icon>
            <v-card class="pa-6" flat color="transparent">
              <div id="faq" class="headline mt-6">
                {{ $t('frequently-asked-questions') }}
              </div>
              <nuxt-content :document="faq" class="my-4" />
            </v-card>
          </div>
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
      '/pages/' + app.i18n.locale + '/2024/intro'
    ).fetch()

    const dates = await $content(
      '/pages/' + app.i18n.locale + '/2024/dates'
    ).fetch()
    const rules = await $content(
      '/pages/' + app.i18n.locale + '/2024/rules'
    ).fetch()
    const faq = await $content(
      '/pages/' + app.i18n.locale + '/2024/faq'
    ).fetch()
    const jury = await $content('/jury/' + app.i18n.locale + '/2024').fetch()
    const prize = await $content(
      '/pages/' + app.i18n.locale + '/2024/prize'
    ).fetch()
    const laureates = await $content('/laureates/' + app.i18n.locale + '/2024')
      .sortBy('order', 'asc')
      .fetch()

    return {
      intro,
      faq,
      dates,
      rules,
      prize,
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
