<template>
  <v-card nuxt :to="localePath('/news/' + item.slug)">
    <v-img contain :src="item.image"></v-img>
    <v-card-title> {{ item.title }} </v-card-title>
    <v-card-subtitle> {{ item.subtitle }} </v-card-subtitle>
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
}
</script>
