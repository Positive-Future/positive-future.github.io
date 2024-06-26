<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <template #activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" :disabled="!valid" v-on="on">
          {{ $t('form.submit') }}</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="headline my-4">
          {{
            submitting
              ? $t('form.application.dialog.submitting')
              : $t('form.application.dialog.title')
          }}
        </v-card-title>

        <v-card-text v-if="!submitting && !error">
          {{ $t('form.application.dialog.text') }}
        </v-card-text>
        <v-card-text v-if="error && !submitting">
          {{ $t('form.application.dialog.error') }}
        </v-card-text>
        <v-card-text v-if="submitting">
          <v-progress-linear indeterminate color="primary"></v-progress-linear>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">
            {{ $t('form.application.dialog.cancel') }}
          </v-btn>
          <v-btn
            color="primary"
            :loading="submitting"
            type="submit"
            @click="$emit('submit')"
          >
            {{ $t('form.application.dialog.submit') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    submitting: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
