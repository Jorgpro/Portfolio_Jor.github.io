

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.5293101, lng: -5.6773233},
    zoom: 13
  });
}
let marker = new google.maps.Marker({
    position: {lat: 43.542194, lng: -5.676875},
    map: map,
title: 'Acuario de Gijón'
  });