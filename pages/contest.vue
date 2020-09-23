<template>
  <div>
    <h2 class="text-h3 font-weight-bold pt-6 text-uppercase text-center">
      <BackButton></BackButton>
      {{ $t('common.contest.title') }}
    </h2>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <v-sheet color="#E0E0E0" class="my-1 mx-5 pa-6">
      <h3 class="font-weight-regular headline">
        {{ $t('common.contest.theme.title') }}
      </h3>
      <p>{{ $t('common.contest.theme.content') }}</p>
    </v-sheet>
    <v-expansion-panels v-model="expanded" accordion multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-3 ml-3">
          <h3 class="font-weight-regular headline">
            {{ $t('common.contest.who.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p>
            {{ $t('common.contest.who.content1') }}
          </p>
          <p>
            {{ $t('common.contest.who.content2') }}
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-3 ml-3">
          <h3 class="font-weight-regular headline">
            {{ $t('common.contest.when.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <ul>
            <li>{{ $t('common.contest.when.content1') }}</li>
            <li>{{ $t('common.contest.when.content2') }}</li>
            <li>{{ $t('common.contest.when.content3') }}</li>
            <li>{{ $t('common.contest.when.content4') }}</li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-3 ml-3">
          <h3 class="font-weight-regular headline">
            {{ $t('common.contest.what.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p>{{ $t('common.contest.what.content') }}</p>
          <ul>
            <li v-html="$t('common.contest.what.content1')"></li>
            <li v-html="$t('common.contest.what.content2')"></li>
            <li v-html="$t('common.contest.what.content3')"></li>
            <li v-html="$t('common.contest.what.content4')"></li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-3 ml-3">
          <h3 class="font-weight-regular headline">
            {{ $t('common.contest.reward.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p v-html="$t('common.contest.reward.content1')"></p>
          <p v-html="$t('common.contest.reward.content2')"></p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-3 ml-3">
          <h3 class="font-weight-regular headline">
            {{ $t('common.contest.criterions.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p v-html="$t('common.contest.criterions.content1')"></p>
          <p v-html="$t('common.contest.criterions.content2')"></p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-3 ml-3">
          <h3 class="font-weight-regular headline">
            {{ $t('common.contest.resources.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p>
            {{ $t('common.contest.resources.content1') }}
            <nuxt-link :to="localePath('/resources')">{{
              $t('common.contest.resources.link')
            }}</nuxt-link
            >&nbsp;{{ $t('common.contest.resources.content2') }}
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-3 ml-3">
          <h3 class="font-weight-regular headline">
            {{ $t('common.contest.jury.title') }}
          </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          :class="$vuetify.breakpoint.mdAndDown ? 'py-3' : 'pa-3'"
        >
          <p>{{ $t('common.contest.jury.content') }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expanded: [0, 1, 2, 3, 4, 5, 6],
    }
  },
  mounted() {},
  methods: {},
}
</script>
