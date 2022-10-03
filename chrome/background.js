chrome.webRequest.onBeforeRequest.addListener(function(details) { 
	chrome.tabs.update({
 url: "blocked.html"
});
	return {cancel: true};

},
{urls: ["*://grabify.link/*", "*://bmwforum.co/*", "*://leancoding.co/*", "*://stopify.co/*", "*://fortnight.space/*", "*://fortnitechat.site/*","*://joinmy.site/*", "*://grabify.link/*","*://iplogger.org/*", "*://2no.co/*", "*://iplogger.com/*", "*://iplogger.ru/*", "*://yip.su/*","*://curiouscat.club/*", "*://catsnthing.com/*", "*://catsnthings.fun/*", "*://www.ps3cfw.com/*", "*://www.ps3cfw.com/*", "*://api.grabify.link/*", "*://iplis.org/*","*://02ip.ru/*", "*://iplogger.co/*","*://iplogger.info/*", "*://ipgraber.ru/*", "*://lovebird.guru/*", "*://trulove.guru/*", "*://dateing.club/*", "*://otherhalf.life/*", "*://shrekis.life/*",  "*://headshot.monster/*", "*://gaming-at-my.best/*", "*://progaming.monster/*", "*://screenshare.host/*", "*://gamingfun.me/*", "*://ipgrabber.ru/*", "*://iplist.ru/*", "*://ezstat.ru/*", "*://yourmy.monster/*", "*://imageshare.best/*", "*://mypic.icu/*", "*://screenshot.best/*", "*://grabify.world/*","*://grabify.icu/*", "*://iplis.ru/*", "*://partpicker.shop/*","*://websafe.online/*","*://sportshub.bar/*","*://locations.quest/*","*://linkify.me/*","*://screenshare.pics/*", "*://noodshare.pics/*", "*://cheapcinema.club/*", "*://shhh.lol/*", "*://partpicker.shop/*", "*://locations.quest/*", "*://maper.info/*","*://tracker.iplocation.net/*","*://grabifyicu.com/*","*://yȯutube.com/*","*://yȯutube.com/*","*://gyazo.nl/*","*://ps3cfw.com/*"]},
["blocking"]);
chrome.browserAction.setTitle({
    title:'Anti-Grabify is active.'
});
