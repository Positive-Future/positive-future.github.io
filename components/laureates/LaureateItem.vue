<template>
  <v-card
    class="mx-auto"
    max-width="344"
    :color="item.category === 'winner' ? '#ffe2a0' : 'transparent'"
  >
    <v-img class="white--text align-end" :src="item.image" height="200px" cover>
    </v-img>
    <v-chip
      v-if="item.category === 'winner'"
      small
      class="ma-2"
      color="#fff1d0"
    >
      {{ $t('laureates.' + item.category).toUpperCase() }}
    </v-chip>
    <v-chip v-if="item.category === 'crush'" small class="ma-2" color="#fff1d0">
      {{ $t('laureates.crush') }}
    </v-chip>
    <v-chip small class="ma-2">
      {{ $t('form.application.format.' + item.type) }}
    </v-chip>
    <v-card-title class="pt-0"> {{ item.title }} </v-card-title>

    <v-card-subtitle>
      {{ $t('from') }}
      <span
        v-for="(ppl, index) in item.team"
        :key="ppl.firstname + ppl.lastname"
        >{{ ppl.lastname.toUpperCase() + ' ' + ppl.firstname
        }}<template v-if="index < item.team.length - 1">,&nbsp;</template></span
      >
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="primary"
        nuxt
        :to="localePath('/contest/laureates/' + item.slug)"
        >{{ $t('learn-more') }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 15,
    },
    item: {
      type: Object,
      default: () => {},
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss"></style>
