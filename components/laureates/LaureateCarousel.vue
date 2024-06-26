<template>
  <v-slide-group class="my-4" show-arrows center-active>
    <v-slide-item
      v-for="(laureate, index) in laureates"
      :key="laureate.title"
      v-slot="{ active }"
    >
      <LaureateItem
        :item="laureate"
        :active="active"
        :index="index"
        :total="laureates.length"
      />
    </v-slide-item>
  </v-slide-group>
</template>
<script>
export default {
  data() {
    return {
      laureates: [],
    }
  },
  async fetch() {
    const laureates = await this.$content(
      'laureates/' + this.$i18n.locale + '/2024'
    ).fetch()
    this.laureates = this.sortLaureates(laureates)
  },
  computed: {},
  watch: {},
  mounted() {
    this.$fetch()
  },

  methods: {
    sortLaureates(arr) {
      return [
        ...arr
          .filter((item) => item.category === 'winner')
          .sort((a, b) => +a?.order > +b?.order),
        ...arr.filter((item) => item.category === 'crush'),
        ...arr.filter((item) => !['winner', 'crush'].includes(item.category)),
      ]
    },
  },
}
</script>
<style lang="scss"></style>
