<template>
  <v-card :color="highlight ? '#ffe2a0' : 'transparent'" class="pa-6 my-3">
    <v-card-subtitle>{{ $t('laureates.' + item.category) }}</v-card-subtitle>
    <v-card-title>
      {{
        item.lastname.toUpperCase() + ' ' + item.firstname + ', ' + item.title
      }}
      <v-chip class="ma-2" color="primary">
        {{ $t('resources.types.' + item.type) }}
      </v-chip>
    </v-card-title>
    <v-card-text>
      <nuxt-content :document="item" />
    </v-card-text>
    <YoutubeEmbedded
      :yt="$i18n.locale === 'en' ? '1efqN3kp1NE' : '-7Fd0Vk8jHM'"
      class="mb-9"
    ></YoutubeEmbedded>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('open')">{{
        $t('see-the-full-version')
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    highlight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
