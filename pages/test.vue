<template>
  <div>
    <section style="background-color: #fff1d0">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <h1 class="mb-8 mt-12">
            {{ $t('form.application.title') }}
          </h1>
        </v-col>
      </v-row>
    </section>
    <section :class="{ 'px-3': $vuetify.breakpoint.smAndDown }">
      <v-row justify="center">
        <v-col xs="12" sm="11" md="8" lg="7" xl="6">
          <v-form
            ref="form"
            v-model="valid"
            class="mt-6"
            enctype="multipart/form-data"
            method="POST"
            :action="action"
            @submit.prevent="submit(submit)"
          >
            <v-row no-gutters>
              <v-col cols="12">
                <v-alert
                  v-show="baseForm.description.length > 0"
                  text
                  border="left"
                >
                  <div>{{ $t('form.application.contact') }}</div>
                </v-alert>
                <!-- FIRSTNAME -->
                <div class="overline">
                  {{ $t('form.application.firstname') }}
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <v-text-field
                  v-model="baseForm.firstname"
                  :rules="firstnameRules"
                  :counter="45"
                  outlined
                  name="firstname"
                ></v-text-field>
              </v-col>
              <!-- LASTNAME -->
              <v-col cols="12">
                <div class="overline">
                  {{ $t('form.application.lastname') }}
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <v-text-field
                  v-model="baseForm.lastname"
                  :rules="nameRules"
                  :counter="45"
                  outlined
                ></v-text-field>
              </v-col>
              <!-- EMAIL -->
              <v-col cols="12">
                <div class="overline">
                  {{ $t('form.application.email') }}
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <v-text-field
                  v-model.trim="baseForm.email"
                  :counter="85"
                  :rules="emailRules"
                  outlined
                ></v-text-field>
              </v-col>

              <!-- TITLE -->
              <v-col cols="12">
                <div class="overline">
                  {{ $t('form.application.work_title') }}
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <v-text-field
                  v-model="baseForm.title"
                  :counter="85"
                  :rules="titleRules"
                  outlined
                ></v-text-field>
              </v-col>
              <!-- DESCRIPTION -->
              <v-col cols="12">
                <div class="overline">
                  {{ $t('form.application.description') }}
                </div>
                <v-expand-transition>
                  <v-alert
                    v-show="baseForm.description.length > 0"
                    text
                    border="left"
                  >
                    <div>{{ $t('form.application.description_alt') }}</div>
                  </v-alert>
                </v-expand-transition>
                <v-textarea
                  v-model="baseForm.description"
                  :rules="descriptionRules"
                  :counter="500"
                  outlined
                ></v-textarea>
              </v-col>
              <!-- TEAM -->
              <v-col cols="12">
                <div class="overline mb-1">
                  {{ $t('form.application.add_team') }}
                </div>

                <Team
                  :key="baseForm.team.length"
                  @add="baseForm.team.push($event)"
                />
                <v-list>
                  <template v-for="(item, index) in baseForm.team">
                    <v-list-item :key="index" class="pl-0">
                      <v-list-item-content>
                        <v-list-item-title>{{
                          item.firstname + ' ' + item.lastname
                        }}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              icon
                              v-bind="attrs"
                              @click="baseForm.team.splice(index, 1)"
                              v-on="on"
                            >
                              <v-icon>mdi-close</v-icon></v-btn
                            >
                          </template>
                          <span>{{ $t('form.application.remove_team') }}</span>
                        </v-tooltip>
                      </v-list-item-action>
                    </v-list-item>
                    <v-divider
                      v-if="index < baseForm.team.length - 1"
                      :key="index"
                    ></v-divider
                  ></template>
                </v-list>
              </v-col>
              <!-- FORMAT -->
              <v-col cols="12">
                <div class="overline">
                  {{ $t('form.application.format.title') }}
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <v-select
                  v-model="baseForm.type"
                  :items="formats"
                  :rules="typeRules"
                  outlined
                ></v-select>
              </v-col>
              <!-- FILE -->
              <v-col cols="12">
                <div class="overline">
                  {{
                    $t('form.application.file', [
                      baseForm.type
                        ? $t(
                            'form.application.format.' +
                              ['title', 'article', 'novel', 'video', 'comic'][
                                baseForm.type
                              ]
                          )
                        : '',
                    ])
                  }}
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                  <v-icon></v-icon>
                </div>
                <v-alert v-if="baseForm.type" text border="left">
                  <div>
                    {{
                      $t(
                        'form.application.' +
                          ['title', 'article', 'novel', 'video', 'comic'][
                            baseForm.type
                          ] +
                          '_hint'
                      )
                    }}
                  </div>
                </v-alert>
                <v-file-input
                  ref="file"
                  v-model="baseForm.file"
                  :accept="baseForm.type === 3 ? 'video/*' : '.pdf'"
                  :label="$t('form.application.browse')"
                  :rules="fileRules"
                  outlined
                  @blur="$refs.url.validate()"
                ></v-file-input>

                <v-text-field
                  ref="url"
                  v-model="baseForm.url"
                  :rules="urlRules"
                  :label="$t('form.application.url')"
                  outlined
                  @blur="$refs.file.validate()"
                >
                  <template v-slot:prepend>
                    <div class="overline" min-width="24px">
                      {{ $t('misc.ui.or') }}
                    </div>
                  </template>
                </v-text-field>
              </v-col>
              <!-- TOS -->
              <v-col cols="12" class="d-inline-flex justify-start">
                <v-checkbox v-model="agreed" :rules="agreedRules" class="mt-0">
                  <template v-slot:label> </template>
                </v-checkbox>
                <div @click="agreed = !agreed">
                  {{ $t('form.application.agreed') }}
                  <a
                    :href="'/rules_' + $i18n.locale + '.pdf'"
                    target="_blank"
                    >{{ $t('form.application.agreed_link') }}</a
                  >{{ $t('form.application.agreed_2') }}
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
              </v-col>
              <!-- SUBMIT -->
              <v-col class="d-flex justify-end">
                <Confirm
                  :error="error"
                  :submitting="submitting"
                  :valid="valid"
                  @submit="
                    submitting = true
                    submit()
                  "
                ></Confirm>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
