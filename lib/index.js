/**
 * @fileoverview remind developers that the code needs to put on record
 * @author beian
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    plugins: ['beian'],
    rules: {
      'beian/enforce-beian-console': 'error',
    },
  },
}