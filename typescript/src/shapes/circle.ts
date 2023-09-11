import Shape from "./shape"

class Circle implements Shape {
    private radius: number;
    constructor(radius: number){
        this.radius = radius;
    }
    public computeArea(): number {
        return Math.PI * this.radius * this.radius
    }

}
function newcircle(radius: number): Shape {
    return {
         computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { Circle, newcircle }
