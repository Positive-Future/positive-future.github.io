<template>
  <div>
    <div class="ma-n1">
      <v-chip
        v-for="(item, index) in items"
        :key="index"
        class="ma-1"
        color="relatedKey === 'issues'?'primary':'secondary'"
        :outlined="!(filters && filters.includes(item))"
      >
        {{ $t('resources.' + relatedKey + '.' + item) }}
      </v-chip>
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
    relatedKey: {
      type: String,
      default: 'true',
    },
    filters: {
      type: Array,
      required: false,
    },
  },

  data: () => ({
    showMore: false,
  }),

  computed: {},
}
</script>
