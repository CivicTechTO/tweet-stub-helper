# Tweet Stub Helper

Simple app for creating tweet stubs from a Google Sheet.

## Usage

For the defaults configuration for CivicTechTO, just visit:

[`civictechto.github.io/tweet-stub-helper`](http://civictechto.github.io/tweet-stub-helper)

## How It Works

The app does the following when you visit it:

1. Grabs the data from a [a designated Google Spreadsheet](https://docs.google.com/spreadsheets/d/1-p0CyUMC0nqrEQNc6Yikd2vg033GoChSWR8rFKFxfgU/edit#gid=1209202081)
2. Loops through rows, checking the `date` column until it finds on in
   the future.
3. On finding a future event, grabs the content of the
   `presenter_social_media` column.
4. Redirects browser to a page that will auto-initiate a Tweet with that
   content.
