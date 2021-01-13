<template>
  <div>
    <section style="background-color: #fff1d0; padding-bottom: 80px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-6">
            {{ $t('navigation.news') }}
          </h1>
          {{ $t('misc.ui.news_intro') }}
        </v-col>
      </v-row>
    </section>
    <section style="margin-top: -90px">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
          <v-row>
            <v-col cols="12" sm="8">
              <v-sheet color="#bfaa78" class="pa-3" flat>
                <v-row>
                  <v-col cols="3" align="right">
                    <v-icon x-large class="rotate-24 mr-3" color="black"
                      >mdi-email</v-icon
                    >
                  </v-col>
                  <v-col cols="9"> {{ $t('misc.ui.subscribe2') }}</v-col>
                </v-row>
              </v-sheet>
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
              <v-list three-line>
                <template v-for="item in news">
                  <v-list-item :key="item.title">
                    <v-list-item-avatar tile>
                      <v-img :src="item.image"></v-img>
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
              </v-list>
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
