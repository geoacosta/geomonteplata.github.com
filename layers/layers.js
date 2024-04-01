var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_00000111_1 = new ol.format.GeoJSON();
var features_00000111_1 = format_00000111_1.readFeatures(json_00000111_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_00000111_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_00000111_1.addFeatures(features_00000111_1);
var lyr_00000111_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_00000111_1, 
                style: style_00000111_1,
                popuplayertitle: "00000111",
                interactive: true,
                title: '<img src="styles/legend/00000111_1.png" /> 00000111'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_00000111_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_00000111_1];
lyr_00000111_1.set('fieldAliases', {'ID': 'ID', '_BENEFICIA': '_BENEFICIA', '_CEDULA DE': '_CEDULA DE', '_ESTADO CI': '_ESTADO CI', '_NOMBRE DE': '_NOMBRE DE', '_CEDULA _1': '_CEDULA _1', '_1Temporal': '_1Temporal', '_1Posicion': '_1Posicion', '_AREA': '_AREA', '_field_10': '_field_10', });
lyr_00000111_1.set('fieldImages', {'ID': 'TextEdit', '_BENEFICIA': 'TextEdit', '_CEDULA DE': 'TextEdit', '_ESTADO CI': 'TextEdit', '_NOMBRE DE': 'TextEdit', '_CEDULA _1': 'TextEdit', '_1Temporal': 'TextEdit', '_1Posicion': 'TextEdit', '_AREA': 'TextEdit', '_field_10': 'TextEdit', });
lyr_00000111_1.set('fieldLabels', {'ID': 'inline label - always visible', '_BENEFICIA': 'inline label - always visible', '_CEDULA DE': 'inline label - always visible', '_ESTADO CI': 'inline label - always visible', '_NOMBRE DE': 'inline label - always visible', '_CEDULA _1': 'inline label - always visible', '_1Temporal': 'inline label - always visible', '_1Posicion': 'inline label - always visible', '_AREA': 'inline label - always visible', '_field_10': 'no label', });
lyr_00000111_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});