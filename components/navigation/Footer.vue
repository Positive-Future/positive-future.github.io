<template>
  <v-footer
    class="justify-center"
    :class="{ 'pb-4': $vuetify.breakpoint.smAndDown }"
    style="z-index: 2"
  >
    <div
      class="title font-weight-light text-center align-end"
      :class="{ 'grey--text text--lighten-1': $vuetify.theme.isDark }"
      style="z-index: 2"
    >
      <div class="d-flex align-center justify-center">
        <!--   <v-icon :color="$vuetify.theme.isDark ? 'white' : 'secondary'">
          mdi-moon-waning-crescent
        </v-icon>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-switch
              v-model="$vuetify.theme.isDark"
              class="mt-0 pa-0 inline-flex"
              :false-value="true"
              :true-value="false"
              hide-details
              style="max-width: 104px; line-height: 36px"
              v-on="on"
              @change="storeTheme()"
            />
          </template>
          <span
            v-html="
              $vuetify.theme.isDark
                ? 'Toggle the light mode'
                : 'Toggle the dark mode'
            "
          />
        </v-tooltip>
        <v-icon :color="$vuetify.theme.isDark ? 'white' : 'secondary'">
          mdi-brightness-5
        </v-icon>
        <v-divider vertical class="ml-2" /> -->
        <v-tooltip v-for="(item, index) in socialIcons" :key="index" top>
          <template v-slot:activator="{ on }">
            <v-btn text icon class="d-inline-flex" v-on="on">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: none"
              >
                <v-icon :color="$vuetify.theme.isDark ? 'white' : 'secondary'"
                  >mdi-{{ item.icon }}</v-icon
                >
              </a>
            </v-btn>
          </template>
          <span>{{ item.text }}</span>
        </v-tooltip>
      </div>
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
      <span class="body-2">
        {{ new Date().getFullYear() }} - {{ $t('common.maintained') }}
        <a
          class="blue--text"
          href="https://www.paris-iea.fr/en"
          target="_blank"
          rel="noopener noreferrer"
          >IAS Paris</a
        >.
        <br />
        <a
          style="text-decoration: underline"
          class="blue--text"
          @click="showCredits = true"
        >
          {{ $t('common.seeCredits') }}</a
        >

        &nbsp;-&nbsp;
        <nuxt-link :to="localePath('privacy_policy')" class="blue--text">
          {{ $t('common.privacy_policy.title') }}</nuxt-link
        >&nbsp;-&nbsp;
        <nuxt-link :to="localePath('partners')" class="blue--text">{{
          $t('common.partners.title')
        }}</nuxt-link
        >&nbsp;-&nbsp;
        <nuxt-link :to="localePath('guidelines')" class="blue--text">{{
          $t('common.guidelines.title')
        }}</nuxt-link
        >&nbsp;-&nbsp;
        <a
          class="blue--text"
          style="text-decoration: underline; cursor: pointer"
          href="mailto:info@positive-future.org"
          >{{ $t('common.contact_us') }}</a
        >
      </span>

      <Credits :credits="showCredits" @close-credits="showCredits = false" />
    </div>
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
