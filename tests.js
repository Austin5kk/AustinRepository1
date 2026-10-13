(function () {
  const results = [];
  const test = (name, fn) => { try { if (!fn()) throw Error('Unexpected result'); results.push({ name, pass: true }); } catch (e) { results.push({ name, pass: false, error: e.message }); } };
  const T = (typeof Tour !== 'undefined') ? Tour : require('./tour-core.js');
  const data = (typeof PLACES !== 'undefined') ? PLACES : require('./places.js');
  const good = { name: 'A', lon: 2.2945, lat: 48.8584, description: 'd', source: 's', checked: '2026-10-13' };

  test('Next moves forward', () => T.nextIndex(0, 3) === 1);
  test('Next wraps from the last stop to the first', () => T.nextIndex(2, 3) === 0);
  test('Previous wraps from the first stop to the last', () => T.prevIndex(0, 3) === 2);
  test('Empty list does not crash', () => T.nextIndex(0, 0) === 0 && T.prevIndex(0, 0) === 0);
  test('A complete record is usable', () => T.validatePlace(good).length === 0);
  test('Missing longitude is flagged, not guessed', () => T.validatePlace({ ...good, lon: null }).some(m => m.includes('longitude')));
  test('Longitude 200 is out of range', () => T.validatePlace({ ...good, lon: 200 }).length > 0);
  test('Swapped longitude/latitude is caught', () => T.validatePlace({ ...good, lon: 48.8584, lat: 2.2945 }).some(m => m.includes('swapped')));
  test('Missing source is flagged', () => T.validatePlace({ ...good, source: '' }).some(m => m.includes('source')));
  test('Photo without alt text is flagged', () => T.validatePlace({ ...good, photo: 'x.jpg', photoAlt: '' }).some(m => m.includes('alt')));
  test('usable() drops bad records only', () => T.usable([good, { ...good, lat: null }]).length === 1);
  test('bounds() contains every stop', () => { const b = T.bounds(data); return data.every(p => p.lon >= b.west && p.lon <= b.east && p.lat >= b.south && p.lat <= b.north); });
  test('bounds() of an empty list is null, not a crash', () => T.bounds([]) === null);
  test('Tour has exactly five stops', () => data.length === 5);
  test('Mont-Saint-Michel longitude is west of Greenwich (negative)', () => data.some(p => p.name.includes('Mont-Saint-Michel') && p.lon < 0));
  test('Every record in places.js is usable', () => data.every(p => T.validatePlace(p).length === 0));

  if (typeof document !== 'undefined') document.getElementById('results').textContent = results.map(r => (r.pass ? 'PASS: ' : 'FAIL: ') + r.name).join('\n');
  else { results.forEach(r => console.log((r.pass ? 'PASS: ' : 'FAIL: ') + r.name)); if (results.some(r => !r.pass)) process.exitCode = 1; }
})();
