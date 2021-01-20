<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 60px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 pb-4">
            {{ sab.title }}
          </h1>
          <nuxt-content :document="sab" />
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <template v-for="(item, index) in sab.members">
            <div :key="index" class="my-4">
              <span class="name px-1">
                {{ item.firstname + ' ' + item.lastname }}
              </span>
              <p>{{ item.bio }}</p>
            </div>
          </template>
        </v-col>
      </v-row>
    </section>
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
<style>
.name {
  background-color: black;
  color: white;
}
</style>
