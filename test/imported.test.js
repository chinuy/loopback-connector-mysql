// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback-connector-mysql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
describe('mysql imported features', function() {
  before(function() {
    require('./init.js');
  });

  // require('loopback-datasource-juggler/test/common.batch.js');
  require('loopback-datasource-juggler/test/datatype.test.js');
  // require('loopback-datasource-juggler/test/basic-querying.test.js');
  require('loopback-datasource-juggler/test/manipulation.test.js');
  require('loopback-datasource-juggler/test/hooks.test.js');
// require('loopback-datasource-juggler/test/relations.test.js');
  require('loopback-datasource-juggler/test/include.test.js');
});
