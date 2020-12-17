<template>
  <div>
    <h2 class="text-h2 pt-6 text-uppercase text-center">
      {{ sab.title }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <v-card v-for="(item, index) in sab.members" :key="index">
      <v-card-title>
        {{ item.firstname + ' ' + item.lastname }}
      </v-card-title>
      <v-card-text>
        {{ item.bio }}
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content }) {
    const sab = await $content(app.i18n.locale + '/pages/sab').fetch()
    console.log('sab: ', sab)

    return {
      sab,
    }
  },
  data() {
    return {
      expanded: [0, 1, 2, 3, 4],
    }
  },
  mounted() {},
  methods: {},
}
</script>
