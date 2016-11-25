// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-connector-mysql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
describe('persistence-hooks suite test', function() {
  before(function() {
    require('./init.js');
  });

  require('loopback-datasource-juggler/test/persistence-hooks.suite.js');
  replaceOrCreateReportsNewInstance: true;
});
