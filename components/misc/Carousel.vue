<template>
  <v-carousel cycle show-arrows-on-hover hide-delimiter-background height="400">
    <v-carousel-item
      v-for="(item, i) in carousel"
      :key="i"
      :nuxt="!item.new_tab_link"
      :contain="$vuetify.breakpoint.xs"
      :to="
        $i18n.locale === 'en'
          ? localePath(item.link)
          : localePath(item.link_fr || item.link)
      "
      :target="item.new_tab_link ? '_blank' : 'self'"
      :aspect-ratio="ratio"
      :lazy-src="$img(item.picture, { width: 10, quality: 70 })"
      :src="$img(item.picture, { height, quality: 70 })"
      :srcset="item.src.srcset"
      :sizes="item.src.size"
      light
      class="mb-6"
    >
      <v-card color="transparent" flat>
        <v-card-title>
          <span
            :style="
              'background-color:' +
              ($vuetify.breakpoint.xs ? '#FFF' : '#fff1d0')
            "
            class="px-2"
          >
            {{ item.carousel_title }}
          </span></v-card-title
        >
        <v-card-text v-if="item.subtitle">
          <span
            :style="
              'background-color:' +
              ($vuetify.breakpoint.xs ? '#FFF' : '#fff1d0')
            "
            class="px-2"
          >
            {{ item.subtitle }}
          </span></v-card-text
        >
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    ratio: { type: Number, default: 16 / 9 },
    height: { type: [Number, String], default: 'auto' },
  },
  data() {
    return {
      carousel: [],
    }
  },
  async fetch() {
    const items = await this.$content('carousel/' + this.$i18n.locale)
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
    this.carousel = items.map((item) => {
      return {
        ...item,
        ...{
          src: this.$img.getSizes(item.picture, {
            sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
            modifiers: {
              format: 'webp',
              quality: 70,
              height: this.height,
            },
          }),
        },
      }
    })
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
