<template>
  <div>
    <h2 class="text-h2 font-weight-bold pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ $t('common.privacy_policy.title') }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="pa-6" v-html="$t('common.privacy_policy.text')"></div>
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
