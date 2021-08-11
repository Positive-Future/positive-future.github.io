<template>
  <!-- FILTERS -->
  <section>
    <v-row justify="center">
      <v-col xs="12" sm="11" md="8" lg="7" xl="6">
        <div class="d-flex">
          <v-select
            v-model="edition"
            :items="editions"
            :label="$t('choose-an-edition')"
            outlined
            clearable
            :menu-props="{ bottom: true, offsetY: true }"
            @change="searchString()"
          ></v-select>
          <v-checkbox
            v-model="winner"
            :label="$t('laureates.winner')"
            value="false"
            class="ml-3"
            @change="searchString()"
          ></v-checkbox>
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
        <template v-if="searching">
          <div v-if="laureates.length > 0" class="overline">
            Searching for "{{ searchString }}" - {{ laureates.length }}
            {{ laureates.length > 1 ? 'results' : 'result' }}
          </div>
          <div v-else class="overline text-h6 d-flex flex-column align-center">
            <div>{{ $t('no-result-found-matching') }} "{{ searchString }}"</div>
            <v-btn outlined class="mt-3" @click="searchString = ''">{{
              $t('cancel-my-search')
            }}</v-btn>
          </div>
          <LaureateBlock
            v-for="(item, index) in laureates"
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
        <template v-for="(item, index) in laureates" v-else>
          <LaureateBlock
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
        <LaureateModal
          :item="laureates[selected] || {}"
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
      laureates: [],
      selected: null,
      expand: false,
      winner: false,
      editions: [2021, 2022],
      edition: null,
    }
  },
  async fetch() {
    let filter = {
      ...(this.edition !== null && { edition: this.edition }),
      ...(this.winner === true && { category: 'winner' }),
    }
    console.log('filter: ', filter)

    this.laureates = await this.$content(
      this.$i18n.locale + '/pages/2021/laureates'
    )
      .sortBy('order', 'asc')
      .where(filter)
      .fetch()
  },
  computed: {},
  watch: {
    async searchString(searchString) {
      console.log('search', searchString)
      let filter = {
        ...(this.edition !== null && { edition: this.edition }),
        ...(this.winner === true && { category: 'winner' }),
      }
      console.log('filter: ', filter)
      if (!searchString) {
        this.searching = false
        this.laureates = await this.$content(
          this.$i18n.locale + '/pages/2021/laureates'
        )
          /*  .where({ featured: true }) */
          .sortBy('order', 'desc')
          .where(filter)
          .limit(this.limit)
          .fetch()
      } else {
        this.searching = true
        this.laureates = await this.$content(
          this.$i18n.locale + '/pages/2021/laureates'
        )
          .search(searchString)
          .where(filter)
          .sortBy('start_date_and_time', 'asc')
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
