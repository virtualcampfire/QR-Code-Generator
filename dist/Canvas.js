export default class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    drawMap(array, tileColor) {
        const map = array;
        const mapArray = map;
        for (let i = 0; i < mapArray.length; i++) {
            for (let j = 0; j < mapArray[i].length; j++) {
                if (mapArray[i][j] === 1) {
                    this.drawRect(j * 50, i * 50, tileColor);
                }
            }
        }
    }
    drawRect(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, 50, 50);
    }
    drawCanvasTiles(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
