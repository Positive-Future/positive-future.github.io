<template>
  <v-app v-scroll="onScroll">
    <v-main>
      <div id="language-picker">
        <v-select
          :value="$i18n.locale"
          hide-details
          :items="languages"
          dense
          outlined
          @change="$i18n.setLocale($event)"
        >
          <template v-slot:selection="{ item }">
            <v-img :src="item.flagSrc" width="30" height="20"> </v-img>
          </template>

          <template v-slot:item="{ item }">
            <v-img :src="item.flagSrc" width="30" height="20"> </v-img>&nbsp;
            {{ item.text }}
          </template>
        </v-select>
      </div>
      <Particles />
      <v-row align="center" no-gutters justify="center">
        <v-col xs="12" sm="11" md="9" lg="9" xl="8" class="ma-3">
          <nuxt-link :to="localePath('index')">
            <v-img src="/logo.svg" class="logo my-12" contain></v-img>
          </nuxt-link>
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
    log(item) {
      console.log(item)
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  max-height: 15vh;
  z-index: 2;
}
#language-picker {
  position: fixed;
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
