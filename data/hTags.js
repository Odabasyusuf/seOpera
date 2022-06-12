chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        // if(tabs[0].url == null) {
        //     document.getElementById("CurrentUrl").innerHTML = "Url not set";
        // }else {
        //     let url = tabs[0].url;
        //     document.getElementById("CurrentUrl").innerHTML = url;
        // }
        // let url = tabs[0];
        // document.getElementById("h1-tags").innerHTML = url + "asd ";
    });

    // var a = document.querySelector("h1");
    //
    // if (a) {
    //     document.querySelector("h1");
    //     //alert("Ön izleme: " + tabs[0]);
    //     let myString = JSON.stringify(tabs[0]);
    //     document.getElementById("h1-tags").innerHTML = myString;
    // } else {
    //     'H Tags Not Found.';
    // }
    //
    // chrome.tabs.sendMessage(tabs[0].id, {action: "getPage"}, function(response) {
    //
    //     var importedCode = response.searchResults;
    //     var fakeHtml = document.createElement( 'html' );
    //     fakeHtml.innerHTML = importedCode; // recieved String becomes html
    //     alert(importedCode);
    //
    // });


});

