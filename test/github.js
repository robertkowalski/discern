var assert = require('assert')
var parse = require('../').github

describe('github(url)', function(){
  it('should support git://*', function(){
    var url = 'git://github.com/jamesor/mongoose-versioner';
    assert.deepEqual(parse(url), ['jamesor', 'mongoose-versioner', 'master']);
  })

  it('should support git://*.git', function(){
    var url = 'git://github.com/treygriffith/cellar.git';
    assert.deepEqual(parse(url), ['treygriffith', 'cellar', 'master']);
  })

  it('should support git+ssh://*', function(){
    var url = 'git+ssh://github.com/treygriffith/cellar.git'
    assert.deepEqual(parse(url), ['treygriffith', 'cellar', 'master'])
  })

  it('should support https://*', function(){
    var url = 'https://github.com/Empeeric/i18n-node';
    assert.deepEqual(parse(url), ['Empeeric', 'i18n-node', 'master']);
  })

  it('should support https://*.git', function(){
    var url = 'https://jpillora@github.com/banchee/tranquil.git';
    assert.deepEqual(parse(url), ['banchee', 'tranquil', 'master']);
  })

  it('should support branches with git://*', function(){
    var url = 'git://github.com/jamesor/mongoose-versioner#bnch';
    assert.deepEqual(parse(url), ['jamesor', 'mongoose-versioner', 'bnch']);
  })

  it('should support branches with git://*.git', function(){
    var url = 'git://github.com/treygriffith/cellar.git#bnch';
    assert.deepEqual(parse(url), ['treygriffith', 'cellar', 'bnch']);
  })

  it('should support branches with https://*', function(){
    var url = 'https://github.com/Empeeric/i18n-node#bnch';
    assert.deepEqual(parse(url), ['Empeeric', 'i18n-node', 'bnch']);
  })

  it('should support branches with https://*.git', function(){
    var url = 'https://jpillora@github.com/banchee/tranquil.git#bnch';
    assert.deepEqual(parse(url), ['banchee', 'tranquil', 'bnch']);
  })

  it('should return null on failure', function(){
    var url = 'git://github.com/justgord/.git';
    assert.deepEqual(parse(url), null);
  })
})