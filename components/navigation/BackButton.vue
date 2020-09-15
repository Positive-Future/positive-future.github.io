<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <nuxt-link to="/" style="text-decoration: none">
        <v-btn fab icon small v-on="on">
          <v-icon large> mdi-arrow-left </v-icon>
        </v-btn>
      </nuxt-link>
    </template>
    <span>{{ $t('common.back') }}</span>
  </v-tooltip>
</template>
<script>
export default {}
</script>
