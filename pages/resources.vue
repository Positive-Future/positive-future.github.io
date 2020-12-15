<template>
  <div>
    <h2 class="text-h2 pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ resources.title }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <nuxt-content :document="resources" class="pa-3" />
    <v-row v-if="!browsing">
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
            <v-avatar color="#00c2cb" size="88">
              <v-icon dark large> mdi-{{ item.icon }} </v-icon>
            </v-avatar>
            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              style="word-break: normal"
            >
              {{ item.name }}
            </v-card-title>
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
        <v-row>
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
              :items="categories.map((item) => item.name)"
              label="Category"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.type"
              outlined
              multiple
              hide-details
              :items="types"
              label="Type"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.perspective"
              outlined
              multiple
              hide-details
              :items="perspectives"
              label="Perspectives and approaches"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.issue"
              outlined
              multiple
              hide-details
              :items="issues"
              label="Issues and challenges"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              v-model="filters.lang"
              outlined
              multiple
              hide-details
              :items="languages"
              label="Languages"
            ></v-select
          ></v-col>
        </v-row>
      </template>
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12">
            <v-card>
              <v-list-item
                three-line
                link
                :href="item.url"
                :to="item.file"
                :target="item.url && item.url.length ? '_blank' : 'self'"
              >
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
    const items = await $content(app.i18n.locale + '/resources').fetch()
    console.log('items: ', items)
    const types = [...new Set(...items.map((item) => item.types))]
    console.log('types: ', types)
    const issues = [...new Set(...items.map((item) => item.issues))]
    console.log('issues: ', issues)
    const perspectives = [...new Set(...items.map((item) => item.perspectives))]
    console.log('perspectives: ', perspectives)
    return {
      types,
      issues,
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
  computed: {
    languages() {
      return [
        {
          text: this.$t('resources.languages.en'),
          value: 'EN',
        },
        {
          text: this.$t('resources.languages.fr'),
          value: 'FR',
        },
        {
          text: this.$t('resources.languages.de'),
          value: 'DE',
        },
        {
          text: this.$t('resources.languages.es'),
          value: 'ES',
        },
      ]
    },
    categories() {
      return [
        {
          name:
            this.$i18n.locale === 'en'
              ? 'Imagine a far away future ...'
              : 'Imaginons un futur lointain',
          description: 'Description',
          icon: 'head-cog',
        },
        {
          name:
            this.$i18n.locale === 'en'
              ? 'Stimulate your creativity'
              : 'Stimulez votre créativité',
          description: 'Description',
          icon: 'creation',
        },
        {
          name:
            this.$i18n.locale === 'en'
              ? 'Face our challenges today'
              : "Affronter les défis d'aujourd'hui",
          description: 'Description',
          icon: 'arm-flex',
        },
        {
          name:
            this.$i18n.locale === 'en'
              ? 'Think of your ideal city'
              : 'Une vision de la ville idéale',
          description: 'Description',
          icon: 'city',
        },
        {
          name:
            this.$i18n.locale === 'en' ? 'Stay positive' : 'Restons positifs',
          description: 'Description',
          icon: 'white-balance-sunny',
        },
        {
          name:
            this.$i18n.locale === 'en'
              ? 'Learn from the past'
              : 'Apprendre du passé',
          description: 'Description',
          icon: 'rewind',
        },
      ]
    },
  },
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
  methods: {},
}
</script>
