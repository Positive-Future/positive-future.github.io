export default async function ({ route, store, $content, redirect, app }) {
  if (route.name.startsWith('redirect-lang-id')) {
    console.log('app.i18n.locale: ', app.i18n.locale)
    console.log('route.params.lang: ', route.params.lang)
    if (route.params.lang !== app.i18n.locale)
      await app.i18n.setLocale(route.params.lang)
    const original = await $content(app.i18n.locale + '/webinars')
      .where({ order: +route.params.id })
      .fetch()
    console.log('original: ', original)

    return original.length ? redirect('/webinars/' + original[0].slug) : true
  }
}