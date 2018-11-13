/*interface Point{
    x: number,
    y: number
}*/
var Point = /** @class */ (function () {
    //method
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }; //function
    return Point;
}());
var pointb = new Point(11, 2);
pointb.draw();
