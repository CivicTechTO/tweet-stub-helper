# Tweet Stub Helper

Simple app for creating tweet stubs from a Google Sheet.

## :eyes: Demo

To demo the default behavior set up for CivicTechTO, just visit:

[`civictechto.github.io/tweet-stub-helper`](http://civictechto.github.io/tweet-stub-helper)

## :hammer_and_wrench: Technologies Used

- Twitter [**Web Intents.**][webintent] Provide popup-optimized flows
  for working with pre-composed fragments for tweeting.
- Javascript
  - [**VueJS.**][vuejs] Progressive framework for building user
    interfaces.
  - [**PapaParse.**][papaparse] Powerful, in-browser CSV parser.
- [**Bootstrap (CSS).**][bootstrap] HTML, CSS and JavaScript Framework
  that is used in front-end web development.
- **GitHub Pages.**
  - **Jekyll.** A popular static site generator written in Ruby.

   [webintent]: https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview.html
   [vuejs]: https://vuejs.org/v2/guide/
   [papaparse]: https://www.papaparse.com/
   [bootstrap]: https://www.bootstrapdash.com/what-is-twitter-bootstrap/

## :rocket: How It Works

The app does the following when you visit it:

1. Grabs the data from [a designated Google Spreadsheet](https://docs.google.com/spreadsheets/d/1-p0CyUMC0nqrEQNc6Yikd2vg033GoChSWR8rFKFxfgU/edit#gid=1209202081)*.
2. Loops through rows, checking the date column* until it finds one in
   the future. (Default: `date`)
3. On finding a future event, grabs the stub content from a specific column*.
   (Default: `presenter_social_media`)
4. If no #hashtags or @handles found in that stub content, uses the
   `default_tweet` config*.
4. Redirects browser to a page that will auto-initiate a Tweet with that
   content.

\* <sup>[configurable](#Configuration)</sup>

Note: We have an intermediary button-click involved so that mobile apps
open the web intent properly, rather than getting stuck redirecting to Twitter's web
intent webpage in browser.

## :gear: Configuration

Configurable values can be set in [`_config.yml`](/_config.yml).

## :computer: Local Development

```
bundle install
bundle exec jekyll serve
```
