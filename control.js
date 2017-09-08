//øÿ÷∆…Ë±∏
           
  function mobile_device_detect(url){
    var thisOS=navigator.platform;
    var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");
    for(var i=0;i<os.length;i++){
    if(thisOS.match(os[i])){   
      window.location=url;
    }
   }

   if(navigator.platform.indexOf('iPad') != -1){
    window.location=url;
    }

    var check = navigator.appVersion;
    if( check.match(/linux/i) ){
     if(check.match(/mobile/i) || check.match(/X11/i)){
      window.location=url;
    }  
    }

    Array.prototype.in_array = function(e){
    for(i=0;i<this.length;i++){
      if(this[i] == e) return true;
    }
    return false;
    }
  }
  mobile_device_detect("https://m.yuan.org");