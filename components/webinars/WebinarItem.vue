<template>
  <v-card
    class="my-4 pa-4 d-flex flex-column"
    max-width="400"
    :class="{ 'ml-4': index === 0, 'mr-4 ': index !== total }"
  >
    <v-img class="white--text align-end" :src="item.image"> </v-img>
    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-subtitle class="pb-0">
      {{
        new Date(item.date).toLocaleDateString($i18n.locale, {
          timezone: 'UTC',
        }) +
        ' - ' +
        new Date(item.date).toLocaleTimeString($i18n.locale, {
          hour: '2-digit',
          minute: '2-digit',
          timezone: 'UTC',
        })
      }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      {{ item.subtitle }}
      <!-- <nuxt-content :document="item.content" class="mt-12" /> -->
    </v-card-text>
    <v-card-actions class="flex-row">
      <v-spacer></v-spacer>
      <v-btn color="primary" nuxt :to="localePath('/webinars/' + item.slug)">{{
        $t('learn-more')
      }}</v-btn>
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
