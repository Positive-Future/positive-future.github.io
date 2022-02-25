export default async function ({ route, $content, redirect, app }) {
  console.log('route.params.id: ', route.params.id)
  console.log('app.i18n.locale: ', app.i18n.locale)
  return $content('en/webinars')
    .where({ slug: route.params.slug })
    .fetch()
    .then((item) => {
      console.log('item: ', item)
if(app.i18n.locale === 'en')
else {
  redirect(
    app.i18n.locale === 'en' ? '' : 'fr' + '/webinars/' + item[0].slug
  )
}
 
    })
}
