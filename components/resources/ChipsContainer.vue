<template>
  <div>
    <div class="ma-n1">
      <v-chip
        v-for="(item, index) in itemsToShow"
        :key="index"
        class="ma-1"
        :label="label"
        outlined
      >
        {{ item }}
      </v-chip>
      <v-btn
        v-if="items.length > 5"
        color="grey"
        small
        text
        @click="showMore = !showMore"
        >{{ !showMore ? `(show ${items.length - 5} more)` : `(show less)` }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    showMore: false,
  }),

  computed: {
    itemsToShow() {
      if (this.showMore) {
        return this.items
      } else {
        return this.items.slice(0, 5)
      }
    },
  },
}
</script>
