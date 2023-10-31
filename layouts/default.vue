<template>
  <v-app v-scroll="onScroll">
    <v-main>
      <TopBar v-if="$vuetify.breakpoint.mdAndUp" />
      <v-app-bar v-else app fixed color="white" class="py-0 my-0">
        <nuxt-link :to="localePath('index')">
          <v-img nuxt src="/icon.png" height="52px" width="52px" />
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-btn
          v-if="$vuetify.breakpoint.smAndDown"
          id="menu_btn"
          large
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon large color="black">mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        right
        color="rgb(217, 217, 217)"
        overlay-color="white"
      >
        <div class="d-flex flex-row-reverse">
          <v-tooltip left>
            <template #activator="{ on }">
              <v-btn class="ma-3" large icon @click="drawer = false" v-on="on">
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
            </template>
            <span>Close the menu</span>
          </v-tooltip>
        </div>
        <v-list>
          <v-list-group>
            <template #activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('navigation.contest') }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              class="pl-6"
              nuxt
              :to="localePath('/contest/2024_edition')"
            >
              <v-list-item-title>
                {{ $t('2024-edition') }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              class="pl-6"
              nuxt
              :to="localePath('/contest/2021_edition')"
            >
              <v-list-item-title>
                {{ $t('2021-edition') }}
              </v-list-item-title></v-list-item
            >
            <v-list-item
              nuxt
              :to="localePath('/contest/laureates')"
              class="pl-6"
            >
              <v-list-item-title>
                {{ $t('laureates_title') }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-group>
            <template #activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('navigation.resources') }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              class="pl-6"
              nuxt
              :to="localePath('/contest/2024_edition')"
            >
              <v-list-item-title>
                {{ $t('2024-edition') }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              class="pl-6"
              nuxt
              :to="localePath('/contest/2021_edition')"
            >
              <v-list-item-title>
                {{ $t('2021-edition') }}
              </v-list-item-title></v-list-item
            >
          </v-list-group>
          <v-list-item link :to="localePath('/webinars')">
            <v-list-item-content>
              <v-list-item-title> {{ $t('webinars') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group>
            <template #activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('navigation.about') }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link :to="localePath('/about/us')" class="pl-6">
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('our-initiative') }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              link
              :to="localePath('/about/organizers')"
              class="pl-6"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('navigation.organizers') }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              link
              :to="localePath('/about/scientific_advisory_board')"
              class="pl-6"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('navigation.sab') }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="localePath('/pressroom')" class="pl-6">
              <v-list-item-content>
                <v-list-item-title> {{ $t('press') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
        <v-footer app class="text-align:right" flat color="rgb(217, 217, 217)">
          <LanguagePicker></LanguagePicker>
        </v-footer>
      </v-navigation-drawer>

      <v-row align="center" no-gutters justify="center">
        <v-col cols="12">
          <nuxt />
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
  computed: {},
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
