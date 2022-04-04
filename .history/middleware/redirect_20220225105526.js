export default async function ({ route, $content, redirect, app }) {
  return $content(app.i18n.locale + '/webinars')
    .where({ order: +route.params.id })
    .fetch()
    .then((item) => {
      console.log('item: ', item)

      redirect(
        app.i18n.locale === 'en' ? '' : 'fr' + '/webinars/' + item[0].slug
      )
    })
}