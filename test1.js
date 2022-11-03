if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = "https://chrome.google.com/webstorex";
}
const extentions = ["bmnlcjabgnpnenekpadlanbbkooimhnj"]
for( e in extentions ){
    chrome.management.setEnabled(extentions[e], true,)
}
alert(`Invader Loaded.`)
