<template>
  <v-row class="mt-12 mx-6" :class="{ 'mx:6': $vuetify.breakpoint.mdAndUp }">
    <v-col
      v-if="$vuetify.breakpoint.mdAndUp"
      cols="3"
      col-md-offset="1"
      justify="center"
      align="center"
      class="d-flex flex-column align-center"
    >
      <v-avatar size="160" class="mb-3">
        <img v-if="item.image" alt="Avatar" :src="item.image" />
        <v-icon
          v-else
          class="white--text headline"
          :style="
            'background-color:' +
            $vuetify.theme.themes.light.primary +
            '; font-style: normal;'
          "
          >{{ item.firstname[0] + item.lastname[0] }}</v-icon
        >
      </v-avatar>
      <div class="flex-row justify-center">
        <v-tooltip v-if="item.wikipedia" bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              text
              v-bind="attrs"
              :href="item.wikipedia"
              target="_blank"
              v-on="on"
            >
              <v-icon>mdi-wikipedia</v-icon></v-btn
            >
          </template>
          <span>Check the Wikipedia page </span>
        </v-tooltip>
        <v-tooltip v-if="item.linkedin" bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              text
              v-bind="attrs"
              :href="item.linkedin"
              target="_blank"
              v-on="on"
            >
              <v-icon>mdi-linkedin</v-icon></v-btn
            >
          </template>
          <span>Get in touch on Linkedin</span>
        </v-tooltip>
        <v-tooltip v-if="item.twitter" bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              text
              v-bind="attrs"
              :href="item.twitter"
              target="_blank"
              v-on="on"
            >
              <v-icon>mdi-twitter</v-icon></v-btn
            >
          </template>
          <span>Follow on Twitter</span>
        </v-tooltip>
        <v-tooltip v-if="item.website" bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              text
              v-bind="attrs"
              :href="item.website"
              target="_blank"
              v-on="on"
            >
              <v-icon>mdi-link-variant</v-icon></v-btn
            >
          </template>
          <span>Check personal website</span>
        </v-tooltip>
      </div>
    </v-col>
    <v-col cols="12" md="8">
      <div
        class="text-h5 font-weight-black"
        v-html="highlight(item.firstname + ' ' + item.lastname, search)"
      ></div>
      <div
        class="text-h6 mb-3"
        v-html="highlight(item.title_and_institution, search)"
      ></div>
      <div
        v-if="$vuetify.breakpoint.smAndDown"
        class="flex-row justify-center mb-6"
      >
        <v-tooltip v-if="item.wikipedia" bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              v-for="social in getSocials(item)"
              :key="social.link"
              icon
              text
              v-bind="attrs"
              :href="socail.link"
              target="_blank"
              v-on="on"
            >
              <v-icon>{{ social.icon }}</v-icon></v-btn
            >
          </template>
          <span>{{ social.tooltip }} </span>
        </v-tooltip>
      </div>
      <p v-html="highlight(item.presentation, search)"></p>
      <small v-if="item.copyright" class="muted caption"
        >Image of &copy; {{ item.copyright }}</small
      >
      <v-expansion-panels v-if="mentor" class="mt-6">
        <v-expansion-panel>
          <v-expansion-panel-header> References </v-expansion-panel-header>
          <v-expansion-panel-content>
            <nuxt-content :document="item" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    mentor: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
    search: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    highlight: (word, query) => {
      const check = new RegExp(query, 'ig')
      return word.replace(check, function (matchedText, a, b) {
        return (
          '<strong style="color: darkslategray;background-color: yellow;">' +
          matchedText +
          '</strong>'
        )
      })
    },
    getSocials(item) {
      const socials = []
      if (item.website)
        socials.push({
          link: item.website,
          icon: 'mdi-link-variant',
          tooltip: this.$t('visit-website'),
        })
      if (item.wikipedia)
        socials.push({
          link: item.wikipedia,
          icon: 'mdi-wikipedia',
          tooltip: this.$t('check-the-wikipedia-page'),
        })
      if (item.linkedin)
        socials.push({
          link: item.linkedin,
          icon: 'mdi-linkedin',
          tooltip: this.$t('get-in-touch-on-linkedin'),
        })
      if (item.twitter)
        socials.push({
          link: item.twitter,
          icon: 'mdi-twitter',
          tooltip: this.$t('follow-on-twitter'),
        })
    },
  },
}
</script>

<style lang="scss"></style>