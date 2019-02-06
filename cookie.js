

let expireDate = new Date();
let time = expireDate.getTime();
let expireTime = time + 2592000000;
expireDate.setTime(expireTime);

getCookie(name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

if (getCookie('name')) {
  
}


document.cookie = 'name=' + value + '; expires=' + expireDate.toGMTString() + ';path=/';
