var marker = L.marker([47.22234, 8.81727]);

var polygon = L.polygon([
	[47.22354, 8.81872],
	[47.22325, 8.8182],
	[47.22294, 8.81857],
	[47.22323, 8.81909]
], {
	color: '#dde21a',
	fillColor: 'yellow',
	fillOpacity: 0.5
});

var circle = L.circle([47.2225, 8.81481], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 20
});