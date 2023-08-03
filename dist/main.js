import Canvas from './Canvas.js';
import CanvasMap from './CanvasMap.js';
const canvas = new Canvas();
const map = new CanvasMap();
animate();
function animate() {
    canvas.drawCanvasTiles('black');
    canvas.drawMap(map.updateMapRandom(), 'white');
}
setInterval(animate, 5000);
