/* TOUR DATA — Tour of France: five of the most-visited places, ranked by 2025 attendance.
   One record per stop. Every record uses the same fields.
   Coordinates are in decimal degrees (longitude FIRST in the file, as Cesium expects) and come from the
   Wikipedia / Wikimedia Commons coordinate boxes listed in each source. Verify them yourself on a map
   before you submit (see README "Verification checklist"). Never let AI guess coordinates.
   Visitor numbers are secondary-source figures for 2025 (see source); the official institution pages
   are the better citation if you can confirm them. */
const PLACES = [
  {
    name: "1. Louvre Museum, Paris",
    lon: 2.3358, lat: 48.8611,
    description: "The most-visited site on this list: about 9 million visitors in 2025, and widely described as the world's most-visited art museum. Home of the Mona Lisa and the Venus de Milo.",
    photo: "", photoAlt: "",
    source: "Coordinates: Wikimedia Commons (Louvre, 48°51′40″N 2°20′09″E). Visitors: unidivers.fr 2025 attendance report",
    checked: "2026-10-13"
  },
  {
    name: "2. Palace of Versailles",
    lon: 2.1203, lat: 48.8048,
    description: "Former royal residence of Louis XIV, about 16 km south-west of Paris, known for the Hall of Mirrors and its gardens. Around 8.4 million visitors in 2025.",
    photo: "", photoAlt: "",
    source: "Coordinates: Wikipedia (Palace of Versailles, 48°48′17″N 2°07′13″E). Visitors: unidivers.fr 2025 attendance report",
    checked: "2026-10-13"
  },
  {
    name: "3. Eiffel Tower, Paris",
    lon: 2.2945, lat: 48.8584,
    description: "Iron lattice tower on the Champ de Mars, built for the 1889 World's Fair. More than 6.75 million people went up the tower in 2025, and nearly 10 million visited the free-access esplanade.",
    photo: "", photoAlt: "",
    source: "Coordinates: Wikipedia and Lucerna (Exeter) record, 48.8584 N 2.2945 E. Visitors: unidivers.fr 2025 attendance report",
    checked: "2026-10-13"
  },
  {
    name: "4. Arc de Triomphe, Paris",
    lon: 2.2950, lat: 48.8738,
    description: "Triumphal arch at the centre of Place Charles de Gaulle, at the western end of the Champs-Élysées. It was the most-visited monument run by the national monuments centre (CMN) in 2025, with 1,852,271 visits.",
    photo: "", photoAlt: "",
    source: "Coordinates: Wikipedia (Arc de Triomphe, 48.873778 N 2.295028 E). Visitors: CMN 2025 figures as reported by ulysse.com",
    checked: "2026-10-13"
  },
  {
    name: "5. Mont-Saint-Michel, Normandy",
    lon: -1.5110, lat: 48.6360,
    description: "Tidal island and UNESCO World Heritage Site in Normandy, topped by a medieval abbey. The abbey recorded 1,627,042 visits in 2025.",
    photo: "", photoAlt: "",
    source: "Coordinates: Wikipedia (Mont-Saint-Michel, 48°38′10″N 1°30′40″W). Visitors: CMN 2025 figures as reported by unidivers.fr",
    checked: "2026-10-13"
  }

  /* MISSING-DATA EXERCISE: on a copy, delete this line and the END line below, then reload.
  ,{
    name: "Unverified Stop",
    lon: null, lat: 48.8530,
    description: "Coordinates not verified yet.",
    photo: "", photoAlt: "",
    source: "", checked: ""
  }
  END OF EXERCISE */
];
if (typeof module !== 'undefined') module.exports = PLACES;
