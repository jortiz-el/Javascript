
//globales como espacio de nombres
var globals = (function (ns) {
    ns.map,
    ns.lat,
    ns.lng,
    ns.marker,
    ns.titlemap = "Tienda Vinil-Shirt",
    ns.img = 'imagenes/logogoogle.png',
    ns.vinilmap = document.getElementById('map'),
    ns.flag = 0;
    return ns;
}({}));

//{lat: 40.548680 , lng: -3.626327 }
function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer,
    directionsService = new google.maps.DirectionsService;

      globals.map = new google.maps.Map(globals.vinilmap, {
        center: {lat: 40.548680 , lng: -3.626327 },
        zoom: 14 //1:world, 5:landmass/continent, 10:city, 15:streets, 20 buildings
      });
      globals.marker = new google.maps.Marker({
        position: {lat: 40.548680 , lng: -3.626327 },
        map: globals.map,
        draggable: false,
        animation: google.maps.Animation.DROP,//BOUNCE
        title: globals.titlemap,
        icon:globals.img
      });

      
      //animacion al hacer click en el icon
      globals.marker.addListener('click', toggleBounce);
      function toggleBounce() {
        if (globals.marker.getAnimation() !== null) {
          globals.marker.setAnimation(null);
        } else {
          globals.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

      //ventana de informacion al hacer doble click sobre el icono
      globals.marker.addListener('dblclick', liveWindow);
      var contentstring = '<div class="infowindow">Vinil-Shirt</div><div><img src="imagenes/fotoinfowindow.png" class="infoimg" /><p>Tu tienda de camisetas y mas productos personalizados.</p><p>Ven y disfruta de los mejores precios y ofertas para clientes.</p></div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentstring
      });
      function liveWindow() {
        infowindow.open(globals.map, globals.marker);
      }

      //calculo de distancias
      if (globals.flag === 0){
        directionsDisplay.setMap(globals.map);
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      }

    }
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: {lat: 40.548680 , lng: -3.626327 },  
          destination: {lat: globals.lat , lng: globals.lng },  
          travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

function setMapSize() {
  var geomap = document.getElementById("geomap"),
      twitter = document.getElementById("twitter"),
      map = document.getElementById("map"),
      script = document.createElement("SCRIPT");
    twitter.innerHTML = "";
    map.style.width = "100%";
    map.style.height = "400px";
    geomap.style.display = "block";
  //crear elemento div map para mostrar el mapa
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC9mZ0MhE3N18hHHf0biTusN-uyqNsJXbI&callback=initMap';
    geomap.appendChild(script);
}

function getcurrent() {
  var geo_success = function (pos) {
    globals.lat = pos.coords.latitude;
    globals.lng = pos.coords.longitude;
    globals.flag = 0;
    setMapSize();
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
  if (!globals.lat) {
    globals.flag = 1;
    setMapSize();
  }
  
  
}

function init() {
  document.getElementById("geogoogle").addEventListener('click', getcurrent, false);
  document.getElementById("formCaptcha").addEventListener('submit',function (evt) {evt.preventDefault();passCaptcha();} , false);
}

window.onload = init;