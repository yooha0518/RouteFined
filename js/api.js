function hayoung(){
  console.log("hi");
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { 
      lat: 33.57399206493289, 
      lng: 130.3548306790864
    }, 
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map,
    panel: document.getElementById("panel"),
  });
  directionsRenderer.addListener("directions_changed", () => {
    const directions = directionsRenderer.getDirections();

    if (directions) {
      computeTotalDistance(directions);
    }
  });
}

let addLat;
let addLng;
function addPoint(){
  addLat = this.dataset.lat;
  addLng = this.dataset.lng;  
  console.log(addLat);
  console.log(addLng);
  initMap();
}

window.google = window.google || {};
google.maps = google.maps || {};
function kk() {
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
}

function initMap() {
  kk();
  console.log("initMap");
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { 
      lat: 33.57399206493289, 
      lng: 130.3548306790864
    }, 
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map,
    panel: document.getElementById("panel"),
  });

  directionsRenderer.addListener("directions_changed", () => {
    const directions = directionsRenderer.getDirections();

    if (directions) {
      computeTotalDistance(directions);
    }
  });


  displayRoute(
      "33.590251919756156, 130.4467520134379", //경로 시작할 위치(후쿠오카 공항)
      "33.590251919756156, 130.4467520134379", //경로 종료 위치
      directionsService,
      directionsRenderer,
      addLat,
      addLng
  );
}
  
 

  function displayRoute(origin, destination, service, display, addLat, addLng) {
    service
      .route({
        origin: origin,
        destination: destination,
        waypoints: [
          { location: `${addLat},${addLng}` }
        ],
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: true,
      })
      .then((result) => {
        display.setDirections(result);
        a=result;
      })
      .catch((e) => {
        alert("Could not display directions due to: " + e);
      });
  }
  
  function computeTotalDistance(result) {
    let total = 0;
    const myroute = result.routes[0];
  
    if (!myroute) {
      return;
    }
  
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
  
    total = total / 1000;
    document.getElementById("total").innerHTML = total + " km";
  }
  
  window.initMap = initMap;
  