/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2014 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Ch for procedure blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Ch.procedures');

goog.require('Blockly.Ch');


Blockly.Ch['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.Ch.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Ch.statementToCode(block, 'STACK');
  if (Blockly.Ch.STATEMENT_PREFIX) {
    branch = Blockly.Ch.prefixLines(
        Blockly.Ch.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Ch.INDENT) + branch;
  }
  if (Blockly.Ch.INFINITE_LOOP_TRAP) {
    branch = Blockly.Ch.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.Ch.valueToCode(block, 'RETURN',
      Blockly.Ch.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var returnType = returnValue ? 'double' : 'void';
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Ch.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.Ch.scrub_(block, code);
  Blockly.Ch.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Ch['procedures_defnoreturn'] = Blockly.Ch['procedures_defreturn'];

Blockly.Ch['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.Ch.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Ch.valueToCode(block, 'ARG' + x,
        Blockly.Ch.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Ch.ORDER_UNARY_POSTFIX];
};

Blockly.Ch['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.Ch.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Ch.valueToCode(block, 'ARG' + x,
        Blockly.Ch.ORDER_NONE) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.Ch['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.Ch.valueToCode(block, 'CONDITION',
      Blockly.Ch.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.Ch.valueToCode(block, 'VALUE',
        Blockly.Ch.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};
