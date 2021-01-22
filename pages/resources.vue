<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 80px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 mb-4">
            {{ resources.title }}
          </h1>
          <nuxt-content :document="resources" />
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -85px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row>
            <v-col cols="12" sm="8">
              <v-card
                color="#FFE2A0"
                class="pa-6"
                flat
                :to="'/resources_' + $i18n.locale + '.pdf'"
                target="_blank"
                :class="{ 'ml-n6': $vuetify.breakpoint.mdAndUp }"
              >
                <div class="d-inline-flex justify-center align-center">
                  <v-icon x-large class="rotate-24 mr-6" color="black"
                    >mdi-file-pdf</v-icon
                  >
                  <div class="subtitle">
                    {{ $t('resources.check') }}
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <v-row justify="center" no-gutters>
      <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="px-0 mx-0">
        <v-expand-transition v-if="category_view">
          <v-row class="px-0 mx-n1">
            <v-col
              v-for="(item, index) in categories"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="pa-2 text-center"
                  flat
                  :elevation="hover ? 12 : 2"
                  height="100%"
                  @click="
                    filters.category = [item.name]
                    category_view = false
                  "
                >
                  <v-avatar color="#00c2cb" size="44">
                    <v-icon dark> mdi-{{ item.icon }} </v-icon>
                  </v-avatar>
                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    style="word-break: normal"
                  >
                    {{ $t('resources.categories.' + item.name) }}
                  </v-card-title>
                  <v-card-text
                    class="text-left"
                    v-html="$t('resources.categoriesTexts.' + item.name)"
                  >
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12">
              <div class="ma-6 text-center headline">
                {{ $t('resources.filterAlternativeText') }}
              </div>
            </v-col>
          </v-row>
        </v-expand-transition>
        <v-btn
          v-if="!category_view"
          text
          small
          class="mt-6"
          @click="category_view = true"
        >
          <small
            ><v-icon left>mdi-arrow-left</v-icon
            >{{ $t('misc.ui.back_to_categories') }}</small
          ></v-btn
        >

        <v-data-iterator
          :items="filteredItems"
          :items-per-page.sync="itemsPerPage"
          :page="page"
          :search="filters.search"
          :hide-default-footer="!browsing"
          class="my-6"
        >
          <template v-slot:header>
            <v-row>
              <v-col cols="12" sm="6" md="4"
                ><v-text-field
                  v-model="filters.search"
                  clearable
                  multiple
                  outlined
                  hide-details
                  :menu-props="{ bottom: true, offsetY: true }"
                  prepend-inner-icon="mdi-magnify"
                  :label="$t('resources.filters.search')"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="filters.category"
                  outlined
                  multiple
                  hide-details
                  :menu-props="{ bottom: true, offsetY: true }"
                  :items="
                    categories.map((item) => {
                      return {
                        text: $t('resources.categories.' + item.name),
                        value: item.name,
                      }
                    })
                  "
                  :label="$t('resources.filters.category')"
                ></v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="filters.type"
                  outlined
                  multiple
                  hide-details
                  :menu-props="{ bottom: true, offsetY: true }"
                  :items="
                    types.map((item) => {
                      return {
                        text: $t('resources.types.' + item),
                        value: item,
                      }
                    })
                  "
                  :label="$t('resources.filters.type')"
                ></v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="filters.perspectives"
                  outlined
                  multiple
                  hide-details
                  :menu-props="{ bottom: true, offsetY: true }"
                  :items="
                    perspectives.map((item) => {
                      return {
                        text: $t('resources.perspectives.' + item),
                        value: item,
                      }
                    })
                  "
                  :label="$t('resources.filters.perspectives')"
                ></v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="filters.issues"
                  outlined
                  multiple
                  hide-details
                  :menu-props="{ bottom: true, offsetY: true }"
                  :items="
                    issues.map((item) => {
                      return {
                        text: $t('resources.issues.' + item),
                        value: item,
                      }
                    })
                  "
                  :label="$t('resources.filters.issues')"
                ></v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  v-model="filters.lang"
                  outlined
                  multiple
                  hide-details
                  :menu-props="{ bottom: true, offsetY: true }"
                  :items="
                    languages.map((item) => {
                      return {
                        text: $t('misc.languages.' + item.toLowerCase()),
                        value: item,
                      }
                    })
                  "
                  :label="$t('resources.filters.lang')"
                ></v-select
              ></v-col>
            </v-row>
          </template>
          <template v-if="browsing" v-slot:no-results class="ml-6"
            ><div class="ml-6 my-6">{{ $t('resources.noResultsText') }}</div>
          </template>
          <template v-if="browsing" v-slot:no-data class="ml-6"
            ><div class="ml-6 my-6">{{ $t('resources.noDataText') }}</div>
          </template>
          <template v-if="browsing" v-slot:default="props">
            <v-row class="mx-3">
              <p class="ml-3 mt-6">
                <small>
                  {{
                    filteredItems.length +
                    (filteredItems.length === 1
                      ? $t('resources.resultFound')
                      : $t('resources.resultsFound')) +
                    (itemsPerPage > 0
                      ? ' (' + itemsPerPage + $t('resources.perPage') + ')'
                      : '')
                  }}
                </small>
              </p>
              <v-col v-for="item in props.items" :key="item.name" cols="12">
                <v-card link :href="item.url" :to="item.file" target="_blank">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">
                        <v-chip
                          v-for="(item, index) in item.category"
                          :key="index"
                          class="mx-1"
                          x-small
                          label
                          :outlined="
                            !(
                              filters.category &&
                              filters.category.includes(item)
                            )
                          "
                        >
                          {{ $t('resources.categories.' + item) }}
                        </v-chip>
                      </div>
                      <v-list-item-title class="headline mb-1">
                        {{ item.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="d-inline-flex align-center justify-start"
                      >
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-img
                              class="mr-3"
                              :src="
                                item.lang === 'EN'
                                  ? 'https://cdn.vuetifyjs.com/images/flags/us.png'
                                  : 'https://cdn.vuetifyjs.com/images/flags/fr.png'
                              "
                              max-width="20"
                              height="15"
                              v-bind="attrs"
                              v-on="on"
                            >
                            </v-img>
                          </template>
                          <span>{{
                            $t('misc.ui.thisDocumentLangIs') +
                            ' ' +
                            $t('misc.languages.' + item.lang.toLowerCase())
                          }}</span>
                        </v-tooltip>

                        {{ item.author }}</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on">
                            mdi-{{ icons[item.type[0]] }}
                          </v-icon>
                        </template>
                        <span>{{ $t('resources.types.' + item.type[0]) }}</span>
                      </v-tooltip>
                    </v-list-item-avatar>
                  </v-list-item>

                  <v-divider></v-divider>
                  <v-card-text>
                    <p>
                      {{ item['description_' + $i18n.locale.toLowerCase()] }}
                    </p>

                    <ChipsContainer
                      :filters="filters.perspectives"
                      related-key="perspectives"
                      :items="item.perspectives"
                    />
                    <ChipsContainer
                      related-key="issues"
                      :items="item.issues"
                      :filters="filters.issues"
                    />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const resources = await $content(
      app.i18n.locale + '/pages/resources'
    ).fetch()
    const items = await $content('resources').fetch()
    const types = [...new Set(items.map((item) => item.type).flat())].sort()
    const languages = [...new Set(items.map((item) => item.lang))].sort()
    const issues = [...new Set(items.map((item) => item.issues).flat())].sort()
    const perspectives = [
      ...new Set(items.map((item) => item.perspectives).flat()),
    ].sort()

    return {
      types,
      issues,
      languages,
      perspectives,
      resources,
      items,
    }
  },
  data() {
    return {
      icons: {
        Article: 'file-document-edit-outline',
        Book: 'book-open-page-variant',
        Photos: 'draw',
        Picture: 'image',
        Video: 'video-box',
      },
      category_view: true,
      itemsPerPageArray: [10, 20, 50, 100],
      sortDesc: false,
      page: 1,
      itemsPerPage: 10,
      sortBy: 'name',
      categories: [
        { name: 'imagine_a_far_away_future', icon: 'head-cog' },
        { name: 'stimulate_your_creativity', icon: 'creation' },
        { name: 'stay_positive', icon: 'arm-flex' },
        { name: 'think_of_your_ideal_city', icon: 'city' },
        {
          name: 'face_our_challenges_today',
          icon: 'white-balance-sunny',
        },
        { name: 'learn_from_the_past', icon: 'rewind' },
      ],
      filters: {
        category: [],
        type: [],
        issues: [],
        perspectives: [],
        lang: [],
        search: '',
      },
    }
  },
  computed: {
    browsing() {
      return (
        Object.values(this.filters)
          .flat()
          .filter((item) => item?.length).length > 0 || !this.category_view
      )
    },
    filteredItems() {
      return this.items
        .filter(
          (item) =>
            (!this.filters.type?.length ||
              this.filters.type.some((el) => item.type.includes(el))) &&
            (!this.filters.issues?.length ||
              this.filters.issues.some((el) => item.issues.includes(el))) &&
            (!this.filters.perspectives?.length ||
              this.filters.perspectives.some((el) =>
                item.perspectives.includes(el)
              )) &&
            (!this.filters.lang?.length ||
              this.filters.lang.includes(item.lang)) &&
            (!this.filters.category?.length ||
              this.filters.category.some((el) => item.category.includes(el)))
        )
        .map((e) => ({
          ...e,
          perspectives: e.perspectives.sort(),
          category: e.category.sort(),
        }))
    },
  },
  watch: {},
  updated() {},
  mounted() {},
  methods: {},
}
</script>
