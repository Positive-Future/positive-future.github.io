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
              <!-- TITLE -->
              <v-col cols="12">
                <div class="overline">
                  {{ $t('form.application.work_title') }}
                  <v-tooltip bottom>
                    <template #activator="{ on }">
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
                  <v-alert text border="left">
                    <div>{{ $t('form.application.description_alt') }}</div>
                  </v-alert>
                </v-expand-transition>
                <v-textarea
                  v-model="baseForm.description"
                  :rules="descriptionRules"
                  :counter="1000"
                  outlined
                ></v-textarea>
              </v-col>
              <!-- EMAIL -->
              <v-col cols="12">
                <v-alert text border="left">
                  <div>{{ $t('form.application.contact') }}</div>
                </v-alert>
                <div class="overline">
                  {{ $t('form.application.email') }}
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <v-text-field
                  ref="email"
                  v-model.trim="baseForm.email"
                  :counter="85"
                  :rules="emailRules"
                  outlined
                  @blur="$refs.email2.validate()"
                ></v-text-field>
              </v-col>
              <!-- EMAIL 2-->
              <v-col cols="12">
                <div class="overline">
                  {{ $t('form.application.email2') }}
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <v-text-field
                  ref="email2"
                  v-model.trim="email2"
                  :counter="85"
                  :rules="email2Rules"
                  outlined
                  @paste.prevent
                  @blur="$refs.email.validate()"
                ></v-text-field>
              </v-col>
              <!-- TEAM -->
              <v-col cols="12">
                <div class="overline mb-1">
                  {{ $t('form.application.team') }}
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                      <v-icon small color="red" v-on="on">
                        mdi-asterisk
                      </v-icon>
                    </template>
                    {{ $t('form.mandatory') }}
                  </v-tooltip>
                </div>
                <div class="d-flex">
                  <v-text-field
                    ref="firstname"
                    v-model="baseForm.firstname"
                    :rules="firstnameRules"
                    :counter="45"
                    :label="$t('form.application.firstname')"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    ref="lastname"
                    v-model="baseForm.lastname"
                    :rules="nameRules"
                    :counter="45"
                    :label="$t('form.application.lastname')"
                    outlined
                    class="mx-3"
                  ></v-text-field>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <div
                        v-bind="attrs"
                        class="mr-2 d-flex flex-column caption"
                        v-on="on"
                      >
                        <div class="text-center">
                          {{ $t('form.application.18orOlder') }}
                        </div>
                        <v-checkbox
                          v-model="major"
                          :rules="majorRules"
                          small
                          class="ma-0"
                          no-hint
                          color="primary"
                          :ripple="false"
                        ></v-checkbox>
                      </div>
                    </template>
                    <span>{{ $t('form.application.18tooltip') }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-btn
                        height="56"
                        color="primary"
                        :disabled="
                          !(
                            baseForm.firstname.length > 1 &&
                            baseForm.lastname.length > 1 &&
                            major
                          )
                        "
                        v-bind="attrs"
                        v-on="on"
                        @click="addTeamMember()"
                        ><v-icon>mdi-plus</v-icon></v-btn
                      >
                    </template>
                    <span>{{ $t('form.application.add_team') }}</span>
                  </v-tooltip>
                </div>
                <v-list>
                  <template v-for="(item, index) in baseForm.team">
                    <v-list-item
                      :key="item.firstname + item.lastname"
                      class="pl-0"
                      @click="makeContact(index)"
                    >
                      <v-list-item-icon>
                        <v-tooltip bottom>
                          <template #activator="{ on, attrs }">
                            <v-icon
                              :color="index === 0 ? 'primary' : ''"
                              v-bind="attrs"
                              v-on="on"
                            >
                              mdi-email
                            </v-icon>
                          </template>
                          <span>{{
                            index === 0
                              ? $t('form.application.contactPerson')
                              : $t('form.application.clickToMakeContact')
                          }}</span>
                        </v-tooltip>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          item.firstname + ' ' + item.lastname
                        }}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-tooltip bottom>
                          <template #activator="{ on, attrs }">
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
                    <template #activator="{ on }">
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
              <v-col v-if="baseForm.type" cols="12">
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
                    <template #activator="{ on }">
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
                <template v-if="choice">
                  <div class="text-center my-4">
                    <v-btn
                      color="primary"
                      @click="
                        choice = false
                        urlMode = false
                      "
                      >{{ $t('form.application.choice1') }}</v-btn
                    >
                    <div class="overline">{{ $t('or') }}</div>
                    <v-btn
                      color="primary"
                      @click="
                        choice = false
                        urlMode = true
                      "
                      >{{ $t('form.application.choice2') }}</v-btn
                    >
                  </div>
                </template>

                <template v-else>
                  <template v-if="urlMode">
                    <v-text-field
                      ref="url"
                      v-model="baseForm.url"
                      :rules="urlRules"
                      :label="$t('form.application.url')"
                      outlined
                    >
                    </v-text-field>
                    <v-btn
                      small
                      class="mb-6 float-right"
                      @click="urlMode = false"
                    >
                      {{ $t('form.application.fileInstead') }}</v-btn
                    >
                  </template>
                  <template v-else>
                    <v-file-input
                      ref="file"
                      v-model="baseForm.file"
                      :accept="baseForm.type === 3 ? 'video/*' : '.pdf'"
                      :label="$t('form.application.browse')"
                      :rules="fileRules"
                      outlined
                      :hint="
                        baseForm.type === 3
                          ? $t('form.application.videoHint')
                          : $t('form.application.pdfHint')
                      "
                    ></v-file-input>
                    <v-btn
                      small
                      class="mb-6 float-right"
                      @click="urlMode = true"
                    >
                      {{ $t('form.application.urlInstead') }}</v-btn
                    >
                  </template>
                </template>
              </v-col>
              <!-- TOS -->
              <v-col cols="12" class="d-inline-flex justify-start">
                <v-checkbox v-model="agreed" :rules="agreedRules" class="mt-0">
                  <template #label>
                    <div>
                      {{ $t('form.application.agreed') }}
                      <a
                        :href="'/rules_' + $i18n.locale + '.pdf'"
                        target="_blank"
                        @click.stop
                        >{{ $t('form.application.agreed_link') }}</a
                      >
                      <span v-html="$t('form.application.agreed_2')"></span>
                      <v-tooltip bottom>
                        <template #activator="{ on }">
                          <v-icon small color="red" v-on="on">
                            mdi-asterisk
                          </v-icon>
                        </template>
                        {{ $t('form.mandatory') }}
                      </v-tooltip>
                    </div>
                  </template>
                </v-checkbox>
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
const url =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
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
