<template>
  <div>
    <h2 class="text-h2 pt-6 text-uppercase text-center">
      {{ $t('navigation.privacy_policy') }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="pa-6" v-html="$t('navigation.privacy_policy')"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
