"use strict";
class MyClass extends Area {
    constructor() {
        super(...arguments);
        this.a = new Area();
    }
    circle() {
        super.circle();
    }
}
