class Circle {
    /**
     * 
     * @param {p5} p 
     * @param {number} x 
     * @param {number} y 
     * @param {number} diameter 
     * @param {string} colour 
     */
    constructor(p, x, y, diameter, colour) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.colour = colour;
    }

    display() {
        this.p.fill(this.colour);
        this.p.circle(this.x, this.y, this.diameter);
    }
}

export default Circle;
