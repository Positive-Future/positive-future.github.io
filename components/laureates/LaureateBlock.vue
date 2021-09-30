<template>
  <v-card
    :color="item.category === 'winner' ? '#ffe2a0' : 'transparent'"
    class="pa-6 my-3"
  >
    <v-card-title class="pt-0">
      {{ item['laureate-title'] }}

      <v-chip v-if="item.category === 'winner'" class="ma-2" color="#fff1d0">
        {{ $t('laureates.' + item.category).toUpperCase() }}
      </v-chip>
      <v-chip v-if="item.category === 'crush'" class="ma-2" color="#fff1d0">
        {{ $t('laureates.crush') }}
      </v-chip>
      <v-chip class="ma-2">
        {{ $t('form.application.format.' + item.type) }}
      </v-chip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <YoutubeEmbedded
            v-if="item.video"
            :yt="item.video"
            class="mb-9 ml-3"
          ></YoutubeEmbedded
        ></v-col>
      </v-row>
      <OptimizedImage v-if="item.image" :src="item.image"> </OptimizedImage>
      <small v-if="item.copyright" class="muted caption"
        >&copy; {{ item.copyright }}</small
      >
      <div class="overline mt-6">
        {{ $tc('author-s', item.team.length) }}
      </div>
      <div class="mb-3">
        <span
          v-for="(ppl, index) in item.team"
          :key="ppl.firstname + ppl.lastname"
          >{{ ppl.lastname.toUpperCase() + ' ' + ppl.firstname
          }}<template v-if="index < item.team.length - 1"
            >,&nbsp;</template
          ></span
        >
      </div>

      <div class="overline">
        {{ $t('description') }}
      </div>
      <nuxt-content :document="item" />
      <v-btn
        v-if="!$route.name.startsWith('contest-laureates-slug')"
        color="default"
        x-small
        class="overline ml-n6"
        text
        style="color: rgba(0, 0, 0, 0.6)"
        @click="show = !show"
      >
        <v-icon color="rgba(0, 0, 0, 0.6)">{{
          show ? 'mdi-chevron-down' : 'mdi-chevron-right'
        }}</v-icon
        >{{ $t('from-the-jury') }}</v-btn
      >
      <div v-else class="overline">
        {{ $t('from-the-jury') }}
      </div>
      <v-expand-transition>
        <div v-show="show || $route.name.startsWith('contest-laureates-slug')">
          <div
            v-for="note in item.jury_notes"
            :key="note.firstname + ' ' + note.lastname"
            class="my-3"
          >
            <v-icon x-small>mdi-format-quote-open</v-icon>{{ note.text }}
            <v-icon x-small>mdi-format-quote-close</v-icon>&nbsp;<b>{{
              note.firstname + ' ' + note.lastname
            }}</b>
          </div>
        </div>
      </v-expand-transition>
    </v-card-text>

    <v-card-actions v-if="item.file">
      <v-btn color="primary" :to="'/laureates' + item.file" target="_blank">
        <v-icon left>mdi-download</v-icon>
        {{ $t('download') }}
      </v-btn>
    </v-card-actions>
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
