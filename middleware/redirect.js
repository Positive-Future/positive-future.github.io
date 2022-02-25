export default async function ({ route, $content, redirect, app }) {
  if (route.name.startsWith('redirect-lang-id')) {
    if (route.params.lang !== app.i18n.locale)
      await app.i18n.setLocale(route.params.lang)
    const original = await $content(app.i18n.locale + '/webinars')
      .where({ order: route.params.id })
      .fetch()

    return original.length
      ? redirect(
          route.params.lang === 'en'
            ? ''
            : '/fr' + '/webinars/' + original[0].slug
        )
      : true
  }
}
