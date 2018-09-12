
        var mymap = L.map('mapid').setView([21.007459, 105.823982], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);


        // var coffeeShops = {
        //     "type": "FeatureCollection",
        //     "features": [
        //         {
        //             "type": "Feature",
        //             "properties": {
        //                 "name": "Twitter Beans Coffee - Mipec Tây Sơn",
        //                 "address": "Mipec Tower, 229 Tây Sơn, Ngã Tư Sở, Đống Đa",
        //                 "latitude": 105.823189,
        //                 "longitude": 21.006358
        //             },
        //             "geometry": {
        //                 "type": "Point",
        //                 "coordinates": [21.006358, 105.823189]
        //             }
        //         },
        //         {
        //             "type": "Feature",
        //             "properties": {
        //                 "name": "Tropical Forest Coffee",
        //                 "address": "ngõ 298 Tây Sơn, Ngã Tư Sở, Đống Đa",
        //                 "latitude": 105.822866,
        //                 "longitude": 21.006504
        //             },
        //             "geometry": {
        //                 "type": "Point",
        //                 "coordinates": [21.006504, 105.822866]
        //             }
        //         }
        //     ]
        // };


        // L.geoJSON(coffeeShops).addTo(mymap);
        // L.geoJson(coffeeShops, {
        //     onEachFeature: function (feature, layer) {
        //         layer.bindPopup(feature.properties.name);
        //     }
        // }).addTo(mymap);
        function onEachFeature(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }
        var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.006504, 105.822866]
            }
        };
        L.geoJSON(geojsonFeature).addTo(mymap);
        L.geoJSON(geojsonFeature, {
            onEachFeature: onEachFeature
        }).addTo(mymap);

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(mymap);
        }

        mymap.on('click', onMapClick);