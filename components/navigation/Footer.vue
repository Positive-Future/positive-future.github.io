<template>
  <v-footer style="z-index: 2" color="white">
    <v-row align="center" no-gutters justify="center">
      <v-col xs="12" sm="11" md="9" lg="9" xl="8" class="text-center">
        <nuxt-link
          :to="localePath('/faq')"
          class="black--text"
          style="text-decoration: none; cursor: pointer"
          href="mailto:info@positive-future.org"
          >{{ $t('faq') }}</nuxt-link
        >&nbsp;-&nbsp;
        <a
          class="black--text"
          style="text-decoration: none; cursor: pointer"
          href="mailto:info@positive-future.org"
          >{{ $t('misc.ui.contact_us') }}</a
        >&nbsp;-&nbsp;
        <a
          class="black--text"
          style="text-decoration: none"
          @click="showCredits = true"
          @keyup.enter="showCredits = true"
        >
          {{ $t('misc.ui.seeCredits') }}</a
        >
        <br />
        <v-tooltip top>
          <template #activator="{ on }">
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
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none"
          href="https://www.paris-iea.fr"
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
        localStorage.setItem('darkMode', this.$vuetify.theme.isDark)
      }
    },
  },
}
</script>
