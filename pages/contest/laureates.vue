<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 40px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-12">{{ laureateText.title }}</h1>
          <nuxt-content :document="laureateText" class="mt-12" />
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-slide-group
            v-model="model"
            class="mx-n4 my-4"
            show-arrows
            center-active
          >
            <v-slide-item
              v-for="(item, index) in laureates"
              :key="item.title"
              v-slot="{ active }"
            >
              <LaureateItem
                :item="item"
                :active="active"
                :index="index"
                :total="laureates.length"
              />
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </section>
    <LaureateList />
  </div>
</template>
<script>
export default {
  props: {},
  async asyncData({ app, $content }) {
    const laureateText = await $content(
      app.i18n.locale + '/pages/laureates'
    ).fetch()
    const laureates = await $content(app.i18n.locale + '/pages/2021/laureates')
      .where({ featured: true })
      .where({ draft: false })
      .sortBy('order', 'desc')
      .limit(3)
      .fetch()
    return {
      laureateText,
      laureates,
    }
  },
  data() {
    return {
      model: null,
    }
  },
  computed: {},
  created() {
    if (this.$vuetify.breakpoint.smAndDown) this.$vuetify.goTo(0)
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
