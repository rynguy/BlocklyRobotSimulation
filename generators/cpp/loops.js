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
 * @fileoverview Generating Cpp for loop blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Cpp.loops');

goog.require('Blockly.Cpp');


Blockly.Cpp['controls_repeat'] = function(block) {
  // Repeat n times (internal number).
  var repeats = Number(block.getFieldValue('TIMES'));
  var branch = Blockly.Cpp.statementToCode(block, 'DO');
  branch = Blockly.Cpp.addLoopTrap(branch, block.id);
  var loopVar = Blockly.Cpp.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = loopVar + ' = 0;\n' + 'while(' + loopVar +
      ' < ' + repeats + ') {\n' +
      branch + '  ' + loopVar + ' = ' + loopVar + ' + 1;\n}\n';
  Blockly.Cpp.definitions_['include_' + loopVar] =
      'int ' + loopVar + ';\n';
  return code;
};

Blockly.Cpp['controls_repeat_ext'] = function(block) {
  // Repeat n times (external number).
  
  var repeats = Blockly.Cpp.valueToCode(block, 'TIMES',
      Blockly.Cpp.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.Cpp.statementToCode(block, 'DO');
  branch = Blockly.Cpp.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.Cpp.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.Cpp.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += loopVar + ' = 0;\n' + 'while(' + loopVar +
      ' < ' + endVar + ') {\n' +
      branch + '  ' + loopVar + ' = ' + loopVar + ' + 1;\n}\n';
  Blockly.Cpp.definitions_['include_' + loopVar] =
      'int ' + loopVar + ';\n';
  return code;
};

Blockly.Cpp['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.Cpp.valueToCode(block, 'BOOL',
      until ? Blockly.Cpp.ORDER_UNARY_PREFIX :
      Blockly.Cpp.ORDER_NONE) || 'false';
  var branch = Blockly.Cpp.statementToCode(block, 'DO');
  branch = Blockly.Cpp.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.Cpp['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.Cpp.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Cpp.valueToCode(block, 'FROM',
      Blockly.Cpp.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.Cpp.valueToCode(block, 'TO',
      Blockly.Cpp.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.Cpp.valueToCode(block, 'BY',
      Blockly.Cpp.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.Cpp.statementToCode(block, 'DO');
  branch = Blockly.Cpp.addLoopTrap(branch, block.id);
  var code;
  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = variable0 + ' = ' + argument0 + ';\n' + 'while(' + 
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + ') {\n' + branch +
        '  ' + variable0;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? (' = ' + variable0 + ' + 1') : (' = ' + variable0 + ' - 1');
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ';\n}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      var startVar = Blockly.Cpp.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'var ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      var endVar = Blockly.Cpp.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'var ' + endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.Cpp.variableDB_.getDistinctName(
        variable0 + '_inc', Blockly.Variables.NAME_TYPE);
    code += 'num ' + incVar + ' = ';
    if (Blockly.isNumber(increment)) {
      code += Math.abs(increment) + ';\n';
    } else {
      code += '(' + increment + ').abs();\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += Blockly.Cpp.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += variable0 + ' = ' + startVar + ';\n' + 'while(' +
        incVar + ' >= 0 ? ' + variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ') {\n' + branch + 
        '  ' + variable0 + ' += ' + incVar + ';\n}\n';
  }
  return code;
};

Blockly.Cpp['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.Cpp.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Cpp.valueToCode(block, 'LIST',
      Blockly.Cpp.ORDER_ASSIGNMENT) || '[]';
  var branch = Blockly.Cpp.statementToCode(block, 'DO');
  branch = Blockly.Cpp.addLoopTrap(branch, block.id);
  var code = 'for (var ' + variable0 + ' in  ' + argument0 + ') {\n' +
      branch + '}\n';
  return code;
};

Blockly.Cpp['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break;\n';
    case 'CONTINUE':
      return 'continue;\n';
  }
  throw 'Unknown flow statement.';
};
