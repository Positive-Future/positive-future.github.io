<template>
  <v-footer style="z-index: 2">
    <v-row align="center" no-gutters justify="center">
      <v-col xs="12" sm="11" md="9" lg="9" xl="8" class="text-center">
        <a
          class="black--text"
          style="text-decoration: none; cursor: pointer"
          href="mailto:info@positive-future.org"
          >{{ $t('misc.ui.contact_us') }}</a
        >&nbsp;-&nbsp;
        <a
          class="black--text"
          style="text-decoration: none"
          href="http://eepurl.com/hgbB6f"
        >
          {{ $t('misc.ui.subscribe') }}</a
        >&nbsp;-&nbsp;
        <a
          class="black--text"
          style="text-decoration: none"
          @click="showCredits = true"
        >
          {{ $t('misc.ui.seeCredits') }}</a
        >
        <br />
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text icon v-on="on">
              <a
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: none"
              >
                <v-icon :color="$vuetify.theme.isDark ? 'white' : 'secondary'"
                  >mdi-creative-commons</v-icon
                >
              </a>
            </v-btn>
          </template>
          <span>This website is licenced under Creative Commons</span>
        </v-tooltip>
        {{ new Date().getFullYear() }} - {{ $t('misc.ui.maintained') }}
        <a
          :href="$t('misc.ui.who.iea.url')"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none"
          >{{ $t('misc.ui.maintainer') }}</a
        >.
      </v-col>
    </v-row>
    <Credits :credits="showCredits" @close-credits="showCredits = false" />
  </v-footer>
</template>

<script>
// TODO social icons should belong to app settings and be custom among those available
import { socialIcons } from '~/assets/data'
export default {
  data() {
    return {
      showCredits: false,
      socialIcons,
    }
  },
  created() {},
  methods: {
    storeTheme() {
      if (process.browser) {
        console.log('this.$vuetify.theme.isDark: ', this.$vuetify.theme.isDark)
        localStorage.setItem('darkMode', this.$vuetify.theme.isDark)
      }
    },
  },
}
</script>
