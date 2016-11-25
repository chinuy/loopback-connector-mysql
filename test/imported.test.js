// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback-connector-mysql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
var semver = require('semver');
var mysqlVersion;

describe('mysql imported features', function() {
  before(function() {
    require('./init.js');
  });
  var describeMysql57 = describe;
  if (semver.gte(mysqlVersion, '5.7.0')) {
    describeMysql57 = describe.skip;
  }
  require('loopback-datasource-juggler/test/common.batch.js');
  require('loopback-datasource-juggler/test/include.test.js');
});