// eslint-disable-next-line no-useless-escape
const url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
      /*     baseForm: {
        firstname: '',
        lastname: '',
        email: '',
        title: '',
        description: '',
        team: [],
        type: null,
        file: null,
      }, */
      baseForm: {
        firstname: 'gesrgesr',
        lastname: 'gesrgesrg',
        email: 'boitalettre9@gmail.com',
        title: 'gesrgsrg ersgesrg',
        description:
          'gsregseg esrg esrgesr gesrg esrgesrg ersg esrg esrg esrg sres g',
        team: [],
        type: 3,
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
      nameRules: [
        (v) =>
          !!v ||
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
          this.$t('form.application.validation.moreThan', {
            0: this.$t('form.application.lastname').toLowerCase(),
            1: '2',
          }),
      ],
      firstnameRules: [
        (v) =>
          !!v ||
          this.$t('form.application.validation.required', {
            0: this.$t('form.application.firstname'.toLowerCase()),
          }),
        (v) =>
          v.length <= 45 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.firstname'.toLowerCase()),
            1: '45',
          }),
        (v) =>
          v.length >= 2 ||
          this.$t('form.application.validation.moreThan', {
            0: this.$t('form.application.firstname'.toLowerCase()),
            1: '2',
          }),
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
        (v) =>
          !!v ||
          !!this.baseForm.url ||
          this.$t('form.application.validation.file'),
        (v) =>
          !v ||
          v.size < 25000000 ||
          this.$t('form.application.validation.fileSize'),
      ],
      urlRules: [
        (v) =>
          !!v ||
          !!this.baseForm.file ||
          this.$t('form.application.validation.url'),
        (v) =>
          url.test(v) ||
          !v ||
          this.$t('form.application.validation.invalid', {
            0: this.$t('form.application.url'),
          }),
      ],
      descriptionRules: [
        (v) =>
          (!!v && v.length <= 500) ||
          v.length === 0 ||
          this.$t('form.application.validation.lessThan', {
            0: this.$t('form.application.description').toLowerCase(),
            1: '500',
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
    }
  },
  mounted() {},
  methods: {
    async submit() {
      console.log('submit')
      this.$refs.form.validate()
      if (this.valid) {
        console.log(this.baseForm)

        this.submitting = true
        const data = new FormData()
        Object.keys(this.baseForm).forEach((key) => {
          if (data.key === 'team') {
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
