<template>
  <div>
    <section
      style="background-color: #fff1d0; padding-bottom: 60px"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 mb-4">
            {{ $t('navigation.news') }}
          </h1>
          <p>
            {{ $t('misc.ui.news_intro') }}
          </p>
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
                href="http://eepurl.com/hgbB6f"
                target="_blank"
                :class="{ 'ml-n6': $vuetify.breakpoint.mdAndUp }"
              >
                <div class="d-inline-flex justify-center align-center">
                  <v-icon x-large class="rotate-24 mr-6" color="black"
                    >mdi-email</v-icon
                  >
                  <div class="subtitle">
                    {{ $t('misc.ui.subscribe2') }}
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-col
                v-for="(item, index) in news"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <NewsItem :item="item"></NewsItem>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12">
                <v-list three-line block>
                  <template v-for="item in news">
                    <v-list-item
                      :key="item.title"
                      nuxt
                      :to="localePath('/news/' + item.slug)"
                    >
                      <v-list-item-avatar tile>
                        <v-img :src="$router.options.base + item.image"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-html="item.title">{{
                          item.title
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          item.createdAt.split('T')[0] + ' - ' + item.subtitle
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list></v-col
              >
            </template>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ app, $content }) {
    const news = await $content(app.i18n.locale + '/news')
      .where({ draft: false })
      .sortBy('createdAt')
      .fetch()
    console.log('featured: ', news)
    return {
      news,
    }
  },
  data() {
    return {
      colors: ['indigo', 'red lighten-1', 'deep-purple accent-4'],
      slides: ['First', 'Second', 'Third'],
    }
  },
  mounted() {
    console.log(this.$route)
    console.log(this.$router)
  },
}
</script>
<style>
.rotate-24 {
  filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=0.5);
  -webkit-transform: rotate(24deg);
  -moz-transform: rotate(24deg);
  -ms-transform: rotate(24deg);
  -o-transform: rotate(24deg);
  transform: rotate(24deg);
  display: inline-block;
}
</style>
