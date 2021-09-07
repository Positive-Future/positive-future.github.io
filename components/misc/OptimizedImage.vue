<template>
  <div class="frame">
    <v-img
      :aspect-ratio="ratio"
      :lazy-src="$img(src, { width: 10, quality: 70 })"
      :src="$img(src, { height, quality: 70 })"
      :srcset="_srcset.srcset"
      :sizes="_srcset.size"
      class="mb-6"
    ></v-img>
  </div>
</template>
<script>
export default {
  props: {
    ratio: { type: Number, default: 16 / 9 },
    height: { type: [Number, String], default: 500 },
    src: {
      type: String,
      default: '/img/header-bg.jpg',
    },
  },
  computed: {
    _srcset() {
      return this.$img.getSizes(this.src, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          quality: 70,
          height: 500,
        },
      })
    },
  },
  mounted() {},
}
</script>
<style scoped>
.frame {
  overflow: hidden;
}
.v-image {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}
.v-image:hover {
  -ms-transform: scale(1.06);
  -moz-transform: scale(1.06);
  -webkit-transform: scale(1.06);
  -o-transform: scale(1.06);
  transform: scale(1.06);
}
</style>
