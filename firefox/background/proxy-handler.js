// Location of the proxy script, relative to manifest.json
const proxyScriptURL = "proxy/proxy-script.js";

// Default settings
const defaultSettings = {
   blockedHosts: ["grabify.link", "bmwforum.co", "bmwforum.co", "leancoding.co", "spottyfly.com", "stopify.co", "yoütu.be", "discörd.com", "minecräft.com", "freegiftcards.co", "disçordapp.com", "xda-developers.us", "quickmessage.us", "fortnight.space", "fortnitechat.site", "youshouldclick.us", "joinmy.site", "crabrave.pw", "grabify.link", "xn--yotu-1ra.be", "xn--disordapp-s3a.com", "xn--minecrft-5za.com", "xn--discrd-zxa.com", "iplogger.org", "2no.co", "iplogger.com", "iplogger.ru", "yip.su"]
 }


browser.proxy.register(proxyScriptURL);


browser.proxy.onProxyError.addListener(error => {
  console.error(`Proxy error: ${error.message}`);
});


function handleInit() {
  // update the proxy whenever stored settings change
  browser.storage.onChanged.addListener((newSettings) => {
    browser.runtime.sendMessage(newSettings.blockedHosts.newValue, {toProxyScript: true});
  });

  // get the current settings, then...
  browser.storage.local.get()
    .then((storedSettings) => {
      // if there are stored settings, update the proxy with them...
      if (storedSettings.blockedHosts) {
        browser.runtime.sendMessage(storedSettings.blockedHosts, {toProxyScript: true});
      // ...otherwise, initialize storage with the default values
      } else {
        browser.storage.local.set(defaultSettings);
      }

    })
    .catch(()=> {
      console.log("Error retrieving stored settings");
    });
}

function handleMessage(message, sender) {
  // only handle messages from the proxy script
  if (sender.url !=  browser.extension.getURL(proxyScriptURL)) {
    return;
  }

  if (message === "init") {
    handleInit(message);
  } else {
    // after the init message the only other messages are status messages
    console.log(message);
  }
}

browser.runtime.onMessage.addListener(handleMessage);
