import Shape from "./shape"

class Rectangle implements Shape {
    private width: number;
    private height: number;
    constructor(width:number, height:number) {
        this.width = width
        this.height =height;
    }
    public computeArea(): number {
        return this.width * this.height
}
}

function newRectangle(width: number, height: number): Shape {
    return {
        computeArea():number {
            return width * height;
        }
    };

    }


export { Rectangle, newRectangle }
