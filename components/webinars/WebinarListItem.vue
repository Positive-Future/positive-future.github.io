<template>
  <v-card class="d-flex" justify="top" align="top" @click="$emit('open')">
    <v-avatar
      v-if="$vuetify.breakpoint.smAndUp"
      class="my-3 mr-6"
      size="125"
      tile
      rounded
      :color="
        item.image.length ? 'transparent' : $vuetify.theme.themes.light.primary
      "
    >
      <v-img
        v-if="item.image"
        :src="item.image"
        :alt="item.title"
        contain
      ></v-img>
      <p v-else v-html="highlight(item.title, search)"></p>
    </v-avatar>
    <div class="flex-column align-content-start mt-3">
      <v-card-title class="d-flex flex-row align-center">
        <!-- 
        I had to wrap the title in a paragraph node to avoid inconsistent line breaks with search highlights. 
        If your CSS foo is better than mine, the cleaner way is welcome. 
        -->
        <p
          style="
            font-weight: 500;
            letter-spacing: 0.0125em;
            line-height: 2rem;
            font-family: 'Poppins', sans-serif;
            font-size: 1.15rem;
            word-break: normal;
          "
        >
          <v-chip class="ma-2" label small>
            {{
              item.edition === 2021
                ? $t('the-city-in-2100')
                : $t('work-in-2100')
            }}
          </v-chip>
          <span v-html="highlight(item.title, search)"></span>
        </p>
      </v-card-title>
      <v-card-text>
        <p v-html="highlight(item.subtitle, search)"></p>
        <div class="overline">{{ item.date }}</div>
        <small v-if="item.copyright" class="muted caption"
          >Image of &copy; {{ item.copyright }}</small
        >
      </v-card-text>
      <!--  <v-card-actions v-if="$route.name.startsWith('webinars-next-slug')">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          nuxt
          :to="localePath('/webinars/next/' + item.slug)"
          @click="$emit('expand', index)"
          >{{ $t('learn-more') }}</v-btn
        >
      </v-card-actions> -->
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 15,
    },
    item: {
      type: Object,
      default: () => {},
    },
    active: {
      type: Boolean,
      default: false,
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
  created() {},
  mounted() {},
  methods: {
    highlight(word, query) {
      if (!this.search.length) return word
      console.log('this: ', this)
      const check = new RegExp(query, 'ig')
      return word.replace(check, function (matchedText, a, b) {
        return (
          '<strong style="color: darkslategray;background-color: yellow;">' +
          matchedText +
          '</strong>'
        )
      })
    },
  },
}
</script>
<style lang="scss"></style>
