<template>
  <!-- FILTERS -->
  <section>
    <v-row justify="center">
      <v-col xs="12" sm="11" md="8" lg="7" xl="6">
        <!--    <div class="d-flex">
          <v-select
            v-model="edition"
            :items="[$t('the-city-in-2100'), $t('work-in-2100')]"
            :label="$t('choose-a-thematic')"
            outlined
            clearable
            :menu-props="{ bottom: true, offsetY: true }"
          ></v-select>
        </div> -->
        <!-- LIST -->
        <template v-for="(item, index) in laureates">
          <LaureateListItem :key="index" :item="item" :index="index" />
        </template>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  props: {},

  data() {
    return {
      searching: false,
      searchString: '',
      limit: 10,
      tab: 0,
      openModal: false,
      laureates: [],
      selected: null,
      expand: false,
      editions: [2021, 2022],
      edition: null,
    }
  },
  async fetch() {
    const laureates = await this.$content(this.$i18n.locale + '/laureates', {
      deep: true,
    }).fetch()
    this.laureates = this.sortLaureates(laureates)
  },
  computed: {},
  watch: {
    async searchString(searchString) {
      let laureates = []
      if (!searchString) {
        this.searching = false
        laureates = await this.$content(
          this.$i18n.locale + '/laureates'
        ).fetch()
      } else {
        this.searching = true
        laureates = await this.$content(this.$i18n.locale + '/laureates')
          .search(searchString)
          .fetch()
      }
      this.laureates = this.sortLaureates(laureates)
    },
    async edition(val) {
      let laureates = []
      if (!val) {
        laureates = await this.$content(
          this.$i18n.locale + '/laureates'
        ).fetch()
      } else {
        this.searching = true
        laureates = await this.$content(this.$i18n.locale + '/laureates')
          .search('searchString')
          .fetch()
      }
      this.laureates = this.sortLaureates(laureates)
    },
  },
  mounted() {},
  methods: {
    showInput() {
      // Show the input component
      this.expand = true
      // Focus the component, but we have to wait
      // so that it will be showing first.
      this.$nextTick(() => {
        this.focusInput()
      })
    },
    sortLaureates(arr) {
      return [
        ...arr.filter((item) => item.category === 'winner'),
        ...arr.filter((item) => item.category === 'crush'),
        ...arr.filter((item) => !['winner', 'crush'].includes(item.category)),
      ]
    },
    focusInput() {
      this.$refs.search.focus()
    },
  },
}
</script>
<style lang="scss"></style>
