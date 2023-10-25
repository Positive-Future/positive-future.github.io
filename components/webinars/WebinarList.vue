<template>
  <!-- FILTERS -->
  <section>
    <v-row justify="center">
      <v-col xs="12" sm="11" md="8" lg="7" xl="6">
        <div class="d-flex">
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
              <v-checkbox
                v-model="pastOnly"
                class="ml-4"
                hide-details
                :label="$t('past-webinars-only')"
              ></v-checkbox>
              <v-spacer></v-spacer>
              <v-menu offset-y class="ml-auto">
                <template #activator="{ on: menu, attrs }">
                  <v-tooltip bottom>
                    <template #activator="{ on: tooltip }">
                      <v-btn
                        x-large
                        tile
                        icon
                        v-bind="attrs"
                        :class="{
                          'mt-3': $vuetify.breakpoint.xs,
                        }"
                        v-on="{ ...tooltip, ...menu }"
                      >
                        <v-icon> mdi-sort</v-icon>
                      </v-btn>
                    </template>
                    <span
                      v-html="
                        $t('sort-mode') +
                        $t(currentSort.text || defaultSort.text)
                      "
                    ></span>
                  </v-tooltip>
                </template>
                <v-list>
                  <v-subheader>{{ $t('sort-webinars-by-date') }} </v-subheader>
                  <v-list-item @click="sortDate = false">
                    <v-list-item-icon>
                      <v-icon>mdi-sort-calendar-descending</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{
                      $t('latest-first')
                    }}</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="sortDate = true">
                    <v-list-item-icon>
                      <v-icon>mdi-sort-calendar-ascending</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{
                      $t('oldest-first')
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar-items>
          </v-toolbar>
        </div>
        <!-- LIST -->
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <template v-if="searching">
              <div
                v-if="webinars.length === 0"
                class="overline text-h6 d-flex flex-column align-center"
              >
                <div class="mt-6">
                  {{ $t('no-result-found-matching') }}
                  {{ edition ? $t('your-filters') : '"' + searchString + '"' }}
                </div>
                <v-btn
                  outlined
                  class="mt-3"
                  @click="
                    searchString = ''
                    pastOnly = false
                    edition = null
                  "
                  >{{ $t('cancel-my-search') }}</v-btn
                >
              </div>
              <WebinarListItem
                v-for="(item, index) in webinars"
                :key="index"
                :item="item"
                :search="searchString || ''"
                :index="index"
                @open="$router.push(localePath('/webinars/' + item.slug))"
              />
            </template>
            <template v-for="(item, index) in webinars" v-else>
              <WebinarListItem
                :key="index"
                :item="item"
                :index="index"
                :search="searchString"
                @open="$router.push(localePath('/webinars/' + item.slug))"
              />
            </template>
          </v-tab-item>
        </v-tabs-items>
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
      //limit: 10,
      tab: 0,
      webinars: [],
      expand: false,
      edition: null,
      pastOnly: false,
      sortDate: null,
      currentSort: {
        text: 'date',
        value: 'date',
        icon: 'sort-calendar-descending',
      },
      defaultSort: {
        text: 'date',
        value: 'date',
        icon: 'calendar',
      },
    }
  },
  async fetch() {
    this.webinars = await this.$content('webinars/' + this.$i18n.locale)
      /*  .where({ featured: true }) */
      .sortBy('date', 'desc')
      //.limit(this.limit)
      .fetch()
  },
  computed: {},
  watch: {
    async searchString(searchString) {
      await this.updateSearch()
    },
    async edition() {
      await this.updateSearch()
    },
    async pastOnly() {
      await this.updateSearch()
    },
    async sortDate() {
      await this.updateSearch()
    },
  },
  mounted() {},
  methods: {
    async updateSearch() {
      let webinars = []
      let query = {
        ...(this.edition && { edition: this.edition.toString() }),
      }
      console.log('query: ', query)
      if (this.searchString) {
        webinars = await this.$content('webinars/' + this.$i18n.locale, {
          deep: true,
        })
          .where(query)
          .search(this.searchString)
          .sortBy('date', 'desc')
          .fetch()
      } else {
        webinars = await this.$content('webinars/' + this.$i18n.locale, {
          deep: true,
        })
          .where(query)
          .sortBy('date', 'desc')
          .fetch()
      }
      this.searching =
        this.searchString?.length ||
        Object.keys(query).length ||
        this.pastOnly ||
        false
      // filter if needed
      webinars = this.pastOnly
        ? webinars.filter((item) => new Date(item.date) < Date.now())
        : webinars
      // sort if needed
      webinars = this.sortDate ? webinars.reverse() : webinars
      // then assign
      this.webinars = webinars
    },
  },
}
</script>
<style lang="scss"></style>
