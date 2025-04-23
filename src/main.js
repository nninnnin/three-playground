import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <a-scene>
      <a-box position="0 1 -4" rotation="0 45 0" color="#4CC3D2"></a-box>
    </a-scene>
  </div>
`;

setupCounter(document.querySelector("#counter"));
