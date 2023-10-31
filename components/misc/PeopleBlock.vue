<template>
  <v-col cols="12" :sm="sab ? '12' : '6'" class="px-3">
    <v-row class="mt-6" :class="{ 'mx:6': $vuetify.breakpoint.mdAndUp }">
      <v-col
        v-if="$vuetify.breakpoint.mdAndUp && !sab"
        cols="2"
        justify="center"
        align="center"
        class="d-flex flex-column align-center mr-3"
      >
        <v-avatar size="100" class="mb-3">
          <OptimizedImage
            v-if="item.image"
            alt="Avatar"
            :src="item.image"
            :ratio="1"
            contain
          />
          <v-icon
            v-else
            class="white--text"
            :style="
              'background-color:' +
              $vuetify.theme.themes.light.primary +
              '; font-style: normal;'
            "
            >{{ item.firstname[0] + item.lastname[0] }}</v-icon
          >
        </v-avatar>
        <div class="flex-row justify-center">
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
        </div>
      </v-col>
      <v-col :cols="sab ? '12' : '9'" class="px-3">
        <div :id="slugifyItem(item.lastname)" class="anchor"></div>
        <div
          class="font-weight-black"
          v-html="item.firstname + ' ' + item.lastname"
        ></div>
        <div>
          <i>{{ item.title_and_institution }}</i>
        </div>
        <div
          v-if="$vuetify.breakpoint.smAndDown"
          class="flex-row justify-center mb-6"
        >
          <v-tooltip
            v-for="social in getSocials(item)"
            :key="social.link"
            bottom
          >
            <template #activator="{ on, attrs }">
              <v-btn
                text
                icon
                color="primary"
                v-bind="attrs"
                :href="social.link"
                target="_blank"
                v-on="on"
              >
                <v-icon>{{ social.icon }}</v-icon></v-btn
              >
            </template>
            <span>{{ social.tooltip }} </span>
          </v-tooltip>
        </div>
        <template v-if="sab" class="nuxt-content"
          ><p>{{ item.presentation }}</p></template
        >
        <nuxt-content v-else :document="item" />

        <small v-if="item.copyright" class="muted caption"
          >Image of &copy; {{ item.copyright }}</small
        >

        <v-expansion-panels
          v-if="sab && item.body && item.body.children.length"
          class="mt-6"
        >
          <v-expansion-panel>
            <v-expansion-panel-header> References </v-expansion-panel-header>
            <v-expansion-panel-content>
              <nuxt-content :document="item" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col> </v-row
  ></v-col>
</template>
<script>
import { slugify } from '~/assets/utils'
export default {
  props: {
    sab: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      podcast: false,
    }
  },
  async fetch() {
    if (this.item.podcast) {
      const rst = await this.$content('Blog')
        .where({
          path: this.item.podcast
            .substring(0, this.item.podcast.length - 3)
            .substring(7),
        })
        .only('slug')
        .fetch()
      this.podcast = rst && rst.length ? rst[0].slug : false
    }
  },
  computed: {},
  mounted() {},
  methods: {
    slugifyItem(item) {
      return slugify(item)
    },
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

<style lang="scss">
div.anchor {
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
}
</style>
