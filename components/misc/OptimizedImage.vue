<template>
  <div class="frame">
    <div class="overlay"></div>
    <v-img
      v-if="src"
      :aspect-ratio="ratio"
      :lazy-src="$img(src, { width: 10, quality: 70 })"
      :src="$img(src, { height, quality: 70 })"
      :srcset="_srcset.srcset"
      :sizes="_srcset.size"
      v-bind="$attrs"
    >
      <span id="caption-content">
        <slot name="caption"></slot>
        <br />
      </span>
    </v-img>
    <v-sheet v-else></v-sheet>
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
        sizes: 'xs:100vh sm:100vh md:100vh lg:100vh xl:100vh',
        modifiers: {
          format: 'webp',
          quality: 70,
          height: this.height,
        },
      })
    },
  },
  mounted() {},
}
</script>
<style scoped>
.frame {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding-bottom: 2rem;
  padding-right: 1.9rem;
  justify-content: space-between;
}
.v-image {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}
.overlay:hover + .v-image {
  -ms-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
