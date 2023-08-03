export default class CanvasMap {  
    getMap(): number[][] {
        return [
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  1
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  2
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  3
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  4
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  5
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  6
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  7
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  8
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0], //  9
            [0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0]  // 10
        ]
    }
    updateMapRandom(): number[][] {
        var map = new CanvasMap().getMap()
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                map[i][j] = Math.floor(Math.random() * 2);
            }
        }
        return map;
    }
}
