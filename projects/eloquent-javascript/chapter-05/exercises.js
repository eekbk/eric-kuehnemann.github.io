function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// const { characterScript } = require("./helpers");

function flatten(arrays) {
  return arrays.reduce(function(accumulator, current){
      return accumulator.concat(current);
  }, []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, testFunc, updateFunc, bodyFunc) {
  for (let value = start; testFunc(value); value = updateFunc(value)){
    bodyFunc(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predFunc) {
  // create a loop to look through every element of the array
  for (let i = 0; i < array.length; i++){
    // at each iteration check if the predFunc is falsy, if so return false
    if (!predFunc(array[i])){
      return false;
    }
  }
  // if loop completes with no falsy values, return true
  return true;
}

/////////////////////////////////////////////////////////////////////////////
dominantDirection ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) { // 'Hello'
  // replace spaces with empty strings
  let newStr = string.replace(/\s/g, ''); // 'hello world' => 'helloworld'
  // create two arrays to store the number of writing directions
  let ltr = [];
  let rtl = [];
  // iterate thru newStr
  for (let i = 0; i < newStr.length; i++){
    let scriptName = characterScript(newStr.charCodeAt(i));
    // determine if scriptName is NOT null
    if (scriptName !== null) {
      if (scriptName.direction === 'ltr'){
        ltr.push(scriptName);
      } else {
        rtl.push(scriptName);
      }
    }
  }
  if (ltr.length > rtl.length){
    return 'ltr';
  } else {
    return 'rtl';
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
