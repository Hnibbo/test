
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.61a07f15cc768a0bb377.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/578.baseline.en.f1593181918b2c5ba06d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.baseline.en.167d9aca6a4c605025a7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.baseline.en.96d1a37bf15dfc133f95.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.2d1b7d9cd46fbb66805c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.baseline.en.68ceefcc66cfc32ca175.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.baseline.en.529662d37b89428e3486.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/917.baseline.en.88daeefe46c532f2180e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.baseline.en.2bcddb1bebd8d00bde9a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.baseline.en.b1b684188b0ee98f08c8.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/578.baseline.en.6ba5472cfd3764613c2a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a3984c31989d09f92fc0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.baseline.en.5f2080c96ce3453038d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.baseline.en.a1c092d975f9701ce3b1.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0527/6880/0933/files/transparent_x320.png?v=1638627080","https://cdn.shopify.com/s/files/1/0527/6880/0933/files/new_badge_2000x.png?v=1638626994"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  