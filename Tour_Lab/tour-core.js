/* Tour rules with no Cesium and no buttons, so they can be tested on their own. */
(function (root) {
  // Area the project is expected to stay inside. The starter box covered Pennsylvania; this one is a
  // rough box around mainland France (not a border), so swapped lon/lat or a wrong sign still gets caught.
  const AREA = { west: -5.5, east: 9.9, south: 41.2, north: 51.3 };

  const hasText = v => typeof v === 'string' && v.trim().length > 0;
  const isNum = v => typeof v === 'number' && Number.isFinite(v);

  // Returns a list of problems. An empty list means the record is usable.
  function validatePlace(p, area = AREA) {
    const problems = [];
    if (!p || typeof p !== 'object') return ['record is not an object'];
    for (const k of ['name', 'description', 'source', 'checked'])
      if (!hasText(p[k])) problems.push('missing ' + k);
    if (!isNum(p.lon) || p.lon < -180 || p.lon > 180) problems.push('longitude must be a number from -180 to 180');
    if (!isNum(p.lat) || p.lat < -90 || p.lat > 90) problems.push('latitude must be a number from -90 to 90');
    if (problems.length === 0 && !inArea(p, area)) problems.push('outside the project area: are longitude and latitude swapped?');
    if (hasText(p.photo) && !hasText(p.photoAlt)) problems.push('photo needs alt text');
    return problems;
  }

  const inArea = (p, a = AREA) => p.lon >= a.west && p.lon <= a.east && p.lat >= a.south && p.lat <= a.north;
  const usable = (places, area = AREA) => places.filter(p => validatePlace(p, area).length === 0);
  const nextIndex = (i, n) => (n > 0 ? (i + 1) % n : 0);
  const prevIndex = (i, n) => (n > 0 ? (i - 1 + n) % n : 0);

  // Box that contains every stop, padded so markers are not on the screen edge.
  // Used by the "Show all stops" button. Returns null when there are no stops.
  function bounds(places) {
    if (!places.length) return null;
    const lons = places.map(p => p.lon), lats = places.map(p => p.lat);
    const w = Math.min(...lons), e = Math.max(...lons), s = Math.min(...lats), n = Math.max(...lats);
    const padLon = Math.max((e - w) * 0.25, 0.2), padLat = Math.max((n - s) * 0.25, 0.2);
    return { west: w - padLon, east: e + padLon, south: s - padLat, north: n + padLat };
  }

  const api = { AREA, validatePlace, inArea, usable, nextIndex, prevIndex, bounds };
  if (typeof module !== 'undefined') module.exports = api;
  root.Tour = api;
})(globalThis);
