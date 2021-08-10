<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 140px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-12">{{ webinarText.title }}</h1>
          <nuxt-content :document="webinarText" class="mt-12" />
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -140px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-slide-group
            v-model="model"
            class="mx-n4 my-4"
            show-arrows
            center-active
          >
            <v-slide-item
              v-for="(item, index) in webinars"
              :key="item.title"
              v-slot="{ active }"
            >
              <WebinarItem
                :item="item"
                :active="active"
                :index="index"
                :total="webinars.length"
              />
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </section>
    <WebinarList />
  </div>
</template>
<script>
export default {
  props: {},
  async asyncData({ app, $content }) {
    const webinarText = await $content(
      app.i18n.locale + '/pages/webinars'
    ).fetch()
    const webinars = await $content(app.i18n.locale + '/webinars')
      .where({ featured: true })
      .where({ draft: false })
      .sortBy('order', 'desc')
      .limit(3)
      .fetch()
    return {
      webinarText,
      webinars,
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
