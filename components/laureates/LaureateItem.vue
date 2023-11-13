<template>
  <v-card
    class="ma-1 pa-2 d-flex flex-column justify-space-between"
    max-width="250"
    :color="item.category === 'winner' ? '#ffe2a0' : 'transparent'"
  >
    <div>
      <v-img class="white--text align-end" :src="item.image" cover> </v-img>
      <v-chip
        v-if="item.category === 'winner'"
        small
        class="ma-1"
        color="#fff1d0"
      >
        {{ $t('laureates.' + item.category).toUpperCase() }}
      </v-chip>
      <v-chip
        v-if="item.category === 'crush'"
        small
        class="ma-1"
        color="#fff1d0"
      >
        {{ $t('laureates.crush') }}
      </v-chip>
      <v-chip small class="ma-1">
        {{ $t('form.application.format.' + item.type) }}
      </v-chip>
      <v-chip
        v-if="!['crush', 'winner'].includes(item.category)"
        small
        class="ma-1"
      >
        {{ $t('selected') }}
      </v-chip>
      <v-card-title class="pa-0 text-h6">
        {{ item.title }}
      </v-card-title>

      <p>
        {{ $t('from') }}
        <span
          v-for="(ppl, index) in item.team"
          :key="ppl.firstname + ppl.lastname"
          >{{ ppl.lastname.toUpperCase() + ' ' + ppl.firstname
          }}<template v-if="index < item.team.length - 1"
            >,&nbsp;</template
          ></span
        >
      </p>
    </div>
    <v-card-actions class="pa-0">
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
