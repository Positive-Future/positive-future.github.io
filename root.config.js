import colors from 'vuetify/es5/util/colors'

export default {
  name: 'wprn',
  full_name: 'World Pandemic Researh Network', // set to false if there is none
  description:
    'Public initiative to publish and share in one single place the list of all research initiatives and surveys about the current pandemic of Covid-19 coronavirus.',
  recaptcha: '6Lc_xuUUAAAAALwowUq0cC0wFtFnZ2NCi3UH4i1j',
  graphqlEndpoint:
    'https://skbd6n5nynecvdhgjiisxmyer4.appsync-api.eu-west-2.amazonaws.com/graphql',
  isBranch: false,
  url: 'https://wprn.org',
  fields: {
    fullText: true,
    status: true,
    entity: true,
    thematic: true,
    discipline: true,
    continent: true,
    country: true,
    type: true,
    blazon: true,
    branch: true,
    featured: true,
    verified: true,
    team: true,
    cite: true,
    listReferents: true,
    showAll: true,
  },
  features: {
    theme: true,
    referents: true,
    publicAlerts: true,
    projetAlters: true,
  },
  font: {
    family: 'String',
    fallback: 'String',
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: colors.blue,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.darken3,
        error: colors.deepOrange.darken3,
        success: colors.green.accent3,
      },
    },
  },
}
