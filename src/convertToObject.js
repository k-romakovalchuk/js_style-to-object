'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const preResult = sourceString.split(';').map(elem => elem.split(':'));

  for (let i = 0; i < preResult.length; i++) {
    const key = preResult[i];

    if (key.length > 1) {
      result[key[0].trim()] = key[key.length - 1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
