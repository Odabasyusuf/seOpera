// Current Page Title
chrome.tabs.query({active:true, currentWindow:true}, function(tabs){

   let tab = tabs[0].id;

   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/headers/h1Count.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("h1-count").innerHTML = 0;
      }else{
         const h1Count = results[0]['result'];
         document.getElementById("h1-count").innerHTML = h1Count;
      }
   });

   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/headers/h2Count.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("h2-count").innerHTML = 0;
      }else{
         const h2Count = results[0]['result'];
         document.getElementById("h2-count").innerHTML = h2Count;
      }
   });

   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/headers/h3Count.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("h3-count").innerHTML = 0;
      }else{
         const h3Count = results[0]['result'];
         document.getElementById("h3-count").innerHTML = h3Count;
      }
   });

   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/headers/h4Count.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("h4-count").innerHTML = 0;
      }else{
         const h4Count = results[0]['result'];
         document.getElementById("h4-count").innerHTML = h4Count;
      }
   });

   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/headers/h5Count.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("h5-count").innerHTML = 0;
      }else{
         const h5Count = results[0]['result'];
         document.getElementById("h5-count").innerHTML = h5Count;
      }
   });

   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/headers/h6Count.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("h6-count").innerHTML = 0;
      }else{
         const h6Count = results[0]['result'];
         document.getElementById("h6-count").innerHTML = h6Count;
      }
   });

   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/imgCount.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("img-count").innerHTML = 0;
      }else{
         const imgCount = results[0]['result'];
         document.getElementById("img-count").innerHTML = imgCount;
      }
   });


   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/aCount.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("a-count").innerHTML = 0;
      }else{
         const aCount = results[0]['result'];
         document.getElementById("a-count").innerHTML = aCount;
      }
   });
});