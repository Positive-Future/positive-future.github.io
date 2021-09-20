<template>
  <v-card class="px-6 pb-6 pt-1">
    <v-btn
      v-if="['laureates___en', 'laureates___fr'].includes($route.name)"
      large
      class="float-right mt-3"
      icon
      @click="$emit('close')"
      ><v-icon large>mdi-close</v-icon></v-btn
    >
    <v-card-subtitle>{{ $t('laureates.' + item.category) }}</v-card-subtitle>
    <v-card-title class="pt-0">
      {{ item.title }} (
      <span
        v-for="(ppl, index) in item.team"
        :key="ppl.firstname + ppl.lastname"
        >{{ ppl.lastname.toUpperCase() + ' ' + ppl.firstname
        }}<template v-if="index < item.team.length - 1">,&nbsp;</template></span
      >)
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

    <v-card-actions
      v-if="['laureates___en', 'laureates___fr'].includes($route.name)"
    >
      <v-spacer> </v-spacer>
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            :to="localePath('/laureates/' + item.slug)"
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
