export default async function ({ route, store, $content, redirect, app }) {
  if (route.name.startsWith('redirect-lang-id')) {
    console.log('app.i18n.locale: ', app.i18n.locale)
    console.log('route.params.lang: ', route.params.lang)
    if (route.params.lang !== app.i18n.locale) {
      return app.i18n.setLocale(route.params.lang).then(() =>
        redirect(
          app.i18n.locale === 'en'
            ? ''
            : 'fr' +
                '/webinars/' +
                (await $content(app.i18n.locale + '/webinars')
                  .where({ order: +route.params.id })
                  .fetch()[0].slug)
        )
      )
    } else {
      return redirect(
        app.i18n.locale === 'en'
          ? ''
          : 'fr' +
              '/webinars/' +
              $content(app.i18n.locale + '/webinars')
                .where({ order: +route.params.id })
                .fetch()[0].slug
      )
    }
  }
}
