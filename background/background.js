chrome.contextMenus.create({
	title: "置顶",
	onclick: function(){
    chrome.tabs.executeScript({code: 'document.documentElement.scrollTop = 0'})
	}
})


chrome.contextMenus.create({
	title: "置底",
	onclick: function(){
		sendMessageToContentScript({
			cmd:'scrollBottom'
		}, function(message) {
			console.log(message)
		})
	}
})

function sendMessageToContentScript(message, callback) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
			if(callback) callback(response);
		})
	})
}
