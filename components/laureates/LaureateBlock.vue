<template>
  <v-card
    :color="item.category === 'winner' ? '#ffe2a0' : 'transparent'"
    class="pa-6 my-3"
  >
    <v-card-title class="pt-0">
      {{ item.title }}

      <v-chip v-if="item.category === 'winner'" class="ma-2" color="#fff1d0">
        {{ $t('laureates.' + item.category).toUpperCase() }}
      </v-chip>
      <v-chip class="ma-2">
        {{ $t('form.application.format.' + item.type) }}
      </v-chip>
    </v-card-title>
    <v-card-text>
      <div class="overline">
        {{ $t('author-s') }}
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
      <div class="overline mt-2">
        {{ $t('from-the-jury') }}
      </div>
      <template v-if="show2">
        {{ item.jury }}
        <v-btn x-small text class="d-inline-block" @click="show2 = false">{{
          $t('show-less')
        }}</v-btn>
      </template>
      <template v-else>
        {{ truncateString(item.jury, 40) }}
        <v-btn x-small text class="d-inline-block" @click="show2 = true">{{
          $t('show-more')
        }}</v-btn>
      </template>
    </v-card-text>
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
      >Image of &copy; {{ item.copyright }}</small
    >
    <v-card-actions v-if="item.file">
      <v-btn color="primary" :to="'/laureates/' + item.file" target="_blank">
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
      show1: false,
      show2: false,
    }
  },
  computed: {},
  mounted() {
    console.log('item: ', this.item)
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
