import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-tiny-m-c-e', IndexField)
  app.component('detail-nova-tiny-m-c-e', DetailField)
  app.component('form-nova-tiny-m-c-e', FormField)
})
