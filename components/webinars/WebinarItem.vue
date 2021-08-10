<template>
  <v-card
    class="my-4 pa-4 d-flex flex-column"
    max-width="400"
    :class="{ 'ml-4': index === 0, 'mr-4 ': index !== total }"
  >
    <v-img class="white--text align-end" height="200px" :src="item.image">
    </v-img>
    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-subtitle class="pb-0"> {{ item.date }} </v-card-subtitle>

    <v-card-text class="text--primary">
      {{ item.subtitle }}
      <!-- <nuxt-content :document="item.content" class="mt-12" /> -->
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions class="flex-row">
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        nuxt
        :to="localePath('/webinars/next/' + item.slug)"
        @click="$emit('expand', index)"
        >{{ $t('learn-more') }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 15,
    },
    item: {
      type: Object,
      default: () => {},
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
