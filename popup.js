let spamEnabled = false;

document.getElementById("toggle-spam").addEventListener("click", () => {
  spamEnabled = !spamEnabled;
  document.getElementById("status").innerText = spamEnabled ? "On" : "Off";

  if (spamEnabled) {
    chrome.alarms.create("brainrotSpam", { periodInMinutes: 0.1 });
  } else {
    chrome.alarms.clear("brainrotSpam");
  }
});
