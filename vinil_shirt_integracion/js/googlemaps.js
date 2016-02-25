
//globales como espacio de nombres
var globals = (function (ns) {
    ns.map,
    ns.lat,
    ns.lng,
    ns.marker,
    ns.title = "Tienda Vinil-Shirt",
    ns.img = '../imagenes/logogoogle.png',
    ns.vinilmap = document.getElementById('map');
    return ns;
}({}));


function initMap() {
  globals.map = new google.maps.Map(globals.vinilmap, {
    center: {lat: globals.lat , lng: globals.lng },
    zoom: 14 //1:world, 5:landmass/continent, 10:city, 15:streets, 20 buildings
  });
  marker = new google.maps.Marker({
    position: {lat: globals.lat , lng: globals.lng },
    map: globals.map,
    draggable: false,
    animation: google.maps.Animation.DROP,//BOUNCE
    title: globals.title,
    icon:globals.img
  });

  //animacion al hacer click en el icon
  marker.addListener('click', toggleBounce);
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  //ventana de informacion al hacer doble click sobre el icono
  marker.addListener('dblclick', liveWindow);
  var contentstring = '<div class="infowindow">Vinil-Shirt</div><div><img src="../imagenes/fotoinfowindow.png" class="infoimg" /><p>Tu tienda de camisetas y mas productos personalizados.</p><p>Ven y disfruta de los mejores precios y ofertas para clientes.</p></div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentstring
  });
  function liveWindow() {
    infowindow.open(globals.map, marker);
  }
}

function getcurrent() {
  var geo_success = function (pos) {
    globals.lat = pos.coords.latitude;
    globals.lng = pos.coords.longitude;
    console.log(globals.lat + ' : ' + globals.lng);
    document.getElementById("bodyvinil").innerHTML = "<script async defer src='https://maps.googleapis.com/maps/api/js?key=AIzaSyC9mZ0MhE3N18hHHf0biTusN-uyqNsJXbI&callback=initMap'></script>";
  //crear elemento div map para mostrar el mapa
  };
  function geo_error() {
    alert("lo siento, tu posicion no es accesible");
  }

  var geo_options = {
    enableHighAccuracy: true, 
    maximumAge        : 30000, 
    timeout           : 27000
  };
  navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
  
  
}

function init() {
  document.getElementById("geogoogle").addEventListener('click', getcurrent, false);
}

window.onload = init;