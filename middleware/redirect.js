export default async function ({ route, $content, redirect, app }) {
  console.log(
    'route.params.lang !== app.i18n.locale: ',
    route.params.lang !== app.i18n.locale
  )
  console.log('route.params.lang: ', route.params.lang)
  console.log('app.i18n.locale: ', app.i18n.locale)
  if (route.name.startsWith('redirect-lang-id')) {
    if (route.params.lang !== app.i18n.locale)
      await app.i18n.setLocale(route.params.lang)
    const original = await $content(app.i18n.locale + '/webinars')
      .where({ order: route.params.id })
      .fetch()
    console.log('original: ', original)
    console.log(
      'app.i18n.locale',
      route.params.lang === 'en' ? '' : '/fr' + '/webinars/' + original[0].slug
    )
    console.log('original.length: ', original.length)
    return original.length ? redirect('/webinars/' + original[0].slug) : true
  }
}
