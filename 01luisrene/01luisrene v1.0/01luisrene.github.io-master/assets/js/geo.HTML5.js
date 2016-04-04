// http://www.w3schools.com/googleapi/default.asp

var direccion_actual=new google.maps.LatLng(-8.049154699999999, -79.0586348);
function initialize()
{
var mapProp = {
  center:direccion_actual,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
var map = new google.maps.Map(document.getElementById("map_canvas"),mapProp);

var myCity = new google.maps.Circle({
  center:direccion_actual,
  radius:100,
  strokeColor:"#0080FF",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#0080FF",
  fillOpacity:0.4
  });

myCity.setMap(map);

var marker=new google.maps.Marker({
  position:direccion_actual,
});

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Mi ubicación!"
  });

infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);