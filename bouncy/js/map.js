function initMap() {
  const ZAPOROZHYE = {lat: 47.8160, lng: 35.1702};
  map = new google.maps.Map(document.getElementById('map'), {
  center: ZAPOROZHYE,
  zoom: 18
});
var marker = new google.maps.Marker({
  position: ZAPOROZHYE,
  map: map
  });
}
