<template>
  <v-dialog
    :value="credits"
    scrollable
    max-width="700px"
    light
    @click:outside="$emit('close-credits')"
  >
    <v-card>
      <v-card-title>
        <v-avatar small class="mr-3" tile color="grey lighten-5" size="72">
          <v-img contain max-height="100%" src="/logo.svg" /> </v-avatar
        >Credits
        <v-spacer />
        <v-btn icon @click="$emit('close-credits')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text class="pt-6 px-6 subtitle-1">
        Positive-future is a collective effort that originated from
        <a href="https://www.paris-iea.fr" target="_blank"
          >Paris IAS - IEA de Paris</a
        >.
        <br />
        <b>Thanks</b>
        to all those whose contribution and collective intelligence provides us
        all with this shared resource.
        <br />This is a non-profit initiative. We welcome donations.
        <br />
        <nuxt-link :to="localePath('privacy_policy')" class="blue--text"
          >Privacy Policy</nuxt-link
        >&nbsp;-&nbsp;
        <nuxt-link :to="localePath('organizers')" class="blue--text">{{
          $t('navigation.organizers')
        }}</nuxt-link
        >&nbsp;-&nbsp;
        <nuxt-link :to="localePath('contest')" class="blue--text">{{
          $t('navigation.contest')
        }}</nuxt-link
        >&nbsp;-&nbsp;
        <a
          class="blue--text"
          style="text-decoration: underline; cursor: pointer"
          href="mailto:info@positive-future.org"
          >Contact us</a
        >
        <br />

        <v-divider />This website and logo as well as its infrastructure have
        been designed by Paris IAS. It is powered by
        <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> and
        <a href="http://vuetifyjs.com" target="_blank">Vuetify</a>
        .<br />All the images used are free of rights (or distributed as
        such).<br />
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
          <img
            alt="Creative Commons License"
            style="border-width: 0"
            src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
          />
        </a>
        <br />
        <span
          xmlns:dct="http://purl.org/dc/terms/"
          property="dct:title"
          class="caption"
          >Positive-Future by
          <a
            xmlns:cc="http://creativecommons.org/ns#"
            href="https://wprn.org"
            property="cc:attributionName"
            rel="cc:attributionURL"
            >Paris IAS</a
          >
          is licensed under a
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >
            Creative Commons Attribution-ShareAlike 4.0 International License </a
          >. <br />Based on a work at
          <a
            xmlns:dct="http://purl.org/dc/terms/"
            href="https://github.com/Positive-Future/positive-future.github.io"
            rel="dct:source"
            >https://github.com/Positive-Future/positive-future.github.io</a
          >
          by Antoine Cordelois.
        </span>
      </v-card-text>

      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="$emit('close-credits')">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    credits: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>
