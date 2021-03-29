function setI18Nmessage(){
  var local_mesagge= chrome.i18n.getMessage("testMessage");
  if (local_mesagge){
    document.getElementById("messageI18nFromJs").innerHTML= local_mesagge;
  }
}


document.addEventListener("DOMContentLoaded", setI18Nmessage());
