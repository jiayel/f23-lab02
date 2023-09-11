import Shape from "./shapes/shape.js";

class Renderer {
    private shape: Shape;
    constructor(shape:Shape) {
        this.shape = shape;
    }    
    public draw(): void {
        const area: number = this.shape.computeArea()
        console.log("Shape drawn\n" + "Its area is " + area)
    }
}
function newRenderer(shape:Shape) {
    return {
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { Renderer }