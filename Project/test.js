var map = L.map('mapid', { center: [42.362432, -71.086086], zoom: 14 });
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

var coffeeShops = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Dunkin Donuts",
                "address": "1 Broadway #1, Cambridge, MA 02142",
                "latitude": 42.362504,
                "longitude": -71.083372
            },
            "geometry": {
                "type": "Point",
                "coordinates": [105.823189, 21.006358]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Starbucks",
                "address": "6 Cambridge Center, Cambridge, MA 02142",
                "latitude": 42.363884,
                "longitude": -71.087749
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.087749, 42.363884]
            }
        }
    ]
};

L.geoJson(coffeeShops, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
}).addTo(map);
