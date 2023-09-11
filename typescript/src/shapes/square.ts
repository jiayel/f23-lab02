import Shape from "./shape"

class Square implements Shape {
    private width: number;
    private height:number;
    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }
    public computeArea():number{
        return this.width * this.height
    }
}

function newsquare(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { Square, newsquare }