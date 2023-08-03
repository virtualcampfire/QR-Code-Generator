import CanvasMap from "./CanvasMap.js";
export default class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    
    constructor() {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    }
    
    drawMap(array: number[][], tileColor: string): void {
        const map = array
        const mapArray: number[][] = map
        for (let i = 0; i < mapArray.length; i++) {
            for (let j = 0; j < mapArray[i].length; j++) {
                if (mapArray[i][j] === 1) {
                    this.drawRect(j * 50, i * 50, tileColor)
                }
            }
        }
    }
    
    drawRect(x: number, y: number, color: string): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, 50, 50);
    }
    
    drawCanvasTiles(color: string): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}