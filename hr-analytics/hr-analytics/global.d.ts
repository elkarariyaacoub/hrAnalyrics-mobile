type EnMessages = typeof import('./src/assets/locales/en.json')
type FrMessages = typeof import('./src/assets/locales/fr.json')

declare interface IntlMessages extends EnMessages, FrMessages {}