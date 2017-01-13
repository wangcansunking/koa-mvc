'use strict';

const exampleDao = require('../dao/ExampleDao').getInstance();
const Example = require('../entity/Example');

module.exports = (function () {
    function add({name, value}) {
        if (name && value) {
            return exampleDao.create(new Example(name, value));
        } else {
            return false;
        }
    }

    function query(options) {
        return exampleDao.query(options);
    }

    function remove(options) {
        return exampleDao.remove(options);
    }

    function update({id, name, value}) {
        if (id && name && value) {
            return exampleDao.update(new Example(name, value).setId(id));
        } else {
            return false;
        }
    }
    return {
        add,
        query,
        remove,
        update
    };
})();
