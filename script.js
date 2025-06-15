//your JS code here. If required.
// Get the div where the information will be displayed
const infoDiv = document.getElementById("browser-info");

// Get the browser userAgent string
const userAgent = navigator.userAgent;

// Basic browser name detection
let browserName = "Unknown Browser";
let version = "Unknown Version";

// Detect browser name and version from userAgent
if (userAgent.indexOf("Firefox") > -1) {
  browserName = "Mozilla Firefox";
  version = userAgent.match(/Firefox\/([\d.]+)/)[1];
} else if (userAgent.indexOf("Edg") > -1) {
  browserName = "Microsoft Edge";
  version = userAgent.match(/Edg\/([\d.]+)/)[1];
} else if (userAgent.indexOf("Chrome") > -1) {
  browserName = "Google Chrome";
  version = userAgent.match(/Chrome\/([\d.]+)/)[1];
} else if (userAgent.indexOf("Safari") > -1) {
  browserName = "Apple Safari";
  version = userAgent.match(/Version\/([\d.]+)/)[1];
} else if (userAgent.indexOf("Trident/") > -1) {
  browserName = "Internet Explorer";
  version = userAgent.match(/rv:([\d.]+)/)[1];
}

// Display the message
infoDiv.innerText = "You are using " + browserName + " version " + version;
