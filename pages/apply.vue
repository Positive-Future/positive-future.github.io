/* eslint-disable no-useless-escape */ /* eslint-disable no-useless-escape */
<template>
  <div>
    <section style="background-color: #fff1d0">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mb-8 mt-12">
            <!--       {{ $t('form.application.title') }} -->
            {{ $t('the-applications-are-closed') }}
          </h1>
          <p>
            {{ $t('form.application-closed-text') }}
          </p>
          <p>
            <!--             {{ $t('form.application-closed-text2') }}
            <nuxt-link to="/next">{{
              $t('form.application-closed-text3')
            }}</nuxt-link> -->
          </p>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
const url =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/
const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default {
  beforeRouteLeave(to, from, next) {
    if (!this.hasChanged) return next()

    const answer = window.confirm(
      'Do you really want to leave? You have unsaved changes!'
    )
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  data() {
    return {
      valid: true,
      agreed: false,
      error: false,
      submitting: false,
      uploaded: false,
      action: 'https://formspree.io/f/xvovjdgv',
      email2: '',
      urlMode: false,
      choice: true,
      baseForm: {
        firstname: '',
        lastname: '',
        email: '',
        title: '',
        description: '',
        team: [],
        type: null,
        file: null,
      },

      formats: [
        {
          text: this.$t('form.application.format.article'),
          value: 1,
        },
        {
          text: this.$t('form.application.format.novel'),
          value: 2,
        },
        {
          text: this.$t('form.application.format.video'),
          value: 3,
        },
        {
          text: this.$t('form.application.format.comic'),
          value: 4,
        },
      ],
      emailRules: [
        (v) =>
          !!v ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.email').toLowerCase(),
          }),
        (v) =>
          email.test(v) ||
          this.$t('form.application.validation.invalid', {
            0: this.$t('form.application.email').toLowerCase(),
          }),
      ],
      email2Rules: [
        (v) =>
          !!v ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.email').toLowerCase(),
          }),
        (v) =>
          email.test(v) ||
          this.$t('form.application.validation.invalid', {
            0: this.$t('form.application.email').toLowerCase(),
          }),
        (v) =>
          v === this.baseForm.email ||
          this.$t('form.application.validation.dontmatch'),
      ],
      titleRules: [
        (v) =>
          !!v ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.title').toLowerCase(),
          }),
        (v) =>
          v.length < 85 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.title').toLowerCase(),
            1: '85',
          }),
        (v) =>
          v.length >= 2 ||
          this.$t('form.application.validation.moreThan', {
            0: this.$t('form.application.title').toLowerCase(),
            1: '2',
          }),
      ],
      fileRules: [
        (v) => !!v || this.$t('form.application.validation.file'),
        (v) =>
          !v ||
          v.size < 25000000 ||
          this.$t('form.application.validation.fileSize'),
      ],
      urlRules: [
        (v) => !!v || this.$t('form.application.validation.url'),
        (v) =>
          url.test(v) ||
          !v ||
          this.$t('form.application.validation.invalid', {
            0: this.$t('form.application.url'),
          }),
      ],
      descriptionRules: [
        (v) =>
          (!!v && v.length <= 1000) ||
          v.length === 0 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.description').toLowerCase(),
            1: '1000',
          }),
      ],
      typeRules: [
        (v) =>
          !!v ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.format.title').toLowerCase(),
          }),
      ],
      agreedRules: [(v) => v || this.$t('form.application.validation.tos')],
      birthday: null,
      menu: false,
      major: false,
      nameRules: [
        (v) =>
          !!v ||
          this.baseForm.team.length > 0 ||
          (v.length === 0 && this.baseForm.team.length > 0) ||
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
          this.baseForm.team.length > 0 ||
          (v.length === 0 && this.baseForm.team.length) ||
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
  computed: {
    majorRules() {
      return [
        (v) =>
          (v !== undefined && v !== null && v !== false) ||
          this.baseForm.team.length > 0 ||
          this.$t('required'),
      ]
    },
  },
  mounted() {},
  methods: {
    addTeamMember() {
      this.baseForm.team.push({
        firstname: this.baseForm.firstname,
        lastname: this.baseForm.lastname,
      })
      this.baseForm.firstname = ''
      this.baseForm.lastname = ''
      this.major = false
    },
    makeContact(index) {
      this.baseForm.team.unshift(this.baseForm.team.splice(index, 1)[0])
    },
    async submit() {
      this.$refs.form.validate()
      if (this.valid) {
        this.submitting = true
        const data = new FormData()
        Object.keys(this.baseForm).forEach((key) => {
          if (key === 'team') {
            data.append(key, JSON.stringify(this.baseForm[key]))
          } else {
            data.append(key, this.baseForm[key])
          }
        })
        try {
          /* this.$axios.setHeader('content-type', 'multipart/form-data') */
          await this.$axios.$post(this.action, data)
          this.error = false
          this.submitting = false
          this.uploaded = true
          this.$router.push({ path: this.localePath('/thank_you') })
          this.form = {}
        } catch (error) {
          console.log('error: ', error)
          this.error = true
        } finally {
          this.submitting = false
        }
      }
    },
  },
}
</script>
