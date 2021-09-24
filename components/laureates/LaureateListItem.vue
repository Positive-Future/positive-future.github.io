<template>
  <v-card
    :color="item.category === 'winner' ? '#ffe2a0' : 'transparent'"
    class="d-flex ma-3"
    justify="top"
    align="top"
    nuxt
    :to="localePath('/contest/laureates/' + item.slug)"
  >
    <v-avatar
      v-if="$vuetify.breakpoint.smAndUp"
      size="160"
      tile
      rounded
      :color="
        item.image && item.image.length
          ? 'transparent'
          : $vuetify.theme.themes.light.primary
      "
    >
      <OptimizedImage
        v-if="item.image"
        :src="item.image"
        :alt="item['laureate-title']"
      ></OptimizedImage>
      <p v-else v-html="item['laureate-title']"></p>
    </v-avatar>
    <div class="flex-column align-content-start">
      <v-card-title class="d-flex flex-row align-center">
        <!-- 
        I had to wrap the title in a paragraph node to avoid inconsistent line breaks with search highlights. 
        If your CSS foo is better than mine, the cleaner way is welcome. 
        -->
        {{ item['laureate-title'] }}

        <v-chip v-if="item.category === 'winner'" class="ma-2" color="#fff1d0">
          {{ $t('laureates.' + item.category).toUpperCase() }}
        </v-chip>
        <v-chip v-if="item.category === 'crush'" class="ma-2" color="pink" dark>
          {{ $t('laureates.crush') }}
        </v-chip>
        <v-chip class="ma-2">
          {{ $t('form.application.format.' + item.type) }}
        </v-chip>
      </v-card-title>
      <v-card-text class="pb-0">
        <div class="overline">{{ $tc('author-s', item.team.length) }}</div>
        <p>
          <span
            v-for="(ppl, index) in item.team"
            :key="ppl.firstname + ppl.lastname"
            >{{ ppl.lastname.toUpperCase() + ' ' + ppl.firstname
            }}<template v-if="index < item.team.length - 1"
              >,&nbsp;</template
            ></span
          >
        </p>

        <small v-if="item.copyright" class="muted caption"
          >Image of &copy; {{ item.copyright }}</small
        >
      </v-card-text>
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
  methods: {},
}
</script>
<style lang="scss"></style>
