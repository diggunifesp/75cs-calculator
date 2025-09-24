import 'alpinejs'
import './styles.css'

document.addEventListener('alpine:init', () => {
  Alpine.data('appState', () => ({
    lang: 'pt',
    dict: {
      pt: { reavaliar: 'Reavaliar conforme evolução clínica.' },
      en: { reavaliar: 'Reassess according to clinical evolution.' }
    },
    t(key) { return this.dict[this.lang][key] }
  }))
})
