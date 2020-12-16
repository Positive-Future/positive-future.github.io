<template>
  <v-app v-scroll="onScroll">
    <v-main>
      <TopBar v-if="$vuetify.breakpoint.mdAndUp" />
      <LanguagePicker v-if="$vuetify.breakpoint.smAndDown"></LanguagePicker>
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        id="menu_btn"
        large
        icon
        @click.stop="drawer = !drawer"
      >
        <v-icon large color="black">mdi-menu</v-icon>
      </v-btn>
      <Particles />
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        right
        class="text-right"
        color="rgb(217, 217, 217)"
        overlay-color="white"
      >
        <div class="d-flex flex-row-reverse">
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-btn class="ma-3" large icon @click="drawer = false" v-on="on">
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
            </template>
            <span>Close the menu</span>
          </v-tooltip>
        </div>
        <v-list>
          <v-list-item link :to="localePath('/contest')">
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                {{ $t('common.contest.title') }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item link :to="localePath('/who')">
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                {{ $t('common.who.title') }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item link :to="localePath('/resources')">
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                {{ $t('common.resources.title') }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-row align="center" no-gutters justify="center">
        <v-col cols="12" class="ma-3">
          <nuxt-link
            v-if="$vuetify.breakpoint.smAndDown"
            :to="localePath('index')"
          >
            <v-img src="/logo.svg" class="logo my-12" contain></v-img>
          </nuxt-link>
        </v-col>
        <v-col xs="12" sm="11" md="9" lg="9" xl="8" class="ma-3">
          <v-card id="content" class="mx-auto" max-width="1000">
            <nuxt />
          </v-card>
        </v-col>
      </v-row>
    </v-main>
    <Footer />
    <v-fab-transition>
      <v-btn
        v-show="$store.state.offsetTop > 600"
        color="secondary"
        fixed
        bottom
        right
        contained
        fab
        @click="$vuetify.goTo(0)"
      >
        <v-icon :color="$vuetify.theme.isDark ? 'primary' : 'white'">
          mdi-arrow-up
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    languages() {
      return [
        {
          value: 'en',
          text: this.$t('common.en'),
          flagSrc: 'https://cdn.vuetifyjs.com/images/flags/us.png',
        },
        {
          value: 'fr',
          text: this.$t('common.fr'),
          flagSrc: 'https://cdn.vuetifyjs.com/images/flags/fr.png',
        },
      ]
    },
  },
  created() {},
  methods: {
    onScroll(e) {
      this.$store.commit('setOffsetTop', e.target.scrollingElement.scrollTop)
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  max-height: 15vh;
  z-index: 2;
}
#menu_btn {
  position: fixed;
  z-index: 3;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
}
#language-picker {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 80px;
  margin-top: 10px;
  margin-left: 10px;
}
#content {
  z-index: 2;

  &.sm {
    padding-top: 5vh;
    height: 40vh;
    .public_logo {
      max-height: 20vh;
    }
  }
  &.md {
    padding-top: 7vh;
    height: 44vh;
    .public_logo {
      max-height: 20vh;
    }
  }
  &.lg {
    padding-top: 7vh;
    height: 44vh;
    .public_logo {
      max-height: 20vh;
    }
  }

  &.xl {
    padding-top: 7vh;
    height: 44vh;
    .public_logo {
      max-height: 20vh;
    }
  }
}
div[id^='particles-instance-'] {
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  z-index: 2 !important;
}
</style>
