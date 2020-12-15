<template>
  <div id="language-picker" style="max-width: 80px">
    <v-select
      :value="$i18n.locale"
      hide-details
      :items="languages"
      filled
      transparent
      @change="$i18n.setLocale($event)"
    >
      <template v-slot:selection="{ item }">
        {{ item.text.substring(0, 2).toUpperCase() }}
      </template>

      <template v-slot:item="{ item }">
        <v-img :src="item.flagSrc" width="30" height="20"> </v-img>&nbsp;
        {{ item.text }}
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  computed: {
    languages() {
      return [
        {
          value: 'en',
          text: this.$t('common.en'),
          flagSrc: 'https://cdn.vuetifyjs.com/images/flags/us.png',
        },
        {
          value: 'fr',
          text: this.$t('common.fr'),
          flagSrc: 'https://cdn.vuetifyjs.com/images/flags/fr.png',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped></style>
