// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback-connector-mysql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var describe = require('./describe');
require('./init');

/* eslint-env node, mocha */
describe('mysql imported features', function() {
  require('loopback-datasource-juggler/test/common.batch.js');
  require('loopback-datasource-juggler/test/include.test.js');
});
