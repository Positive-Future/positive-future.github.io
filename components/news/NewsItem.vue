<template>
  <v-hover v-slot="{ hover }">
    <v-card
      nuxt
      :to="localePath('/news/' + item.slug)"
      color="#ffe2a0"
      :elevation="hover ? 12 : 2"
    >
      <v-img contain :src="$router.options.base + item.image"></v-img>
      <v-card-title> {{ item.title }} </v-card-title>
      <v-card-subtitle> {{ dateAgo }}</v-card-subtitle>
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
      console.log('this.item.createdAt: ', this.item.createdAt)
      const date = new Date(this.item.createdAt)
      console.log('date: ', date)

      return formatDistance(date, new Date()) + ' ago'
    },
  },
}
</script>
