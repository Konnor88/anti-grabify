browser.webRequest.onBeforeRequest.addListener(function(details) { 
	browser.tabs.update({
 url: "blocked.html"
});
	return {cancel: true};

},
{urls: ["https://grabify.link/*", "https://bmwforum.co/*", "https://bmwforum.co/*", "https://leancoding.co/*", "https://spottyfly.com/*", "https://stopify.co/*", "https://yoütu.be/*", "https://discörd.com/*", "https://minecräft.com/*", "https://freegiftcards.co/*", "https://disçordapp.com/*", "https://xda-developers.us/*", "https://quickmessage.us/*", "https://fortnight.space/*", "https://fortnitechat.site/*", "https://youshouldclick.us/*", "https://joinmy.site/*", "https://crabrave.pw/*", "https://grabify.link/*", "https://xn--yotu-1ra.be/*", "https://xn--disordapp-s3a.com/*", "https://xn--minecrft-5za.com/*", "https://xn--discrd-zxa.com/*", "https://iplogger.org/*", "https://2no.co/*", "https://iplogger.com/*", "https://iplogger.ru/*", "https://yip.su/*","https://bmwforum.co/*", "https://bmwforum.co/*", "https://curiouscat.club/*", "https://catsnthings.com/*", "https://catsnthings.fun/*" ]},
["blocking"]);
