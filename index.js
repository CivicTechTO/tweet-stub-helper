// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/',
    beforeEnter(to, from, next) {
      const key = '1-p0CyUMC0nqrEQNc6Yikd2vg033GoChSWR8rFKFxfgU'
      const id = '1209202081'
      const csvUrl = `https://docs.google.com/spreadsheets/d/${key}/export?format=csv&id=${key}&gid=${id}`
      Papa.parse(csvUrl, {
        download: true,
        header: true,
        complete: function(results, file) {
          const headerName = 'presenter_social_media'
          const tweetStubContent = results.data[3][headerName]
          const redirectUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetStubContent)
          window.location = redirectUrl
        },
      })
    },
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
