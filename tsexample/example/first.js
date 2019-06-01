/**
 * my first
 */
var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) { for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function() {
    function User() {
        this.name = "test";
        this.likes = ["apple", "mango", "banana"];
        this.submiValue("string", 41);
    }
    User.prototype.submiValue = function(a, b) {
    };
    return User;
}());
var Student = /** @class */ (function(_super) {
    __extends(Student, _super);
    function Student() {
        return _super.call(this) || this;
    }
    Student.prototype.getSet = function() {
    };
    return Student;
}(User));
//# sourceMappingURL=first.js.map
