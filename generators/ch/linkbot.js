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
 * @fileoverview Generating Ch for linkbot blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Ch.linkbot');

goog.require('Blockly.Ch');


Blockly.Ch.addReservedWords('Math');

Blockly.Ch['linkbot_constructor'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var variable_linkbot = Blockly.Ch.variableDB_.getName(block.getFieldValue('Linkbot'), Blockly.Variables.NAME_TYPE);
  return 'Linkbot ' + variable_linkbot + ';\n';
};

Blockly.Ch['linkbot_turn'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var varName = Blockly.Ch.variableDB_.getName(block.getFieldValue('Linkbot'),
      Blockly.Variables.NAME_TYPE);
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var code = varName + '.' + dropdown_direction + '(' + angle_turn_direction + ', radius, trackwidth);\n';
  return code;
};

Blockly.Ch['linkbot_drive'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var varName = Blockly.Ch.variableDB_.getName(block.getFieldValue('Linkbot'),
      Blockly.Variables.NAME_TYPE);
  var dropdown_direction = block.getFieldValue('direction');
  var text_degree = block.getFieldValue('degree');
  var code = varName + '.' + dropdown_direction + '(' + text_degree + ');\n';
  return code;
};

Blockly.Ch['linkbot_speed'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var varName = Blockly.Ch.variableDB_.getName(block.getFieldValue('Linkbot'),
      Blockly.Variables.NAME_TYPE);
  var text_speed = block.getFieldValue('speed');
  var code = varName + '.' + 'setSpeed(' + text_speed + ', radius);\n';
  return code;
};
