const phrases = [
    "i like my sootcase",
    "what the sigma",
    "gyatt",
    "skibidi toilet",
    "look who can't center a div",
    "bro is literally ohio",
    "bro can't mew AND can't center a div",
    "only in ohio",
    "treat me like white tees",
    "glizzy",
    "kai cenat rizz",
    "i go to school now"
  ];
  
  function sendBrainrotNotification() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "you lost a braincell",
      message: randomPhrase
    });
  }
  
  chrome.alarms.create("brainrotSpam", { periodInMinutes: 0.03 });
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "brainrotSpam") {
      sendBrainrotNotification();
    }
  });
  