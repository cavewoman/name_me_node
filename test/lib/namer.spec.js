var Namer = require('../../lib/namer'),
    setup = require('../setup');

describe('Namer', function() {
  
  describe('.letters', function() {

    context('when all letters only appear once', function() {
      var letters = ['a', 'b', 'c'];

      it('returns an array of all permuatations of a given array', function(done) {
        Namer.letters(lettes, function(err, res) {
          if (err) { return done(err); }
          expect(res).to.eq(['a', 'b', 'c', 'ab', 'ac', 'ba', 'bc', 'ca', 'cb', 'abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
          done();
        });
      });

    });
    
    context('when letter appears more than once', function () {

      it('creates unqiue name options based on given letter array', function(done) {
        var letters = ['a', 'a', 'b', 'c'];
        Namer.letters(letters, function(err, res) {
          if (err) { return done(err); }
          expect(res).to.eq(['a', 'b', 'c', 'aa', 'ab', 'ac', 'bc', 'ba', 'ca', 'cb', 'aab', 'aba', 'baa', 'aac', 'aca', 'caa', 'abc', 'bac', 'cab', 'aabc', 'abac', 'baac', 'aacb', 'acab', 'caab', 'baca', 'bcaa', 'cbaa', 'caba']);
          done();
        });

      });
    
    });

  });

});
