// Current Page Title
chrome.tabs.query({active:true, currentWindow:true}, function(tabs){

    // console.log(chrome.runtime.getManifest().version); // 1.4

    var title = tabs[0].title;
    $('#fill-title').html(title);
    var len = title.toString().length;

    if(len > 30 && 60 > len) {
        document.getElementById("titlelen").className = "font-semibold bg-super-green flex h-6 items-center px-4 rounded-full text-center text-white text-xs";
    }else{
        document.getElementById("titlelen").className = "font-semibold bg-super-red flex h-6 items-center px-4 rounded-full text-center text-white text-xs";
    }

    document.getElementById("titlelen").innerHTML = len + ' characters';


    let tab = tabs[0].id;

    // Description
    chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/meta.js"]}, (results) => {

        if(results == null){
            document.getElementById("fill-description").innerHTML = "Description not set";
        }else {
            const res = JSON.stringify(results[0]['result']).slice(1,-1);

            document.getElementById("fill-description").innerHTML = res;
            document.getElementById("desclen").innerHTML = res.length + ' characters';

            if(res.length < 161 && res.length > 80) {
                document.getElementById("desclen").className = "font-semibold bg-super-green flex h-6 items-center px-4 rounded-full text-center text-white text-xs";
            }
            else{
                document.getElementById("desclen").className = "font-semibold bg-super-red flex h-6 items-center px-4 rounded-full text-center text-white text-xs";
            }
        }
    });



    // Mevcut URL
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        if(tabs[0].url == null) {
            document.getElementById("CurrentUrl").innerHTML = "Url not set";
        }else {
            let url = tabs[0].url;
            document.getElementById("CurrentUrl").innerHTML = url;
        }
    });


    // Canonical URL
    chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/canonical.js"]}, function(results) {

        if(results == null || results[0]['result'] == null) {
            document.getElementById("showCanonicalUrl").innerHTML = "Canonical not set";
        }else{
            const canonicalUrl = results[0]['result'];
             document.getElementById("showCanonicalUrl").innerHTML = canonicalUrl;
        }

    });


    // Robots Tags
    chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/robots.js"]}, function(results) {
        if(results == null) {
            document.getElementById("showRobots").innerHTML = "Robots not set";
        }else {
            const Robots = results[0]['result'];
            document.getElementById("showRobots").innerHTML = Robots;

        }
    });

    // H Tags Deneme
    chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/hTags.js"]}, function(results) {
        if(results == null) {
            document.getElementById("h1-tags").innerHTML = "Htags not set";
        }else {
            const h1Tagss = results[0]['result'];
            //             document.getElementById("h1-tags").innerHTML = JSON.stringify(h1Tagss);
            // document.getElementById("h1-tags").innerHTML = document.getElementsByTagName("h1").length;

        }
    });

    // background js deneme
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if(request.action === "getSource") {

            document.getElementById("text-temp").innerHTML = request.source;
            sendResponse({sourceCode: document.documentElement.outerHTML});
        }
    });

    // background js deneme 2
    const activeTabId=tabs [0].id
    let tempHCount = 0;
    chrome.scripting.executeScript(
    {
        target:{tabId:activeTabId},
        function:()=> {
            // document.body.style.backgroundColor = "red";
            // alert(document.getElementsByTagName("h2").length)
            //tempHCount = document.getElementsByTagName("h3").length;
            //alert('H1 Sayısı: ' + tempHCount);
        },
    });
    //document.getElementById('h1-tags').innerHTML = tempHCount;

    // background js deneme 3
    chrome.scripting.executeScript({target: {tabId: activeTabId}, files: ["data/h1Count.js"]}, function(results) {
       if(results == null || results[0]['result'] == null) {
            document.getElementById("h1-tags").innerHTML = "Htag not set";
        }else{
            const h1Count = results[0]['result'];
            document.getElementById("h1-count").innerHTML = h1Count;
        }
    });


     // Robots Tags
     chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/indexChecker.js"]}, function(results) {
        if(results == null || results[0]['result'] == null) {
            document.getElementById("indexable").innerHTML = "No-Indexable";
            document.getElementById("indexable-bar").className = "font-semibold bg-super-red flex h-6 items-center px-4 rounded-full text-center text-white text-xs";
        }else {

            if(results[0]['result'].includes('noindex')){

                document.getElementById('indexable').innerHTML = 'No-Indexable';
                document.getElementById("indexable-bar").className = "font-semibold bg-super-red flex h-6 items-center px-4 rounded-full text-center text-white text-xs";

            }else if(results[0]['result'].includes('nofollow')){

                document.getElementById('indexable').innerHTML = 'No-Indexable';
                document.getElementById("indexable-bar").className = "font-semibold bg-super-red flex h-6 items-center px-4 rounded-full text-center text-white text-xs";

            }else{

                document.getElementById('indexable').innerHTML = 'Indexable';
                document.getElementById("indexable-bar").className = "font-semibold bg-super-green flex h-6 items-center px-4 rounded-full text-center text-white text-xs";

            }

        }
    });

    // Site Language
    chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/lang.js"]}, function(results) {
        if(results == null || results[0]['result'] == null) {
            document.getElementById("showLang").innerHTML = "Language not set";
        }else {
            const Lang = results[0]['result'];
            document.getElementById("showLang").innerHTML = Lang;
        }
    });

    // Sitemap
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        if(tabs[0].url == null) {
            document.getElementById("showSitemap").innerHTML = "Sitemap not set";
        }else {
            let baseUrl = getDomain(tabs[0].url);
            document.getElementById("showSitemap").href = 'http://' + baseUrl + '/sitemap.xml';
        }
    });



    // Robot.txt
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {

        if(tabs[0].url == null) {
            document.getElementById("showRobotsTxt").innerHTML = "Robots.txt not set";
        }else if(chrome.runtime.lastError){
            document.getElementById("showRobotsTxt").innerHTML = "Default Tab";
        }else{
            let baseUrl = getDomain(tabs[0].url);
            document.getElementById("showRobotsTxt").href = 'http://' + baseUrl + '/robots.txt';
        }
    });

     // Quicklinks
     chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        if(tabs[0].url == null) {
            document.getElementById("page_speed_insight").href =  '#';
            document.getElementById("rich_snippet").href =  '#';
            document.getElementById("mobile_friendly").href =  '#';
            document.getElementById("search_result").href =  '#';
        }else {
            let domain = tabs[0].url;
            document.getElementById("page_speed_insight").href =  'https://pagespeed.web.dev/report?url=' + domain;
            document.getElementById("rich_snippet").href =  'https://search.google.com/test/rich-results?url=' + domain;
            document.getElementById("mobile_friendly").href =  'https://search.google.com/test/mobile-friendly?url=' + domain;
            document.getElementById("search_result").href =  'https://www.google.com/search?q=site:' + domain;
        }
    });



});   // chrome tabs sonu

