
var API = 'http://blkapp.eoi.com';
var ENV = 'production';
if (window.location.hostname == 'blkapp.eoi.local') {
    API = 'http://blkapp.eoi.local';
    ENV = 'dev';
}
   
/* ------------- */   
/* LOCAL STORAGE */
/* ------------- */     
function DB(key) {
   var store = window.localStorage;
   return {
      get: function() {
         //window.localStorage.getItem('user_lat');
         return JSON.parse(store[key] || '{}');   
      },
      put: function(data) {
         store[key] = JSON.stringify(data);
         //window.localStorage.setItem('user_lat', LatitudeCarteClick);
      }
   }
}

/* ------------- */   
/* NATIVE AJAX   */
/* ------------- */       
function getJsonAsync(url, data, callback) {
      var xhr = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
      /*
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            //done
            json_data = JSON.parse(xhr.responseText);          
            return json_data;
          }
        };
      */
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = doNothing;
          callback(xhr, xhr.status);
        }
      };

      xhr.open('GET', url, true);
      xhr.setRequestHeader("Content-type","application/json");
      json_data = JSON.stringify(data);
      xhr.send(json_data);
}
    
function getJsonSync(url) {
      var xhr = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();                
      xhr.open('GET', url, false);
      xhr.send(null);            
      if (xhr.status === 200) {          
          json_data = JSON.parse(xhr.responseText);          
          return json_data;
      }                   
      //return JSON.parse('{}');       
}
    
/* ------------- */   
/* LOAD CONFIG   */
/* ------------- */       
var dbAppConfig = dbAppConfig || DB("app_config");
var CONFIG = dbAppConfig.get();
var ts = Math.round((new Date()).getTime() / 1000); // in seconds
if (Object.keys(CONFIG).length == 0 || (CONFIG.ts + 3600 < ts)) {  
   CONFIG = getJsonSync(API+"/ajax.php?m=getconfig");
   dbAppConfig.put(CONFIG);
}
console.log(CONFIG);
   