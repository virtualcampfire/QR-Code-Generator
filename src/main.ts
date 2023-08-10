import Canvas from './Canvas.js';
import CanvasMap from './CanvasMap.js';

const canvas = new Canvas();
const map = new CanvasMap();

animate()
function animate(){
    canvas.drawCanvasTiles('black')
    canvas.drawMap(map.updateMapRandom(), 'white')
}

const changeQR = document.getElementById('changeQR')
const QRRawValue = document.getElementById('QRRawValue') as HTMLInputElement
if (changeQR && QRRawValue) {
  changeQR.addEventListener('click', () => {
    animate()
    QRRawValue.value = map.getMap().toString().replace(/,/g, '.')
  })
}   