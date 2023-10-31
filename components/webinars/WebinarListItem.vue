<template>
  <v-card
    class="d-flex ma-2"
    justify="top"
    align="top"
    plain
    @click="$emit('open')"
  >
    <v-avatar
      v-if="$vuetify.breakpoint.smAndUp"
      class="mr-6 ma-3"
      size="200"
      tile
      rounded
      :color="
        item.image.length ? 'transparent' : $vuetify.theme.themes.light.primary
      "
    >
      <v-img v-if="item.image" :src="item.image" :alt="item.title" cover>
        <v-chip label> {{ $t(item.edition) }} </v-chip>
      </v-img>
      <p v-else v-html="highlight(item.title, search)"></p>
    </v-avatar>
    <div class="d-flex flex-column flex-grow-1">
      <div class="d-flex flex-row pt-3 pr-3">
        <v-card-title class="align-center pb-0 pr-0" style="max-width: 580px">
          <!-- 
        I had to wrap the title in a paragraph node to avoid inconsistent line breaks with search highlights. 
        If your CSS foo is better than mine, the cleaner way is welcome. 
        -->
          <p
            style="
              letter-spacing: 0.0125em;
              font-family: 'Poppins', sans-serif;
              word-break: normal;
            "
            class="font-weight-black"
          >
            <!--    <v-chip class="mr-2" label small>
            {{
              item.edition === 2021
                ? $t('work-in-2100')
                : $t('the-city-in-2100')
            }}
          </v-chip> -->
            <span v-html="highlight(item.title, search)"></span>
          </p>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-chip
          v-if="new Date(item.date) > Date.now()"
          label
          small
          color="#fff1d0"
        >
          {{ $t('upcoming') }}</v-chip
        >
        <v-chip
          v-else
          label
          color="#00c2cb"
          text-color="white"
          :style="
            'min-width: ' +
            ($i18n.locale === 'en' ? '65' : '80') +
            'px; text-align: center;'
          "
        >
          {{ $t('replay') }}
        </v-chip>
      </div>
      <v-card-text class="pt-0">
        <p
          v-html="
            new Date(item.date).toLocaleDateString($i18n.locale, {
              timezone: 'UTC',
            }) +
            ' - ' +
            new Date(item.date).toLocaleTimeString($i18n.locale, {
              hour: '2-digit',
              minute: '2-digit',
              timezone: 'UTC',
            })
          "
        ></p>
        <p>{{ item.abstract }} &hellip;</p>
        <!--     <div class="overline">{{ item.date }}</div> -->
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
