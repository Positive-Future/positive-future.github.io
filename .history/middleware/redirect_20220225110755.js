export default async function ({ route, $content, redirect, app }) {
  console.log('route.params.id: ', route.params.id)
  console.log('app.i18n.locale: ', app.i18n.locale)
  return app.i18n.locale === 'en'
    ? redirect('/webinars/' + route.params.slug)
    : $content('en/webinars')
        .where({ slug: route.params.slug })
        .fetch()
        .then((item) => {
          console.log('item: ', item)
          redirect('fr' + '/webinars/' + item[0].fr)
        })
}
