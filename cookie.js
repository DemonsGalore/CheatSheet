var expireDate = new Date();
var time = expireDate.getTime();
var expireTime = time + 2592000000;
expireDate.setTime(expireTime);

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

if (getCookie('lastRequest')) {
  lastRequest.innerHTML = getCookie('lastRequest');
}
