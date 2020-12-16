<template>
  <v-app-bar :dense="$vuetify.breakpoint.smAndDown" app fixed>
    <nuxt-link class="mx-0 px-0 d-flex" :to="localePath('index')">
      <v-avatar class="mr-2" tile>
        <v-img contain nuxt :src="$router.options.base + '/logo.svg'" />
      </v-avatar>
    </nuxt-link>
    <v-spacer />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-tabs style="max-width: 600px" right optional color="#00c2cb">
        <v-tab nuxt :to="localePath('/contest')">
          {{ $t('navigation.contest') }}
        </v-tab>
        <v-tab nuxt :to="localePath('/resources')">{{
          $t('navigation.resources')
        }}</v-tab>
        <v-menu left bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-tab v-bind="attrs" v-on="on">
              {{ $t('navigation.about') }} <v-icon>mdi-chevron-down</v-icon>
            </v-tab>
          </template>

          <v-list>
            <v-list-item nuxt :to="localePath('/about/who')">
              <v-list-item-title>
                {{ $t('navigation.who') }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              nuxt
              :to="localePath('/about/scientific_advisory_board')"
            >
              <v-list-item-title>
                {{ $t('navigation.sab') }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
      <LanguagePicker></LanguagePicker>
    </template>
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
