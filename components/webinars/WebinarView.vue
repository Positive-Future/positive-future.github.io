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
      <OptimizedImage v-else-if="post.image" :src="item.image">
      </OptimizedImage>
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
    <template v-if="$route.name.startsWith('webinars-next-slug')">
      <v-divider></v-divider>
      <div class="ma-3">The webinar will be held on Zoom: {{ item.zoom }}</div>
      <v-btn large text class="my-6" @click="calendar = true">
        <v-icon x-large left color="black" class="mr-6 ml-3"
          >mdi-calendar-plus</v-icon
        >
        {{ $t('add-to-my-calendar') }}</v-btn
      >
      <AddToCalendarModal
        :dialog="calendar"
        :item="item"
        @close="calendar = false"
      />
      <v-row>
        <v-col xs="12" sm="11" md="8" class="ma-3">
          <v-card
            color="#ffe2a0"
            class="px-6 pt-6 pb-8"
            flat
            href="http://eepurl.com/hgbB6f"
            target="_blank"
          >
            <div class="d-inline-flex justify-center align-center">
              <v-icon x-large class="rotate-24 mr-6" color="black"
                >mdi-email</v-icon
              >
              <div class="subtitle">
                {{ $t('misc.ui.subscribe3') }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="headline mt-6 mb-3">{{ $t('see-also') }}</div>
      <template v-for="(webinar, index) in webinars">
        <WebinarListItem
          :key="index"
          :item="webinar"
          :index="index"
          @open="$router.push(localePath('/webinars/' + item.slug))"
        />
      </template>
      <WebinarModal
        :item="webinars[selected] || {}"
        :open="openModal"
        @close="openModal = false"
      />
    </template>
  </v-card>
</template>
<script>
import AddToCalendarModal from '../misc/AddToCalendarModal.vue'
export default {
  components: {
    AddToCalendarModal,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      webinars: [],
      calendar: false,
      selected: null,
      openModal: false,
    }
  },
  async fetch() {
    this.webinars = await this.$content(this.$i18n.locale + '/webinars')
      /*  .where({ featured: true }) */
      .sortBy('order', 'desc')
      .where({ slug: { $ne: this.item.slug }, edition: this.item.edition })
      .limit(this.limit)
      .fetch()
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
