<template>
  <div>
    <h2 class="text-h2 font-weight-bold pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ $t('common.guidelines.title') }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <v-expansion-panels v-model="expanded" accordion multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-6">
          <h3 class="font-weight-regular headline">
            {{ $t('common.guidelines.who.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p>
            {{ $t('common.guidelines.who.content1') }}
          </p>
          <p>
            {{ $t('common.guidelines.who.content2') }}
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-6">
          <h3 class="font-weight-regular headline">
            {{ $t('common.guidelines.what.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p v-html="$t('common.guidelines.what.content1')"></p>
          <p v-html="$t('common.guidelines.what.content2')"></p>
          <p v-html="$t('common.guidelines.what.content3')"></p>
          <p v-html="$t('common.guidelines.what.content4')"></p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-6">
          <h3 class="font-weight-regular headline">
            {{ $t('common.guidelines.criterions.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p v-html="$t('common.guidelines.criterions.content1')"></p>
          <p v-html="$t('common.guidelines.criterions.content2')"></p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-6">
          <h3 class="font-weight-regular headline">
            {{ $t('common.guidelines.jury.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p>{{ $t('common.guidelines.jury.content') }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-6">
          <h3 class="font-weight-regular headline">
            {{ $t('common.guidelines.calendar.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-divider />
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <ul>
            <li>{{ $t('common.guidelines.calendar.content1') }}</li>
            <li>{{ $t('common.guidelines.calendar.content1') }}</li>
            <li>{{ $t('common.guidelines.calendar.content1') }}</li>
            <li>{{ $t('common.guidelines.calendar.content1') }}</li>
          </ul>
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
