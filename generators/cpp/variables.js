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
 * @fileoverview Generating Cpp for variable blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Cpp.variables');

goog.require('Blockly.Cpp');


Blockly.Cpp['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Cpp.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Cpp.ORDER_ATOMIC];
};

Blockly.Cpp['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Cpp.valueToCode(block, 'VALUE',
      Blockly.Cpp.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Cpp.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};
