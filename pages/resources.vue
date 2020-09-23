<template>
  <div>
    <h2 class="text-h3 font-weight-bold pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ $t('common.resources.title') }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <p class="pa-8" v-html="$t('common.resources.content')"></p>
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
