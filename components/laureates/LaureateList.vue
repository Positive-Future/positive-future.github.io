<template>
  <!-- FILTERS -->
  <section>
    <v-row justify="center">
      <v-col xs="12" sm="11" md="8" lg="7" xl="6">
        <!-- LIST -->
        <LaureateBlock
          v-if="$vuetify.breakpoint.smAndUp && laureates[0]"
          :item="laureates[0]"
          class=""
        />
        <v-toolbar v-if="$vuetify.breakpoint.smAndUp" flat class="mx-n4">
          <v-toolbar-items class="align-center justify-center d-flex">
            <v-text-field
              id="search"
              v-model="searchString"
              name="search"
              label="Search"
              hide-details
              solo
              flat
              outlined
              clearable
              :append-icon="searching ? null : 'mdi-magnify'"
            ></v-text-field>
            <v-select
              v-model="edition"
              :items="[
                { text: $t('the-city-in-2100'), value: 2021 },
                { text: $t('work-in-2100'), value: 2024 },
              ]"
              :label="$t('edition')"
              outlined
              hide-details
              clearable
              :menu-props="{ bottom: true, offsetY: true }"
            ></v-select>
            <v-select
              v-model="formats"
              :items="[
                { text: $t('form.application.format.comic'), value: 'comic' },
                {
                  text: $t('form.application.format.article'),
                  value: 'article',
                },
                { text: $t('form.application.format.novel'), value: 'novel' },
                { text: $t('form.application.format.video'), value: 'video' },
              ]"
              :label="$t('format')"
              multiple
              outlined
              hide-details
              clearable
              :menu-props="{ bottom: true, offsetY: true }"
            ></v-select>
            <v-checkbox
              v-model="laureatesOnly"
              class="ml-4"
              hide-details
              :label="$t('laureates-only')"
            ></v-checkbox
          ></v-toolbar-items>
        </v-toolbar>
        <template v-if="laureates.length === 0">
          {{ $t('no-laureates-found-matching-the-search-and-filter-criteria') }}
        </template>
        <template v-for="(item, index) in laureates">
          <LaureateBlock :key="index" :item="item" :index="index" />
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
      formats: [],
      edition: null,
      laureatesOnly: false,
    }
  },
  async fetch() {
    const laureates = await this.$content('laureates/' + this.$i18n.locale, {
      deep: true,
    }).fetch()
    this.laureates = this.sortLaureates(laureates)
  },
  computed: {},
  watch: {
    async searchString(searchString) {
      await this.updateSearch()
    },
    async edition(val) {
      await this.updateSearch()
    },
    async formats(val) {
      await this.updateSearch()
    },
    async laureatesOnly(val) {
      await this.updateSearch()
    },
  },
  mounted() {},
  methods: {
    async updateSearch() {
      let laureates = []
      let query = {
        ...(this.edition && { edition: this.edition.toString() }),
        ...(this.formats?.length && { type: { $in: this.formats } }),
        ...(this.laureatesOnly && { category: { $in: ['winner', 'crush'] } }),
      }
      console.log('query: ', query)
      if (this.searchString) {
        laureates = await this.$content('laureates/' + this.$i18n.locale, {
          deep: true,
        })
          .where(query)
          .search(this.searchString)
          .fetch()
      } else {
        laureates = await this.$content('laureates/' + this.$i18n.locale, {
          deep: true,
        })
          .where(query)
          .fetch()
      }
      this.searching =
        this.searchString?.length || Object.keys(query).length || false
      this.laureates = this.sortLaureates(laureates)
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
