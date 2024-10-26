'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b689603b23dd19831780ccedf442a0ae",
"index.html": "4f251c0b1207f398c6affd637fae1a3a",
"/": "4f251c0b1207f398c6affd637fae1a3a",
"main.dart.js": "dcf6c1ed32be28cf3313e63247d1a7df",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "f94062dbc5070d46d9259932c6a3ec48",
"icons/Icon-192.png": "05f6c0f539f2dcb3a74236820500581c",
"icons/Icon-maskable-192.png": "f5b04a78d2cd91ae64c059559db2516c",
"icons/Icon-maskable-512.png": "7aa8bd31c61228f5cf4080d80b264d36",
"icons/Icon-512.png": "d03c0d2ea0b8b80b58c4433159e15de9",
"manifest.json": "089054d471d00303ef4d5b668ebcc484",
".git/config": "c69e527325ac38594c1d5baa446afdab",
".git/objects/6f/b1365e4196a0b559a66d7d3ca1c011c0338cab": "3c8a1bf42d71d5721c9868b4d2ab6902",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/34/e94db49d5a3c011293129a490c73f1d3f702af": "c7d4e182222f84378e8f5301851f9291",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/ab/ac5e342e60f363bf287e27e84cce01587ed337": "7a7e7ef58bd459e4982b14db2f0d8363",
".git/objects/e5/4e6f1a8fda1df03843757655c223437fc5306e": "d13ca103e7089f5e2170779289c71452",
".git/objects/f4/3c00ef7ec2be9bf2bbddea654329309f74baa6": "c860ca57c899aabe35ad2b9ee5baf3db",
".git/objects/fc/9fa384a4fbe4e333355c17216efd154bde98d7": "dfa971b485f8fcc53c8f14a92ed58834",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/pack/pack-17d36b9baafc1803267155fa8eaf402569ed1143.rev": "a5c01395e423002fb46b4e2ea3d62489",
".git/objects/pack/pack-17d36b9baafc1803267155fa8eaf402569ed1143.pack": "a798fa6a466749cf8946191e9011c48a",
".git/objects/pack/pack-17d36b9baafc1803267155fa8eaf402569ed1143.idx": "500400702d799efe3e66f481b6cfd4df",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/00acf6b17f6d071027cdac4c74fef3490dcf3f": "02037a19a2bce9496423e02b7216137e",
".git/objects/73/d920c55e7d817dd5163596965fba34333fef56": "5deb6ddaf2a0d523625f4e97bd7d6720",
".git/objects/87/d81c22454d2a48411cdbcb06a75daaf2e0ea75": "13a5eb0b17695b01b0618eaa7defb174",
".git/objects/1a/c53f127946bba52d11243c56e7f44f653f8530": "9969c32874104c2a9c4c9be931ae5d51",
".git/objects/88/27d36fa06fc6c3acecd50f9221c44243b7f2c5": "bf60ff47bbb54a3b9ba02b2977d02cf4",
".git/objects/9f/03959fbb7563790a7d53e5e3aae2914159ff2d": "3a4327ac4bdf3c88f98947f3928d1a36",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/39/ebc608e7595d912240390a5fb1446c70c2d9e9": "64f4bdfc7d524a5eae2869663bcd8266",
".git/objects/55/4ff7c088e8ab1c15de082e39a4d52bed51b003": "53393de11398bb2b4329ab8343c0563b",
".git/objects/0f/2b6e1882ff897a82aa637a64bb9eae61edf306": "c633e0c6b59a13947c4a615429f76b23",
".git/objects/90/2b5b4269be1a5018a9d8f61425811f200fc5ff": "cb7405db97bd63f9a39e2231d9d01311",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/815e487cd91f9572bb545a1ee8b8038d2a4855": "000f23b35002590df441ae792a758874",
".git/objects/a0/cefa10d33b64095da66f2eee40beee67684099": "bb7f34c22c05733128f57ef9cca4bf0f",
".git/objects/b8/515f9a87a7e8d45b8f3b41cd9bfcda86a2cadc": "6a6b55c7c14ccfa1b9509160b477014f",
".git/objects/a9/1c5f1f7de3953265ded119de8738f631770d1e": "c41b642c53dbdd2a290480cdf37dff8d",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/58e8ca5dd90ead08ab9be538fd476e2b2dec9c": "c8054de50fab67248992203cb218d566",
".git/objects/a6/366139473c9e13e593ac2696ecc33992fcdbad": "e5aa10dde562e86145579f69ef34043b",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/8b6c290b91ede84c7885ec54fea959d106baf0": "d97d842ded3dcd84b0806f6599246e6c",
".git/objects/2d/e145e21c5537294d09e6c44a62ea0d6b8f682c": "9547d227d8e8340f9e683d701a95fd82",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/HEAD": "3472d606de35352982d873f73dd60ceb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c7d8a038eb6742290bb4bcb2cea825f4",
".git/logs/refs/heads/main": "539e08dc7b0f719f46c2d461becb7f8c",
".git/logs/refs/heads/col": "2a79124c07a39706e45f7029e358d0d6",
".git/logs/refs/remotes/origin/102": "3b76d40c9090e40e37a5faa81a7c0cc3",
".git/logs/refs/remotes/origin/tmp-branch-recover": "66b3e7c077825e768b977462a9d263ec",
".git/logs/refs/remotes/origin/main": "6dedcc3e6731df989d2f26389f557fb6",
".git/logs/refs/remotes/origin/col": "711057540845240c9cc9cc05d6bf521e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a4a4a4483a9ce1e6ebcb6f310bc4e7f6",
".git/refs/heads/col": "a4a4a4483a9ce1e6ebcb6f310bc4e7f6",
".git/refs/remotes/origin/102": "75e4ed1a9ab8657a72cbbb4ccdc5e172",
".git/refs/remotes/origin/tmp-branch-recover": "2af269ea224601f2f64f1b6c221b0ab0",
".git/refs/remotes/origin/main": "c87d0a2f59c5da7f4343a5be7cf21ecd",
".git/refs/remotes/origin/col": "a4a4a4483a9ce1e6ebcb6f310bc4e7f6",
".git/index": "47af72caceb628699d92aa6952bd7916",
".git/COMMIT_EDITMSG": "be196121328e40488d63e3628f570f75",
".git/FETCH_HEAD": "830518ba5e35fd0aeec23a0259b13e22",
"assets/AssetManifest.json": "b97b0e408a72fbbd6e8360f3f3b87af7",
"assets/NOTICES": "764cc3a025df72f7abfa07800be6c05f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "56ece7f4261dd3822d9368f7ab4e6ef1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "90f990fefc6413b07452f40f83a63101",
"assets/fonts/MaterialIcons-Regular.otf": "b14ef0521549807127ec7866380e56e5",
"assets/assets/logonobackground.png": "dd96db50f14d4ba45d07407c9447f492",
"assets/assets/fabfcicon.png": "93acb6061087802abf7b22a77fd2492f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
