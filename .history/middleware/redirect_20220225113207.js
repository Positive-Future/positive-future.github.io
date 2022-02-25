export default async function ({ route, store, $content, redirect, app }) {
  console.log(
    'route.params.lang !== app.i18n.locale: ',
    route.params.lang !== app.i18n.locale
  )
  console.log('route.name: ', route.name)

  if (route.name.startsWith('redirect-lang-id')) {
    if (route.params.lang !== app.i18n.locale)
      await app.i18n.setLocale(route.params.lang)
    const original = await $content(app.i18n.locale + '/webinars')
      .where({ order: +route.params.id })
      .fetch()
    console.log('original: ', original)

    return original.length ? redirect('/webinars/' + original[0].slug) : true
  }
}
