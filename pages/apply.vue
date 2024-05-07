<!-- eslint-disable no-useless-escape -->
<template>
  <div>
    <section style="background-color: #fff1d0">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mb-8 mt-12">
            {{ $t('applications-are-closed') }}
          </h1>
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-sheet class="py-6 text-body-1">
            {{ $t('apply-placeholder') }}
          </v-sheet>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
import { Uploader } from '~/assets/upload'
const url =
  // eslint-disable-next-line no-useless-escape
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
const email =
  // eslint-disable-next-line no-useless-escape
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
      action: 'https://85o05b11ri.execute-api.eu-west-2.amazonaws.com/dev',
      endpoint:
        'https://85o05b11ri.execute-api.eu-west-2.amazonaws.com/dev/formToSpreadsheet',
      email2: '',
      urlMode: false,
      choice: true,
      percentage: undefined,
      fileData: null,
      uploader: null,
      baseForm: {
        firstname: '',
        lastname: '',
        email: '',
        title: '',
        description: '',
        team: [],
        type: null,
        file: null,
        ai: '',
      },
      formats: [
        {
          text: this.$t('form.application.format.illustrations'),
          value: 1,
        },
        {
          text: this.$t('form.application.format.video'),
          value: 2,
        },
        {
          text: this.$t('form.application.format.audio'),
          value: 3,
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
          v.size < 10000000000 ||
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
      aiRules: [
        (v) =>
          !!v ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.title').toLowerCase(),
          }),
        (v) =>
          (!!v && v.length <= 1000) ||
          v.length === 0 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.ia').toLowerCase(),
            1: '1000',
          }),
      ],
      creditsRules: [
        (v) =>
          (!!v && v.length <= 1000) ||
          v.length === 0 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.credits').toLowerCase(),
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
    abort() {
      this.uploader.abort()
      this.baseForm.file = null
      this.fileData = null
      this.percentage = undefined
    },
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
    setFile(file) {
      try {
        /* this.$axios.setHeader('content-type', 'multipart/form-data') */
        const uploaderOptions = {
          file: this.fileData,
          baseURL: this.action,
          /*    chunkSize: partsize, */
          threadsQuantity: 4,
          useTransferAcceleration: true,
        }
        this.uploader = new Uploader(uploaderOptions)
        this.uploader
          .onProgress(({ percentage: newPercentage }) => {
            // to avoid the same percentage to be logged twice
            if (this.percentage === 100) {
              this.uploaded = true
              console.log('this.uploader: ', this.uploader)

              this.baseForm.file = this.uploader.fileKey
            }
            if (newPercentage !== this.percentage) {
              this.percentage = newPercentage
            }
          })
          .onError((error) => {
            console.log('error: ', error)
            this.error = true
          })
        this.uploader.start()
        /* await this.$axios.$post(this.action, data) */
      } catch (error) {
        console.log('error: ', error)
        this.error = true
      } finally {
        this.submitting = false
      }
    },
    async submit() {
      try {
        this.$refs.form.validate()
        if (this.valid) {
          this.submitting = true
          /*         const data = new FormData()
          Object.keys(this.baseForm).forEach((key) => {
            if (key === 'team') {
              data.append(key, JSON.stringify(this.baseForm[key]))
            } else {
              data.append(key, this.baseForm[key])
            }
          })*/

          await this.$axios.$post(this.endpoint, this.baseForm)
          this.submitting = false
          this.form = {}
          this.error = false
          this.$router.push({ path: this.localePath('/thank_you') })
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
}
</script>
