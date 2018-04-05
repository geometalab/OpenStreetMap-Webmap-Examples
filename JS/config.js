L.mapbox.accessToken = 'pk.eyJ1Ijoic2ZyaXRzY2hpIiwiYSI6ImNqMWM3bWc0ZzAwNHczM3BhdDY3aGM4NHUifQ.4L6rSyUbvozhhYjbhl8HRg';
	
var osmAttributionUrl = "https://www.openstreetmap.org/copyright";
var osmAttributionText = "OSM";
var mapboxAttributionUrl = "https://www.mapbox.com/about/maps/";
var mapboxAttributionText = "MapBox";
	
var mapboxUrl = "https://api.tiles.mapbox.com/v4/sfkeller.k0onh2me/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2ZrZWxsZXIiLCJhIjoia3h4T3pScyJ9.MDLSUwpRpPqaV7SVfGcZDw";
var osmUrl = "https://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png";
	
var createAttribution = function(mapsrc, mapdesc){
	return "<a href='https://wiki.openstreetmap.org/wiki/Open_Database_License'>OpenStreetMap</a> contributors | "
		+ "Map data &copy; <a href=" + mapsrc + ">" + mapdesc + "</a> | "
		+ "<a href='https://giswiki.hsr.ch/Webmapping_Clients'>About</a> | "
		+ "<a href='https://www.hsr.ch/geometalab'>By GeometaLab</a>";
};

var mapboxAttribution = createAttribution(mapboxAttributionUrl, mapboxAttributionText),
	osmAttribution = createAttribution(osmAttributionUrl, osmAttributionText);
		
var mapboxSatellite = L.tileLayer(mapboxUrl, {id: 'mapid', attribution: mapboxAttribution}),
	mapboxStreets = L.tileLayer(osmUrl, {id: 'mapid', attribution: mapboxAttribution});
		
var baseMaps = {
	"Satellite": mapboxSatellite,
	"Streets": mapboxStreets
};