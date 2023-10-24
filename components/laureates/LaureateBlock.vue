<template>
  <v-card
    :color="item.category === 'winner' ? '#ffe2a0' : 'transparent'"
    class="pa-6 my-3 d-flex flex-row flex-no-wrap justify-space-between"
    nuxt
    :to="localePath('/contest/laureates/' + item.slug)"
  >
    <div v-if="$vuetify.breakpoint.smAndUp">
      <YoutubeEmbedded
        v-if="item.video"
        :yt="item.video"
        class="mb-9 ml-3"
      ></YoutubeEmbedded>
      <div v-if="item.image">
        <OptimizedImage :src="item.image" width="200px"> </OptimizedImage>
        <small v-if="item.copyright" class="muted caption"
          >&copy; {{ item.copyright }}</small
        >
      </div>
    </div>
    <v-card-text class="pt-0">
      <div class="headline">
        {{ item.title }}
        <v-chip
          v-if="item.category === 'winner'"
          small
          class="ma-2"
          color="#fff1d0"
        >
          {{ $t('laureates.' + item.category).toUpperCase() }}
        </v-chip>
        <v-chip
          v-if="item.category === 'crush'"
          small
          class="ma-2"
          color="#fff1d0"
        >
          {{ $t('laureates.crush') }}
        </v-chip>
        <v-chip small class="ma-2">
          {{ $t('form.application.format.' + item.type) }}
        </v-chip>
      </div>
      <div class="mb-3">
        {{ $t('from') }}
        <span
          v-for="(ppl, index) in item.team"
          :key="ppl.firstname + ppl.lastname"
          >{{ ppl.lastname.toUpperCase() + ' ' + ppl.firstname
          }}<template v-if="index < item.team.length - 1"
            >,&nbsp;</template
          ></span
        >
      </div>
      <nuxt-content class="d-inline" :document="{ body: item.excerpt }" />
    </v-card-text>
  </v-card>
</template>
<script>
import { truncateString } from '~/assets/utils'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {},
  mounted() {
    console.log(this.$route.name)
  },
  methods: {
    truncateString(str = '') {
      return truncateString(str, 250)
    },
  },
}
</script>
<style lang="scss">
.nuxt-content p {
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Lato', sans-serif !important;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.375rem !important;
  letter-spacing: 0.0071428571em !important;
}
</style>
