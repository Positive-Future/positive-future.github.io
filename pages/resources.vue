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
    <v-row>
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
            :to="item.url || item.file"
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
      v-if="browsing"
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            multiple
            outlined
            class="mx-1"
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <v-select
            v-model="category"
            outlined
            multiple
            class="mx-1"
            hide-details
            :items="categories.map((item) => item.name)"
            label="Category"
          ></v-select>
          <v-select
            v-model="type"
            outlined
            multiple
            class="mx-1"
            hide-details
            :items="types"
            label="Type"
          ></v-select>
          <v-select
            v-model="perspective"
            outlined
            class="mx-1"
            multiple
            hide-details
            :items="perspectives"
            label="Perspectives and approaches"
          ></v-select>
          <v-select
            v-model="issue"
            outlined
            class="mx-1"
            multiple
            hide-details
            :items="issues"
            label="Issues and challenges"
          ></v-select>
        </v-toolbar>
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
    const types = new Set(this.items.map((item) => item.types))
    const issues = new Set(this.items.map((item) => item.issues))
    const perspectives = new Set(this.items.map((item) => item.perspectives))
    console.log('items: ', items)
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
      browsing: true,
      itemsPerPageArray: [10, 20, 50, 100],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'name',
    }
  },
  computed: {
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
  mounted() {},
  methods: {},
}
</script>
