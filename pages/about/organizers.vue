<template>
  <div>
    <section
      style="background-color: #fff1d0"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-row no-gutters>
            <v-col cols="12" md="8" class="pa-3">
              <h1 class="mt-8">
                {{ ias.title }}
              </h1>
              <p>
                <nuxt-content :document="ias" />

                <a
                  :href="ias.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="ias.title"
                  >{{ $t('misc.ui.more') }}</a
                >
              </p>
              <h1 class="mt-8 mb-4">
                {{ fundation.title }}
              </h1>
              <p>
                <nuxt-content :document="fundation" />

                <a
                  :href="fundation.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="fundation.title"
                  >{{ $t('misc.ui.more') }}</a
                >
              </p>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.mdAndUp" md="4">
              <div class="logos">
                <div class="line1"></div>
                <div class="logo_container1 rounded-circle">
                  <v-img :src="ias.logo" class="logo"></v-img>
                </div>
                <div class="line2"></div>
                <div class="logo_container2 rounded-circle">
                  <v-img :src="fundation.logo" class="logo"></v-img>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }" class="px-3">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-row>
            <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="4">
              <v-img
                :src="anact.logo"
                contain
                class="logo mt-16"
                max-width="255"
                max-height="200px"
              ></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <p class="mt-10 mb-0">{{ $t('misc.ui.with_the_support_of') }}</p>
              <h1 class="mt-4 mb-4">
                {{ anact.title }}
              </h1>
              <p class="mb-3">
                <nuxt-content :document="anact" />
                <a
                  :href="anact.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="anact.title"
                  >{{ $t('misc.ui.more') }}</a
                >
              </p></v-col
            >

            <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="4">
              <v-img
                :src="inrs.logo"
                class="logo"
                max-width="255"
                max-height="200px"
              ></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <h1 class="mt-4 mb-4">
                {{ inrs.title }}
              </h1>
              <p class="mb-3">
                <nuxt-content :document="inrs" />

                <a
                  :href="inrs.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="inrs.title"
                  >{{ $t('misc.ui.more') }}</a
                >
              </p></v-col
            >
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const organizers = await $content('organizers/' + app.i18n.locale).fetch()
    const ias = organizers.find((item) => item.slug === 'ias')
    const fundation = organizers.find((item) => item.slug === '2100')
    const inrs = organizers.find((item) => item.slug === 'inrs')
    const anact = organizers.find((item) => item.slug === 'anact')

    return {
      organizers,
      ias,
      fundation,
      inrs,
      anact,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped>
.logos {
  position: relative;
}
.logo_container1 {
  position: absolute;
  top: 60px;
  left: 30px;
  background-color: white;
  height: 160px;
  width: 160px;
  padding: 30px;
  align-items: center;
  .logo {
    height: 100px;
    width: 100px;
  }
}
.logo_container2 {
  position: absolute;
  top: 350px;
  left: 150px;
  background-color: white;
  height: 160px;
  width: 160px;
  padding: 30px;
  align-items: center;
  .logo {
    height: 100px;
    width: 100px;
  }
}
.line1 {
  position: absolute;
  top: -20px;
  left: 108px;
  height: 160px;
  width: 4px;
  margin: 6px 0;
  background: white;
}
.line2 {
  position: absolute;
  top: -20px;
  left: 228px;
  height: 380px;
  width: 4px;
  margin: 6px 0;
  background: white;
}
</style>
