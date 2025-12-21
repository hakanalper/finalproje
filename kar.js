function karTanesi() {
  var karTanesi = document.createElement('i');
  var zemin = document.getElementById("karAlani");
  var body = document.getElementsByTagName("BODY")[0];
  var bodyYukseklik = body.clientHeight;

  zemin.style.height = bodyYukseklik + "px";
  karTanesi.classList.add('fa','fa-snowflake-o');
  karTanesi.style.left = Math.random() * body.clientWidth + 'px';
  karTanesi.style.opacity = Math.random();
  karTanesi.style.animationDuration = Math.random() * 3 + 2 + 's';

  zemin.appendChild(karTanesi);

  setTimeout(() => {
    karTanesi.remove();
  }, 7000);
}

setInterval(karTanesi, 80);