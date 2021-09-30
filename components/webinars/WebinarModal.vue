<template>
  <v-dialog
    :value="open"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    :hide-overlay="$vuetify.breakpoint.smAndDown"
    transition="dialog-bottom-transition"
    dismissible
    max-width="900px"
    @click:outside="$emit('close')"
  >
    <WebinarView :item="item" @close="$emit('close')" />
  </v-dialog>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {}
  },
  created() {},

  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
.v-dialog--fullscreen {
  top: 57px;
}
</style>
