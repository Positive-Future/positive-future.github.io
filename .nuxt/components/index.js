export { default as Confirm } from '../../components/form/Confirm.vue'
export { default as NewsletterForm } from '../../components/form/NewsletterForm.vue'
export { default as Credits } from '../../components/navigation/Credits.vue'
export { default as Disconnected } from '../../components/navigation/Disconnected.vue'
export { default as Footer } from '../../components/navigation/Footer.vue'
export { default as LanguagePicker } from '../../components/navigation/LanguagePicker.vue'
export { default as TopBar } from '../../components/navigation/TopBar.vue'
export { default as NewsItem } from '../../components/news/NewsItem.vue'
export { default as YoutubeEmbedded } from '../../components/news/YoutubeEmbedded.vue'
export { default as ChipsContainer } from '../../components/resources/ChipsContainer.vue'

export const LazyConfirm = import('../../components/form/Confirm.vue' /* webpackChunkName: "components/form/Confirm" */).then(c => c.default || c)
export const LazyNewsletterForm = import('../../components/form/NewsletterForm.vue' /* webpackChunkName: "components/form/NewsletterForm" */).then(c => c.default || c)
export const LazyCredits = import('../../components/navigation/Credits.vue' /* webpackChunkName: "components/navigation/Credits" */).then(c => c.default || c)
export const LazyDisconnected = import('../../components/navigation/Disconnected.vue' /* webpackChunkName: "components/navigation/Disconnected" */).then(c => c.default || c)
export const LazyFooter = import('../../components/navigation/Footer.vue' /* webpackChunkName: "components/navigation/Footer" */).then(c => c.default || c)
export const LazyLanguagePicker = import('../../components/navigation/LanguagePicker.vue' /* webpackChunkName: "components/navigation/LanguagePicker" */).then(c => c.default || c)
export const LazyTopBar = import('../../components/navigation/TopBar.vue' /* webpackChunkName: "components/navigation/TopBar" */).then(c => c.default || c)
export const LazyNewsItem = import('../../components/news/NewsItem.vue' /* webpackChunkName: "components/news/NewsItem" */).then(c => c.default || c)
export const LazyYoutubeEmbedded = import('../../components/news/YoutubeEmbedded.vue' /* webpackChunkName: "components/news/YoutubeEmbedded" */).then(c => c.default || c)
export const LazyChipsContainer = import('../../components/resources/ChipsContainer.vue' /* webpackChunkName: "components/resources/ChipsContainer" */).then(c => c.default || c)
