export default async function ({ route, $content, redirect, app }) {
  if (route.name.startsWith('redirect-lang-id')) {
    console.log(
      'route.params.lang !== app.i18n.locale: ',
      route.params.lang !== app.i18n.locale
    )
    if (route.params.lang !== app.i18n.locale)
      await app.i18n.setLocale(route.params.lang)
    const original = await $content(app.i18n.locale + '/webinars')
      .where({ order: +route.params.id })
      .fetch()
    console.log('original: ', original)

    return original.length ? redirect('/webinars/' + original[0].slug) : true
  }
}
