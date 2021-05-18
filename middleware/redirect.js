export default async function ({ route, store, $content, redirect, app }) {
  if (route.name.startsWith('redirect-lang-id')) {
    if (route.params.lang !== app.i18n.locale)
      await app.i18n.setLocale(route.params.lang)
    const original = await $content(app.i18n.locale + '/news')
      .where({ order: +route.params.id })
      .fetch()

    return original.length ? redirect('/news/' + original[0].slug) : true
  }
}
