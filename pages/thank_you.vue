<template>
  <div>
    <section
      style="background-color: #fff1d0"
      :class="{ 'px-3': $vuetify.breakpoint.smAndDown }"
      class="py-6"
    >
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mt-8 mb-4">
            {{ $t('form.application.thank_you') }}
          </h1>
          <v-btn color="primary" nuxt :to="localePath('/')" class="my-3">
            <v-icon left>mdi-arrow-left</v-icon>
            {{ $t('form.application.back_to_home') }}
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
export default {}
</script>
