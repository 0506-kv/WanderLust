mapboxgl.accessToken = mapToken;

// Initialize the map
const map = new mapboxgl.Map({
  container: "map", //container ID
  //Choose from Mapbox's core styles, or male your own style with mapbox Studio
  style: "mapbox://styles/mapbox/streets-v11", //style URL
  center: listing.geometry.coordinates,
  zoom: 9, //starting Zoom
});

// Add a marker at the coordinates
const marker = new mapboxgl.Marker({ color: "#FF0000" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4><p>Exact Location</p>`
    )
  )
  .addTo(map);
