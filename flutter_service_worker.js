'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "39619fe542b8b69860c3c36f7736df4e",
"index.html": "eef30d802c40e2aed5704eff4c8422ea",
"/": "eef30d802c40e2aed5704eff4c8422ea",
"main.dart.js": "ed9bd502a6002deb77112cf8b722f21e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "8cf74014217f84641ebc569c6c3a7dba",
"favicon.png": "f94062dbc5070d46d9259932c6a3ec48",
"icons/Icon-192.png": "05f6c0f539f2dcb3a74236820500581c",
"icons/Icon-maskable-192.png": "f5b04a78d2cd91ae64c059559db2516c",
"icons/Icon-maskable-512.png": "7aa8bd31c61228f5cf4080d80b264d36",
"icons/Icon-512.png": "d03c0d2ea0b8b80b58c4433159e15de9",
"manifest.json": "089054d471d00303ef4d5b668ebcc484",
".git/ORIG_HEAD": "7b1db91640366003c8fd11bb1318eb1e",
".git/config": "99e7673ddf5050ca469b14043acb6f51",
".git/objects/61/5b07c34417bc98feceaf0389b018f987bf3df6": "f1dc49400d36479e6bf3825cf7fa685a",
".git/objects/0c/05b6ffe78e120c43a04f01fde01c84e2a959f3": "c6ea164c9d4a2a2ad276f9d0c76f7738",
".git/objects/3b/fed592293d74ad9b6226196e2c27c19536402d": "4b0212f1716ea5ab6fda8d464bab6123",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/bd716fa31c342727ad73b71c28a5e3c4113ffc": "a5db0de2a51f0e0e174cff295acc4ddb",
".git/objects/32/e1c470ec1b7988baf2ade538d53e792b7a7283": "660c3f32b38de9b75cdf664ae71fefcf",
".git/objects/56/f4504dc3d163bb92ae5d04f1ae084c01a8ebd6": "90a1d063f79cd7674ac167cc5c7fd905",
".git/objects/58/4a41b6d65145fe900555656cd5769420aecbed": "4cf53f678c301a5b9762383aaf1a851f",
".git/objects/67/ab5fe6001b0490062acef0a946e47e2730e32e": "0724fd1bb79fdb83b3e686c5a34aba4f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/c53b9055aefcf21a50eb532fc1b065ec8a6e06": "93f0ea58d2511dc4480fc2d7a79aa5a8",
".git/objects/60/fef3721db240af6e477df0376abcfb71aaf3a0": "e0f39d1efd66a6329769d47e2ff2a05e",
".git/objects/05/59eabaf41085a10cb932050538513079498763": "e2f2103207dd606d4783d91f54bd221d",
".git/objects/ad/227649907977817f900a5ee4540d28b99aa1da": "8283e088a8cfdd3c8ef3f40f0e5bf0e6",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/fd9b523a00d9ded39db43d9181467863bb2262": "31c43f2a4718fd26058b5f23a7cefee0",
".git/objects/b4/07261fc06740b1ff28c43955422ca59ebf5738": "ec67f99dca63d05cf0c6f89c062a66ed",
".git/objects/b4/552750c4f47b2697446864490bac2550ea4b08": "ca6eac1c203af5f8e53d168f97b246fb",
".git/objects/a5/f17dc29036cbcd246625cbb08b6cb6b9dfd5ad": "2870528231437fe08e1bd4419b753ea4",
".git/objects/bd/324f06b3484a69caa85df8553b7bc92c3c1e7c": "8755d9a685e3cbcddb44d9603be25b71",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/29816fc602ef28870a118b97bb22e4696cdd33": "6f3ef8c8f3922f865f0c1d24ce5fa3c6",
".git/objects/ab/843a6569fe338e51e95dc1bcb4a63bbdb45352": "fb27fccf4c06c701a85ae729b0d58f05",
".git/objects/e5/4e6f1a8fda1df03843757655c223437fc5306e": "d13ca103e7089f5e2170779289c71452",
".git/objects/e5/3ef17265ce53935e42533504ef9a9a287c7dc4": "a24bb47a1030aa953bc3fd1be031a929",
".git/objects/e2/32ec06910488a38b8ff2f7bc204898d780a9fe": "c65c65e9a53e250252745cbf7d29425e",
".git/objects/f4/3c00ef7ec2be9bf2bbddea654329309f74baa6": "c860ca57c899aabe35ad2b9ee5baf3db",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/104c28dfe2b44753de8de0d8524cd4bba92506": "8037295ea18d086b1c618d5cc171db4b",
".git/objects/f5/5ed359012e9ce5b65b1941dc43773c4952714c": "900af67885c9762a8944e971dec41e55",
".git/objects/e3/8d0f5d8f530e2bb6c56fedb08733f28418cf8b": "7de2e71f73ca9f22d81ae206a88fdfee",
".git/objects/e4/3b0f988953ae3a84b00331d0ccf5f7d51cb3cf": "106f9f8f7e8a39d99259935974ba928a",
".git/objects/e4/56f943ed82aef9637f1afb5a08a435378421a6": "e7e8f84946288b8008976a02dad1a91e",
".git/objects/fe/eb80da71c4ba1c16e74f4213820038ff58ed7a": "54b78c5cd1550cf539d59325cfe58707",
".git/objects/c8/e0f37be02a53c94050cd4df9d54174c4998279": "db52681eb8e22225681edc8c6f912ba1",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/26ba3e9bd895c6257c6aec355a2add3f086bcd": "6c73184671cd45d3b42b9859a3bea736",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/29/7fd185b2d377c0d0d2c487651fc5980bff8b0b": "31dbf263239b14dae762e0be970cdd52",
".git/objects/89/9e5e2c089d789c0680ad5ca41de3b1a2b78da6": "20880fd1bfe76edc9123ee213c09aab5",
".git/objects/89/084b71f7aa9f2b12d78b8df49afa6196a55f0e": "3074c69c548a189c87bbdf63107830c1",
".git/objects/1f/cac972cedb441334d83210bda70b1393d471c1": "9bde43912c0c15f20b51a269e96a9556",
".git/objects/1a/c53f127946bba52d11243c56e7f44f653f8530": "9969c32874104c2a9c4c9be931ae5d51",
".git/objects/8a/435df1b386bf3cfb1b7910a84ba2acd9127e6b": "88e0fbf6e1039576f9cbc54bc43bb805",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/1b689e9249c69cc6f84a8ca9ddc2e98f60e1b5": "42e83883c78a0e31cd029619364a7dbd",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/fd4d1c80ea6bf2839ad4e04e93b27649892ad2": "c6fcc7df455b973082329f17668d8b50",
".git/objects/00/5593c45e95eb1d374464ce6590385ecbe7bc1e": "4ce64ca17c50caa5143d159ff95d5c47",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/9ceda928a6616f2fc4c1008064da1dcda1140a": "1e263d226d49a664b87281663d3603db",
".git/objects/65/3d38befb510d6ebff5923a2361b2dff9a96350": "d4232930fa259ef6c8e22762e7839eb6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/0f9cb23a8d5864f04be36363767e7d912cc69b": "2113605d3fce59903cdc18b79831fbca",
".git/objects/5b/72d8a2a1bf1d6b4b5cf4a07f528423fbcffd89": "c13bb011b6f0c3b376241fbfc181027f",
".git/objects/5b/bfc467706c23e705318b4d2352bcdd969c83c8": "26563ddb2d4499ebc9126634983eba96",
".git/objects/01/790021144ff32e06cbd761426b0bd2048217f8": "e0661708df2f08eeb34ccd90f9feb97e",
".git/objects/06/42e302787c405545e8790f8e7d4c0f3ba4e531": "af4531a98270dbd599b4a2b2ecb6bfe7",
".git/objects/39/ebc608e7595d912240390a5fb1446c70c2d9e9": "64f4bdfc7d524a5eae2869663bcd8266",
".git/objects/0f/51554b6d02ac930b2d5269b3c0056afd19f654": "2539157b575106a6ee03e5259067818a",
".git/objects/0a/b1b34dee93af9f20d25154e881bd04deac8ed7": "1cf29e3d270f1a7254121fc274b84db9",
".git/objects/90/5648194fc7a977c086b36cc3d79ee653fc460b": "9a28e3c0b1e22b914ef9353571ad1bd2",
".git/objects/90/2b5b4269be1a5018a9d8f61425811f200fc5ff": "cb7405db97bd63f9a39e2231d9d01311",
".git/objects/bf/665825015ce49565fb5bbc0f012391e1a4e2fa": "59a2277ca00a40ff54053265fdcd06dc",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/1aeef7452bf0a82936cf8d1d4ac87c0d8d3244": "753bfdf70bd977100e51f998b524b859",
".git/objects/b8/515f9a87a7e8d45b8f3b41cd9bfcda86a2cadc": "6a6b55c7c14ccfa1b9509160b477014f",
".git/objects/b6/c2712dd4f189375668d824044a45969238d7c7": "f1dec56e32d3784cbe402317deeabcac",
".git/objects/b6/92461c5a007a2343d0af19a140c39b06e6c366": "237d35171a75f3c3990cf0f19f8b8ecd",
".git/objects/d5/1bdb045f5f841984734bcf2e1a601462ae6808": "2be92f968aa85f2e2e088e6f1a3d0160",
".git/objects/b7/58e8ca5dd90ead08ab9be538fd476e2b2dec9c": "c8054de50fab67248992203cb218d566",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/f307a1cd3ae0319ce2928408b1ec41b1d85829": "03a69380ce1cda25d1c2c58f88fd8b4c",
".git/objects/a6/366139473c9e13e593ac2696ecc33992fcdbad": "e5aa10dde562e86145579f69ef34043b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/07a727ea3fbb0faaeaf1f2c1898c0bcd6087d5": "d148ec575ebde5658cb5bc9813fff850",
".git/objects/f7/6e74b18fc777be3f8e0f037aaa752d1d0c8082": "ced953c15005172fd59f78b7cdd9d8cf",
".git/objects/e8/eefd693dfbb74c5ca4ec21874a11fe5c6bb96f": "1abf0909dcecf7fc095ee86ee98f0511",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/e9/5c9fb9ee0551f6245d8b45d83be47030e65495": "1237d21044816009d9f90affaab686fb",
".git/objects/f1/a667276c16b4b36959948198b32c7ae50764af": "cbf458442933b70b6b840d07989cbd74",
".git/objects/e0/63be9dbbb083ad34af99f26d7209ed66a62b02": "9cdb6c4a53515287bfbe8863e61282d4",
".git/objects/46/f7ed56987313fb0b8f574066ac8a962a794f2b": "3b85c233a996c2bdd07f8458231846e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/bb12492cf3c30e70021fd76ade813fbb44d943": "0c1bd72ccdde52003a89607e3d3563c0",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/7d24310fb1a9d51540ccd99de4ed0f89d1315b": "2fb434f19824d5b18554023cce669e0c",
".git/objects/24/62ac083c34f90449559e36984b35b31533dfe2": "a85a9c282533db07753249151ac51744",
".git/objects/24/affde0c4f90d92f66474c30b840927e22ae6e0": "e7d24fa8810cfb5cd5507b872e9dddec",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/12/bfee45addc557c6f9b6b5aa75e71b5f12ecc64": "30eb0719132ce5fd58024b4494e11598",
".git/objects/8c/8a0936a572f56cfbec61ff40a2250701a21df8": "5ef9a70b376d40be1ef6ba278d78f96d",
".git/objects/85/4dced92e0b0a02d34a26d9ef654a2955cbbf20": "098f814170ea0c239e19696ba4d7bc36",
".git/objects/1c/2edc1628f29b6c0e0282b13e6134d225ad4611": "7e81c525f59828e20d0ef29f57ef813d",
".git/objects/40/3912630c4e275852d6c83d1a28cb676d90d0bf": "9497e1d0eba4303095157151ef2ecc88",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/aacd68b17257abe76cb50485660dda52746158": "0b0c8af99b1de9c585bc4610593564d8",
".git/objects/78/0d1f428a27f51bbafcd9ec8c844792c6776220": "1be6f38990430dc7d990019c21604b2c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "39d80c2e6f539b7cd64609e78f2988f8",
".git/logs/refs/heads/main": "5b1fed0e37dd220852063c0a1ee8f16a",
".git/logs/refs/remotes/origin/main": "e9c2b93010a67eb37ee3dc4419d0bed4",
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
".git/refs/heads/main": "0e1bedb7b02c33a137910602f9f5e4da",
".git/refs/remotes/origin/main": "0e1bedb7b02c33a137910602f9f5e4da",
".git/index": "7006747c935113b4f5a4e69e1b726912",
".git/COMMIT_EDITMSG": "063991aceac1c9474cf1e114ec9a1e4a",
".git/FETCH_HEAD": "7b1fa26edd476a714f16c8721e06e905",
"assets/AssetManifest.json": "2c145ca0066ba7089017a2e6ac79ac6c",
"assets/NOTICES": "9b8b08af9cbcc621b147494f0379d717",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4188416ad036cc6e0c91e349f3ae2afe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8acdc73eec62727b56a091df330f33d4",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/logonobackground.png": "dd96db50f14d4ba45d07407c9447f492",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
