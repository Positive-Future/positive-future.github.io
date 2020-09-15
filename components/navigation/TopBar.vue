<template>
  <v-app-bar
    fixed
    min-height="80"
    height="80"
    flat
    :dark="$route.name === 'index' && $store.state.offsetTop === 0"
    :app="$route.name !== 'index'"
    :color="
      $route.name === 'index' && $store.state.offsetTop === 0
        ? 'transparent'
        : 'auto'
    "
  >
    <nuxt-link class="mx-0 px-0" to="/">
      <v-avatar class="mr-3" tile size="72" @click="scrollTo()">
        <v-img
          v-show="$route.name !== 'index' || $store.state.offsetTop > 0"
          contain
          max-height="100%"
          :src="$vuetify.theme.isDark ? 'icon_alt.png' : 'icon.png'"
        />
      </v-avatar>
    </nuxt-link>
    <v-spacer />
    <v-tabs
      v-if="$vuetify.breakpoint.mdAndUp"
      id="main-app-bar"
      v-model="tab"
      right
      :optional="!tab"
      slider-size="8"
      :color="
        $route.name === 'index' && $store.state.offsetTop === 0
          ? 'white'
          : 'auto'
      "
    >
      <v-tab
        nuxt
        class="font-weight-bold"
        :class="[
          { 'v-tab--active': $store.state.tab === 0 },
          $route.name === 'index' && $store.state.offsetTop === 0
            ? 'white--text'
            : 'back--text',
        ]"
      >
        About Positive-Future
      </v-tab>
      <v-tab
        nuxt
        class="font-weight-bold"
        :class="[
          { 'v-tab--active': $store.state.tab === 1 },
          $route.name === 'index' && $store.state.offsetTop === 0
            ? 'white--text'
            : 'back--text',
        ]"
      >
        Register your Project
      </v-tab>
      <v-tab
        nuxt
        class="font-weight-bold"
        :class="[
          { 'v-tab--active': $store.state.tab === 2 },
          $route.name === 'index' && $store.state.offsetTop === 0
            ? 'white--text'
            : 'back--text',
        ]"
      >
        Browse Projects
      </v-tab>
    </v-tabs>
    <v-btn
      v-show="$vuetify.breakpoint.smAndDown"
      tile
      outlined
      class="pa-0 mb-0 ml-0 mt-0 mr-1"
      width="72"
      height="72"
      @click.stop="$emit('close-drawer')"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  props: {},
  computed: {
    tab: {
      get() {
        return this.$store.state.tab
      },
      set(newValue) {
        return this.$store.commit('setTab', newValue)
      },
    },
  },
  mounted() {},
  methods: {
    updateStore(value) {
      this.$store.commit('setTab', value)
    },
    scrollTo(value = 0) {
      this.$store.commit('lockScrolling')
      this.$vuetify.goTo(value)
      setTimeout(() => {
        this.$store.commit('unlockScrolling')
        if (value === 0) this.$store.commit('setTab', null)
      }, 500)
    },
  },
}
</script>
<style>
.v-sheet.v-app-bar.v-toolbar {
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out !important;
  -o-transition: background-color 0.3s ease-out !important;
  transition: background-color 0.3s ease-out !important;
}
</style>
