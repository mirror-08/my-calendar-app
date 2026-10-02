// 예전 주소의 오프라인 저장분을 지우고 스스로 해제한 뒤, 열린 화면을 새 주소로 보낸다
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://mirror-08.github.io/calendar/');
})()));
