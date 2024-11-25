const map = L.map('map').setView([16.722647641388185, 121.68517511034149], 15); // Set the view to new coordinates


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// name and coordinates to par
const markersData = [
    { coords: [16.722647641388185, 121.68517511034149], name: 'Camarag Village' },
    { coords: [16.723347641388185, 121.6845], name: 'SNJ Boarding House' }, 
    { coords: [16.723447641388185, 121.68517841034149], name: 'EJ Boarding House' },
    { coords: [16.722647641388185, 121.6855000], name: 'Aljades Boarding House' },
    { coords: [16.7200, 121.6900], name: 'ISU MAIN CAMPUS' },
    
    // Adjusted New Locations (now closer to the grey rectangles or house blocks)
    { coords: [16.7228, 121.6842], name: 'New Location 1' }, // Adjusted to be near New Location 2 and 4
    { coords: [16.7222, 121.6844], name: 'New Location 2' }, // Adjusted position closer to New Location 1
    { coords: [16.7223, 121.6840], name: 'New Location 3' }, // Close to EJ Boarding House
    { coords: [16.7220, 121.6845], name: 'New Location 4' }, // Adjusted to fit within block area (near Aljades)
];

// Add markers to the map and store them for later use
const markers = {};
markersData.forEach(markerData => {
    const marker = L.marker(markerData.coords, {
        icon: L.AwesomeMarkers.icon({
            icon: 'info-sign',
            markerColor: 'blue' // Default color for all markers
        })
    }).addTo(map);
    marker.bindPopup(markerData.name); // Bind popup to the marker
    markers[markerData.name] = marker; // Store marker with name as key
});

// Function to update the map based on selected location
function updateMarker() {
    const selectedValue = document.getElementById('locationSelect').value;
    if (selectedValue) {
        const coords = selectedValue.split(',');
        const lat = parseFloat(coords[0]);
        const lng = parseFloat(coords[1]);

        // Set the map view and zoom in closer
        map.setView([lat, lng], 19); // Center the map on the selected location and zoom in

        // Highlight the selected marker and open its popup
        Object.values(markers).forEach(marker => {
            marker.setIcon(L.AwesomeMarkers.icon({
                icon: 'info-sign',
                markerColor: 'blue' // Reset all markers to default color
            }));
        });

        // Find the selected marker by coordinates
        const selectedMarker = markers[markersData.find(m => m.coords[0] === lat && m.coords[1] === lng).name];

        // Change the color for the selected marker and open its popup
        if (selectedMarker) {
            selectedMarker.setIcon(L.AwesomeMarkers.icon({
                icon: 'info-sign',
                markerColor: 'red' // Change color for selected marker
            }));

            // Open the popup for the selected marker after zooming in
            setTimeout(() => {
                selectedMarker.openPopup(); // Open popup for selected marker
            }, 200); // Delay to ensure the zoom animation completes before opening the popup
        }
    } else {
        alert("Please select a location.");
    }
}
