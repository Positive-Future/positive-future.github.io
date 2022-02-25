export default async function ({ route, store, $content, redirect, app }) {
  if (route.name.startsWith('redirect-lang-id')) {
    return $content(app.i18n.locale + '/webinars')
      .where({ order: +route.params.id })
      .fetch()
      .then((item) =>
        redirect(
          app.i18n.locale === 'en' ? '' : 'fr' + '/webinars/' + item[0].slug
        )
      )
  }
}
