chrome.action.onClicked.addListener(function () {
    chrome.tabs.executeScript(null, {
        code: "alert('deneme');"
    });

    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            var id = tabs[i].id;
            var url = tabs[i].url;
            method1(id);
            method2(id);
            method3(url);
        }
    });
});

function method1(tabId) {
    chrome.tabs.executeScript(tabId, { "code": "document.documentElement.outerHTML;" }, function (result) {
        console.log(result);
    });
}

function method2(id) {
    chrome.tabs.sendMessage(id, {action: "getSource"}, function(response) {
        console.log(response.sourceCode);
    });
}

function method3(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(xhr.responseText);
    };
    xhr.open("GET", url);
    xhr.send();
}