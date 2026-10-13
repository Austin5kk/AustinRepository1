# AI 101 — Tour of France (Week 6, Path B)

A data-driven virtual tour on the same grid globe as the Flight Lab. The app reads stop records from `places.js`, checks them, draws a marker for each usable stop, and flies the camera to the selected stop.

This version tours **five of the most-visited places in France**, ranked by 2025 attendance:
Louvre, Palace of Versailles, Eiffel Tower, Arc de Triomphe, Mont-Saint-Michel.

**Ranking basis and limits:** the top three come from 2025 attendance reports; the Arc de Triomphe and Mont-Saint-Michel are the two most-visited sites run by the national monuments centre (CMN). Free-access or uncounted places (for example Notre-Dame de Paris, Sacré-Cœur) and theme parks (Disneyland Paris) are not in this ranking. Attendance numbers are from secondary news reports, not the institutions' own pages.

## Files
| File | Job |
|---|---|
| index.html | Page structure: panel, buttons, globe area |
| style.css | Colors, spacing, layout |
| places.js | **Your data**: one record per stop |
| tour-core.js | Rules: which stop is next, is a record usable |
| app.js | Connects data, rules, buttons, and the Cesium globe |
| tests.html / tests.js | Checks for the rules and your data |

## Run
Same as the Flight Lab: publish with GitHub Pages (Deploy from a branch → main → /(root)) or serve locally (`python -m http.server 8000`). Internet and WebGL are needed for the globe; **CesiumJS version: 1.145** (loaded from Cesium's CDN). No ion token. If the globe fails, the stop panel and buttons still work.

## One record
```js
{ name: "", lon: 0, lat: 0, description: "", photo: "", photoAlt: "", source: "", checked: "YYYY-MM-DD" }
```
Longitude comes first (east/west; negative west of Greenwich, as for Mont-Saint-Michel). Leave anything you have not verified blank. The app lists incomplete records under "Needs verification" instead of guessing.

## Test
Open tests.html. Then do the manual checks on Canvas page 05 (Tour checks). Optional: `node tests.js`.

## Limits
Virtual tour only: a camera flight is not a walking route, travel time, or accessibility guide. Grid globe, no imagery or terrain. Facts are only as good as your sources.

## Student additions — complete before submission
Audience and purpose: I want to help ___ do ___ using ___ data. I will verify ___ before sharing. (TODO: write your pitch)

Stops and sources (with date checked): see `places.js`. Each stop lists where its coordinates and visitor figure came from. Coordinates were retrieved 2026-10-13 from Wikipedia / Wikimedia Commons coordinate boxes. TODO: spot-check each stop on a map yourself and note what you saw.

Feature changed: added a "Show all stops" button. `Tour.bounds()` in `tour-core.js` computes a padded box around the usable stops and `app.js` flies the camera to it. Also changed the project area box in `tour-core.js` from Pennsylvania to France (otherwise every France stop was rejected as "outside the project area").

AI assistance accepted/rejected: TODO: add your three excerpts (planning, coding, debugging) and what you accepted or rejected.

Tests and evidence: `node tests.js` and `tests.html` (16 automated checks). `Test_Log.csv` lists them. TODO: add your six manual checks and your break-and-repair exercise.

Partner reproduction feedback: TODO: name, what they ran, what they changed or you changed in response.

Known limitations: the globe is a grid with no imagery or terrain, so it shows where a place is but not what it looks like. Camera flights are not routes. Attendance numbers are secondary-source and year-specific.

## References
https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#flyTo
https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html
https://cesium.com/learn/cesiumjs-learn/cesiumjs-creating-entities/
