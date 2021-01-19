<template>
  <div>
    <section
      style="background-color: #ffe2a0"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center" no-gutters>
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-row no-gutters>
            <v-col cols="12" md="8" class="pa-3">
              <h1 class="mt-6">
                {{ organizers.ias.title }}
              </h1>
              <p>
                {{ organizers.ias.text }}
                <a
                  :href="organizers.ias.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="organizers.ias.title"
                  >{{ $t('misc.ui.more') }}</a
                >
              </p>
              <h1 class="mt-8 mb-4">
                {{ organizers.fundation.title }}
              </h1>
              <p>
                {{ organizers.fundation.text }}
                <a
                  :href="organizers.fundation.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="organizers.fundation.title"
                  >{{ $t('misc.ui.more') }}</a
                >
              </p>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.mdAndUp" md="4">
              <div class="logos">
                <div class="line1"></div>
                <div class="logo_container1 rounded-circle">
                  <v-img
                    :src="$router.options.base + organizers.ias.logo"
                    class="logo"
                  ></v-img>
                </div>
                <div class="line2"></div>
                <div class="logo_container2 rounded-circle">
                  <v-img
                    :src="$router.options.base + organizers.fundation.logo"
                    class="logo"
                  ></v-img>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-row>
            <v-col cols="12" md="8">
              <p class="mt-10 mb-0">{{ $t('misc.ui.with_the_support_of') }}</p>
              <h1 class="mb-4">
                {{ organizers.iff.title }}
              </h1>
              <p class="mb-3">
                {{ organizers.iff.text }}
                <a
                  :href="organizers.iff.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="organizers.iff.title"
                  >{{ $t('misc.ui.more') }}</a
                >
              </p></v-col
            >
            <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="4">
              <v-img
                :src="$router.options.base + organizers.iff.logo"
                class="logo"
                max-width="255"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const organizers = await $content(
      app.i18n.locale + '/pages/organizers'
    ).fetch()

    return {
      organizers,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
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
