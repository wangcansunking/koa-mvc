'use strict';

const BaseEntity = require('./BaseEntity');

module.exports = class Example extends BaseEntity {
    constructor(name, value) {
        super();

        this.name = name;
        this.value = value;
    }
}
