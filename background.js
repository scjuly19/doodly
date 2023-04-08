// Add listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    console.log(message,sender)
    window.tabId = sender.tab.id,
    window.configs = message.configs
})
function buttonClicked(tab){
const msg ={
    message : "clicked"
}
chrome.tabs.sendMessage(tab.id, msg);
}