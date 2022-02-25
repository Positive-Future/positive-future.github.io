export default async function ({ route, store, $content, redirect, app }) {
  if (route.name.startsWith('redirect-lang-id')) {
    const item = Promise.resolve(
      await $content(app.i18n.locale + '/webinars')
        .where({ order: +route.params.id })
        .fetch()
    ).then(() =>
      redirect(
        app.i18n.locale === 'en'
          ? ''
          : 'fr' +
              '/webinars/' +
              $content(app.i18n.locale + '/webinars')
                .where({ order: +route.params.id })
                .fetch()[0].slug
      )
    )
    console.log('app.i18n.locale: ', app.i18n.locale)
    console.log('route.params.lang: ', route.params.lang)
    if (route.params.lang !== app.i18n.locale) {
      return app.i18n.setLocale(route.params.lang).then(() =>
        redirect(
          app.i18n.locale === 'en'
            ? ''
            : 'fr' +
                '/webinars/' +
                $content(app.i18n.locale + '/webinars')
                  .where({ order: +route.params.id })
                  .fetch()[0].slug
        )
      )
    } else {
      return
    }

    const original = await $content(app.i18n.locale + '/webinars')
      .where({ order: +route.params.id })
      .fetch()
    console.log('original: ', original)

    return original.length ? redirect('/webinars/' + original[0].slug) : true
  }
}
