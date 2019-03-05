// Scaffolded from: https://router.vuejs.org/guide/#javascript

// Redirect before entering the route.
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
          var currentEvent
          // Assumes rows are events listed from past to future.
          // TODO: Sort data by date
          for (let row of results.data) {
            console.log(row['date'])
            // Don't roll-over to next week's info until late-night and event's done.
            var date = luxon.DateTime.fromISO(row['date'])
              .setZone('America/Toronto')
              .set({hour: 23, minute: 59})
            currentEvent = row
            if (isFuture(date)) {
              // Stop looking after first future event found.
              break
            }
          }
          const headerName = 'presenter_social_media'
          const tweetStubContent = currentEvent[headerName]
          const redirectUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetStubContent)
          window.location = redirectUrl
        },
      })
    },
  },
]

// Check whether the day in question has passed.
// This will work until the day after the event.
var isFuture = function (date) {
  const now = luxon.DateTime.local()
  if (now < date) {
    return true
  } else {
    return false
  }
}

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
