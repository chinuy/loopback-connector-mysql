// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback-connector-mysql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
var assert = require('assert');
var semver = require('semver');
var isWin = /^win/.test(process.platform);

// With a default install of MySQL 5.7, these queries actually do fail and raise errors...
// with date, number and decimal format
 exports.mysql57 = function(mysqlVersion) {
  if (/^5\.7/.test(mysqlVersion)) {
    assert.ok(mysqlVersion, 'skipping decimal/number test on mysql 5.7');
  }
};

// With an install of MYSQL5.6 on windows, these queries `randomly` fail and raise errors
// with date, number and decimal format
exports.mysql56 = function(mysqlVersion) {
  if (isWin) {
    if (semver.gte(mysqlVersion, '5.6.0')) {
      assert.ok(mysqlVersion, 'skipping decimal/number/test on mysql 5.6');
    }
  }
};
