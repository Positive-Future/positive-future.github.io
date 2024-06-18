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
      <div class="text-h6">
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
      <nuxt-content class="d-inline" :document="laureateDoc" />
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
      laureateDoc: this.laureateDocMethod(),
    }
  },
  computed: {},
  mounted() {
    /* console.log(this.$route.name) */
  },
  methods: {
    truncateString(str = '') {
      return truncateString(str, 250)
    },
    laureateDocMethod() {
      const hellip = {
        type: 'text',
        value: '...',
      }
      let doc = this.item.excerpt

      doc?.children[0]?.children && doc?.children[0]?.children.push(hellip)
      return { body: { ...doc } }
    },
  },
}
</script>
<style lang="scss"></style>
