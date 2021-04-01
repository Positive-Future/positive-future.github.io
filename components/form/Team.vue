<template>
  <div class="d-flex">
    <v-text-field
      v-model="firstname"
      :rules="firstnameRules"
      :counter="45"
      :label="$t('form.application.firstname')"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="lastname"
      :rules="nameRules"
      :counter="45"
      :label="$t('form.application.lastname')"
      outlined
      class="mx-3"
    ></v-text-field>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" class="mr-2 d-flex flex-column caption" v-on="on">
          <div class="text-center">
            {{ $t('form.application.18orOlder') }}
          </div>
          <v-simple-checkbox
            v-model="major"
            small
            class="ma-0"
            no-hint
            color="primary"
            :ripple="false"
          ></v-simple-checkbox>
        </div>
      </template>
      <span>{{ $t('form.application.18tooltip') }}</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          height="56"
          color="primary"
          :disabled="!(firstname.length > 1 && lastname.length > 1 && major)"
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
      birthday: null,
      menu: false,
      major: false,
      nameRules: [
        (v) =>
          !!v ||
          this.team.length > 0 ||
          (v.length === 0 && this.team.length > 0) ||
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
          this.team.length > 0 ||
          (v.length === 0 && this.team.length) ||
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
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date)
    },
  },
}
</script>
