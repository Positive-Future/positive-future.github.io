<template>
  <v-hover v-slot="{ hover }">
    <v-card
      nuxt
      :to="localePath('/news/' + item.slug)"
      color="#FFF1D0"
      :elevation="hover ? 12 : 2"
    >
      <v-img contain :src="item.image"></v-img>
      <v-card-title style="word-break: normal"> {{ item.title }} </v-card-title>
      <v-card-text>
        {{ item.subtitle }}
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
import { formatDistance } from 'date-fns'

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    dateAgo() {
      const date = new Date(this.item.createdAt)

      return formatDistance(date, new Date()) + ' ago'
    },
  },
}
</script>
