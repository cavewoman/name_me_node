var Namer = {};
module.exports = Namer;

/**
 *  Provides all unique permuations of a provided array of letters
 *
 *  @param {array} letters
 *  @param {function} cb
 */
Namer.letters = function (letters, cb) {
  var combos = [];

  for (var i=0; i<letters.length; i++) {
    var max_length = letters.length;
    combos.push(letters[i]);
    for(var j=0; j<max_length; j++) {
      
    }
  }
  return cb(null, combos);
}


