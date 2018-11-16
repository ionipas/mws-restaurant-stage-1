const filesToCache = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/1-large-1x.jpg',
	'/img/1-medium-1x.jpg',
	'/img/1-small-1x.jpg',
	'/img/2.jpg',
	'/img/2-large-1x.jpg',
	'/img/2-medium-1x.jpg',
	'/img/2-small-1x.jpg',
	'/img/3.jpg',
	'/img/3-large-1x.jpg',
	'/img/3-medium-1x.jpg',
	'/img/3-small-1x.jpg',
	'/img/4.jpg',
	'/img/4-large-1x.jpg',
	'/img/4-medium-1x.jpg',
	'/img/4-small-1x.jpg',
	'/img/5.jpg',
	'/img/5-large-1x.jpg',
	'/img/5-medium-1x.jpg',
	'/img/5-small-1x.jpg',
	'/img/6.jpg',
	'/img/6-large-1x.jpg',
	'/img/6-medium-1x.jpg',
	'/img/6-small-1x.jpg',
	'/img/7.jpg',
	'/img/7-large-1x.jpg',
	'/img/7-medium-1x.jpg',
	'/img/7-small-1x.jpg',
	'/img/8.jpg',
	'/img/8-large-1x.jpg',
	'/img/8-medium-1x.jpg',
	'/img/8-small-1x.jpg',
	'/img/9.jpg',
	'/img/9-large-1x.jpg',
	'/img/9-medium-1x.jpg',
	'/img/9-small-1x.jpg',
	'/img/10.jpg',
	'/img/10-large-1x.jpg',
	'/img/10-medium-1x.jpg',
	'/img/10-small-1x.jpg',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js'
];

const cacheName = 'pages-cache-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});