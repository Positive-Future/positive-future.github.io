<template>
  <v-app-bar :dense="$vuetify.breakpoint.smAndDown" app fixed>
    <nuxt-link class="mx-0 px-0 d-flex" :to="localePath('index')">
      <v-avatar class="mr-2" tile>
        <v-img contain src="/logo.svg" />
      </v-avatar>
    </nuxt-link>
    <v-spacer />
    <v-tabs
      v-if="$vuetify.breakpoint.mdAndUp"
      style="max-width: 600px"
      right
      optional
    >
      <v-tab nuxt :to="localePath('/contest')">
        {{ $t('common.contest.title') }}
      </v-tab>
      <v-tab nuxt :to="localePath('/who')">
        {{ $t('common.who.title') }}
      </v-tab>
      <v-tab nuxt :to="localePath('/resources')">{{
        $t('common.resources.title')
      }}</v-tab>
    </v-tabs>

    <v-btn
      v-show="$vuetify.breakpoint.smAndDown"
      icon
      @click.stop="$emit('toggle-drawer')"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {},
  computed: {},
  mounted() {},
  methods: {},
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
