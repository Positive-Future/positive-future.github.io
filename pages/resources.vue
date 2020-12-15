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
      row
      wrap
      :items="items"
      rows-per-page-items="rowsPerPageItems"
      pagination.sync="pagination"
    >
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
    return {
      resources,
      items,
      rowsPerPageItems: [10, 20, 50, 100],
    }
  },
  data() {
    return {
      pagination: 1,
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
