
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.cmd === 'scrollBottom') {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })
    sendResponse('我是来自content的成功回调')
  }
})
