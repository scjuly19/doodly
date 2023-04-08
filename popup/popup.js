const form = document.getElementById("stroke-form");
const color = document.getElementById("stroke-color");
const width = document.getElementById("stroke-width");
color.value = "black";
width.value = 4;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      color: color.value,
      width: width.value,
      message: "config-changes",
    });
  });
  window.close();
});
