chrome.webRequest.onBeforeRequest.addListener(function(details) { 
	chrome.tabs.update({
 url: "blocked.html"
});
	return {cancel: true};

},
{urls: ["*://grabify.link/*", "*://bmwforum.co/*", "*://leancoding.co/*", "*://spottyfly.com/*", "*://stopify.co/*", "*://yoütu.be/*", "*://discörd.com/*", "*://minecräft.com/*", "*://freegiftcards.co/*", "*://disçordapp.com/*", "*://xda-developers.us/*", "*://quickmessage.us/*", "*://fortnight.space/*", "*://fortnitechat.site/*", "*://youshouldclick.us/*", "*://joinmy.site/*", "*://crabrave.pw/*", "*://grabify.link/*","*://iplogger.org/*", "*://2no.co/*", "*://iplogger.com/*", "*://iplogger.ru/*", "*://yip.su/*","*://bmwforum.co/*", "*://bmwforum.co/*", "*://curiouscat.club/*", "*://catsnthings.com/*", "*://catsnthings.fun/*", "*://www.ps3cfw.com/*", "*://www.ps3cfw.com/*","*://blasze.tk/", "*://blasze.tk/", "*://api.grabify.link/*", "*://iplis.org/*","*://02ip.ru/*", "*://iplogger.co/*","*://iplogger.info/*", "*://ipgraber.ru/*", "*://lovebird.guru/*", "*://trulove.guru/*", "*://dateing.club/*", "*://otherhalf.life/*", "*://shrekis.life/*", "*://datasig.io/*", "*://datauth.io/*", "*://headshot.monster/*", "*://gaming-at-my.best/*", "*://programing.monster/*", "*://screenshare.host/*", "*://gamingfun.me/*", "*://ipgrabber.ru/*", "*://iplist.ru/*", "*://ezstat.ru/*", "*://yourmy.monster/*", "*://imageshare.best/*", "*://mypic.icu/*", "*://screenshot.best/*", "*://grabify.world/*","*://grabify.icu/*", "*://iplis.ru/*", "*://yoink.rip/*", "*://easterndigital.ga/*", "*://skytechnology.ga/*","*://adobee.cf/*","*://youtbe.ml/*","*://partpicker.shop/*","*://websafe.online/*","*://sportshub.bar/*","*://herald.sbs/*","*://locations.quest/*","*://maifile.cn/*","*://linkify.me/*","*://screenshare.pics/*", "*://noodshare.pics/*", "*://cheapchinema.club/*", "*://shhh.lol/*", "*://partpicker.shop/*", "*://locations.quest/*", "*://maper.info/*","*://tracker.iplocation.net/*"]},
["blocking"]);
chrome.browserAction.setTitle({
    title:'Anti-Grabify is active.'
});
