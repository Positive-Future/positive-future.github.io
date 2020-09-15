<template>
  <v-card-text>
    <div class="text-h6 text-uppercase font-weight-black">
      {{ $t('common.categories.call') }}
    </div>
    <div class="text-h4 text-uppercase font-weight-bold">
      {{ $t('common.title') }}
    </div>
    <div class="text-h6 text-uppercase font-weight-bold">
      {{ $t('common.subtitle') }}
    </div>
    <v-divider></v-divider>
    <div class="text-h3 text-uppercase text-center my-8">
      {{ $t('common.name') }}
    </div>
    <p>
      {{ $t('common.paragraph1') }}
    </p>
    <p>
      {{ $t('common.paragraph2') }}
    </p>
    <p>
      {{ $t('common.paragraph3') }}
    </p>
    <p>
      {{ $t('common.paragraph4') }}
    </p>

    <ul>
      <li>{{ $t('common.list1') }}</li>
      <li>{{ $t('common.list2') }}</li>
      <li>{{ $t('common.list3') }}</li>
      <li>{{ $t('common.list4') }}</li>
    </ul>
    <p>
      {{ $t('common.paragraph5') }}
    </p>
    <div class="text-h6 text-center font-weight-bold my-3">
      {{ $t('common.paragraph6') }}
    </div>
    <p>
      {{ $t('common.paragraph7') }}
    </p>
    <v-responsive class="mx-auto my-6" width="56">
      <v-divider class="mb-1" />
      <v-divider />
    </v-responsive>
    <div class="text-h6 text-center font-weight-bold my-3">
      {{ $t('common.paragraph8') }}
      <br />
      {{ $t('common.paragraph9') }}
      <nuxt-link :to="localePath('/guidelines')">{{
        $t('common.guidelines.title')
      }}</nuxt-link
      >.
    </div>
  </v-card-text>
</template>

<script>
export default {
  components: {},
}
</script>
