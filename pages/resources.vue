<template>
  <div>
    <h2 class="text-h2 pt-6 text-uppercase text-center">
      {{ resources.title }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <nuxt-content :document="resources" class="pa-3" />
    <v-row v-if="!browsing" class="mx-3">
      <v-col
        v-for="(item, index) in categories"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-6 text-center"
            flat
            :elevation="hover ? 12 : 2"
            height="100%"
            @click="filters.category = item.name"
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
            <v-card-text class="text-left"
              >{{ $t('resources.categoriesTexts.' + item.name) }}
            </v-card-text>
          </v-card>
        </v-hover></v-col
      >
    </v-row>
    <v-data-iterator
      v-else
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="filters.search"
    >
      <template v-slot:header>
        <v-row class="mx-3">
          <v-col cols="12" sm="6" md="4"
            ><v-text-field
              v-model="filters.search"
              clearable
              multiple
              outlined
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.category"
              outlined
              multiple
              hide-details
              :items="
                categories.map((item) => {
                  return {
                    text: $t('resources.categories.' + item.name),
                    value: item,
                  }
                })
              "
              label="Category"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.type"
              outlined
              multiple
              hide-details
              :items="
                types.map((item) => {
                  return {
                    text: $t('resources.types.' + item),
                    value: item,
                  }
                })
              "
              label="Type"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.perspective"
              outlined
              multiple
              hide-details
              :items="
                perspectives.map((item) => {
                  return {
                    text: $t('resources.perspectives.' + item),
                    value: item,
                  }
                })
              "
              label="Perspectives and approaches"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.issue"
              outlined
              multiple
              hide-details
              :items="
                issues.map((item) => {
                  return {
                    text: $t('resources.issues.' + item),
                    value: item,
                  }
                })
              "
              label="Issues and challenges"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.lang"
              outlined
              multiple
              hide-details
              :items="
                languages.map((item) => {
                  return {
                    text: $t('resources.languages.' + item.toLowercase()),
                    value: item,
                  }
                })
              "
              label="Languages"
            ></v-select
          ></v-col>
        </v-row>
      </template>
      <template v-slot:no-results class="ml-6"
        ><div class="ml-6">{{$t('resources.noResultsTex}t')}</div>
      </template>
      <template v-slot:no-data class="ml-6"
        ><div class="ml-6">{{ $t('resources.noDataText') }}</div>
      </template>
      <template v-slot:default="props">
        <v-row class="mx-3">
          <v-col v-for="item in props.items" :key="item.name" cols="12">
            <v-card
              link
              :href="item.url"
              :to="item.file"
              :target="item.url && item.url.length ? '_blank' : 'self'"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    {{ item.category }}
                  </div>
                  <v-list-item-title class="headline mb-1">
                    {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.author }}</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar>
                  <v-icon>mdi-{{ item.icon }}</v-icon></v-list-item-avatar
                >
              </v-list-item>

              <v-divider></v-divider>
              <v-card-text>
                <p>{{ item.description }}</p>
                <ChipsContainer
                  :items="[...item.type, ...item.issues, ...item.perspectives]"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const resources = await $content(
      app.i18n.locale + '/pages/resources'
    ).fetch()
    const items = await $content('/resources').fetch()
    console.log('items: ', items)
    const types = [...new Set(...items.map((item) => item.types))]
    const languages = [...new Set(...items.map((item) => item.lang))]
    console.log('types: ', types)
    const issues = [...new Set(...items.map((item) => item.issues))]
    console.log('issues: ', issues)
    const perspectives = [...new Set(...items.map((item) => item.perspectives))]
    console.log('perspectives: ', perspectives)
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
      browsing: false,
      itemsPerPageArray: [10, 20, 50, 100],
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'name',
      categories: [
        { name: 'imagine_a_far_away_future', icon: 'head-cog' },
        { name: 'stimulate_your_creativity', icon: 'creation' },
        { name: 'stay_positive', icon: 'arm-flex' },
        { name: 'think_of_our_ideal_city', icon: 'city' },
        {
          name: 'face_our_challenges_today',
          icon: 'white-balance-sunny',
        },
        { name: 'learn_from_the_past', icon: 'rewind' },
      ],
      filters: {
        search: '',
        category: false,
        type: [],
        issues: [],
        perspectives: [],
        lang: [],
      },
    }
  },
  computed: {},
  watch: {
    filters: {
      deep: true,
      immediate: true,
      handler(v) {
        if (v.category?.length) this.browsing = true
        console.log('v: ', v)
      },
    },
  },
  mounted() {},
  methods: {
    filterSet(of) {
      console.log('of: ', of)
      console.log('of: ', typeof of)
      return this[of].map((key) => {
        console.log('key: ', key)
        const path = 'resources.' + of + '.' + key.value.toLowerCase()
        console.log('path: ', path)
        return {
          text: this.$t("'" + path + "'"),
          value: key,
        }
      })
    },
  },
}
</script>
