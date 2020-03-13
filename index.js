// {r} = '@2x' https://leafletjs.com/reference-1.3.4.html#tilelayer
ACCESS_TOKEN = 'ZHJteCIsImEiOiJjanEyd3Q5YW4xOTBiNDNwcGhrcjljeHNiIn0.KfUSr-tTIQCoWE8BtSN3Kw'; //'bWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
DG_MAPID = 'nako6329';
MB_URL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoi' + ACCESS_TOKEN;
MB_ATTR = 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors | Imagery &copy; <a href="https://mapbox.com">Mapbox</a>';

OSM_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
OSM_ATTR = '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
MAPY_URL = 'https://m{s}.mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity';

function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    const onComplete = () => {
      func.apply(this, args);
      timer = null;
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(onComplete, delay);
  };
}
