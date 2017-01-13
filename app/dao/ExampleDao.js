'use strict';
const BaseDao = require('./BaseDao');

module.exports = class ExampleDao extends BaseDao {
    constructor() {
        if (ExampleDao.singleton) {
            return ExampleDao.singleton;
        }
        super('example');
        ExampleDao.singleton = this;

    }

    static getInstance() {
        return new ExampleDao();
    }
}
