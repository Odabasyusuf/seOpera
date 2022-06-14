// Current Page Title
chrome.tabs.query({active:true, currentWindow:true}, function(tabs){

   let tab = tabs[0].id;

   chrome.scripting.executeScript({target: {tabId: tab}, function: h1c, args:['val']}, (results) => {
      const h1Count = results[0]['result'];
      document.getElementById("h1-count").innerHTML = h1Count;
   });

   chrome.scripting.executeScript({target: {tabId: tab}, function: h2c, args:['val']}, (results) => {
      const h2Count = results[0]['result'];
      document.getElementById("h2-count").innerHTML = h2Count;
   });

   chrome.scripting.executeScript({target: {tabId: tab}, function: h3c, args:['val']}, (results) => {
      const h3Count = results[0]['result'];
      document.getElementById("h3-count").innerHTML = h3Count;
   });

   chrome.scripting.executeScript({target: {tabId: tab}, function: h4c, args:['val']}, (results) => {
      const h4Count = results[0]['result'];
      document.getElementById("h4-count").innerHTML = h4Count;
   });

   chrome.scripting.executeScript({target: {tabId: tab}, function: h5c, args:['val']}, (results) => {
      const h5Count = results[0]['result'];
      document.getElementById("h5-count").innerHTML = h5Count;
   });

   chrome.scripting.executeScript({target: {tabId: tab}, function: h6c, args:['val']}, (results) => {
      const h6Count = results[0]['result'];
      document.getElementById("h6-count").innerHTML = h6Count;
   });


   // IMG Count
   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/imgCount.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("img-count").innerHTML = 0;
      }else{
         const imgCount = results[0]['result'];
         document.getElementById("img-count").innerHTML = imgCount;
      }
   });

   // Links Count
   chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/aCount.js"]}, function(results) {
      if(results == null || results[0]['result'] == null) {
         document.getElementById("a-count").innerHTML = 0;
      }else{
         const aCount = results[0]['result'];
         document.getElementById("a-count").innerHTML = aCount;
      }
   });


   // H1 Array
   chrome.scripting.executeScript({target: {tabId: tab}, function: hArray, args:['h1']}, (results) => {
      if(results[0]['result'][0] != null) {
         const hCount = results[0]['result'];
         var hContent;
         for (i = 0; i < hCount.length; i++) {
            if (i === 0)
               hContent = 'H1 - ' + hCount[0] + '<br>';
            else
               hContent += 'H1 - ' + hCount[i] + '<br>';
         }
         document.getElementById("h1-contents").innerHTML = hContent;
      }
   });
   // H2 Array
   chrome.scripting.executeScript({target: {tabId: tab}, function: hArray, args:['h2']}, (results) => {
      if(results[0]['result'][0] != null) {
         const hCount = results[0]['result'];
         var hContent;
         for (i = 0; i < hCount.length; i++) {
            if (i === 0)
               hContent = 'H2 - ' + hCount[0] + '<br>';
            else
               hContent += 'H2 - ' + hCount[i] + '<br>';
         }
         document.getElementById("h2-contents").innerHTML = hContent;
      }
   });
   // h3 Array
   chrome.scripting.executeScript({target: {tabId: tab}, function: hArray, args:['h3']}, (results) => {
      if(results[0]['result'][0] != null) {
         const hCount = results[0]['result'];
         var hContent;
         for (i = 0; i < hCount.length; i++) {
            if (i === 0)
               hContent = 'H3 - ' + hCount[0] + '<br>';
            else
               hContent += 'H3 - ' + hCount[i] + '<br>';
         }
         document.getElementById("h3-contents").innerHTML = hContent;
      }
   });
   // h4 Array
   chrome.scripting.executeScript({target: {tabId: tab}, function: hArray, args:['h4']}, (results) => {
      if(results[0]['result'][0] != null) {
         const hCount = results[0]['result'];
         var hContent;
         for (i = 0; i < hCount.length; i++) {
            if (i === 0)
               hContent = 'H4 - ' + hCount[0] + '<br>';
            else
               hContent += 'H4 - ' + hCount[i] + '<br>';
         }
         document.getElementById("h4-contents").innerHTML = hContent;
      }
   });
   // h5 Array
   chrome.scripting.executeScript({target: {tabId: tab}, function: hArray, args:['h5']}, (results) => {
      if(results[0]['result'][0] != null) {
         const hCount = results[0]['result'];
         var hContent;
         for (i = 0; i < hCount.length; i++) {
            if (i === 0)
               hContent = 'H5 - ' + hCount[0] + '<br>';
            else
               hContent += 'H5 - ' + hCount[i] + '<br>';
         }
         document.getElementById("h5-contents").innerHTML = hContent;
      }
   });
   // h6 Array
   chrome.scripting.executeScript({target: {tabId: tab}, function: hArray, args:['h6']}, (results) => {
      if(results[0]['result'][0] != null) {
         const hCount = results[0]['result'];
         var hContent;
         for (i = 0; i < hCount.length; i++) {
            if (i === 0)
               hContent = 'H6 - ' + hCount[0] + '<br>';
            else
               hContent += 'H6 - ' + hCount[i] + '<br>';
         }
         document.getElementById("h6-contents").innerHTML = hContent;
      }
   });




   // ARRAY FUNCTIONS //
   function hArray(val){
      function ShowResults(value, index, ar) {
         return value.textContent;
      }
      var a = document.getElementsByTagName(val);

      var hList = [];
      var inputList = Array.prototype.slice.call(a);
      for (i=0; i<inputList.length; i++){
         hList[i] = ShowResults(inputList[i]);
      }
      return hList;
   }
   // function h1Array(val){
   //    function ShowResults(value, index, ar) {
   //       return value.textContent;
   //    }
   //    var a = document.getElementsByTagName(`h1`);
   //
   //    var h1List = [];
   //    var inputList = Array.prototype.slice.call(a);
   //    for (i=0; i<inputList.length; i++){
   //       h1List[i] = ShowResults(inputList[i]);
   //    }
   //    return h1List;
   // }


   // COUNT FUNCTIONS //
   function h1c(val){
      return document.getElementsByTagName(`h1`).length;
   }
   function h2c(val){
      return document.getElementsByTagName(`h2`).length;
   }
   function h3c(val){
      return document.getElementsByTagName(`h3`).length;
   }
   function h4c(val){
      return document.getElementsByTagName(`h4`).length;
   }
   function h5c(val){
      return document.getElementsByTagName(`h5`).length;
   }
   function h6c(val){
      return document.getElementsByTagName(`h6`).length;
   }

   /*
      chrome.scripting.executeScript({target: {tabId: tab}, files: ["data/headers/h1Count.js"]}, function(results) {
         if(results == null || results[0]['result'] == null) {
            document.getElementById("h1-count").innerHTML = 0;
         }else{
            const h1Count = results[0]['result'];
            document.getElementById("h1-count").innerHTML = h1Count         }
      });
   */

});