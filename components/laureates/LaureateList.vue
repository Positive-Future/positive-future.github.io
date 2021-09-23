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
    this.laureates = await this.$content(this.$i18n.locale + '/laureates', {
      deep: true,
    })
      /*  .where({ featured: true }) */
      .sortBy('date', 'desc')
      .limit(this.limit)
      .fetch()
  },
  computed: {},
  watch: {
    async searchString(searchString) {
      console.log('search', searchString)
      if (!searchString) {
        this.searching = false
        this.laureates = await this.$content(this.$i18n.locale + '/laureates')
          /*  .where({ featured: true }) */
          .where({ published: true })
          .sortBy('date', 'desc')
          .limit(this.limit)
          .fetch()
      } else {
        this.searching = true
        this.laureates = await this.$content(this.$i18n.locale + '/laureates')
          .search(searchString)
          .sortBy('date', 'asc')
          .fetch()
      }
    },
    async edition(val) {
      console.log('edition', val)
      if (!val) {
        this.laureates = await this.$content(this.$i18n.locale + '/laureates')
          /*  .where({ featured: true }) */
          .where({ published: true })
          .sortBy('date', 'desc')
          .limit(this.limit)
          .fetch()
      } else {
        this.searching = true
        this.laureates = await this.$content(this.$i18n.locale + '/laureates')
          .search('searchString')
          .sortBy('date', 'asc')
          .fetch()
      }
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
    focusInput() {
      this.$refs.search.focus()
    },
  },
}
</script>
<style lang="scss"></style>
