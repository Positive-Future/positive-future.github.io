<template>
  <div class="d-flex">
    <v-text-field
      v-model="firstname"
      :rules="firstnameRules"
      :counter="45"
      :label="$t('form.application.firstname')"
      outlined
      min-width="250px"
    ></v-text-field>
    <v-text-field
      v-model="lastname"
      :rules="nameRules"
      :counter="45"
      :label="$t('form.application.lastname')"
      outlined
      class="mx-3"
      min-width="250px"
    ></v-text-field>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          outlined
          height="56"
          :disabled="!(firstname.length > 2 && lastname.length > 2)"
          v-bind="attrs"
          v-on="on"
          @click="$emit('add', { firstname, lastname })"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </template>
      <span>{{ $t('form.application.add_team') }}</span>
    </v-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    team: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      nameRules: [
        (v) =>
          !!v ||
          v.length === 0 ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.lastname').toLowerCase(),
          }),
        (v) =>
          v.length <= 45 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.lastname').toLowerCase(),
            1: '45',
          }),
        (v) =>
          v.length >= 2 ||
          v.length === 0 ||
          this.$t('form.application.validation.moreThan', {
            0: this.$t('form.application.lastname').toLowerCase(),
            1: '2',
          }),
      ],
      firstnameRules: [
        (v) =>
          !!v ||
          v.length === 0 ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.firstname').toLowerCase(),
          }),
        (v) =>
          v.length <= 45 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.firstname').toLowerCase(),
            1: '45',
          }),
        (v) =>
          v.length >= 2 ||
          v.length === 0 ||
          this.$t('form.application.validation.moreThan', {
            0: this.$t('form.application.firstname').toLowerCase(),
            1: '2',
          }),
      ],
    }
  },
  methods: {},
}
</script>
