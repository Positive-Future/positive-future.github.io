<template>
  <v-card class="px-6 pb-6 pt-1" style="margin-top='112px'">
    <v-btn
      v-if="['webinars___en', 'webinars___fr'].includes($route.name)"
      large
      class="float-right mt-3"
      icon
      @click="$emit('close')"
      ><v-icon large>mdi-close</v-icon></v-btn
    >
    <v-card-title class="d-flex">
      <h1 class="d-flex">
        {{ item.title }}
      </h1>
    </v-card-title>
    <v-card-subtitle>
      {{ item.subtitle }}
    </v-card-subtitle>
    <v-chip
      v-if="item.file"
      class="ma-2"
      link
      :href="item.file"
      :to="item.file"
      target="_blank"
    >
      <v-avatar left>
        <v-icon>mdi-paperclip</v-icon>
      </v-avatar>
      {{ $t('misc.ui.download') }}
    </v-chip>
    <v-divider></v-divider>
    <v-card-text>
      <YoutubeEmbedded
        v-if="item.youtube_video_id"
        :yt="item.youtube_video_id"
        class="mb-9"
      ></YoutubeEmbedded>
      <nuxt-content :document="item" />
    </v-card-text>
    <v-card-actions
      v-if="['webinars___en', 'webinars___fr'].includes($route.name)"
    >
      <v-spacer> </v-spacer>
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            :to="localePath('/webinars/' + item.slug)"
            v-on="on"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </template>
        <span v-html="$t('open-the-webinar-page')"></span>
      </v-tooltip>
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
