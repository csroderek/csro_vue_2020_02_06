export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
    } else {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "http://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key=b091f2b03e41018c9b5132219af6b594";
      script.id = "MapJS";
      script.onerror = reject;
      document.head.appendChild(script);
    }
    window.initAMap = () => {
      resolve(window.AMap);
    };
  });
}
