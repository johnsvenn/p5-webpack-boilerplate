import Circle from './Circle.js';

/**
 * @param {p5} p 
 */
const sketch = (p) => {
    p.setup = function () {
        p.createCanvas(400, 400);
        p.background(220);
    };

    p.draw = function () {
        p.noStroke();
        p.fill('yellow');
        p.ellipse(200, 200, 100, 100);
        p.fill('#ff3300');
        p.ellipse(200, 200, 50, 50);

        const c = new Circle(p, 30, 30, 50, 'blue');
        c.display();

        p.noLoop();
    };
};

export { sketch };
