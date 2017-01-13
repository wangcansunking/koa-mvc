'use strict';

const path = require('path');
const low = require('lowdb');

module.exports = class Database {
    constructor() {
        if (Database.singleton) {
            return Database.singleton
        } else {
            this.db = low(path.resolve(__dirname, '../../database/database.json'));
            Database.singleton = this;
        }
    }

    create(tableName, data) {
        let result = this.db.get(tableName).push(data).value();

        if (!result) {
            result = this.db.set(tableName, []).get(tableName).push(data).value();
        }
        return result;
    }

    remove(tableName, options) {
        return this.db.get(tableName).remove(options).value();
    }

    update(tableName, data) {
        return this.db.get(tableName).find({id: data.id}).assign(data).value();
    }

    query(tableName, options) {
        return this.db.get(tableName).filter(options).value();
    }


    static getInstance() {
        return new Database();
    }
}
