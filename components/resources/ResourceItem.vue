<template>
  <div>
    {{ item.name }}
    <div class="subtitle">{{ item.author + ' ' + dateAgo }}</div>
  </div>
</template>
<script>
import { formatDistance, parse, format } from 'date-fns'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    dateAgo() {
      const date = parse(this.item.createdAt, 't', new Date())
      return formatDistance(date, this.currentTime) + ' ago'
    },
  },
}
</script>
