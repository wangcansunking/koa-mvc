'use strict';

const uuid = require('uuid');

module.exports = class BaseEntity {
    //TODO update time
    constructor() {
        this.id = uuid();
        this.createTime = (new Date()).getTime();
        this.createTimeString = (new Date()).toLocaleString();
    }

    setId (id) {
        this.id = id;

        return this;
    }
}
