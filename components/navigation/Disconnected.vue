<template>
  <v-row align="center" no-gutters>
    <v-col v-if="disconnected" col="12">
      <!--      <v-alert
                class="mb-3 mx-3"
                icon="priority_high"
                transition="slide-y-reverse-transition"
                :value="disconnected"
                color="warning"
              >
                We can't connect to the server. Is your data access ok?
                <span
                  class="right"
                  indeterminate
                  @click="$router.go()"
                  flat
                  outlined
                  dark
                >
                  <v-icon light>mdi-refresh</v-icon>
                </span>
      </v-alert>-->
    </v-col>
  </v-row>
</template>
