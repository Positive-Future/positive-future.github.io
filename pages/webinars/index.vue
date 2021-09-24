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
            class="my-4"
            :class="upcomingWebinars.length > 3 ? 'mx-n16' : 'mx-n4'"
            show-arrows
            center-active
          >
            <v-slide-item
              v-for="(item, index) in upcomingWebinars"
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
      .where({ published: true })
      // TODO complete
      .sortBy('date', 'desc')
      .fetch()
    const upcomingWebinars = webinars.filter(
      (item) => new Date(item.date) > Date.now()
    )
    console.log('upcomingWebinars: ', upcomingWebinars)
    console.log('webinars: ', webinars)
    return {
      webinarText,
      webinars,
      upcomingWebinars,
    }
  },
  data() {
    return {
      model: null,
    }
  },
  computed: {},
  created() {
    if (this.$vuetify.breakpoint.smAndDown && process.env.BROWSER)
      this.$vuetify.goTo(0)
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
