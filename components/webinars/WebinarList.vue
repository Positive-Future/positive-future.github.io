<template>
  <!-- FILTERS -->
  <section>
    <v-row justify="center">
      <v-col xs="12" sm="11" md="8" lg="7" xl="6">
        <div class="d-flex">
          <v-select
            v-model="edition"
            :items="[$t('the-city-in-2100'), $t('work-in-2100')]"
            :label="$t('choose-a-thematic')"
            outlined
            clearable
            :menu-props="{ bottom: true, offsetY: true }"
          ></v-select
          ><!-- 
          <v-checkbox
            v-model="winner"
            :label="$t('laureates.winner')"
            value="false"
            class="ml-3"
            @change="searchString()"
          ></v-checkbox> -->
          <v-spacer></v-spacer>
          <v-expand-x-transition>
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn
                  v-show="!expand"
                  text
                  class="text-h4 py-8 my-0"
                  nuxt
                  v-bind="attrs"
                  v-on="on"
                  @click="showInput()"
                  ><v-icon large :color="$vuetify.theme.themes.light.primary"
                    >mdi-magnify</v-icon
                  ></v-btn
                >
              </template>
              <span>Search in the program</span>
            </v-tooltip>
          </v-expand-x-transition>
          <v-expand-x-transition>
            <v-text-field
              v-show="expand"
              ref="search"
              v-model="searchString"
              height="64"
              large
              type="search"
              :style="'max-width:' + (expand ? '300px' : '0px') + ';'"
              :placeholder="$t('search')"
              outlined
              prepend-inner-icon="mdi-magnify"
              :color="$vuetify.theme.themes.light.primary"
              hide-details
              clearable
              @keydown.esc.prevent="
                expand = false
                searchString = ''
              "
              @click:clear="
                expand = false
                searchString = ''
              "
            />
          </v-expand-x-transition>
        </div>
        <!-- LIST -->
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <template v-if="searching">
              <div v-if="webinars.length > 0" class="overline">
                Searching for "{{ searchString }}" - {{ webinars.length }}
                {{ webinars.length > 1 ? 'results' : 'result' }}
              </div>
              <div
                v-else
                class="overline text-h6 d-flex flex-column align-center"
              >
                <div>
                  {{ $t('no-result-found-matching') }} "{{ searchString }}"
                </div>
                <v-btn outlined class="mt-3" @click="searchString = ''">{{
                  $t('cancel-my-search')
                }}</v-btn>
              </div>
              <WebinarListItem
                v-for="(item, index) in webinars"
                :key="index"
                :item="item"
                :search="searchString"
                :index="index"
                @open="
                  selected = index
                  openModal = true
                "
              />
            </template>
            <template v-for="(item, index) in webinars" v-else>
              <WebinarListItem
                :key="index"
                :item="item"
                :index="index"
                @open="
                  selected = index
                  openModal = true
                "
                @close="openModal = false"
              />
            </template>
          </v-tab-item>
        </v-tabs-items>
        <WebinarModal
          :item="webinars[selected] || {}"
          :open="openModal"
          @close="openModal = false"
        />
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
      webinars: [],
      selected: null,
      expand: false,
      editions: [2021, 2022],
      edition: null,
    }
  },
  async fetch() {
    this.webinars = await this.$content(this.$i18n.locale + '/webinars')
      /*  .where({ featured: true }) */
      .where({ published: true })
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
        this.webinars = await this.$content(this.$i18n.locale + '/webinars')
          /*  .where({ featured: true }) */
          .where({ published: true })
          .sortBy('date', 'desc')
          .limit(this.limit)
          .fetch()
      } else {
        this.searching = true
        this.webinars = await this.$content(this.$i18n.locale + '/webinars')
          .search(searchString)
          .sortBy('date', 'asc')
          .fetch()
      }
    },
    async edition(val) {
      console.log('edition', val)
      if (!val) {
        this.webinars = await this.$content(this.$i18n.locale + '/webinars')
          /*  .where({ featured: true }) */
          .where({ published: true })
          .sortBy('date', 'desc')
          .limit(this.limit)
          .fetch()
      } else {
        this.searching = true
        this.webinars = await this.$content(this.$i18n.locale + '/webinars')
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
