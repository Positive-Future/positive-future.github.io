<template>
  <div>
    {{ item.name }}
    <div class="subtitle">{{ item.author }}</div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
