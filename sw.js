self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.map(n=>caches.delete(n)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate('https://moshekfir78.github.io/shiurim-app/'+new URL(c.url).hash)))));
