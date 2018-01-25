import folium
from folium.plugins import MarkerCluster

# Aufgabe 1 Eigene interaktive Webkarte mit Folium

m = folium.Map(location=[47.3686, 8.5392],
               tiles='Stamen Toner',
               zoom_start=13)


# Aufgabe 2 Eigene interaktive Webkarte mit eigenen Geoobjekten

m = folium.Map(location=[47.3686, 8.5392],
               tiles='Stamen Toner',
               zoom_start=13)

folium.Marker(location=[47.3686, 8.5392],
              popup='Zürich',
              icon=folium.Icon(color='green')
              ).add_to(m)

folium.Circle(radius=100,
              location=[47.3688, 8.5530],
              popup='Kantonsschule Hottingen',
              color='blue',
              fill=True).add_to(m)

# Aufgabe 3 Eigene interaktive Webkarte mit statischem File (GeoJSON) einbinden

m = folium.Map(location=[47.3686, 8.5392],
               tiles='Stamen Toner',
               zoom_start=13)

folium.GeoJson(
     'castles.geojson',
     name='geojson'
 ).add_to(m)

folium.LayerControl().add_to(m)

# Aufgabe 4 Eigene interaktive Webkarte mit statischem File (GeoJSON) einbinden mit Point Clustering


m = folium.Map(location=[47.3686, 8.5392],
               tiles='Stamen Toner',
               zoom_start=13)

marker_cluster = MarkerCluster(
    overlay=True,
    control=True
)

marker_cluster.add_to(m)

folium.GeoJson(
     'castles.geojson',
     name='geojson'
 ).add_to(marker_cluster)
