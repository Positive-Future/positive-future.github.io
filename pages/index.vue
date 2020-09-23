<template>
  <v-card-text class="pa-sm-12">
    <v-row no-gutters>
      <v-col cols="11">
        <div class="text-h2 my-3">
          {{ $t('common.index.title') }}
        </div>
        <div class="text-h5 my-3">
          {{ $t('common.index.subtitle') }}
        </div>
      </v-col>
      <v-col cols="1" align="right" class="align-center">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text icon class="d-inline-flex" v-on="on">
              <a
                href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: none"
              >
                <v-icon x-large dark color="rgb(26, 71, 137)"
                  >mdi-facebook</v-icon
                >
              </a>
            </v-btn>
          </template>
          <span>{{ $t('common.index.facebook') }}</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text icon class="d-inline-flex" v-on="on">
              <a
                href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                style="text-decoration: none"
              >
                <v-icon x-large dark color="rgb(63, 198, 238)"
                  >mdi-twitter</v-icon
                >
              </a>
            </v-btn>
          </template>
          <span>{{ $t('common.index.twitter') }}</span>
        </v-tooltip>
      </v-col>
    </v-row>

    <p class="mt-6">
      {{ $t('common.index.paragraph1') }}
    </p>
    <p>
      <nuxt-link :to="localePath('/who')">{{
        $t('common.index.link1')
      }}</nuxt-link
      >,
      <nuxt-link :to="localePath('/who')">{{
        $t('common.index.link2')
      }}</nuxt-link>
      {{ $t('common.index.and') }}
      <nuxt-link :to="localePath('/who')">{{
        $t('common.index.link3')
      }}</nuxt-link>
      {{ $t('common.index.paragraph2') }}
    </p>
    <p>
      {{ $t('common.index.paragraph3') }}
    </p>
    <p>
      {{ $t('common.index.paragraph4') }}
      <nuxt-link :to="localePath('/contest')">{{
        $t('common.index.link4')
      }}</nuxt-link
      >&nbsp;{{ $t('common.index.paragraph5') }}
    </p>
    <v-row>
      <v-col cols="12" md="4" class="pa-3">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-6 text-center"
            flat
            :elevation="hover ? 12 : 2"
            height="100%"
            :to="localePath('/resources')"
            nuxt
            :color="$vuetify.theme.isDark ? 'secondary' : 'white'"
          >
            <v-avatar color="#00c2cb" size="88">
              <v-icon dark large>mdi-book-open-variant </v-icon>
            </v-avatar>
            <v-card-title
              class="justify-center text-uppercase"
              style="word-break: normal"
            >
              {{ $t('common.resources.title') }}
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4" class="pa-3">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-6 text-center"
            :elevation="hover ? 12 : 2"
            flat
            :to="localePath('/contest')"
            nuxt
            :color="$vuetify.theme.isDark ? 'secondary' : 'white'"
            height="100%"
          >
            <v-avatar color="#00c2cb" size="88">
              <v-icon dark large> mdi-seal-variant </v-icon>
            </v-avatar>
            <v-card-title
              class="justify-center text-uppercase"
              style="word-break: normal"
            >
              {{ $t('common.contest.title') }}
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="4" class="pa-3">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-6 text-center"
            flat
            :elevation="hover ? 12 : 2"
            :to="localePath('/who')"
            nuxt
            :color="$vuetify.theme.isDark ? 'secondary' : 'white'"
            height="100%"
          >
            <v-avatar color="#00c2cb" size="88">
              <v-icon dark large> mdi-account-group </v-icon>
            </v-avatar>
            <v-card-title
              class="justify-center text-uppercase"
              style="word-break: normal"
              height="100%"
              justify="center"
              align="center"
            >
              {{ $t('common.who.title') }}
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  components: {},
}
</script>
