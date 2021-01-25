<template>
  <v-app-bar app fixed height="112px" color="white" class="py-0 my-0">
    <v-container fluid class="py-0 my-0">
      <v-row
        no-gutters
        justify="center"
        :class="{ 'mx-n6': $vuetify.breakpoint.lgAndUp }"
      >
        <v-col xs="12" sm="11" md="12" lg="7" xl="6" class="mx-n3">
          <v-row no-gutters justify="center">
            <v-col>
              <nuxt-link :to="localePath('index')">
                <v-img
                  nuxt
                  src="/icon.png"
                  :height="$vuetify.breakpoint.mdAndUp ? '90px' : '44px'"
                  :width="$vuetify.breakpoint.mdAndUp ? '90px' : '44px'"
                />
              </nuxt-link>
            </v-col>
            <v-col align="right" cols="auto" class="pt-1">
              <v-row>
                <v-col class="d-inline-flex flex-row-reverse align-center">
                  <LanguagePicker></LanguagePicker>
                  <v-tooltip
                    v-for="(item, index) in socialIcons"
                    :key="index"
                    bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="item.url"
                        fab
                        x-small
                        depressed
                        color="grey"
                        class="mx-1"
                        v-on="on"
                      >
                        <v-icon color="white">mdi-{{ item.icon }} </v-icon>
                      </v-btn>
                    </template>
                    <span>{{ item.text }}</span>
                  </v-tooltip>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <template v-if="$vuetify.breakpoint.mdAndUp">
                    <v-tabs
                      right
                      color="#00c2cb"
                      optional
                      slider-size="5"
                      active-class="selected"
                    >
                      <v-menu left bottom offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-tab
                            v-bind="attrs"
                            :class="{
                              selected: [
                                'contest-rules___fr',
                                'contest-rules___en',
                                'contest-jury___fr',
                                'contest-jury___en',
                                'contest-tips___fr',
                                'contest-tips___en',
                              ].includes($route.name),
                            }"
                            v-on="on"
                          >
                            {{ $t('navigation.contest') }}
                            <v-icon>mdi-chevron-down</v-icon>
                          </v-tab>
                        </template>

                        <v-list>
                          <v-list-item nuxt :to="localePath('/contest/rules')">
                            <v-list-item-title>
                              {{ $t('navigation.rules') }}
                            </v-list-item-title>
                          </v-list-item>
                          <v-list-item nuxt :to="localePath('/contest/tips')">
                            <v-list-item-title>
                              {{ $t('navigation.tips') }}
                            </v-list-item-title>
                          </v-list-item>
                          <v-list-item nuxt :to="localePath('/contest/jury')">
                            <v-list-item-title>
                              {{ $t('navigation.jury') }}
                            </v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>

                      <v-tab nuxt :to="localePath('/resources')">{{
                        $t('navigation.resources')
                      }}</v-tab>
                      <v-tab nuxt :to="localePath('/news')">
                        {{ $t('navigation.news') }}
                      </v-tab>
                      <v-menu left bottom offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-tab
                            v-bind="attrs"
                            :class="{
                              selected: [
                                'about-organizers___en',
                                'about-organizers___fr',
                                'about-scientific_advisory_board___en',
                                'about-scientific_advisory_board___fr',
                              ].includes($route.name),
                            }"
                            v-on="on"
                          >
                            {{ $t('navigation.about') }}
                            <v-icon>mdi-chevron-down</v-icon>
                          </v-tab>
                        </template>

                        <v-list>
                          <v-list-item
                            nuxt
                            :to="localePath('/about/organizers')"
                          >
                            <v-list-item-title>
                              {{ $t('navigation.organizers') }}
                            </v-list-item-title>
                          </v-list-item>
                          <v-list-item
                            nuxt
                            :to="localePath('/about/scientific_advisory_board')"
                          >
                            <v-list-item-title>
                              {{ $t('navigation.sab') }}
                            </v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-tabs>
                  </template>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      v-show="$vuetify.breakpoint.smAndDown"
      icon
      @click.stop="$emit('toggle-drawer')"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {
    socialIcons() {
      return [
        {
          url: 'https://www.instagram.com/futurpositif/',
          text: this.$t('misc.social.instagram'),
          icon: 'instagram',
        },
        {
          url:
            'https://www.youtube.com/channel/UCguKalm3EVILMvkvoNXkANg/featured',
          text: this.$t('misc.social.youtube'),
          icon: 'youtube',
        },
        {
          url: 'https://twitter.com/FuturPositif',
          text: this.$t('misc.social.twitter'),
          icon: 'twitter',
        },
        {
          url: 'https://www.facebook.com/FuturPositif',
          text: this.$t('misc.social.facebook'),
          icon: 'facebook',
        },
      ]
    },
  },
  mounted() {},
  methods: {},
}
</script>
<style>
.v-sheet.v-app-bar.v-toolbar {
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out !important;
  -o-transition: background-color 0.3s ease-out !important;
  transition: background-color 0.3s ease-out !important;
}
</style>
