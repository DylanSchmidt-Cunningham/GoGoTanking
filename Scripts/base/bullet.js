var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var base;
(function (base) {
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // constructors
        function Bullet(x, y, angel, speed, range, power) {
            var _this = _super.call(this, "bullet") || this;
            _this._initX = x;
            _this._initY = y;
            _this._angel = angel;
            _this._speed = speed;
            _this._range = range;
            _this._power = power;
            _this.x = x;
            _this.y = y;
            _this.Start();
            return _this;
        }
        // public properties
        Bullet.prototype.IsBulletOut = function () {
            //right boundary
            if ((this.x >= 640 + this.HalfWidth) || (this.x <= -this.HalfWidth)
                || (this.y <= -this.HalfHeight) || (this.y >= 480 + this.HalfHeight)) {
                this.x = 10000;
                this.y = 10000;
            }
        };
        // private methods
        // public methods
        Bullet.prototype.Start = function () {
        };
        Bullet.prototype.Update = function () {
            this.Move();
            this.IsBulletOut();
            //
        };
        Bullet.prototype.Move = function () {
            switch (this._angel) {
                case -45:
                    this.x -= this._speed;
                    this.y -= this._speed;
                    break;
                case -90:
                    this.x -= this._speed;
                    break;
                case -135:
                    this.x -= this._speed;
                    this.y += this._speed;
                    break;
                case +45:
                    this.x += this._speed;
                    this.y -= this._speed;
                    break;
                case 90:
                    this.x += this._speed;
                    break;
                case +135:
                    this.x += this._speed;
                    this.y += this._speed;
                    break;
                case 180:
                    this.y += this._speed;
                    break;
                case 0:
                    this.y -= this._speed;
                    break;
            }
        };
        return Bullet;
    }(base.GameObject));
    base.Bullet = Bullet;
})(base || (base = {}));
//# sourceMappingURL=bullet.js.map