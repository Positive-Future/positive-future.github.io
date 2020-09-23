<template>
  <div>
    <h2 class="text-h3 font-weight-bold pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ $t('common.who.title') }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <v-expansion-panels v-model="expanded" multiple accordion>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-1">
          <v-item v-slot:default="{}">
            <a
              :href="$t('common.who.iea.url')"
              target="_blank"
              rel="noopener noreferrer"
              :title="$t('common.who.iea.name')"
              style="background-color: white; flex: 0 1 auto"
              class="pa-2 ma-1"
              width="100"
            >
              <v-img
                src="/who/iea.png"
                contain
                :width="$vuetify.breakpoint.mdAndUp ? '100' : '75'"
                height="60"
                class="text-right pa-2"
              />
            </a>
          </v-item>
          <div class="title pa-3">
            {{ $t('common.who.iea.name') }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ $t('common.who.iea.description') }}
          <a
            :href="$t('common.who.iea.url')"
            target="_blank"
            rel="noopener noreferrer"
            :title="$t('common.who.iea.name')"
            >{{ $t('common.more') }}</a
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-1">
          <v-item v-slot:default="{}">
            <a
              :href="$t('common.who.fundation.url')"
              target="_blank"
              rel="noopener noreferrer"
              :title="$t('common.who.fundation.name')"
              style="background-color: white; flex: 0 1 auto"
              class="pa-2 ma-1"
              width="100"
            >
              <v-img
                src="/who/2100.jpg"
                contain
                :width="$vuetify.breakpoint.mdAndUp ? '100' : '75'"
                height="60"
                class="text-right pa-2"
              />
            </a>
          </v-item>
          <div class="title pa-3">
            {{ $t('common.who.fundation.name') }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ $t('common.who.fundation.description') }}
          <a
            :href="$t('common.who.fundation.url')"
            target="_blank"
            rel="noopener noreferrer"
            :title="$t('common.who.fundation.name')"
            >{{ $t('common.more') }}</a
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-1">
          <v-item v-slot:default="{}">
            <a
              :href="$t('common.who.iff.url')"
              target="_blank"
              rel="noopener noreferrer"
              :title="$t('common.who.iff.name')"
              style="background-color: white; flex: 0 1 auto"
              class="pa-2 ma-1"
              width="100"
            >
              <v-img
                src="/who/iffs.png"
                contain
                :width="$vuetify.breakpoint.mdAndUp ? '100' : '75'"
                height="60"
                class="text-right pa-2"
              />
            </a>
          </v-item>
          <div class="title pa-3">
            {{ $t('common.who.iff.name') }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ $t('common.who.iff.description') }}
          <a
            :href="$t('common.who.iff.url')"
            target="_blank"
            rel="noopener noreferrer"
            :title="$t('common.who.iff.name')"
            >{{ $t('common.more') }}</a
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expanded: [0, 1, 2, 3, 4],
    }
  },
  mounted() {},
  methods: {},
}
</script>
