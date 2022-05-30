window.onload = init;

function init(){
    const map = new ol.Map({
        target: 'js-map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: [14445770.766705519,8867832.206411637],
            zoom: 7,
            maxZoom: 11,
            minZoom:7
        })
    })
    map.on('click', function(e){
        console.log(e.coordinate);
    })

    //Vector Layers
    
    const Aldanskoe = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url:'C:\Users\GIS-Master\vite-project\data\Aldanskoe.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: 'Алданское лесничество',
        
        })
    map.addLayer(Aldanskoe);

    // Vector Feature Popup Logic
    map.on('click', function(e){
        map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
            console.log(feature.getKeys);
        })
    })
}
