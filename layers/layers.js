var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gdl1_station_ZIPCODES_1 = new ol.format.GeoJSON();
var features_gdl1_station_ZIPCODES_1 = format_gdl1_station_ZIPCODES_1.readFeatures(json_gdl1_station_ZIPCODES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gdl1_station_ZIPCODES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gdl1_station_ZIPCODES_1.addFeatures(features_gdl1_station_ZIPCODES_1);
var lyr_gdl1_station_ZIPCODES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gdl1_station_ZIPCODES_1, 
                style: style_gdl1_station_ZIPCODES_1,
                interactive: false,
                title: '<img src="styles/legend/gdl1_station_ZIPCODES_1.png" /> gdl1_station_ZIPCODES'
            });
var format_gdl1_zonas_volumen_2 = new ol.format.GeoJSON();
var features_gdl1_zonas_volumen_2 = format_gdl1_zonas_volumen_2.readFeatures(json_gdl1_zonas_volumen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gdl1_zonas_volumen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gdl1_zonas_volumen_2.addFeatures(features_gdl1_zonas_volumen_2);
var lyr_gdl1_zonas_volumen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gdl1_zonas_volumen_2, 
                style: style_gdl1_zonas_volumen_2,
                interactive: true,
                title: '<img src="styles/legend/gdl1_zonas_volumen_2.png" /> gdl1_zonas_volumen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_gdl1_station_ZIPCODES_1.setVisible(true);lyr_gdl1_zonas_volumen_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gdl1_station_ZIPCODES_1,lyr_gdl1_zonas_volumen_2];
lyr_gdl1_station_ZIPCODES_1.set('fieldAliases', {'zipcode': 'zipcode', 'Reporte de Volumen__Volumen_gdl1_zipcode_cda_zipcode': 'Reporte de Volumen__Volumen_gdl1_zipcode_cda_zipcode', 'Reporte de Volumen__Volumen_gdl1_zipcode_Promedio diario|': 'Reporte de Volumen__Volumen_gdl1_zipcode_Promedio diario|', 'Reporte de Volumen__Volumen_gdl1_zipcode_tag': 'Reporte de Volumen__Volumen_gdl1_zipcode_tag', });
lyr_gdl1_zonas_volumen_2.set('fieldAliases', {'tag': 'tag', 'promedio_diario': 'promedio_diario', 'zonificacion': 'zonificacion', });
lyr_gdl1_station_ZIPCODES_1.set('fieldImages', {'zipcode': 'TextEdit', 'Reporte de Volumen__Volumen_gdl1_zipcode_cda_zipcode': 'TextEdit', 'Reporte de Volumen__Volumen_gdl1_zipcode_Promedio diario|': 'TextEdit', 'Reporte de Volumen__Volumen_gdl1_zipcode_tag': 'TextEdit', });
lyr_gdl1_zonas_volumen_2.set('fieldImages', {'tag': '', 'promedio_diario': '', 'zonificacion': 'TextEdit', });
lyr_gdl1_station_ZIPCODES_1.set('fieldLabels', {'zipcode': 'no label', 'Reporte de Volumen__Volumen_gdl1_zipcode_cda_zipcode': 'no label', 'Reporte de Volumen__Volumen_gdl1_zipcode_Promedio diario|': 'no label', 'Reporte de Volumen__Volumen_gdl1_zipcode_tag': 'no label', });
lyr_gdl1_zonas_volumen_2.set('fieldLabels', {'tag': 'header label', 'promedio_diario': 'header label', 'zonificacion': 'header label', });
lyr_gdl1_zonas_volumen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});