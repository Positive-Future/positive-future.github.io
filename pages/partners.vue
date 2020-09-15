<template>
  <div>
    <h2 class="text-h2 font-weight-bold pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ $t('common.partners.title') }}
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
              :href="$t('common.partners.iea.url')"
              target="_blank"
              rel="noopener noreferrer"
              :title="$t('common.partners.iea.name')"
              style="background-color: white; flex: 0 1 auto"
              class="pa-2 ma-1"
              width="100"
            >
              <v-img
                src="/partners/iea.png"
                contain
                :width="$vuetify.breakpoint.mdAndUp ? '100' : '75'"
                height="60"
                class="text-right pa-2"
              />
            </a>
          </v-item>
          <div class="title pa-3">
            {{ $t('common.partners.iea.name') }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ $t('common.partners.iea.description') }}
          <a
            :href="$t('common.partners.iea.url')"
            target="_blank"
            rel="noopener noreferrer"
            :title="$t('common.partners.iea.name')"
            >More.</a
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-1">
          <v-item v-slot:default="{}">
            <a
              :href="$t('common.partners.fundation.url')"
              target="_blank"
              rel="noopener noreferrer"
              :title="$t('common.partners.fundation.name')"
              style="background-color: white; flex: 0 1 auto"
              class="pa-2 ma-1"
              width="100"
            >
              <v-img
                src="/partners/2100.jpg"
                contain
                :width="$vuetify.breakpoint.mdAndUp ? '100' : '75'"
                height="60"
                class="text-right pa-2"
              />
            </a>
          </v-item>
          <div class="title pa-3">
            {{ $t('common.partners.fundation.name') }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ $t('common.partners.fundation.description') }}
          <a
            :href="$t('common.partners.fundation.url')"
            target="_blank"
            rel="noopener noreferrer"
            :title="$t('common.partners.fundation.name')"
            >More.</a
          >
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-1">
          <v-item v-slot:default="{}">
            <a
              :href="$t('common.partners.iff.url')"
              target="_blank"
              rel="noopener noreferrer"
              :title="$t('common.partners.iff.name')"
              style="background-color: white; flex: 0 1 auto"
              class="pa-2 ma-1"
              width="100"
            >
              <v-img
                src="/partners/iffs.png"
                contain
                :width="$vuetify.breakpoint.mdAndUp ? '100' : '75'"
                height="60"
                class="text-right pa-2"
              />
            </a>
          </v-item>
          <div class="title pa-3">
            {{ $t('common.partners.iff.name') }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-3">
          {{ $t('common.partners.iff.description') }}
          <a
            :href="$t('common.partners.iff.url')"
            target="_blank"
            rel="noopener noreferrer"
            :title="$t('common.partners.iff.name')"
            >More.</a
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
