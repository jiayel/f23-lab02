import Shape from "./shape"



function newRectangle(width: number, height: number): Shape {
    
    return {
        computeArea():number {
            return width * height;
        }
    };

    }


export { newRectangle }
