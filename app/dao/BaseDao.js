'use strict';

let databaseService = require('../utils/Database').getInstance();

module.exports = class BaseDao {
    constructor(tableName) {
        this.tableName = tableName;
    }

    create(data) {
        return databaseService.create(this.tableName, data);
    }

    update(data) {
        return databaseService.update(this.tableName, data);
    }

    remove(options) {
        return databaseService.remove(this.tableName, options);
    }

    query(options) {
        return databaseService.query(this.tableName, options);
    }
}
