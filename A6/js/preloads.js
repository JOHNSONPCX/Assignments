
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.BrBVQSE2.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.c9rtGH41.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.H99ruvE0.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.D3vav46P.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory-legacy.DGrzsHHQ.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-utilities-legacy.B3IKI8pu.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BW3R3WiF.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-object-legacy.jHzbO21X.js","/cdn/shopifycloud/checkout-web/assets/c1/purchasing-company-isValidPurchasingCompanyBillingAddress-legacy.1V7R2WVI.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes-legacy.BKQYo-M6.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.C8LG-bvC.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.CZoM8wRK.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.DVgdgob5.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.C4-oCIYJ.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index-legacy.CSeRVJ-9.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.BXmuCsHS.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.Q0CrikCd.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.IA1-IEpv.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.Bx2_gEAy.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.CLgQZFWc.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour-legacy.5h0q865Q.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.Sr6csZNG.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.DddcsJ3r.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCheckoutProtocolDarkTheme-legacy.0pl0g_CT.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.CKCmTe74.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.CnKftAiZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.D_U2FeI-.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.ZkMfjum3.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.3h71Y_NJ.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.BISy5c5j.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.BkshR0w5.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BmlIeaUy.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.CgAi90Ua.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.DhWHteeH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.Bs0KQZAr.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.gUI9jJkc.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.B1PVi9Sb.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.DPsEBQir.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.eiJlqsrT.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.09UK6_Uj.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.CikYwY-T.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.DWXGr78O.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.BOveTifu.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy._OWVHlOh.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.Wt1GGxkN.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.B61vYr4d.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.kRXwS4Te.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.BKsYu9zR.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.BksaPLOa.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.DEQHs04-.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.DuBY7Bz5.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.BdfFlsyZ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.a78Ba8EY.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.wFhyrUMq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.DQMDi-Af.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.B2CQj75N.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.kk2Rhrst.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets-legacy.3BwBICtq.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.BlMwKZIc.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.hK4x4ysh.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.CT2tY4XJ.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-legacy.lvCUB399.worker.js"];
      var styles = [];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/lato/lato_n4.c3b93d431f0091c8be23185e15c9d1fee1e971c5.woff2?h1=dHdvbGVhdmVzdGVhLmNvbQ&hmac=5992a0f89e11eea0bc92a6b76e1833e1555e5a7c342a19d634d9335eefcd4b03","https://fonts.shopifycdn.com/lato/lato_n7.900f219bc7337bc57a7a2151983f0a4a4d9d5dcf.woff2?h1=dHdvbGVhdmVzdGVhLmNvbQ&hmac=9163dbd6091a3bf28726f1daddfd2b2b80b2ac2201f84a9b0ce961810fe780e1"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0297/8132/7932/files/Two-Leaves-and-a-Bud_logo_Indigo_1200_a66c032a-f2a6-429b-a710-39d990cb1caa_x320.png?v=1649349542"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
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
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  